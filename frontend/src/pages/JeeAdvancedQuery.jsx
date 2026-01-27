import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Send, Bot, User, BookOpen, TrendingUp, MessageCircle, Eye, List, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import apiClient from '../api/client';

const JeeAdvancedQuery = () => {
  const navigate = useNavigate();
  const { session } = useAuth(); // Get auth session

  // Initialize state from sessionStorage if available
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem('chat_messages');
    return saved ? JSON.parse(saved) : [];
  });

  const [rank, setRank] = useState(() => {
    return sessionStorage.getItem('chat_rank') || '';
  });

  const [year, setYear] = useState(() => {
    return parseInt(sessionStorage.getItem('chat_year')) || 2024;
  });

  const [selectedCategory, setSelectedCategory] = useState(() => {
    return sessionStorage.getItem('chat_category') || 'GEN';
  });

  const [chatInput, setChatInput] = useState('');

  const [isInitialized, setIsInitialized] = useState(() => {
    return sessionStorage.getItem('chat_initialized') === 'true';
  });

  const [currentRecommendationData, setCurrentRecommendationData] = useState(() => {
    const saved = sessionStorage.getItem('chat_recommendation_data');
    return saved ? JSON.parse(saved) : null;
  });

  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatInputRef = useRef(null);


  // Persist state changes
  useEffect(() => {
    sessionStorage.setItem('chat_messages', JSON.stringify(messages));
    sessionStorage.setItem('chat_rank', rank);
    sessionStorage.setItem('chat_year', year);
    sessionStorage.setItem('chat_category', selectedCategory);
    sessionStorage.setItem('chat_initialized', isInitialized);
    if (currentRecommendationData) {
      sessionStorage.setItem('chat_recommendation_data', JSON.stringify(currentRecommendationData));
    }
  }, [messages, rank, year, selectedCategory, isInitialized, currentRecommendationData]);

  // ... (lines 19-54 omitted for brevity)

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

      // 1. Initial Session Creation (Start Counseling)
      if (!isInitialized) {
        const response = await apiClient.post("/chat/start", {
          rank: rankNum,
          category: selectedCategory,
          year: year,
          query: userQuery || null
        });

        const sessionData = response.data; // Rename local var to avoid conflict with Auth session

        // Store session ID logic
        const newSessionId = sessionData.session_id;
        sessionStorage.setItem('chat_session_id', newSessionId);
        window.currentSessionId = newSessionId; // Keep window ref for backward compat if needed, but rely on storage

        const data = sessionData.recommendations;
        setCurrentRecommendationData({
          safe: data.safe || [],
          moderate: data.moderate || [],
          ambitious: data.ambitious || [],
          full_report: null
        });

        setIsInitialized(true);

        // Display Initial Summary from Session History (last message)
        if (sessionData.history && sessionData.history.length > 0) {
          const lastMsg = sessionData.history[sessionData.history.length - 1];
          if (lastMsg.role === 'assistant') {
            addMessage(lastMsg.content, 'bot', { type: 'summary' });
          }
        }

        // Display Recommendations Cards
        setTimeout(() => {
          addMessage('', 'bot', {
            type: 'top_recommendations',
            safe: data.safe || [],
            moderate: data.moderate || [],
            ambitious: data.ambitious || []
          });
        }, 500);

        // If there was a specific query during start (unlikely in this UI flow but possible)
        if (userQuery) {
          const storedSessionId = sessionStorage.getItem('chat_session_id');
          const chatResponseRaw = await apiClient.post(`/chat/${storedSessionId}/message`, { message: userQuery });
          const chatResponse = chatResponseRaw.data;
          addMessage(chatResponse.message, 'bot');
        }
      } else {
        // ... (Existing else block for when session is already initialized)
        // This part handles subsequent messages
        const storedSessionId = sessionStorage.getItem('chat_session_id');
        const chatResponseRaw = await apiClient.post(`/chat/${storedSessionId}/message`, { message: userQuery });
        const chatResponse = chatResponseRaw.data;

        // ... check for full report and display response ...
        if (chatResponse.data && chatResponse.data.full_report) {
          // Update local data with full report
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

    addMessage(`I want recommendations for rank ${rank} (${categories.find(c => c.value === selectedCategory)?.label}, Year: ${year})`, 'user');

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

    // If local smart responses match, use them for speed, else hit API
    const lowerMessage = userMessage.toLowerCase();

    // Quick UI actions (client-side only)
    if (lowerMessage.includes('show all') || lowerMessage.includes('all options')) {
      setTimeout(() => {
        const allOptionsMessage = {
          safe: currentRecommendationData.safe,
          moderate: currentRecommendationData.moderate,
          ambitious: currentRecommendationData.ambitious
        };
        addMessage('', 'bot', {
          type: 'all_options',
          ...allOptionsMessage
        });
        setLoading(false);
      }, 500);
      return;
    }

    // Server-side Chat (Session aware)
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

      // Clear session storage
      sessionStorage.removeItem('chat_messages');
      sessionStorage.removeItem('chat_rank');
      sessionStorage.removeItem('chat_year');
      sessionStorage.removeItem('chat_category');
      sessionStorage.removeItem('chat_initialized');
      sessionStorage.removeItem('chat_session_id');
      sessionStorage.removeItem('chat_recommendation_data');

      // Reset form defaults if needed, though keeping them might be user friendly
      // setRank(''); // Optional
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
            <p className="text-purple-600 text-sm mt-1">{college.branch}</p>
          </div>
          <span className={`ml-2 px-2 py-1 rounded text-xs font-medium border ${categoryColors[category]}`}>
            {probMap[category]} Chance
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span>Closing Rank: <strong>{college.closing_rank.toLocaleString()}</strong></span>
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
          <div className="max-w-[75%] bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-md">
            <p className="text-sm whitespace-pre-wrap">{message.text}</p>
          </div>
        </motion.div>
      );
    }

    // Bot messages
    if (message.data?.type === 'summary') {
      return (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-start mb-4"
        >
          <div className="flex items-start space-x-3 max-w-[85%]">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-blue-200">
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
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-gray-200 w-full">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
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
                          <span className="text-gray-500 ml-2">(Closing Rank: {college.closing_rank.toLocaleString()})</span>
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
                          <span className="text-gray-500 ml-2">(Closing Rank: {college.closing_rank.toLocaleString()})</span>
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
                          <span className="text-gray-500 ml-2">(Closing Rank: {college.closing_rank.toLocaleString()})</span>
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
                    const sessionId = sessionStorage.getItem('chat_session_id');

                    // If we already have the full report, go directly
                    if (currentRecommendationData.full_report) {
                      sessionStorage.setItem('fullReportData', JSON.stringify(currentRecommendationData));
                      navigate('/jee-advanced-full-report');
                      return;
                    }

                    // Otherwise generate it on demand
                    if (!sessionId) {
                      addMessage("Session expired. Please restart.", "bot");
                      return;
                    }

                    setLoading(true);
                    addMessage("Generating your detailed professional report. This may take a moment...", "bot");

                    try {
                      const response = await apiClient.post(`/chat/${sessionId}/full-report`);
                      const data = response.data;

                      if (data.data && data.data.full_report) {
                        // Update state
                        const updatedData = {
                          ...currentRecommendationData,
                          full_report: data.data.full_report
                        };
                        setCurrentRecommendationData(updatedData);

                        // Navigate
                        sessionStorage.setItem('fullReportData', JSON.stringify(updatedData));
                        navigate('/jee-advanced-full-report');
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
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-1"
                >
                  <Eye className="w-4 h-4" />
                  <span>{loading && !currentRecommendationData.full_report ? 'Generating...' : 'View Full Report'}</span>
                </motion.button>
                <motion.button
                  onClick={() => {
                    // Add a message showing all options
                    const allOptionsMessage = {
                      safe: currentRecommendationData.safe,
                      moderate: currentRecommendationData.moderate,
                      ambitious: currentRecommendationData.ambitious
                    };
                    addMessage('', 'bot', {
                      type: 'all_options',
                      ...allOptionsMessage
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

    if (message.data?.type === 'full_report') {
      const { report, allSafe, allModerate, allAmbitious } = message.data;
      return (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-start mb-4"
        >
          <div className="flex items-start space-x-3 max-w-[85%]">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-purple-200 w-full">
              <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <span>Complete Counseling Report</span>
              </h3>

              <div className="prose prose-purple max-w-none mb-4 text-sm text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  {(() => {
                    const lines = report.split('\n');
                    const elements = [];
                    let i = 0;

                    // Helper to render text with bold
                    const renderTextWithBold = (text, keyPrefix) => {
                      return text.split(/(\*\*.*?\*\*)/).map((part, idx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={`${keyPrefix}-${idx}`} className="text-gray-900 font-bold">{part.slice(2, -2)}</strong>;
                        }
                        return <span key={`${keyPrefix}-${idx}`}>{part}</span>;
                      });
                    };

                    while (i < lines.length) {
                      const line = lines[i].trim();
                      if (!line) { i++; continue; }

                      if (line.startsWith('### ')) {
                        elements.push(<h3 key={i} className="text-lg font-bold text-gray-800 mt-4 mb-2">{renderTextWithBold(line.substring(4), `h3-${i}`)}</h3>);
                      } else if (line.startsWith('#### ')) {
                        elements.push(<h4 key={i} className="text-md font-semibold text-purple-700 mt-3 mb-1">{renderTextWithBold(line.substring(5), `h4-${i}`)}</h4>);
                      } else if (line.startsWith('- ')) {
                        elements.push(
                          <div key={i} className="flex items-start ml-2 mb-1 text-sm text-gray-700">
                            <span className="text-purple-500 mr-2">•</span>
                            <span>{renderTextWithBold(line.substring(2), `li-${i}`)}</span>
                          </div>
                        );
                      } else {
                        elements.push(<p key={i} className="text-sm text-gray-700 leading-relaxed mb-2">{renderTextWithBold(line, `p-${i}`)}</p>);
                      }
                      i++;
                    }
                    return elements;
                  })()}
                </div>
              </div>

              <div className="mt-4 space-y-3 border-t border-purple-200 pt-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">📊 Summary Statistics</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-green-50 p-2 rounded">
                      <div className="text-green-700 font-semibold">{allSafe?.length || 0}</div>
                      <div className="text-gray-600">Safe Options</div>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded">
                      <div className="text-yellow-700 font-semibold">{allModerate?.length || 0}</div>
                      <div className="text-gray-600">Moderate Options</div>
                    </div>
                    <div className="bg-orange-50 p-2 rounded">
                      <div className="text-orange-700 font-semibold">{allAmbitious?.length || 0}</div>
                      <div className="text-gray-600">Ambitious Options</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
                  <strong>Note:</strong> All recommendations are based on historical cutoff data. Actual cutoffs may vary. Always check official JOSAA websites for the latest information.
                </div>

                {/* Action Button */}
                <div className="mt-3 flex justify-center">
                  <motion.button
                    onClick={() => {
                      // Store data in sessionStorage for full report page
                      sessionStorage.setItem('fullReportData', JSON.stringify(currentRecommendationData));
                      navigate('/jee-advanced-full-report');
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Complete Report</span>
                  </motion.button>
                </div>
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
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-gray-200 w-full">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <List className="w-5 h-5 text-purple-600" />
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
                          <span className="text-gray-500 ml-2">(Rank: {college.closing_rank.toLocaleString()})</span>
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
                          <span className="text-gray-500 ml-2">(Rank: {college.closing_rank.toLocaleString()})</span>
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
                          <span className="text-gray-500 ml-2">(Rank: {college.closing_rank.toLocaleString()})</span>
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
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-gray-200 w-full overflow-hidden">
            <div className="space-y-4">
              {(() => {
                const lines = message.text.split('\n');
                const elements = [];
                let i = 0;

                // Helper function to render text with bold support
                const renderTextWithBold = (text, keyPrefix) => {
                  return text.split(/(\*\*.*?\*\*)/).map((part, idx) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={`${keyPrefix}-${idx}`} className="text-gray-900 font-bold">{part.slice(2, -2)}</strong>;
                    }
                    return <span key={`${keyPrefix}-${idx}`}>{part}</span>;
                  });
                };

                while (i < lines.length) {
                  const line = lines[i].trim();

                  // Skip empty lines
                  if (!line) {
                    i++;
                    continue;
                  }

                  // Headers
                  if (line.startsWith('#')) {
                    const level = line.match(/^#+/)[0].length;
                    const text = line.replace(/^#+\s*/, '');

                    if (level === 1) {
                      elements.push(<h3 key={`h-${i}`} className="text-lg font-bold text-gray-900 mt-4 mb-2">{text}</h3>);
                    } else if (level === 2) {
                      elements.push(<h4 key={`h-${i}`} className="text-md font-bold text-gray-800 mt-3 mb-2">{text}</h4>);
                    } else {
                      elements.push(<h5 key={`h-${i}`} className="text-sm font-bold text-gray-800 mt-2 mb-1">{text}</h5>);
                    }
                    i++;
                    continue;
                  }

                  // Tables
                  if (line.startsWith('|') || (line.includes('|') && lines[i + 1] && lines[i + 1].includes('---'))) {
                    const tableRows = [];
                    while (i < lines.length && (lines[i].trim().startsWith('|') || lines[i].trim().includes('|'))) {
                      tableRows.push(lines[i].trim());
                      i++;
                    }

                    if (tableRows.length >= 2) {
                      const headerRow = tableRows[0];
                      const dataRows = tableRows.slice(2); // Skip header and separator

                      const headers = headerRow.split('|').filter(cell => cell.trim()).map(cell => cell.trim());

                      elements.push(
                        <div key={`table-${i}`} className="overflow-x-auto my-3 rounded-lg border border-gray-200">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                {headers.map((header, idx) => (
                                  <th key={idx} className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {renderTextWithBold(header, `th-${i}-${idx}`)}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {dataRows.map((row, rowIndex) => {
                                const cells = row.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
                                if (cells.length === 0) return null;
                                return (
                                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    {cells.map((cell, cellIndex) => (
                                      <td key={cellIndex} className="px-3 py-2 whitespace-normal text-sm text-gray-700">
                                        {renderTextWithBold(cell, `td-${i}-${rowIndex}-${cellIndex}`)}
                                      </td>
                                    ))}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      );
                      continue;
                    }
                  }

                  // Lists
                  if (line.startsWith('- ')) {
                    const content = line.substring(2);
                    elements.push(
                      <div key={`list-${i}`} className="flex items-start ml-2 mb-1 text-sm text-gray-700">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        <span>{renderTextWithBold(content, `list-${i}`)}</span>
                      </div>
                    );
                    i++;
                    continue;
                  }

                  // Regular Paragraphs
                  elements.push(
                    <p key={`p-${i}`} className="text-gray-700 leading-relaxed text-sm mb-2">
                      {renderTextWithBold(line, `p-${i}`)}
                    </p>
                  );
                  i++;
                }
                return elements;
              })()}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  IIT College Counselor
                </h1>
                <p className="text-sm text-gray-600">AI-powered counseling based on cutoff data</p>
              </div>
            </div>
            {/* Clear Chat Button */}
            {(isInitialized || messages.length > 0) && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClearChat}
                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                title="Clear Chat & Start Over"
              >
                <Trash2 className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-4 flex flex-col">
        {/* Initial Setup Form */}
        {!isInitialized && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 mb-4"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Enter Your Details</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  JEE Advanced Rank <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  placeholder="Enter your rank"
                  required
                  min="1"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value) || 2024)}
                    min="2020"
                    max="2025"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <motion.button
                onClick={handleGetRecommendations}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!rank || loading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Get Recommendations</span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-2">
          <AnimatePresence>
            {messages.map((message) => (
              <div key={message.id}>
                {renderMessage(message)}
              </div>
            ))}
          </AnimatePresence>

          {loading && messages.length > 0 && (
            <div className="flex justify-start mb-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        {isInitialized && (
          <form onSubmit={handleChatSubmit} className="bg-white rounded-xl p-4 shadow-lg border border-purple-100">
            <div className="flex space-x-3">
              <input
                ref={chatInputRef}
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me anything about your recommendations..."
                disabled={loading}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
              />
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClearChat}
                className="bg-red-50 text-red-500 px-4 py-3 rounded-lg font-medium hover:bg-red-100 transition-all duration-200 flex items-center justify-center border border-red-200"
                title="Clear Chat"
              >
                <Trash2 className="w-5 h-5" />
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!chatInput.trim() || loading}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default JeeAdvancedQuery;
