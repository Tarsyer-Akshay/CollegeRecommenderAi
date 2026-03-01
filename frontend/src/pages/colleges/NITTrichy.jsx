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
    { param: 'College Name', detail: 'National Institute of Technology, Tiruchirappalli (NIT Trichy / NITT)' },
    { param: 'Location', detail: 'Tiruchirappalli, Tamil Nadu' },
    { param: 'Established Year', detail: '1964' },
    { param: 'Type', detail: 'National Institute of Technology' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engg.', os: 1605, hs: 4624, obc_os: 559, obc_hs: 1631, sc_os: 283, sc_hs: 1081 },
    { branch: 'Electronics & Comm. Engg.', os: 3878, hs: 7145, obc_os: 1461, obc_hs: 1960, sc_os: 414, sc_hs: 2390 },
    { branch: 'Electrical & Electronics Engg.', os: 6783, hs: 9862, obc_os: 2200, obc_hs: 4011, sc_os: 1621, sc_hs: 3704 },
    { branch: 'Mechanical Engineering', os: 9670, hs: 11347, obc_os: 3200, obc_hs: 4761, sc_os: 1678, sc_hs: 5346 },
    { branch: 'Instrumentation & Control', os: 12291, hs: 13704, obc_os: 4100, obc_hs: 5001, sc_os: 1917, sc_hs: 6444 },
    { branch: 'Chemical Engineering', os: 13111, hs: 20393, obc_os: 4500, obc_hs: 1000, sc_os: 2078, sc_hs: 6800 },
    { branch: 'Civil Engineering', os: 22809, hs: 31593, obc_os: 7500, obc_hs: 1000, sc_os: 3610, sc_hs: 6700 },
    { branch: 'Metallurgical & Materials', os: 24515, hs: 29327, obc_os: 8200, obc_hs: 3628, sc_os: 3031, sc_hs: 7886 },
    { branch: 'Production Engineering', os: 21869, hs: 24160, obc_os: 7200, obc_hs: 8000, sc_os: 2497, sc_hs: 7200 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'CSE', avgPackage: '₹27.17 LPA', placementRate: '96.9%', topIndustry: 'IT / Software' },
    { branch: 'Civil / Metallurgical', avgPackage: '₹10-12 LPA', placementRate: 'High', topIndustry: 'Infrastructure / Heavy Industries' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹62,500', other: '₹60,450', total: '₹1,22,950' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹20,833', other: '₹60,450', total: '₹81,283' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹60,450', total: '₹60,450', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech', items: 'Computer Science, ECE, EEE, Mechanical, Chemical, Civil, MME, Production, ICE' },
    { label: '5-Year B.Arch', items: 'Bachelor of Architecture program with a competitive design edge.' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#9 (Engineering) | #30 (Overall)', icon: Award },
    { body: 'QS World 2026', rank: '#731-740 (Globally)', icon: Star },
];

const ADMISSION_STEPS = [
    'Appear for JEE Main 2026.',
    'Achieve a competitive All India Rank (AIR).',
    'Participate in JoSAA / CSAB Counseling.',
    'Select NIT Trichy based on your rank, category, and state quota (Home State / Other State).',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITTrichy = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Tiruchirappalli",
        "alternateName": "NIT Trichy",
        "url": "https://www.nitt.edu",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Trichy is the premier NIT in India, ranked #9 in NIRF Engineering 2025.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tiruchirappalli",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
        },
        "foundingDate": "1964"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Trichy CSE?', a: 'For the General category, the JEE Main 2025 round 6 closing rank for CSE (Other State) at NIT Trichy was 1605. Home state cutoff was 4624.' },
        { q: 'What is the highest package at NIT Trichy?', a: 'The highest package recorded for the 2025 batch was ₹64.00 LPA.' },
        { q: 'What are the fees at NIT Trichy?', a: 'The tuition fee is ₹62,500 per semester. Students with total family income below Rs. 1 lakh get 100% tuition remission. Between Rs. 1-5 lakh get 2/3rd remission.' },
        { q: 'What is the NIRF ranking of NIT Trichy?', a: 'NIT Trichy has maintained the #9 position in the NIRF Engineering category for three consecutive years (2023, 2024, and 2025).' },
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
                title="NIT Trichy Cutoff, Fees, Placements, Ranking"
                description="Check NIT Trichy cutoff, placements, fees, ranking, and admission details. Updated 2026 data."
                canonicalPath="/colleges/nit-trichy"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏆 #1 NIT in India · NIRF #9 Engineering
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            NIT Trichy – Cutoff, Fees, Placements & Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Complete insights for <strong className="text-white">2026</strong> Aspirants
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Tiruchirappalli, TN' },
                            { icon: Calendar, text: 'Est. 1964' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #9' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-6">
                    Commonly referred to as <strong className="text-gray-900">NIT Trichy (NITT)</strong>, this institution stands as the flagship of the NIT system. With a consistent <strong className="text-gray-900">#9 rank in the NIRF Engineering category</strong>, it often outperforms several second-generation IITs. Set for modernization with a ₹150 crore innovation hub focused on semiconductor tech and AI, NIT Trichy guarantees top-tier education and placements.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (JEE Main 2025 – Round 6)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Branch</Th>
                                    <Th className="text-center">General (OS)</Th>
                                    <Th className="text-center">General (HS)</Th>
                                    <Th className="text-center">OBC-NCL (OS)</Th>
                                    <Th className="text-center">OBC-NCL (HS)</Th>
                                    <Th className="text-center">SC (OS)</Th>
                                    <Th className="text-center">SC (HS)</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {CUTOFF_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.hs}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.obc_os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.obc_hs}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sc_os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sc_hs}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-blue-800"><strong>Pro Tip:</strong> The selectivity for NIT Trichy is among the highest in India. OS General CSE closes around 1605, showing intense student preference.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹64.00 LPA' },
                            { label: 'Average Package', value: '₹17.50 LPA' },
                            { label: 'Median Package', value: '₹15.76 LPA' },
                            { label: 'Placement Rate', value: '85%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Deloitte, Samsung, Goldman Sachs, Nvidia, ITC, McKinsey, BCG
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average Package</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Top Industry</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.avgPackage}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.placementRate}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.topIndustry}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure (2025-26 Academic Year)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Category</Th>
                                    <Th className="text-center">Tuition (Per Sem)</Th>
                                    <Th className="text-center">Other Fees & Mess (Per Sem/Annual)</Th>
                                    <Th className="text-center">Total First Semester</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-blue-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.tuition}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.other}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* Other fees include Annual Institute Fee, One-Time Admission Fee, Hostel Establishment & Rent, and Mess Advance.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-blue-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Rankings (2025-2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at NIT Trichy
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Main rank and get instant, AI-powered predictions for NIT Trichy and other top NITs.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <span>Try JEE Main Predictor</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITTrichy;
