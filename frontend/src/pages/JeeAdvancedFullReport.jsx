import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bot, TrendingUp, BookOpen } from 'lucide-react';

const JeeAdvancedFullReport = () => {
  const [reportData, setReportData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get data from sessionStorage
    const storedData = sessionStorage.getItem('fullReportData');
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setReportData(data);
      } catch (error) {
        console.error('Error parsing full report data:', error);
        navigate('/jee-advanced');
      }
    } else {
      // If no data, redirect back to query page
      navigate('/jee-advanced');
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
          <span className="text-gray-600 text-sm">Closing Rank: <strong>{college.closing_rank.toLocaleString()}</strong></span>
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
      <div className="min-h-[60vh] bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading full report...</p>
        </div>
      </div>
    );
  }

  const sortByClosingRank = (a, b) => a.closing_rank - b.closing_rank;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => navigate('/jee-advanced')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Full Counseling Report
                  </h1>
                  <p className="text-gray-600 text-sm mt-1">Complete analysis and all available options</p>
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
          {/* Layer 3: Full Counseling Report */}
          {reportData.full_report && reportData.full_report.trim() && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 shadow-sm border border-purple-200">
              <div className="flex items-start space-x-3 mb-6">
                <Bot className="w-7 h-7 text-purple-500 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Professional Counseling Report</h2>
                  <p className="text-gray-600 text-sm mt-1">Comprehensive analysis and personalized guidance</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <div className="space-y-4">
                  {(() => {
                    const lines = reportData.full_report.split('\n');
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
                          elements.push(
                            <h1 key={`h1-${i}`} className="text-2xl font-bold text-center text-gray-900 mb-6 bg-purple-50 py-2 rounded-lg">
                              {text}
                            </h1>
                          );
                        } else if (level === 2) {
                          elements.push(
                            <h2 key={`h2-${i}`} className="text-xl font-bold text-gray-800 mt-8 mb-4 border-b pb-2 border-purple-200">
                              {text}
                            </h2>
                          );
                        } else if (level === 3) {
                          elements.push(
                            <h3 key={`h3-${i}`} className="text-xl font-bold text-gray-800 mt-6 mb-3 flex items-center">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                              {text}
                            </h3>
                          );
                        } else {
                          elements.push(
                            <h4 key={`h4-${i}`} className="text-lg font-semibold text-purple-700 mt-4 mb-2 ml-4">
                              {text}
                            </h4>
                          );
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
                          // Filter out separator line (e.g., |---|---|)
                          const headerRow = tableRows[0];
                          const dataRows = tableRows.slice(2); // Skip header and separator

                          const headers = headerRow.split('|').filter(cell => cell.trim()).map(cell => cell.trim());

                          elements.push(
                            <div key={`table-${i}`} className="overflow-x-auto my-6 rounded-lg shadow-sm border border-gray-200">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-purple-50">
                                  <tr>
                                    {headers.map((header, idx) => (
                                      <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
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
                                          <td key={cellIndex} className="px-6 py-4 whitespace-normal text-sm text-gray-700">
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
                          <div key={`list-${i}`} className="flex items-start ml-4 mb-2 text-gray-700">
                            <span className="text-purple-500 mr-2 mt-1.5">•</span>
                            <span>
                              {renderTextWithBold(content, `list-${i}`)}
                            </span>
                          </div>
                        );
                        i++;
                        continue;
                      }

                      // Regular Paragraphs
                      elements.push(
                        <p key={`p-${i}`} className="text-gray-700 leading-relaxed mb-2">
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
              <li>Cutoff ranks are based on historical data and may vary in the actual JOSAA counseling.</li>
              <li>Admission probabilities are estimates based on rank comparisons, not guarantees.</li>
              <li>Always consult official JOSAA websites for the most up-to-date information.</li>
              <li>Consider multiple factors including branch preference, location, and career goals when making choices.</li>
            </ul>
          </div>

          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/jee-advanced')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Query</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default JeeAdvancedFullReport;
