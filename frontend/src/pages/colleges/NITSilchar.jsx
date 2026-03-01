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
    { param: 'College Name', detail: 'National Institute of Technology Silchar (NITS)' },
    { param: 'Location', detail: 'Silchar, Assam (Barak Valley)' },
    { param: 'Established Year', detail: '1967' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', os: 14914, hs: 31070, ews_os: 1910, obc_os: 3848, sc_os: 2425, st_os: 806 },
    { branch: 'Electronics & Comm. (ECE)', os: 21169, hs: 48092, ews_os: 2820, obc_os: 6082, sc_os: 4139, st_os: 1404 },
    { branch: 'Electronics & Inst. (EIE)', os: 27037, hs: 55967, ews_os: 3523, obc_os: 7994, sc_os: 4635, st_os: 2118 },
    { branch: 'Electrical Engg. (EE)', os: 28628, hs: 76785, ews_os: 3994, obc_os: 8343, sc_os: 5339, st_os: 1991 },
    { branch: 'Mechanical Engg. (ME)', os: 39472, hs: 80730, ews_os: 5789, obc_os: 11217, sc_os: 6013, st_os: 2297 },
    { branch: 'Civil Engineering', os: 57141, hs: 84759, ews_os: 7661, obc_os: 15129, sc_os: 7283, st_os: 2038 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Electronics & Instrumentation (EIE)', placementRate: '90.10%' },
    { branch: 'Mechanical Engineering', placementRate: '89.92%' },
    { branch: 'Computer Science (CSE)', placementRate: '84.76%' },
    { branch: 'Electronics & Comm. (ECE)', placementRate: '83.75%' },
    { branch: 'Electrical Engineering', placementRate: '83.23%' },
    { branch: 'Civil Engineering', placementRate: '64.00%' },
];

const FEE_DATA = [
    { category: 'General (Family Income >5L)', sem1: '₹81,000', hostelYearly: '₹25,500' },
    { category: 'General (Income ₹1L - ₹5L)', sem1: '1/3rd Tuition Fee + Other charges', hostelYearly: '₹25,500' },
    { category: 'SC / ST / PwD', sem1: '100% Tuition Waiver', hostelYearly: '₹25,500', highlight: true },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'CSE, ECE, EE, Mechanical, Civil, Electronics & Instrumentation (EIE)' },
    { label: 'Postgraduate', items: 'M.Tech (VLSI, Software Engg, Structural), MBA, M.Sc (Chem, Phy, Math)' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#50 (Engineering)', icon: Award },
    { body: 'NIRF 2024 / 2023', rank: '#40 (Engineering)', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a valid JEE Main 2026 score.',
    'Clear passing criteria (75% for Gen/OBC, 65% for SC/ST/PwD) in Class 12th or be in Top 20 percentile.',
    'Enroll through JoSAA/CSAB counseling based on AIR.',
    'Utilize Home State quota if residing in Assam for significantly relaxed closing ranks.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600 to-green-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITSilchar = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Silchar",
        "alternateName": "NIT Silchar",
        "url": "http://www.nits.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Silchar is a premier technical institute in the North-East, known for its strong research output, EIE placements, and regional development.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Silchar",
            "addressRegion": "Assam",
            "addressCountry": "IN"
        },
        "foundingDate": "1967"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Silchar CSE?', a: 'For the General category (Other State), the JEE Main 2024 closing rank for CSE was 14,914. Home State (Assam) candidates benefit from a relaxed cutoff of 31,070.' },
        { q: 'What is the highest package at NIT Silchar in 2025?', a: 'The highest package in the 2025 placement cycle reached ₹60.00 LPA.' },
        { q: 'Is the EIE branch good at NIT Silchar?', a: 'Yes, the Electronics & Instrumentation Engineering (EIE) branch exceptionally reported a 90.10% placement rate in 2025, often rivaling or exceeding Computer Science.' },
        { q: 'What is the tuition fee at NIT Silchar?', a: 'For a General category student with family income > 5 Lakhs, Semester 1 fees are around ₹81,000. 100% tuition waivers are available for SC/ST/PwD students.' },
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
                title="NIT Silchar Cutoffs, Placements, Fees & Rankings 2026"
                description="Explore NIT Silchar admission data: JEE Main HS/OS cutoffs, 60 LPA highest package, #50 NIRF engineering rank, and detailed campus fees."
                canonicalPath="/colleges/nit-silchar"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-600 to-green-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 1967 · Premier Hub of the North-East
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Silchar – A Catalyst for Engineering Excellence
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive Admissions & Placement Guide for <strong className="text-white">2026</strong> Aspirants
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Silchar, Assam' },
                            { icon: Calendar, text: 'Est. 1967' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #50' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-green-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-teal-500 pl-6">
                    Located in the lush Barak Valley of Assam, <strong className="text-gray-900">NIT Silchar</strong> ranks <strong className="text-gray-900">#50 in NIRF 2025</strong>. It stands as one of the premier technical institutes in India's North-East, distinguished for its massive research output, top-tier Automation & Sensor Technology focus, and highly relaxed regional cutoffs.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (JEE Main 2024)</SectionTitle>
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-teal-800">
                            <strong>Regional Advantage:</strong> The Home State quota offers massive rank relaxations for Assam residents (e.g., Mechanical Engineering HS closing rank is ~80,730 vs OS ~39,472). <br />
                            <span className="text-xs opacity-80">*Reserved category ranks indicate specific category closing ranks.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Highlights & Outcomes</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package (2025)', value: '₹60.00 LPA' },
                            { label: 'Average Package (2025)', value: '₹12.25 LPA' },
                            { label: 'Overall Placement Rate (2025)', value: '78.35%' },
                            { label: 'Historical Highest (2023)', value: '₹80.00 LPA' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-teal-50 to-green-50 border border-teal-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        In the 2025 cycle, Amazon offered the highest CTC of <strong>₹44 LPA</strong> to multiple students. Other major recruiters include Microsoft (₹41.86 LPA), Adobe (₹40.93 LPA), Arcesium India (₹36 LPA), Swiggy, and Cisco.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Placement Percentage (2025)</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center font-medium text-teal-700">{r.placementRate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Cost & Financial Info (Approx Estimate)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Category / Income</Th>
                                    <Th className="text-center">B.Tech 1st Semester Fee</Th>
                                    <Th className="text-center">Annual Hostel Rent (Approx)</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-teal-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sem1}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.hostelYearly}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* The total fee for the B.Tech program (General &gt;5L) is roughly ₹5.44 Lakhs. NIT Silchar provides hostel facilities to the majority of its students.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Academic Programs</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-teal-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-teal-50 to-green-50 border border-teal-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-green-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-teal-600 to-green-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Will You Get Into NIT Silchar?
                    </h2>
                    <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                        Use our AI predictor to check your chances at NIT Silchar and explore other top engineering colleges in India.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-teal-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITSilchar;
