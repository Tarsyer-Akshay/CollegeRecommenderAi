import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, BookOpen, MapPin, Users, TrendingUp, Search, Filter } from 'lucide-react';

const JeeMainQuery = () => {
  const [query, setQuery] = useState('');
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('General');
  const [state, setState] = useState('All States');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['General', 'OBC-NCL', 'SC', 'ST', 'EWS'];
  const states = ['All States', 'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 'Gujarat', 'Rajasthan', 'Haryana'];

  const sampleColleges = [
    { name: 'NIT Delhi', location: 'Delhi', cutoff: '15000-25000', courses: 'CSE, ECE, ME' },
    { name: 'IIIT Hyderabad', location: 'Hyderabad', cutoff: '8000-15000', courses: 'CSE, ECE' },
    { name: 'DTU', location: 'Delhi', cutoff: '20000-35000', courses: 'CSE, IT, ECE' },
    { name: 'NSUT', location: 'Delhi', cutoff: '25000-40000', courses: 'CSE, IT, ME' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() && !rank.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const finalQuery = query.trim() || `What colleges can I get with ${rank} JEE Mains rank in ${state}, under ${category} category?`;

      const res = await fetch('http://localhost:8000/api/jee-mains', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: finalQuery }),
      });

      const data = await res.json();
      if (res.ok && data.response) {
        setResponse(data.response);
      } else {
        setResponse('No matching colleges found for your query.');
      }
    } catch (error) {
      console.error('API call failed:', error);
      setResponse('Something went wrong. Please try again later.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            JEE Main College Predictor
          </h1>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Get AI-powered college recommendations based on your JEE Main rank and preferences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Query Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Ask Your Query
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>

              {/* Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="grid md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred State
                    </label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {states.map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your JEE Main Rank
                  </label>
                  <input
                    type="number"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                    placeholder="Enter your JEE Main rank"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ask a Question (Optional)
                  </label>
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., Which colleges can I get with my rank? What are the cutoffs for CSE in NITs?"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Get Predictions</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Response */}
              {response && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200"
                >
                  <h3 className="font-heading text-lg font-bold text-blue-900 mb-3 flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    AI Recommendation
                  </h3>
                  <div className="font-body text-blue-800 whitespace-pre-line leading-relaxed">
                    {response}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Sample Colleges Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Popular Colleges
              </h3>
              <div className="space-y-4">
                {sampleColleges.map((college, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">{college.name}</h4>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{college.location}</span>
                    </div>
                    <div className="text-sm text-blue-600 font-medium mb-1">
                      Rank: {college.cutoff}
                    </div>
                    <div className="text-xs text-gray-500">
                      {college.courses}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="font-heading text-xl font-bold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Quick Tips
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                  Consider branch over college reputation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                  Check previous year cutoffs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                  Apply for state quota if eligible
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                  Keep backup options ready
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JeeMainQuery;
