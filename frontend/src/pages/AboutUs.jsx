import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Target, Heart, Zap } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">RankkMate</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are a team of passionate educators and engineers dedicated to simplifying the engineering admission process in India. Our mission is to empower students with data-driven insights to make informed career decisions.
                    </p>
                </motion.div>

                {/* Our Mission */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Every year, millions of students take the JEE exams with dreams of entering prestigious engineering institutes. However, the counseling process is often confusing, with complex opening and closing ranks fluctuating every year.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            RankkMate exists to bridge the gap between your rank and your dream college. We analyze years of historical data to provide accurate predictions, helping you understand exactly where you stand and what your best options are.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-xl"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <Users className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                                <div className="font-bold text-gray-900">Student First</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <Award className="w-10 h-10 text-pink-600 mx-auto mb-3" />
                                <div className="font-bold text-gray-900">Excellence</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                                <div className="font-bold text-gray-900">Precision</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <Heart className="w-10 h-10 text-red-600 mx-auto mb-3" />
                                <div className="font-bold text-gray-900">Integrity</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* What We Offer */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-12"
                    >
                        What We Offer
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Instant Predictions",
                                description: "Get diverse college options instantly based on your JEE Mains or Advanced rank.",
                                color: "text-yellow-500"
                            },
                            {
                                icon: BookOpen,
                                title: "Comprehensive Data",
                                description: "Access detailed cutoff data for IITs, NITs, IIITs, and GFTIs across multiple years.",
                                color: "text-blue-500"
                            },
                            {
                                icon: Award,
                                title: "Smart Filtering",
                                description: "Filter colleges by your category, home state, and preferred branches to find your perfect fit.",
                                color: "text-green-500"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl p-8 shadow-lg border border-purple-50"
                            >
                                <item.icon className={`w-12 h-12 mb-6 ${item.color}`} />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
