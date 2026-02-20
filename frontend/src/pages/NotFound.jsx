import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ghost, Home, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <SEOHead
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Go back to RankkMate homepage."
                noIndex={true}
            />
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative mb-8">
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="inline-block"
                        >
                            <Ghost className="w-32 h-32 text-purple-600 mx-auto" strokeWidth={1.5} />
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute -bottom-2 right-1/4 bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold text-sm transform rotate-12"
                        >
                            404 Error
                        </motion.div>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Oops! It seems like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
                    </p>

                    <div className="space-y-4">
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <Home className="w-5 h-5" />
                                <span>Back to Home</span>
                            </motion.button>
                        </Link>

                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-white text-purple-600 border border-purple-200 px-8 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Contact Support</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
