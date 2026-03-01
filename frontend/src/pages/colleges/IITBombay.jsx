import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    MapPin, Calendar, Building2, GraduationCap, TrendingUp,
    IndianRupee, Award, BookOpen, ArrowRight, CheckCircle2,
    Briefcase, Star, Info, Users
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

// ── Data ────────────────────────────────────────────────────────────────────────

const BASIC_INFO = [
    { param: 'College Name', detail: 'Indian Institute of Technology Bombay (IITB)' },
    { param: 'Location', detail: 'Powai, Mumbai, Maharashtra' },
    { param: 'Established Year', detail: '1958' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 66, ews: 20, obc: 54, sc: 31, st: 19 },
    { branch: 'Electrical Engineering', general: 433, ews: 125, obc: 255, sc: 158, st: 85 },
    { branch: 'Mechanical Engineering', general: 1834, ews: 435, obc: 950, sc: 520, st: 310 },
    { branch: 'Aerospace Engineering', general: 2361, ews: 489, obc: 1295, sc: 703, st: 474 },
    { branch: 'Chemical Engineering', general: 2464, ews: 500, obc: 1255, sc: 735, st: 469 },
    { branch: 'Civil Engineering', general: 4250, ews: 725, obc: 1829, sc: 946, st: 290 },
    { branch: 'Engineering Physics', general: 1539, ews: 380, obc: 1145, sc: 820, st: 510 },
    { branch: 'Metallurgical Engineering', general: 4345, ews: 980, obc: 2580, sc: 1375, st: 820 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgRange: '₹32.0 – ₹35.0', pct: '90.7%' },
    { branch: 'Electrical Engineering', avgRange: '₹24.0 – ₹26.0', pct: '90.8%' },
    { branch: 'Mechanical Engineering', avgRange: '₹18.0 – ₹20.0', pct: '90.9%' },
    { branch: 'Chemical Engineering', avgRange: '₹17.0 – ₹19.0', pct: '82.0%' },
    { branch: 'Civil Engineering', avgRange: '₹14.0 – ₹16.0', pct: '82.5%' },
];

const FEE_DATA = [
    { type: 'Tuition Fee (per sem)', general: '₹1,00,000', reserved: '₹0 (Exempted)' },
    { type: 'Statutory Fees (Medical, Gym, etc.)', general: '₹28,250', reserved: '₹28,250' },
    { type: 'One-time Admission Fee', general: '₹10,000', reserved: '₹10,000' },
    { type: 'Refundable Deposits', general: '₹6,000', reserved: '₹6,000' },
    { type: 'Hostel Rent & Utilities', general: '₹19,400', reserved: '₹19,400' },
    { type: 'Mess Advance (per sem)', general: '₹22,500', reserved: '₹22,500' },
    { type: 'Total First Semester Payable', general: '₹1,86,150', reserved: '₹86,150', highlight: true },
];

const COURSES = [
    { label: 'B.Tech', items: 'Computer Science, Electrical, Mechanical, Civil, Chemical, Aerospace, Metallurgical' },
    { label: 'B.S.', items: 'Mathematics, Physics, Chemistry, Economics' },
    { label: 'Dual Degree', items: 'B.Tech + M.Tech options in several core branches' },
    { label: 'Design', items: 'B.Des and M.Des (via UCEED/CEED)' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '3rd (Engineering) | 3rd (Overall)', icon: Award },
    { body: 'QS World 2026', rank: '129th (Globally)', icon: Star },
    { body: 'India Today 2025', rank: '1st (Engineering)', icon: TrendingUp },
];

const ADMISSION_STEPS = [
    'Appear for JEE Main 2026 and rank in the top 2,50,000 candidates.',
    'Appear for JEE Advanced 2026 (Expected in May 2026).',
    'Participate in JoSAA Counseling. Choose IIT Bombay as your top preference.',
    'Secure a seat based on your All India Rank (AIR) and Category.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITBombay = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Bombay",
        "alternateName": "IIT Bombay",
        "url": "https://www.iitb.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Bombay is a premier engineering institution in India, established in 1958, consistently ranked among the top 3 engineering colleges in India.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Powai, Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "foundingDate": "1958"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Bombay CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Bombay was 66. You typically need to be in the Top 70 All India Ranks.' },
        { q: 'What is the average placement package at IIT Bombay?', a: 'The overall average package for the 2025 batch was ₹23.50 LPA for undergraduates. CSE graduates received ₹32–35 LPA on average.' },
        { q: 'What are the fees at IIT Bombay?', a: 'The total first-semester payable for General/OBC/EWS students is approximately ₹1,86,150. SC/ST/PwD students pay approximately ₹86,150 as tuition is exempted.' },
        { q: 'How to get admission in IIT Bombay?', a: 'You must clear JEE Main, then JEE Advanced. After qualifying, participate in JoSAA Counseling and select IIT Bombay branches based on your AIR and category.' },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    };

    return (
        <div className="min-h-screen">
            <SEOHead
                title="IIT Bombay Cutoff, Fees, Placements, Ranking"
                description="Check IIT Bombay cutoff, placements, fees, ranking, and admission details. Updated 2026 data for JEE Advanced aspirants."
                canonicalPath="/colleges/iit-bombay"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Institute of National Importance
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Bombay
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Cutoff, Fees, Placements &amp; Ranking — Updated for <strong className="text-white">2026</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Powai, Mumbai' },
                            { icon: Calendar, text: 'Est. 1958' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #3' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Decorative circles */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-purple-500 pl-6">
                    The Indian Institute of Technology Bombay (IITB), established in 1958, is globally recognized as a premier destination for engineering and research. Located in Powai, Mumbai, it consistently ranks among the <strong className="text-gray-900">top 3 engineering colleges in India</strong>.
                </motion.p>

                {/* ── 1. Basic Info ─────────────────────────────────────────────── */}
                <section id="basic-info">
                    <SectionTitle icon={Info}>Basic Info</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Parameter</Th><Th>Details</Th></tr></thead>
                            <tbody>
                                {BASIC_INFO.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900">{r.param}</td>
                                        <td className="px-4 py-3 text-gray-700">{r.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 2. Branch-Wise Cutoffs ────────────────────────────────────── */}
                <section id="cutoffs">
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (JEE Advanced 2025 – Round 6)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Branch</Th>
                                    <Th className="text-center">General</Th>
                                    <Th className="text-center">EWS</Th>
                                    <Th className="text-center">OBC-NCL</Th>
                                    <Th className="text-center">SC</Th>
                                    <Th className="text-center">ST</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {CUTOFF_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.general}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.ews}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.obc}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sc}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.st}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-purple-50 border border-purple-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-purple-800"><strong>Pro Tip:</strong> For CSE at IIT Bombay, you typically need to be in the <strong>Top 70 ranks</strong> in India. For Female-only supernumerary seats, closing ranks are typically 2×–3× higher than gender-neutral ranks.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025-26 Season)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Average Package', value: '₹23.50 LPA' },
                            { label: 'Median Package', value: '₹17.92 LPA' },
                            { label: 'Highest Domestic', value: '₹2.2 Cr PA' },
                            { label: 'Highest International', value: '₹3.67 Cr PA' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Total Offers Made:</strong> 1,650 &nbsp;|&nbsp; <strong>Top Recruiters:</strong> Google, Microsoft, Qualcomm, Da Vinci, Tata Motors, Airbus, McKinsey &amp; Company
                    </motion.div>

                    {/* Branch-wise table */}
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average Package (LPA)</Th><Th className="text-center">Placement %</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.avgRange}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.pct}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure (Autumn 2025-26)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Fee Type</Th><Th className="text-center">General / OBC / EWS</Th><Th className="text-center">SC / ST / PwD</Th></tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-purple-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                        <td className="px-4 py-3 text-gray-900">{r.type}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.general}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.reserved}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.p {...sectionAnim} className="mt-3 text-xs text-gray-500 italic">
                        * Fees are subject to semester-wise revisions. Contact IIT Bombay for the latest fee circular.
                    </motion.p>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-purple-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Rankings (2025-2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-3 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-gray-900">{r.body}</div>
                                    <div className="text-sm text-gray-600 mt-1">{r.rank}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 7. Admission Process ──────────────────────────────────────── */}
                <section id="admission">
                    <SectionTitle icon={GraduationCap}>Admission Process 2026</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                    {i + 1}
                                </div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────────────── */}
                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Bombay
                    </h2>
                    <p className="text-purple-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Bombay and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <span>Try JEE Advanced Predictor</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default IITBombay;
