import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, User, ArrowRight, Loader, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});
    const [touched, setTouched] = useState({});

    const { signIn, signUp } = useAuth();
    const navigate = useNavigate();

    // --- Validation helpers ---
    const validateEmail = (value) => {
        if (!value) return 'Email is required';
        if (value.includes(' ')) return 'Email must not contain spaces';
        if (!value.includes('@')) return 'Email must contain @';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Enter a valid email (e.g. name@example.com)';
        return '';
    };

    const validatePhone = (value) => {
        if (!value) return 'Mobile number is required';
        if (/[^0-9]/.test(value)) return 'Only digits allowed, no letters or special characters';
        if (value.length !== 10) return 'Must be exactly 10 digits';
        if (!/^[6-9]/.test(value)) return 'Must start with 6, 7, 8, or 9';
        return '';
    };

    const validatePassword = (value) => {
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Must be at least 8 characters';
        if (!/[a-z]/.test(value)) return 'Must contain at least one lowercase letter';
        return '';
    };

    const handleFieldChange = (field, value, setter) => {
        setter(value);

        // Only show errors if user has touched the field
        if (touched[field]) {
            let err = '';
            if (field === 'email') err = validateEmail(value);
            else if (field === 'phone') err = validatePhone(value);
            else if (field === 'password') err = validatePassword(value);
            setFieldErrors(prev => ({ ...prev, [field]: err }));
        }
    };

    const handleBlur = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        let err = '';
        if (field === 'email') err = validateEmail(email);
        else if (field === 'phone') err = validatePhone(phone);
        else if (field === 'password') err = validatePassword(password);
        setFieldErrors(prev => ({ ...prev, [field]: err }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validate all fields on submit
        const emailErr = validateEmail(email);
        const passwordErr = validatePassword(password);
        const phoneErr = !isLogin ? validatePhone(phone) : '';

        const errors = { email: emailErr, password: passwordErr };
        if (!isLogin) errors.phone = phoneErr;

        setFieldErrors(errors);
        setTouched({ email: true, password: true, phone: true });

        // If any errors, stop
        if (emailErr || passwordErr || phoneErr) return;

        setLoading(true);

        try {
            if (isLogin) {
                const { error } = await signIn(email, password);
                if (error) throw error;
                navigate('/jee-advanced');
            } else {
                const { error } = await signUp(email, password, fullName, phone);
                if (error) throw error;
                alert('Signup successful! Check your email for confirmation if required.');
                setIsLogin(true);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const FieldHint = ({ error, value, fieldName }) => {
        if (!touched[fieldName]) return null;
        if (error) {
            return (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                >
                    <AlertCircle className="w-3 h-3" />
                    {error}
                </motion.p>
            );
        }
        if (value) {
            return (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs text-green-500 flex items-center gap-1"
                >
                    <CheckCircle className="w-3 h-3" />
                    Looks good!
                </motion.p>
            );
        }
        return null;
    };

    const getInputBorderClass = (fieldName) => {
        if (!touched[fieldName]) return 'border-gray-200';
        if (fieldErrors[fieldName]) return 'border-red-300 focus:ring-red-400';
        return 'border-green-300 focus:ring-green-400';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
            <SEOHead
                title="Login / Sign Up"
                description="Sign in or create your RankkMate account to access AI-powered JEE college predictions."
                canonicalPath="/auth"
                noIndex={true}
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-purple-100"
            >
                <div className="p-8">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-gray-500">
                            {isLogin ? 'Enter your details to access your dashboard' : 'Start your journey with us today'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => handleFieldChange('email', e.target.value, setEmail)}
                                    onBlur={() => handleBlur('email')}
                                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${getInputBorderClass('email')} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                                    placeholder="name@example.com"
                                    required
                                    autoComplete="email"
                                />
                            </div>
                            <FieldHint error={fieldErrors.email} value={email} fieldName="email" />
                        </div>

                        {!isLogin && (
                            <>
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            placeholder="John Doe"
                                            required
                                            autoComplete="name"
                                        />
                                    </div>
                                </div>

                                {/* Mobile Number */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => {
                                                // Only allow digits
                                                const digits = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                                handleFieldChange('phone', digits, setPhone);
                                            }}
                                            onBlur={() => handleBlur('phone')}
                                            className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${getInputBorderClass('phone')} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                                            placeholder="9876543210"
                                            required
                                            maxLength={10}
                                            inputMode="numeric"
                                            autoComplete="tel"
                                        />
                                    </div>
                                    <FieldHint error={fieldErrors.phone} value={phone} fieldName="phone" />
                                </div>
                            </>
                        )}

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => handleFieldChange('password', e.target.value, setPassword)}
                                    onBlur={() => handleBlur('password')}
                                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${getInputBorderClass('password')} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                                    placeholder="••••••••"
                                    required
                                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                                />
                            </div>
                            <FieldHint error={fieldErrors.password} value={password} fieldName="password" />
                            {!isLogin && !fieldErrors.password && touched.password && password && (
                                <div className="mt-2 flex gap-1">
                                    {[
                                        password.length >= 8,
                                        /[a-z]/.test(password),
                                        /[A-Z]/.test(password),
                                        /[0-9]/.test(password),
                                    ].map((met, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 flex-1 rounded-full transition-colors ${met ? 'bg-green-400' : 'bg-gray-200'}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100"
                                >
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                        >
                            {loading ? (
                                <Loader className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <span>{isLogin ? 'Sign In' : 'Sign Up'}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-500">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setError('');
                                    setFieldErrors({});
                                    setTouched({});
                                }}
                                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                            >
                                {isLogin ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Auth;
