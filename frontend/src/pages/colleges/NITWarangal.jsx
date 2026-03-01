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
    { param: 'College Name', detail: 'National Institute of Technology, Warangal (NITW)' },
    { param: 'Location', detail: 'Warangal, Telangana' },
    { param: 'Established Year', detail: '1959' },
    { param: 'Type', detail: 'National Institute of Technology (First REC)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engg.', os: 2409, hs: 3530, ews_os: 309, obc_os: 695, sc_os: 447, st_os: 155 },
    { branch: 'AI & Data Science', os: 2952, hs: 4316, ews_os: 450, obc_os: 850, sc_os: 650, st_os: 250 },
    { branch: 'Mathematics & Computing', os: 3277, hs: 5438, ews_os: 623, obc_os: 1784, sc_os: 1423, st_os: 607 },
    { branch: 'Electronics & Comm. Engg.', os: 5057, hs: 6446, ews_os: 969, obc_os: 2125, sc_os: 1512, st_os: 473 },
    { branch: 'VLSI Design', os: 5607, hs: 6831, ews_os: 1000, obc_os: 2300, sc_os: 1650, st_os: 550 },
    { branch: 'Electrical & Electronics', os: 7788, hs: 11204, ews_os: 1747, obc_os: 4096, sc_os: 2507, st_os: 732 },
    { branch: 'Mechanical Engineering', os: 14037, hs: 17643, ews_os: 2635, obc_os: 6698, sc_os: 3664, st_os: 844 },
    { branch: 'Chemical Engineering', os: 17585, hs: 24880, ews_os: 3200, obc_os: 8101, sc_os: 4618, st_os: 1597 },
    { branch: 'Civil Engineering', os: 25239, hs: 32174, ews_os: 5080, obc_os: 10882, sc_os: 4948, st_os: 1006 },
    { branch: 'Metallurgical & Materials', os: 28071, hs: 36742, ews_os: 5374, obc_os: 12345, sc_os: 5949, st_os: 1480 },
    { branch: 'Biotechnology', os: 30296, hs: 41671, ews_os: 6052, obc_os: 13822, sc_os: 7356, st_os: 2383 },
    { branch: 'Integrated M.Sc Physics', os: 15971, hs: 37387, ews_os: 3945, obc_os: 9120, sc_os: 4006, st_os: 2487 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science', avgPackage: '₹30.80 LPA', placementRate: 'High', topIndustry: 'IT / Software' },
    { branch: 'Core Branches (Mech, EE)', avgPackage: 'Strong Metrics', placementRate: 'Very High', topIndustry: 'PSUs, Core Engineering' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹62,500', other: '₹32,625', total: '₹95,125' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹20,833', other: '₹32,625', total: '₹53,458' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹32,625', total: '₹32,625', highlight: true },
];

const COURSES = [
    { label: 'B.Tech Programs (13 Courses)', items: 'CSE, AI & Data Science, Mathematics & Computing, ECE, VLSI Design, EEE, Mech, Chemical, Civil, Metallurgy, Biotechnology' },
    { label: 'Integrated Sciences', items: 'Integrated M.Sc in Physics, Chemistry, and Mathematics.' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#28 (Engineering)', icon: Award },
    { body: 'Institute Legacy', rank: 'First REC established in India (1959)', icon: Star },
];

const ADMISSION_STEPS = [
    'Appear for JEE Main 2026.',
    'Achieve a competitive All India Rank (AIR).',
    'Participate in JoSAA / CSAB Counseling.',
    'Select NIT Warangal based on your rank, category, and state quota (Home State / Other State).',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-teal-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-green-700 bg-green-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITWarangal = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Warangal",
        "alternateName": "NIT Warangal",
        "url": "https://www.nitw.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Warangal, the first REC in India, is renowned for its core engineering placements and public sector recruitment.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Warangal",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
        },
        "foundingDate": "1959"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Warangal CSE?', a: 'For the General category, the JEE Main 2025 closing rank for CSE (Other State) at NIT Warangal was 2409. Home state cutoff was 3530.' },
        { q: 'What is the highest package at NIT Warangal?', a: 'The highest package in the 2025 placement season reached an impressive ₹88.00 LPA, secured by a CSE student.' },
        { q: 'Is NIT Warangal good for core engineering?', a: 'Yes, it is exceptionally strong in core sector placements. Branches like Mechanical and Electrical see robust participation from PSUs like Coal India, Indian Oil, and BHEL.' },
        { q: 'What is the total fee for 4 years at NIT Warangal?', a: 'The 4-year financial commitment is approximately ₹7,39,000 for General category students without income remission.' },
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
                title="NIT Warangal Cutoff, Fees, Placements, Ranking"
                description="Check NIT Warangal cutoff, placements, fees, ranking, and admission details. Updated 2026 data."
                canonicalPath="/colleges/nit-warangal"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-teal-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ India's First REC · Established 1959
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            NIT Warangal – Cutoff, Fees, Placements & Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Warangal, Telangana' },
                            { icon: Calendar, text: 'Est. 1959' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #28' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-teal-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-green-500 pl-6">
                    Holding the distinction of being the first Regional Engineering College in the country (established in 1959), <strong className="text-gray-900">NIT Warangal (NITW)</strong> boasts a massive 256-acre residential campus. Ranked <strong className="text-gray-900">#28 in NIRF 2025</strong>, it is renowned for producing high-quality core engineers and holds a formidable 60+ year legacy of deep engagement with Public Sector Undertakings (PSUs).
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
                                    <Th className="text-center">Gen (OS)</Th>
                                    <Th className="text-center">Gen (HS)</Th>
                                    <Th className="text-center">EWS (OS)</Th>
                                    <Th className="text-center">OBC-NCL (OS)</Th>
                                    <Th className="text-center">SC (OS)</Th>
                                    <Th className="text-center">ST (OS)</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {CUTOFF_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.hs}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.ews_os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.obc_os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sc_os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.st_os}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-green-800"><strong>Pro Tip:</strong> There is a significant rise in demand for the 'Mathematics and Computing' branch. It's also the most preferred NIT for students from Telugu states (TS/AP).</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹88.00 LPA' },
                            { label: 'Overall Average', value: '₹14.35 LPA' },
                            { label: 'Median Package', value: '₹12.00 LPA' },
                            { label: 'Placement Rate', value: '79.30%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Total Recruiters:</strong> 290+ <br />
                        <strong>PSU Participation:</strong> 15+ Companies including Coal India, Indian Oil, and BHEL. It remains the top choice for students interested in public sector stability.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average Package Details</Th><Th className="text-center">Top Industry</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.avgPackage}</td>
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
                                    <Th className="text-center">Other Fees & Hostel (Est. Per Sem)</Th>
                                    <Th className="text-center">Total Estimated</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-green-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* The total 4-Year Academic Commitment is approximately ₹7,39,000 for General students (&gt; ₹5L income). Annual Hostel Fees are around ₹64,000.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-green-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-green-600 to-teal-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at NIT Warangal
                    </h2>
                    <p className="text-green-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Main rank and get instant, AI-powered predictions for NIT Warangal and other top NITs.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-green-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITWarangal;
