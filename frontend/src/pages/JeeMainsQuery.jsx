import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Send, Bot, User, BookOpen, TrendingUp, MessageCircle, Eye, List, Trash2, Filter } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import apiClient from '../api/client';

const JeeMainsQuery = () => {
    const navigate = useNavigate();
    const { session } = useAuth();

    // Initialize state from sessionStorage (using jee_mains_ prefix)
    const [messages, setMessages] = useState(() => {
        const saved = sessionStorage.getItem('jee_mains_chat_messages');
        return saved ? JSON.parse(saved) : [];
    });

    const [rank, setRank] = useState(() => {
        return sessionStorage.getItem('jee_mains_chat_rank') || '';
    });

    const [year, setYear] = useState(() => {
        return parseInt(sessionStorage.getItem('jee_mains_chat_year')) || 2024;
    });

    const [selectedCategory, setSelectedCategory] = useState(() => {
        return sessionStorage.getItem('jee_mains_chat_category') || 'GEN';
    });

    const [instituteTypes, setInstituteTypes] = useState(() => {
        const saved = sessionStorage.getItem('jee_mains_chat_institute_types');
        return saved ? JSON.parse(saved) : ['NIT', 'IIIT', 'GFTI'];
    });

    const [chatInput, setChatInput] = useState('');

    const [isInitialized, setIsInitialized] = useState(() => {
        return sessionStorage.getItem('jee_mains_chat_initialized') === 'true';
    });

    const [currentRecommendationData, setCurrentRecommendationData] = useState(() => {
        const saved = sessionStorage.getItem('jee_mains_chat_recommendation_data');
        return saved ? JSON.parse(saved) : null;
    });

    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const chatInputRef = useRef(null);

    // Persist state changes
    useEffect(() => {
        sessionStorage.setItem('jee_mains_chat_messages', JSON.stringify(messages));
        sessionStorage.setItem('jee_mains_chat_rank', rank);
        sessionStorage.setItem('jee_mains_chat_year', year);
        sessionStorage.setItem('jee_mains_chat_category', selectedCategory);
        sessionStorage.setItem('jee_mains_chat_institute_types', JSON.stringify(instituteTypes));
        sessionStorage.setItem('jee_mains_chat_initialized', isInitialized);
        if (currentRecommendationData) {
            sessionStorage.setItem('jee_mains_chat_recommendation_data', JSON.stringify(currentRecommendationData));
        }
    }, [messages, rank, year, selectedCategory, instituteTypes, isInitialized, currentRecommendationData]);

    const categories = [
        { label: 'General', value: 'GEN' },
        { label: 'OBC', value: 'OBC' },
        { label: 'SC', value: 'SC' },
        { label: 'ST', value: 'ST' },
        { label: 'EWS', value: 'EWS' }
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isInitialized) {
            chatInputRef.current?.focus();
        }
    }, [isInitialized]);

    const addMessage = (text, type = 'bot', data = null) => {
        setMessages(prev => [...prev, { id: Date.now(), text, type, data, timestamp: new Date() }]);
    };

    const toggleInstituteType = (type) => {
        setInstituteTypes(prev => {
            if (prev.includes(type)) {
                if (prev.length === 1) return prev;
                return prev.filter(t => t !== type);
            } else {
                return [...prev, type];
            }
        });
    };

    const fetchRecommendations = async (userQuery = null) => {
        const rankNum = parseInt(rank);
        if (!rank || isNaN(rankNum) || rankNum <= 0) {
            addMessage('Please enter a valid rank (greater than 0)', 'bot');
            return;
        }

        setLoading(true);

        try {
            const token = session?.access_token;
            if (!token) {
                addMessage("Authentication error. Please log in again.", 'bot');
                return;
            }



            if (!isInitialized) {
                // Start new session
                const response = await apiClient.post("/jee-mains-chat/start", {
                    rank: rankNum,
                    category: selectedCategory,
                    year: year,
                    query: userQuery || null,
                    institute_types: instituteTypes
                });

                const sessionData = response.data;

                const newSessionId = sessionData.session_id;
                sessionStorage.setItem('jee_mains_chat_session_id', newSessionId);

                const data = sessionData.recommendations;
                setCurrentRecommendationData({
                    safe: data.safe || [],
                    moderate: data.moderate || [],
                    ambitious: data.ambitious || [],
                    full_report: null
                });

                setIsInitialized(true);

                if (sessionData.history && sessionData.history.length > 0) {
                    const lastMsg = sessionData.history[sessionData.history.length - 1];
                    if (lastMsg.role === 'assistant') {
                        addMessage(lastMsg.content, 'bot', { type: 'summary' });
                    }
                }

                setTimeout(() => {
                    addMessage('', 'bot', {
                        type: 'top_recommendations',
                        safe: data.safe || [],
                        moderate: data.moderate || [],
                        ambitious: data.ambitious || []
                    });
                }, 500);

            } else {
                // Send message to existing session
                const storedSessionId = sessionStorage.getItem('jee_mains_chat_session_id');
                const chatResponseRaw = await apiClient.post(`/jee-mains-chat/${storedSessionId}/message`, { message: userQuery });
                const chatResponse = chatResponseRaw.data;

                if (chatResponse.data && chatResponse.data.full_report) {
                    setCurrentRecommendationData(prev => ({
                        ...prev,
                        full_report: chatResponse.data.full_report
                    }));

                    addMessage(chatResponse.message, 'bot');

                    setTimeout(() => {
                        addMessage('', 'bot', {
                            type: 'full_report',
                            report: chatResponse.data.full_report,
                            allSafe: currentRecommendationData.safe,
                            allModerate: currentRecommendationData.moderate,
                            allAmbitious: currentRecommendationData.ambitious
                        });
                    }, 1000);
                } else {
                    addMessage(chatResponse.message, 'bot');
                }
            }

        } catch (error) {
            console.error("Backend error:", error);
            addMessage("Sorry, I couldn't reach the backend server. Please try again later.", 'bot');
        } finally {
            setLoading(false);
        }
    };

    const handleGetRecommendations = (e) => {
        e.preventDefault();
        if (!rank || isNaN(parseInt(rank))) {
            addMessage('Please enter a valid rank first!', 'bot');
            return;
        }

        const categoryLabel = categories.find(c => c.value === selectedCategory)?.label;
        addMessage(`I want recommendations for rank ${rank} (${categoryLabel}, Year: ${year}) - ${instituteTypes.join(', ')}`, 'user');

        setTimeout(() => {
            fetchRecommendations();
        }, 100);
    };

    const handleChatSubmit = async (e) => {
        e.preventDefault();
        if (!chatInput.trim() || loading) return;

        if (!isInitialized) {
            addMessage('Please get initial recommendations first by entering your rank and clicking "Get Recommendations"', 'bot');
            setChatInput('');
            return;
        }

        const userMessage = chatInput.trim();
        addMessage(userMessage, 'user');
        setChatInput('');
        setLoading(true);

        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('show all') || lowerMessage.includes('all options')) {
            setTimeout(() => {
                addMessage('', 'bot', {
                    type: 'all_options',
                    safe: currentRecommendationData.safe,
                    moderate: currentRecommendationData.moderate,
                    ambitious: currentRecommendationData.ambitious
                });
                setLoading(false);
            }, 500);
            return;
        }

        setTimeout(() => {
            fetchRecommendations(userMessage);
        }, 100);
    };

    const handleClearChat = () => {
        if (window.confirm('Are you sure you want to clear the chat and start over?')) {
            setMessages([]);
            setIsInitialized(false);
            setCurrentRecommendationData(null);
            setChatInput('');

            sessionStorage.removeItem('jee_mains_chat_messages');
            sessionStorage.removeItem('jee_mains_chat_rank');
            sessionStorage.removeItem('jee_mains_chat_year');
            sessionStorage.removeItem('jee_mains_chat_category');
            sessionStorage.removeItem('jee_mains_chat_institute_types');
            sessionStorage.removeItem('jee_mains_chat_initialized');
            sessionStorage.removeItem('jee_mains_chat_session_id');
            sessionStorage.removeItem('jee_mains_chat_recommendation_data');
        }
    };

    const RecommendationCard = ({ college, category }) => {
        const categoryColors = {
            safe: 'bg-green-100 text-green-800 border-green-300',
            moderate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
            ambitious: 'bg-orange-100 text-orange-800 border-orange-300'
        };
        const probMap = {
            safe: 'High',
            moderate: 'Medium',
            ambitious: 'Low'
        };

        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
            >
                <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{college.iit}</h4>
                        <p className="text-teal-600 text-sm mt-1">{college.branch}</p>
                    </div>
                    <span className={`ml-2 px-2 py-1 rounded text-xs font-medium border ${categoryColors[category]}`}>
                        {probMap[category]} Chance
                    </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span>Closing Rank: <strong>{college.closing_rank?.toLocaleString()}</strong></span>
                </div>
            </motion.div>
        );
    };

    const renderMessage = (message) => {
        if (message.type === 'user') {
            return (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-end mb-4"
                >
                    <div className="max-w-[75%] bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-md">
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    </div>
                </motion.div>
            );
        }

        if (message.data?.type === 'summary') {
            return (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start mb-4"
                >
                    <div className="flex items-start space-x-3 max-w-[85%]">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-teal-200">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{message.text}</p>
                        </div>
                    </div>
                </motion.div>
            );
        }

        if (message.data?.type === 'top_recommendations') {
            const { safe, moderate, ambitious } = message.data;
            return (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start mb-4"
                >
                    <div className="flex items-start space-x-3 max-w-[85%]">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-gray-200 w-full">
                            <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                                <TrendingUp className="w-5 h-5 text-teal-600" />
                                <span>Top 3 Recommendations per Category</span>
                            </h4>

                            <div className="space-y-4">
                                {safe.length > 0 && (
                                    <div>
                                        <h5 className="text-sm font-semibold text-green-700 mb-2 flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                            SAFE OPTIONS (High Admission Probability)
                                        </h5>
                                        <div className="text-sm text-gray-700 space-y-1">
                                            {safe.slice(0, 3).map((college, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <span className="text-gray-400 mr-2">•</span>
                                                    <span className="font-medium">{college.iit}</span>
                                                    <span className="text-gray-500 mx-1">–</span>
                                                    <span>{college.branch}</span>
                                                    <span className="text-gray-500 ml-2">(Closing Rank: {college.closing_rank?.toLocaleString()})</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {moderate.length > 0 && (
                                    <div>
                                        <h5 className="text-sm font-semibold text-yellow-700 mb-2 flex items-center">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                            MODERATE OPTIONS (Medium Admission Probability)
                                        </h5>
                                        <div className="text-sm text-gray-700 space-y-1">
                                            {moderate.slice(0, 3).map((college, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <span className="text-gray-400 mr-2">•</span>
                                                    <span className="font-medium">{college.iit}</span>
                                                    <span className="text-gray-500 mx-1">–</span>
                                                    <span>{college.branch}</span>
                                                    <span className="text-gray-500 ml-2">(Closing Rank: {college.closing_rank?.toLocaleString()})</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {ambitious.length > 0 && (
                                    <div>
                                        <h5 className="text-sm font-semibold text-orange-700 mb-2 flex items-center">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                                            AMBITIOUS OPTIONS (Low Admission Probability)
                                        </h5>
                                        <div className="text-sm text-gray-700 space-y-1">
                                            {ambitious.slice(0, 3).map((college, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <span className="text-gray-400 mr-2">•</span>
                                                    <span className="font-medium">{college.iit}</span>
                                                    <span className="text-gray-500 mx-1">–</span>
                                                    <span>{college.branch}</span>
                                                    <span className="text-gray-500 ml-2">(Closing Rank: {college.closing_rank?.toLocaleString()})</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-4 pt-3 border-t border-gray-100 flex space-x-2">
                                <motion.button
                                    onClick={async () => {
                                        const sessionId = sessionStorage.getItem('jee_mains_chat_session_id');

                                        if (currentRecommendationData?.full_report) {
                                            sessionStorage.setItem('jeeMainsFullReportData', JSON.stringify(currentRecommendationData));
                                            navigate('/jee-mains-full-report');
                                            return;
                                        }

                                        if (!sessionId) {
                                            addMessage("Session expired. Please restart.", "bot");
                                            return;
                                        }

                                        setLoading(true);
                                        addMessage("Generating your detailed professional report. This may take a moment...", "bot");

                                        try {
                                            const response = await apiClient.post(`/jee-mains-chat/${sessionId}/full-report`);
                                            const data = response.data;

                                            if (data.data && data.data.full_report) {
                                                const updatedData = {
                                                    ...currentRecommendationData,
                                                    full_report: data.data.full_report
                                                };
                                                setCurrentRecommendationData(updatedData);

                                                sessionStorage.setItem('jeeMainsFullReportData', JSON.stringify(updatedData));
                                                navigate('/jee-mains-full-report');
                                            } else {
                                                addMessage("Something went wrong generating the report.", "bot");
                                            }

                                        } catch (error) {
                                            console.error("Report generation error:", error);
                                            addMessage("Sorry, I couldn't generate the full report right now.", "bot");
                                        } finally {
                                            setLoading(false);
                                        }
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={loading}
                                    className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-1"
                                >
                                    <Eye className="w-4 h-4" />
                                    <span>{loading && !currentRecommendationData?.full_report ? 'Generating...' : 'View Full Report'}</span>
                                </motion.button>
                                <motion.button
                                    onClick={() => {
                                        addMessage('', 'bot', {
                                            type: 'all_options',
                                            safe: currentRecommendationData.safe,
                                            moderate: currentRecommendationData.moderate,
                                            ambitious: currentRecommendationData.ambitious
                                        });
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-1"
                                >
                                    <List className="w-4 h-4" />
                                    <span>Show All Options</span>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            );
        }

        if (message.data?.type === 'all_options') {
            const { safe, moderate, ambitious } = message.data;
            return (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start mb-4"
                >
                    <div className="flex items-start space-x-3 max-w-[85%]">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-gray-200 w-full">
                            <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                                <List className="w-5 h-5 text-teal-600" />
                                <span>All Available Options</span>
                            </h4>

                            <div className="space-y-4 max-h-96 overflow-y-auto">
                                {safe.length > 0 && (
                                    <div>
                                        <h5 className="text-sm font-semibold text-green-700 mb-2 flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                            ALL SAFE OPTIONS ({safe.length})
                                        </h5>
                                        <div className="text-xs text-gray-700 space-y-1 max-h-32 overflow-y-auto">
                                            {safe.map((college, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <span className="text-gray-400 mr-2">•</span>
                                                    <span className="font-medium">{college.iit}</span>
                                                    <span className="text-gray-500 mx-1">–</span>
                                                    <span>{college.branch}</span>
                                                    <span className="text-gray-500 ml-2">(Rank: {college.closing_rank?.toLocaleString()})</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {moderate.length > 0 && (
                                    <div>
                                        <h5 className="text-sm font-semibold text-yellow-700 mb-2 flex items-center">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                            ALL MODERATE OPTIONS ({moderate.length})
                                        </h5>
                                        <div className="text-xs text-gray-700 space-y-1 max-h-32 overflow-y-auto">
                                            {moderate.map((college, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <span className="text-gray-400 mr-2">•</span>
                                                    <span className="font-medium">{college.iit}</span>
                                                    <span className="text-gray-500 mx-1">–</span>
                                                    <span>{college.branch}</span>
                                                    <span className="text-gray-500 ml-2">(Rank: {college.closing_rank?.toLocaleString()})</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {ambitious.length > 0 && (
                                    <div>
                                        <h5 className="text-sm font-semibold text-orange-700 mb-2 flex items-center">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                                            ALL AMBITIOUS OPTIONS ({ambitious.length})
                                        </h5>
                                        <div className="text-xs text-gray-700 space-y-1 max-h-32 overflow-y-auto">
                                            {ambitious.map((college, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <span className="text-gray-400 mr-2">•</span>
                                                    <span className="font-medium">{college.iit}</span>
                                                    <span className="text-gray-500 mx-1">–</span>
                                                    <span>{college.branch}</span>
                                                    <span className="text-gray-500 ml-2">(Rank: {college.closing_rank?.toLocaleString()})</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            );
        }

        // Regular bot message
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-start mb-4"
            >
                <div className="flex items-start space-x-3 max-w-[85%]">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-gray-200 w-full">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    </div>
                </div>
            </motion.div>
        );
    };

    // Render Initial Form or Chat Interface
    if (!isInitialized) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-10">
                <div className="max-w-2xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10"
                    >
                        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            JEE Mains College Predictor
                        </h1>
                        <p className="text-lg text-gray-600">
                            AI-powered counseling for NITs, IIITs, and GFTIs based on your rank.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                    >
                        <form onSubmit={handleGetRecommendations} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">JEE Mains Rank</label>
                                    <input
                                        type="number"
                                        required
                                        value={rank}
                                        onChange={(e) => setRank(e.target.value)}
                                        placeholder="e.g. 15000"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                                    >
                                        {categories.map(cat => (
                                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Interested Institutes</label>
                                <div className="flex gap-3">
                                    {['NIT', 'IIIT', 'GFTI'].map(type => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => toggleInstituteType(type)}
                                            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-all ${instituteTypes.includes(type)
                                                ? 'bg-teal-50 border-teal-500 text-teal-700'
                                                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center space-x-2"
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Get Recommendations</span>
                                        <TrendingUp className="w-5 h-5" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Chat Interface
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-4">
            <div className="max-w-4xl mx-auto px-4 h-[calc(100vh-6rem)] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="font-bold text-gray-800">JEE Mains Counselor</h2>
                            <p className="text-xs text-gray-500">Rank: {rank} • {selectedCategory} • {instituteTypes.join(', ')}</p>
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleClearChat}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        title="Clear Chat"
                    >
                        <Trash2 className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto mb-4 space-y-2 px-2">
                    <AnimatePresence>
                        {messages.map(msg => (
                            <div key={msg.id}>
                                {renderMessage(msg)}
                            </div>
                        ))}
                    </AnimatePresence>
                    {loading && (
                        <div className="flex items-center space-x-2 text-gray-400 ml-4">
                            <Bot className="w-5 h-5 animate-bounce" />
                            <span className="text-xs">Thinking...</span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleChatSubmit} className="bg-white p-4 rounded-xl shadow-lg border border-teal-100">
                    <div className="flex space-x-3">
                        <input
                            ref={chatInputRef}
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            disabled={loading}
                            placeholder="Ask follow-up questions..."
                            className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50"
                        />
                        <motion.button
                            type="submit"
                            disabled={!chatInput.trim() || loading}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50"
                        >
                            <Send className="w-5 h-5" />
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JeeMainsQuery;
