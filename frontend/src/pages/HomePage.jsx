import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, TrendingUp, Award, BookOpen } from 'lucide-react';

const HomePage = () => {
    const features = [
        {
            icon: Zap,
            title: 'JEE Advanced Predictor',
            description: 'Discover IIT admission possibilities with your JEE Advanced rank',
            link: '/jee-advanced',
            color: 'from-purple-500 to-purple-600'
        }
    ];

    const stats = [
        { icon: Users, value: '50K+', label: 'Students Helped' },
        { icon: BookOpen, value: '500+', label: 'Colleges Covered' },
        { icon: Award, value: '95%', label: 'Accuracy Rate' },
        { icon: TrendingUp, value: '24/7', label: 'AI Support' }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                                Find Your
                                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Dream College</span>
                            </h1>
                            <p className="font-body text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                AI-powered college predictor for JEE aspirants. Get personalized recommendations based on your rank and preferences.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Link to="/jee-advanced">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                                >
                                    <span>JEE Advanced Query</span>
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50"
                />
                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40"
                />
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Choose Your Path
                        </h2>
                        <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
                            Select the exam type to get personalized college recommendations
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <Link to={feature.link}>
                                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                                                {feature.title}
                                            </h3>
                                            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                                                {feature.description}
                                            </p>
                                            <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                                <span>Get Started</span>
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-500">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                            Trusted by Students
                        </h2>
                        <p className="font-body text-xl text-purple-100 max-w-2xl mx-auto">
                            Join thousands of students who found their perfect college match
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-purple-100 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
