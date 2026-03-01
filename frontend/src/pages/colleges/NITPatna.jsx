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
    { param: 'College Name', detail: 'National Institute of Technology Patna (NITP)' },
    { param: 'Location', detail: 'Patna, Bihar' },
    { param: 'Established Year', detail: '1886 (as BCE), 2004 (as NIT)' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', os: 13235, hs: 19078, ews_os: 2300, obc_os: 4774, sc_os: 2821, st_os: 1091 },
    { branch: 'AI and Data Science', os: 15261, hs: 21188, ews_os: 2500, obc_os: 5500, sc_os: 3500, st_os: 1500 },
    { branch: 'Math & Computing (Int.)', os: 11555, hs: 25314, ews_os: 2000, obc_os: 4200, sc_os: 2500, st_os: 1200 },
    { branch: 'Electronics & Comm. (ECE)', os: 18152, hs: 24388, ews_os: 3500, obc_os: 6800, sc_os: 4200, st_os: 1800 },
    { branch: 'Electrical Engineering', os: 24524, hs: 34029, ews_os: 4500, obc_os: 8500, sc_os: 5500, st_os: 2200 },
    { branch: 'Mechatronics & Automation', os: 21854, hs: 29410, ews_os: 4000, obc_os: 7500, sc_os: 4800, st_os: 2000 },
    { branch: 'Mechanical Engineering', os: 30791, hs: 46025, ews_os: 5500, obc_os: 10500, sc_os: 6500, st_os: 2500 },
    { branch: 'Civil Engineering', os: 41773, hs: 62828, ews_os: 7197, obc_os: 15869, sc_os: 7029, st_os: 2560 },
    { branch: 'B.Arch', os: 878, hs: 1976, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Mechanical Engineering', placementRate: '103%', averageCTC: '₹7.06 LPA', highestCTC: '₹12.00 LPA' },
    { branch: 'Electrical Engineering', placementRate: '94%', averageCTC: '₹9.20 LPA', highestCTC: '₹21.00 LPA' },
    { branch: 'Computer Science (CSE)', placementRate: '87%', averageCTC: '₹12.64 LPA', highestCTC: '₹41.37 LPA' },
    { branch: 'Electronics (ECE)', placementRate: '79%', averageCTC: '₹12.43 LPA', highestCTC: '₹31.64 LPA' },
    { branch: 'Civil Engineering', placementRate: '39%', averageCTC: '₹7.50 LPA', highestCTC: '₹12.00 LPA' },
];

const FEE_DATA = [
    { category: 'B.Tech Tuition Fee (Total)', annual: '₹5,00,000 (4 years)' },
    { category: 'Hostel & Mess (Total)', annual: '₹2,72,000 (4 years)' },
    { category: 'Other Charges', annual: '₹1,12,650 (4 years)' },
    { category: 'SC/ST/PwD/Income < 1L', annual: '100% Tuition Waiver' },
];

const COURSES = [
    { label: 'B.Tech & B.Arch', items: 'CSE, ECE, Electrical, Mechanical, Civil, Mechatronics, AI & Data Science' },
    { label: 'Integrated Masters (5-Year)', items: 'Cyber Security, Data Science, Math & Computing, VLSI Systems' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#53 (Engineering)', icon: Award },
    { body: 'Historically (Est. 1886)', rank: '6th Oldest Engineering College in India', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a valid JEE Main 2026 score.',
    'Clear passing criteria (75% for Gen/OBC, 65% for SC/ST/PwD) in Class 12th.',
    'Enroll through JoSAA/CSAB counseling based on AIR.',
    'Students entering Dual Degree integrated branches can lock Master\'s early.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-700 to-violet-600 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-indigo-900 bg-indigo-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITPatna = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Patna",
        "alternateName": "NIT Patna",
        "url": "http://www.nitp.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Patna, tracing its history back to 1886, offers phenomenal placements including a 103% placement rate in Mechanical Engineering and strong integrated dual-degree programs.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
        },
        "foundingDate": "1886"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Patna CSE?', a: 'For the General category (Other State), the JEE Main 2024 closing rank for CSE was 13,235. AI and Data Science rounded off at 15,261.' },
        { q: 'What is the highest package at NIT Patna?', a: 'The highest package in the 2025 placement cycle reached ₹41.37 LPA (down slightly from ₹44.92 LPA in 2024).' },
        { q: 'Does NIT Patna have good placements in core branches?', a: 'Yes! Interestingly, Mechanical Engineering reported a staggering 103% placement rate indicating multiple job offers per student even in a tough market, with almost all getting placed.' },
        { q: 'Are there 5-year Integrated M.Tech programs at NIT Patna?', a: 'Absolutely. NIT Patna aggressively adopted 5-year integrated routes in emerging fields like Cyber Security, Data Science, Math & Computing, and VLSI.' },
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
                title="NIT Patna Admissions 2026: Cutoffs, 103% Placements, Fees & NIRF Rank"
                description="Explore NIT Patna: In-depth JEE Main HS/OS cutoffs, impressive 103% mechanical placement rates, #53 NIRF engineering rank, and modern integrated domains."
                canonicalPath="/colleges/nit-patna"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-700 to-violet-700 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 1886 · Legacy of Technical Innovation
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Patna – Connecting History with Modern Technology
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            A Comprehensive <strong className="text-white">2026</strong> Guide to Cutoffs, Resilient Cor-Engineering Placements, and Dual Degrees
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Patna, Bihar' },
                            { icon: Calendar, text: 'Est. 1886' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #53' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-violet-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-indigo-500 pl-6">
                    Holding the legacy of being the 6th oldest engineering college in India, <strong className="text-gray-900">NIT Patna</strong> stands <strong className="text-gray-900">#53 in NIRF 2025</strong>. It represents a beacon of academic resilience. Its distinctiveness in offering 5-year integrated niche domains directly after 12th makes it a favorite destination for ambitious tech students.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (Last Round Trends)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Branch</Th>
                                    <Th className="text-center">Gen (OS)</Th>
                                    <Th className="text-center">Gen (HS)</Th>
                                    <Th className="text-center">EWS (OS)*</Th>
                                    <Th className="text-center">OBC-NCL (OS)*</Th>
                                    <Th className="text-center">SC (OS)*</Th>
                                    <Th className="text-center">ST (OS)*</Th>
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-indigo-800">
                            <strong>Note on Dual Degrees:</strong> The <em>Math & Computing (Integrated)</em> branch is proving highly competitive, closing at OS Gen Rank 11,555, beating traditional CSE. <br />
                            <span className="text-xs opacity-80">*Some categorical ranks are approximated.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Consistently Resilient Outcomes</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package (2025)', value: '₹41.37 LPA' },
                            { label: 'Overall Average (2025)', value: '₹9.90 LPA' },
                            { label: 'Overall Placement Rate', value: '95%' },
                            { label: 'Total Job Offers (2025)', value: '524' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Top recruiters like Amazon, Microsoft, Oracle, PwC, and Reliance Jio regularly hire from here, with major software firms taking bulk groups.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch (2025)</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-indigo-700 font-bold">{r.placementRate}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.averageCTC}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.highestCTC}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Estimate B.Tech Investments (4 Years Total)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Category / Component</Th>
                                    <Th className="text-center">Total 4-Year B.Tech Fee Estimated</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.annual}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Academic Array</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-indigo-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Renown & Legacy</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
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
                    <SectionTitle icon={GraduationCap}>Admission Process</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-indigo-700 to-violet-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Is NIT Patna in Your Destiny?
                    </h2>
                    <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                        Weigh your JEE Main marks against past tendencies to estimate your chances at one of India's historically richest institutes.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-indigo-800 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <span>Try College Predictor</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITPatna;
