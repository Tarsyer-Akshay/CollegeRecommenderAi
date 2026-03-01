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
    { param: 'College Name', detail: 'National Institute of Technology Jamshedpur' },
    { param: 'Location', detail: 'Jamshedpur, Jharkhand' },
    { param: 'Established Year', detail: '1960 (as Regional Institute of Technology)' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', os: 10736, hs: 12074, ews_os: 6000, obc_os: 12095, sc_os: 5000, st_os: 3000 },
    { branch: 'Electronics & Comm. (ECE)', os: 15292, hs: 18343, ews_os: 7000, obc_os: 21474, sc_os: 7500, st_os: 4000 },
    { branch: 'Electrical Engineering', os: 22129, hs: '-', ews_os: 8000, obc_os: 25351, sc_os: 8000, st_os: 4500 },
    { branch: 'Engg & Comp. Mechanics', os: 26960, hs: '-', ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Mechanical Engineering', os: 32438, hs: 33156, ews_os: 8500, obc_os: 39205, sc_os: 9000, st_os: 5000 },
    { branch: 'Production & Industrial', os: 52599, hs: 56066, ews_os: 8000, obc_os: 52599, sc_os: 10500, st_os: 6000 },
    { branch: 'Civil Engineering', os: 45599, hs: 49446, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Metallurgical & Materials', os: 52504, hs: '-', ews_os: 9000, obc_os: 52504, sc_os: 8000, st_os: 4500 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Metallurgical & Materials', highestCTC: '₹17.00 LPA', averageCTC: '₹8.40 LPA', placementRate: '100%' },
    { branch: 'Mechanical Engineering', highestCTC: '₹19.00 LPA', averageCTC: '₹8.98 LPA', placementRate: '99.06%' },
    { branch: 'Computer Science (CSE)', highestCTC: '₹144.00 LPA', averageCTC: '₹25.11 LPA', placementRate: '95.69%' },
    { branch: 'Electronics & Comm. (ECE)', highestCTC: '₹144.00 LPA', averageCTC: '₹19.00 LPA', placementRate: '92.39%' },
    { branch: 'Electrical Engineering', highestCTC: '₹144.00 LPA', averageCTC: '₹16.50 LPA', placementRate: '91.58%' },
    { branch: 'Production & Industrial', highestCTC: '₹14.10 LPA', averageCTC: '₹9.45 LPA', placementRate: '90.19%' },
    { branch: 'Civil Engineering', highestCTC: '₹18.00 LPA', averageCTC: '₹7.93 LPA', placementRate: '90.10%' },
];

const FEE_DATA = [
    { category: 'Tuition Fee (General/OBC >5L)', sem1: '₹62,500', annual: '₹1,25,000' },
    { category: 'SC / ST / PwD / Income < 1L', sem1: '₹0 (100% Waiver)', annual: '₹0' },
    { category: 'Hostel & Mess', sem1: '₹33,000', annual: '₹66,000' },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'CSE, ECE, Electrical, Mechanical, Civil, Metallurgy, Production & Industrial, Engg & Computational Mechanics' },
    { label: 'Postgraduate', items: 'M.Tech, MCA' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#82 (Engineering)', icon: Award },
    { body: 'NIRF 2024 / Previous', rank: '101-150 Band', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 with a high percentile.',
    'Meet the Class 12 aggregate requirements (75% for Gen/OBC, 65% for SC/ST).',
    'Participate in JoSAA and CSAB counseling for seat allocation.',
    'If possessing Jharkhand domicile, utilize the Home State (HS) quota for better chances.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-orange-800 bg-orange-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITJamshedpur = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Jamshedpur",
        "alternateName": "NIT Jamshedpur",
        "url": "http://www.nitjsr.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Jamshedpur is a leading technical institute in Eastern India, known for its strategic industrial location, 144 LPA highest package, and phenomenal core engineering placements.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jamshedpur",
            "addressRegion": "Jharkhand",
            "addressCountry": "IN"
        },
        "foundingDate": "1960"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Jamshedpur CSE?', a: 'For the General category (Other State), the JEE Main 2024 closing rank for CSE was 10,736. The Home State cutoff was 12,074.' },
        { q: 'How are the placements at NIT Jamshedpur in 2025?', a: 'Placements were exceptionally strong in 2025. The highest package skyrocketed to ₹144 LPA (up from ₹82 LPA in 2024). Core branches like Metallurgy and Mechanical achieved near 100% placement rates.' },
        { q: 'What is the average package at NIT Jamshedpur?', a: 'The overall average package for 2025 was ₹13.62 LPA, with CSE averaging a highly impressive ₹25.11 LPA.' },
        { q: 'What is the fee structure for NIT Jamshedpur B.Tech?', a: 'The first-year total cost (including hostel and one-time fees) is around ₹2.47 Lakhs. The total 4-year tuition fee for General students is approximately ₹5 Lakhs, though full fee waivers exist for eligible categories.' },
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
                title="NIT Jamshedpur Cutoff, Fees, Placements &amp; Ranking 2026"
                description="Check NIT Jamshedpur cutoff, placements, fees, ranking, and admission details. Updated 2026 data."
                canonicalPath="/colleges/nit-jamshedpur"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-orange-800 via-orange-600 to-amber-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 1960 · The "Hidden Diamond"
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Jamshedpur – Cutoff, Fees, Placements & Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            A Strategic Industrial Hub with Record-Breaking <strong className="text-white">144 LPA</strong> Outcomes
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Jamshedpur, Jharkhand' },
                            { icon: Calendar, text: 'Est. 1960' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #82' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-amber-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-6">
                    Located in the Adityapur Industrial Area, <strong className="text-gray-900">NIT Jamshedpur</strong> benefits from its proximity to Tata Steel and Tata Motors. Leaping 19 positions to <strong className="text-gray-900">#82 in NIRF 2025</strong>, it has proven itself as a "Hidden Diamond," producing tech talent that secured breathtaking ₹144 LPA packages in the latest drive.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (Last Round)</SectionTitle>
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-orange-800">
                            <strong>New Branches:</strong> The introduction of <em>Engineering and Computational Mechanics</em> addresses growing demand for simulation expertise in the aerospace sector. <br />
                            <span className="text-xs opacity-80">*Some categorical ranks are approximate estimations based on official data trends.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>2025 Placement Surge</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹144.00 LPA' },
                            { label: 'Overall Average', value: '₹13.62 LPA' },
                            { label: 'CSE Average', value: '₹25.11 LPA' },
                            { label: 'Overall Placement %', value: '94.57%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        The 2025 placement season witnessed a phenomenal 75% increase in the highest package, jumping from ₹82 LPA to <strong>₹144 LPA</strong>, indicative of its reputation among high-frequency trading firms and global tech giants.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Highest Package</Th><Th className="text-center">Average Package</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.placementRate}</td>
                                        <td className="px-4 py-3 text-center font-medium text-orange-700">{r.highestCTC}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.averageCTC}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Financial Architecture (2025-26 Estimates)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Component</Th>
                                    <Th className="text-center">Per Semester</Th>
                                    <Th className="text-center">Annual Total</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sem1}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.annual}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* 1st semester requires a one-time admission charge of ₹32,000. Total first-year expense equals roughly ₹2,47,000.</p>
                        <p>* The institute provides full fee waivers for SC/ST and economically disadvantaged students (Income {'<'} ₹1L).</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Academic Ecosystem</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-orange-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>NIRF Rankings</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
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
                    <SectionTitle icon={GraduationCap}>Admission Standards</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Will You Get Into NIT Jamshedpur?
                    </h2>
                    <p className="text-orange-100 mb-8 max-w-xl mx-auto">
                        Evaluate your JEE Main score against the latest closing ranks to secure your seat at this 144 LPA placement powerhouse.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-orange-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITJamshedpur;
