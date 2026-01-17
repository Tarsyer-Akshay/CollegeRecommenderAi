import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, TrendingUp, BookOpen } from 'lucide-react';

const JeeAdvancedQuery = () => {
  const [rank, setRank] = useState('');
  const [query, setQuery] = useState('');
  const [year, setYear] = useState(2024);
  const [selectedCategory, setSelectedCategory] = useState('GEN');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const messagesEndRef = useRef(null);

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
    if (results) {
      scrollToBottom();
    }
  }, [results]);

  const fetchRecommendations = async () => {
    // Validate rank
    const rankNum = parseInt(rank);
    if (!rank || isNaN(rankNum) || rankNum <= 0) {
      setError('Please enter a valid rank (greater than 0)');
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          rank: rankNum,
          category: selectedCategory,
          year: year,
          query: query.trim() || undefined
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Sort each category by closing_rank ascending
      const sortByClosingRank = (a, b) => a.closing_rank - b.closing_rank;
      
      setResults({
        safe: (data.safe || []).sort(sortByClosingRank),
        moderate: (data.moderate || []).sort(sortByClosingRank),
        ambitious: (data.ambitious || []).sort(sortByClosingRank),
        llm_response: data.llm_response || ''
      });

    } catch (error) {
      console.error("Backend error:", error);
      setError("Sorry, I couldn't reach the backend server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecommendations();
  };

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
        className="bg-white rounded-xl p-4 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h4 className="font-bold text-gray-800 text-lg">{college.iit}</h4>
            <p className="text-purple-600 font-medium">{college.branch}</p>
          </div>
          <div className={`ml-3 px-3 py-1 rounded-lg text-xs font-semibold border ${confidenceColors[confidence] || confidenceColors.moderate}`}>
            {confidence}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-gray-600 text-sm">Closing Rank: <strong>{college.closing_rank}</strong></span>
        </div>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                JEE Advanced Query
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get personalized IIT and NIT recommendations based on your JEE Advanced rank
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Category Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Select Your Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year
                </label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value) || 2024)}
                  placeholder="2024"
                  min="2020"
                  max="2025"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferences (Optional)
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., I prefer computer science and locations in South India"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading || !rank}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Get Recommendations</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Results */}
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* LLM Response */}
            {results.llm_response && (
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm border border-purple-200">
                <div className="flex items-start space-x-3 mb-3">
                  <Bot className="w-6 h-6 text-purple-500 mt-1" />
                  <h3 className="text-xl font-bold text-gray-800">Counseling Advice</h3>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {results.llm_response}
                </p>
              </div>
            )}

            {/* Safe Options */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Safe Options ({results.safe.length})</span>
              </h3>
              {renderCategorySection("Safe Options", results.safe, "safe", "green")}
            </div>

            {/* Moderate Options */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Moderate Options ({results.moderate.length})</span>
              </h3>
              {renderCategorySection("Moderate Options", results.moderate, "moderate", "yellow")}
            </div>

            {/* Ambitious Options */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Ambitious Options ({results.ambitious.length})</span>
              </h3>
              {renderCategorySection("Ambitious Options", results.ambitious, "ambitious", "orange")}
            </div>

            <div ref={messagesEndRef} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JeeAdvancedQuery;