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
    { param: 'College Name', detail: 'National Institute of Technology Rourkela (NITR)' },
    { param: 'Location', detail: 'Rourkela, Odisha' },
    { param: 'Established Year', detail: '1961' },
    { param: 'Campus Size', detail: '647 Acres' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engineering', os: 4245, hs: 7853, ews_os: 438, obc_os: 1214, sc_os: 409, st_os: 230 },
    { branch: 'Artificial Intelligence', os: 5503, hs: 11809, ews_os: 538, obc_os: 1454, sc_os: 880, st_os: 313 },
    { branch: 'Electronics & Communication', os: 6689, hs: 11540, ews_os: 748, obc_os: 2131, sc_os: 1169, st_os: 465 },
    { branch: 'Electronics & Instrumentation', os: 9668, hs: 14050, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Electrical Engineering', os: 13854, hs: 16250, ews_os: 1528, obc_os: 4051, sc_os: 2033, st_os: 912 },
    { branch: 'Mechanical Engineering', os: 19169, hs: 21488, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Chemical Engineering', os: 21669, hs: 23539, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Civil Engineering', os: 28386, hs: 28368, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Mining Engineering', os: 36315, hs: 45000, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Ceramic Engineering', os: 37970, hs: 40921, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', placementRate: '75.41%', avgPackage: '₹17.89 LPA', highestPackage: '₹64.00 LPA' },
    { branch: 'Electronics (ECE)', placementRate: '69.64%', avgPackage: '₹14.65 LPA', highestPackage: '₹1.2 Crore (2025)' },
    { branch: 'Mechanical Engineering', placementRate: '83.65%', avgPackage: '₹10.59 LPA', highestPackage: '₹27.00 LPA' },
    { branch: 'Electrical Engineering', placementRate: '78.38%', avgPackage: '₹10.50 LPA', highestPackage: '₹47.00 LPA' },
    { branch: 'Civil Engineering', placementRate: '55.77%', avgPackage: '₹8.33 LPA', highestPackage: '₹23.50 LPA' },
];

const FEE_DATA = [
    { category: 'Tuition & Recurring Fee', btech: '~₹2,48,000', mtech: '₹1,12,000 - ₹1,61,000' },
    { category: 'Hostel Fee (Per Sem)', btech: '₹15,000 - ₹23,000', mtech: '₹15,000 - ₹23,000' },
    { category: 'Mess Charges (Per Sem)', btech: '₹15,000 - ₹20,000', mtech: '₹15,000 - ₹20,000' },
];

const COURSES = [
    { label: 'B.Tech (15 Branches)', items: 'CSE, AI, ECE, E&I, EE, ME, Civil, Chemical, Ceramic, Mining, etc.' },
    { label: 'Integrated / Dual Degree', items: '5-Year B.Tech + M.Tech, Integrated M.Sc (Physics, Math, Chem, Life Sciences)' },
    { label: 'Postgraduate', items: 'M.Tech (35+ Spl.), MBA, and Ph.D.' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#13 (Engineering) | #7 (Architecture)', icon: Award },
    { body: 'Research & Overall', rank: '#30 (Research) | #34 (Overall)', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 for B.Tech/B.Arch/Integrated M.Sc programs.',
    'Clear passing criteria (75% for Gen/OBC, 65% for SC/ST) in Class 12th.',
    'Register for JoSAA / CSAB counseling based on your All India Rank.',
    'For M.Tech/MBA, valid GATE/CAT scores are required.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITRourkela = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Rourkela",
        "alternateName": "NIT Rourkela",
        "url": "https://www.nitrkl.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Rourkela is a powerhouse of interdisciplinary research and technical innovation in Eastern India, ranked #13 in NIRF Engineering 2025.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rourkela",
            "addressRegion": "Odisha",
            "addressCountry": "IN"
        },
        "foundingDate": "1961"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Rourkela CSE?', a: 'For the General category (Other State), the JEE Main 2025 closing rank for CSE was 4,245. For Home State candidates, it was 7,853.' },
        { q: 'What is the highest package at NIT Rourkela?', a: 'The highest package in the 2025 placement season reached ₹1.2 Crore, offered to an electronics (ECE) student by an international tech firm.' },
        { q: 'What is the NIRF ranking of NIT Rourkela?', a: 'NIT Rourkela secured the #13 rank in the NIRF 2025 Engineering category and #7 in Architecture.' },
        { q: 'What are the unique engineering branches at NIT Rourkela?', a: 'NIT Rourkela offers specialized courses that are rare in other NITs, such as Ceramic Engineering and Industrial Design.' },
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
                title="NIT Rourkela Admission 2025: 1.2 Cr Placements, Cutoff & Rankings"
                description="Updated NIT Rourkela 2025 data: 1.2 Crore highest package (ECE), JEE Main category-wise cutoffs, NIRF 13 Engineering rank, and detailed fee structure."
                canonicalPath="/colleges/national-institute-of-technology-rourkela-2025-admission"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Massive 647 Acre Campus · Established 1961
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Institutional Performance and Strategic Growth Report: NIT Rourkela
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive Insights for <strong className="text-white">2026</strong> Aspirants
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Rourkela, Odisha' },
                            { icon: Calendar, text: 'Est. 1961' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #13' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-purple-500 pl-6">
                    Emerging as a powerhouse in Eastern India, <strong className="text-gray-900">NIT Rourkela (NITR)</strong> boasts one of the most ecologically diverse campuses spanning 647 acres. Climbing to <strong className="text-gray-900">#13 in NIRF Engineering 2025</strong>, it has set new benchmarks with record placements and unparalleled multidisciplinary course offerings.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-purple-50 border border-purple-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-purple-800">
                            <strong>Strategy:</strong> The "Home State Advantage" in Odisha is less pronounced for core branches (like Civil/Chemical) compared to software-aligned branches (e.g., CSE HS 7,853 vs OS 4,245).
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Record-Breaking Placement Outcomes</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package (2025)', value: '₹1.20 Crore' },
                            { label: 'Overall Placement Rate', value: '92.98%' },
                            { label: 'Median Salary', value: '₹15.25 LPA' },
                            { label: 'Growth in Median (3 Yrs)', value: '+52.5%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        In a record-breaking cycle, NIT Rourkela secured a <strong>₹1.2 Crore</strong> package for an ECE student from a global tech firm, showcasing its international appeal.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.placementRate}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.avgPackage}</td>
                                        <td className="px-4 py-3 text-center font-medium text-purple-700">{r.highestPackage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fiscal Analysis & Fees (1st Year Estimate)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Fee Component</Th>
                                    <Th className="text-center">1st Year Fee (B.Tech)</Th>
                                    <Th className="text-center">1st Year Fee (M.Tech)</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.btech}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.mtech}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Academic Breadth & Courses</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-3 gap-4">
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
                    <SectionTitle icon={Award}>Rankings & Recognitions (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 rounded-xl p-5">
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Will You Get Into NIT Rourkela?
                    </h2>
                    <p className="text-purple-100 mb-8 max-w-xl mx-auto">
                        Use our AI predictor to check your chances at NIT Rourkela and explore other top engineering colleges.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITRourkela;
