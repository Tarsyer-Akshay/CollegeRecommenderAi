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
    { param: 'College Name', detail: 'National Institute of Technology Durgapur (NITD)' },
    { param: 'Location', detail: 'Durgapur, West Bengal' },
    { param: 'Established Year', detail: '1960 (Institute of National Importance since 2007)' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engineering', os: 9836, hs: 11587, ews_os: 1335, obc_os: 3281, sc_os: 1641, st_os: 584 },
    { branch: 'Mathematics & Computing', os: 13340, hs: 15258, ews_os: 1775, obc_os: 4300, sc_os: 2876, st_os: 1016 },
    { branch: 'Electronics & Communication', os: 13888, hs: 16672, ews_os: 1890, obc_os: 4612, sc_os: 2797, st_os: 923 },
    { branch: 'Electrical Engineering', os: 19972, hs: 21358, ews_os: 3001, obc_os: 6533, sc_os: 3448, st_os: 1269 },
    { branch: 'Mechanical Engineering', os: 29158, hs: 33709, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Chemical Engineering', os: 33937, hs: 37802, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Civil Engineering', os: 40941, hs: 45938, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Metallurgical & Materials (MME)', os: 44560, hs: 45449, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Bio-Technology', os: 48052, hs: 52812, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', placementRate: '95%', studentsPlaced: 178 },
    { branch: 'Metallurgy (MME)', placementRate: '93%', studentsPlaced: 82 },
    { branch: 'Electrical (EE)', placementRate: '90%', studentsPlaced: 54 },
    { branch: 'Electronics (ECE)', placementRate: '85%', studentsPlaced: 85 },
    { branch: 'Mechanical (ME)', placementRate: '82%', studentsPlaced: 80 },
    { branch: 'Chemical & Civil', placementRate: '70% - 81%', studentsPlaced: 118 },
];

const FEE_DATA = [
    { category: 'General / OBC (Full Tuition)', firstSem: '₹1,07,300', nextSem: '₹78,800', type: 'B.Tech' },
    { category: 'SC/ST/PwD / Income < ₹1L', firstSem: 'Tuition Waived', nextSem: 'Tuition Waived', type: 'B.Tech', highlight: true },
    { category: 'M.Tech (PG)', firstSem: '₹68,500', nextSem: '₹45,000', type: 'PG Programs' },
];

const COURSES = [
    { label: 'B.Tech & Dual Degree', items: 'CSE, ME, EE, ECE, Civil, Chemical, MME, Bio-Tech, Math & Computing. Dual degrees in Bio-Tech & Chem.' },
    { label: 'Integrated Master\'s', items: 'Integrated M.Sc in Chemistry' },
    { label: 'Postgraduate', items: 'M.Tech (22+ streams), MBA, MCA, Ph.D.' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#49 (Engineering)', icon: Award },
    { body: 'Other Ratings', rank: 'AAAA by Careers360 (2026)', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a competitive rank in JEE Main 2026.',
    'Meet the Class 12 board marks requirement (75% for Gen/OBC, 65% for SC/ST).',
    'Apply via JoSAA and CSAB counseling for B.Tech programs.',
    'For M.Tech/MBA, valid GATE/CAT/NIMCET scores are applicable.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITDurgapur = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Durgapur",
        "alternateName": "NIT Durgapur",
        "url": "https://www.nitdgp.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Durgapur, located in the industrial heartland of West Bengal, offers exceptional placements in both core and software engineering sectors.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Durgapur",
            "addressRegion": "West Bengal",
            "addressCountry": "IN"
        },
        "foundingDate": "1960"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Durgapur CSE?', a: 'For the General category (Other State), the JEE Main 2025 closing rank for CSE was 9,836. The Home State cutoff was 11,587.' },
        { q: 'What is the highest package at NIT Durgapur?', a: 'The highest package in the 2025 placement cycle was ₹80.00 LPA, primarily offered to students in CSE and ECE.' },
        { q: 'Is NIT Durgapur good for core branches?', a: 'Yes, it has exceptional placements in core branches like Metallurgy (93% placed) and Electrical (90% placed), owing to its location in the industrial hub of West Bengal.' },
        { q: 'What are the tuition fees at NIT Durgapur?', a: 'The B.Tech tuition fee is ₹62,500 per semester. However, 100% tuition waivers apply to SC/ST/PwD and income-exempt students.' },
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
                title="NIT Durgapur Admission 2025: Placements, Cutoff, Fees & Rankings"
                description="Access latest NIT Durgapur 2025 data: 80 LPA highest package, branch-wise JEE Main cutoffs, NIRF 49 Engineering rank, and integrated program details."
                canonicalPath="/colleges/national-institute-of-technology-durgapur-2025-admission-guide"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-600 to-blue-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Industrial Heartland Hub · Established 1960
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Comprehensive Institutional Performance Analysis: NIT Durgapur
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Essential insights and data for <strong className="text-white">2026</strong> Engineering Aspirants
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Durgapur, West Bengal' },
                            { icon: Calendar, text: 'Est. 1960' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #49' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-indigo-500 pl-6">
                    Occupying a strategic position in the industrial heartland of West Bengal, <strong className="text-gray-900">NIT Durgapur (NITD)</strong> is noted for its synergy with the steel and manufacturing sectors. Ranked <strong className="text-gray-900">#49 in NIRF 2025</strong>, it offers exceptional placement outcomes in core branches like Metallurgy while maintaining a highly competitive software placement record.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (JEE Main 2025)</SectionTitle>
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
                            <strong>Trend:</strong> The Mathematics and Computing branch has emerged as highly sought-after, rivaling ECE in terms of entrance rank competitiveness. <br />
                            <span className="text-xs opacity-80">*Reserved category ranks indicate specific category closing ranks.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹80.00 LPA' },
                            { label: 'Overall Placement %', value: '82%' },
                            { label: 'B.Tech Avg Package', value: '₹13.00 LPA' },
                            { label: 'Median Package', value: '₹11.24 LPA' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        NIT Durgapur shows <strong>unusual strength in core branches</strong>, with Metallurgy reporting a 93% placement rate, surpassing many circuital branches at other institutions.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Students Placed</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.placementRate}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.studentsPlaced}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Cost & Financial Aid (Per Semester)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Category / Income Group</Th>
                                    <Th className="text-center">1st Sem Fee</Th>
                                    <Th className="text-center">Subsequent Sem Fee</Th>
                                    <Th className="text-center">Program</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-indigo-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.firstSem}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.nextSem}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* Hostel accommodation is estimated between ₹23,000 and ₹30,000 per semester.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Academic Programs</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-3 gap-4">
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
                    <SectionTitle icon={Award}>Rankings (2025-2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-5">
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at NIT Durgapur
                    </h2>
                    <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                        See if your JEE Main rank can get you into NIT Durgapur and explore other top engineering options.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <span>Use College Predictor</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITDurgapur;
