import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bot, TrendingUp, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const JeeMainsFullReport = () => {
    const [reportData, setReportData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = sessionStorage.getItem('jeeMainsFullReportData');
        if (storedData) {
            try {
                const data = JSON.parse(storedData);
                setReportData(data);
            } catch (error) {
                console.error('Error parsing full report data:', error);
                navigate('/jee-mains');
            }
        } else {
            navigate('/jee-mains');
        }
    }, [navigate]);

    const CollegeCard = ({ college, confidence }) => {
        const confidenceColors = {
            safe: 'bg-green-100 text-green-800 border-green-300',
            moderate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
            ambitious: 'bg-orange-100 text-orange-800 border-orange-300'
        };

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300"
            >
                <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg">{college.iit}</h4>
                        <p className="text-teal-600 font-medium">{college.branch}</p>
                    </div>
                    <div className={`ml-3 px-3 py-1 rounded-lg text-xs font-semibold border ${confidenceColors[confidence] || confidenceColors.moderate}`}>
                        {confidence}
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Closing Rank: <strong>{college.closing_rank?.toLocaleString()}</strong></span>
                </div>
                {college.location && (
                    <div className="mt-2 text-gray-500 text-sm">
                        📍 {college.location}
                    </div>
                )}
            </motion.div>
        );
    };

    const renderCategorySection = (title, colleges, confidence, color) => {
        if (!colleges || colleges.length === 0) {
            return (
                <div className="text-center py-8 text-gray-500">
                    No colleges found in this category
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {colleges.map((college, index) => (
                    <CollegeCard key={index} college={college} confidence={confidence} />
                ))}
            </div>
        );
    };

    if (!reportData) {
        return (
            <div className="min-h-[60vh] bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading full report...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-teal-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center space-x-4">
                            <motion.button
                                onClick={() => navigate('/jee-mains')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-lg bg-teal-100 text-teal-700 hover:bg-teal-200 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </motion.button>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                                        JEE Mains Full Report
                                    </h1>
                                    <p className="text-gray-600 text-sm mt-1">NITs, IIITs, GFTIs - Complete Analysis</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-6 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    {/* Full Report Text */}
                    {reportData.full_report && reportData.full_report.trim() && (
                        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 shadow-sm border border-teal-200">
                            <div className="flex items-start space-x-3 mb-6">
                                <Bot className="w-7 h-7 text-teal-500 mt-1" />
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">Professional Counseling Report</h2>
                                    <p className="text-gray-600 text-sm mt-1">Comprehensive analysis for NITs, IIITs, and GFTIs</p>
                                </div>
                            </div>
                            <div className="prose prose-lg max-w-none prose-headings:text-teal-900 prose-a:text-teal-600 prose-strong:text-teal-800">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        table: ({ node, ...props }) => <div className="overflow-x-auto my-4 rounded-lg border border-gray-200"><table className="min-w-full divide-y divide-gray-200" {...props} /></div>,
                                        thead: ({ node, ...props }) => <thead className="bg-teal-50" {...props} />,
                                        th: ({ node, ...props }) => <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider" {...props} />,
                                        td: ({ node, ...props }) => <td className="px-4 py-3 text-sm text-gray-700 whitespace-normal border-t border-gray-100" {...props} />
                                    }}
                                >
                                    {reportData.full_report}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}

                    {/* Complete Options Lists */}
                    <div className="space-y-6">
                        {/* Safe Options */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span>All Safe Options ({reportData.safe?.length || 0})</span>
                            </h3>
                            {renderCategorySection("Safe Options", reportData.safe, "safe", "green")}
                        </div>

                        {/* Moderate Options */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <span>All Moderate Options ({reportData.moderate?.length || 0})</span>
                            </h3>
                            {renderCategorySection("Moderate Options", reportData.moderate, "moderate", "yellow")}
                        </div>

                        {/* Ambitious Options */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <span>All Ambitious Options ({reportData.ambitious?.length || 0})</span>
                            </h3>
                            {renderCategorySection("Ambitious Options", reportData.ambitious, "ambitious", "orange")}
                        </div>
                    </div>

                    {/* Disclaimers */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Disclaimers</h3>
                        <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                            <li>Cutoff ranks are based on historical JOSAA data and may vary in actual counseling.</li>
                            <li>Admission probabilities are estimates based on rank comparisons, not guarantees.</li>
                            <li>Always consult official JOSAA websites for the most up-to-date information.</li>
                            <li>Consider multiple factors including branch preference, location, and career goals.</li>
                        </ul>
                    </div>

                    {/* Back Button */}
                    <motion.button
                        onClick={() => navigate('/jee-mains')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to JEE Mains Query</span>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default JeeMainsFullReport;
