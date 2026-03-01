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
    { param: 'College Name', detail: 'National Institute of Technology Calicut (NITC)' },
    { param: 'Location', detail: 'Kozhikode, Kerala' },
    { param: 'Established Year', detail: '1961' },
    { param: 'Campus Size', detail: '~291 Acres' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Architecture (B.Arch)', os: 564, hs: 241, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Computer Science & Engineering', os: 5964, hs: 8657, ews_os: 6800, obc_os: 8500, sc_os: 13000, st_os: 4000 },
    { branch: 'Electronics & Communication', os: 10820, hs: 13724, ews_os: 10500, obc_os: 12000, sc_os: 20000, st_os: 7500 },
    { branch: 'Electrical & Electronics', os: 15439, hs: 17883, ews_os: 13500, obc_os: 15000, sc_os: 25000, st_os: 10000 },
    { branch: 'Engineering Physics', os: 22964, hs: 22000, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Mechanical Engineering', os: 23766, hs: 23328, ews_os: 21000, obc_os: 24000, sc_os: 35000, st_os: 15000 },
    { branch: 'Chemical Engineering', os: 29654, hs: 30000, ews_os: 27000, obc_os: 30000, sc_os: 40000, st_os: 18000 },
    { branch: 'Energy Engineering', os: 30848, hs: 29000, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Civil Engineering', os: 37917, hs: 41000, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Bio-Technology', os: 41289, hs: 41000, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹19.37 LPA', placementRate: '96.8%', topRecruiters: 'Microsoft, Amazon, Oracle, Google' },
    { branch: 'Electronics (ECE)', avgPackage: '₹13.71 LPA', placementRate: '88.6%', topRecruiters: 'Cisco, Nvidia, SAP' },
    { branch: 'Electrical (EEE)', avgPackage: '~₹13.00 LPA', placementRate: '~85.0%', topRecruiters: 'Deloitte, Accenture, Goldman Sachs' },
];

const FEE_DATA = [
    { category: 'General/OBC (Full Tuition)', tuition: '₹1,25,000 p.a.', other: 'Hostel: ₹12k-18k (+ Mess)', total: '₹5,00,000 (4 Years Est.)' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0 (100% Waiver)', other: 'Hostel: ₹12k-18k (+ Mess)', total: 'Applicable Est.', highlight: true },
    { category: 'Family Income ₹1L - ₹5L', tuition: '₹41,667 p.a. (2/3 Waiver)', other: 'Hostel: ₹12k-18k (+ Mess)', total: 'Applicable Est.' },
];

const COURSES = [
    { label: 'B.Tech / B.Arch', items: 'Architecture, CSE, ECE, EEE, Mechanical, Chemical, Engg Physics, Energy Engg, Civil, Bio-Tech' },
    { label: 'PG & Doctoral', items: 'M.Tech, M.Plan, M.Sc, MBA, and Ph.D. across various streams' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#21 (Engineering) | #2 (Architecture)', icon: Award },
    { body: 'Overall Standings', rank: '#54 Overall in India', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a valid JEE Main 2026 score.',
    'Clear 75% aggregate marks condition in Class 12 (65% for SC/ST/PwD) OR top 20 percentile.',
    'Participate in JoSAA/CSAB counseling based on AIR.',
    'Consider Home State (Kerala) quota advantage specifically for high-demand branches.',
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

const NITCalicut = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Calicut",
        "alternateName": "NIT Calicut",
        "url": "https://www.nitc.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Calicut is a premier technical university in Southern India, known for its strong placements and NIRF #2 Architecture ranking.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kozhikode",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
        "foundingDate": "1961"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Calicut CSE?', a: 'For the General category (Other State), the JEE Main closing rank for CSE was around 5,964. The Home State cutoff was around 8,657.' },
        { q: 'What is the highest package at NIT Calicut?', a: 'The highest package in the 2025 placement season reached ₹56.59 LPA.' },
        { q: 'What is the NIRF ranking of NIT Calicut?', a: 'In NIRF 2025, NIT Calicut ranked #21 in Engineering and an impressive #2 in Architecture and Planning.' },
        { q: 'Is there a tuition fee waiver at NIT Calicut?', a: 'Yes, 100% tuition fee waiver is available for SC/ST/PwD students and General/OBC students with an annual family income less than ₹1 Lakh.' },
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
                title="NIT Calicut Admission 2025: JEE Main Cutoffs, Placements, Fees & Rankings"
                description="Access updated NIT Calicut 2025 data including JEE Main branch-wise cutoffs for all categories, 56.59 LPA highest package, NIRF 21 engineering rank, and detailed fee structure."
                canonicalPath="/colleges/national-institute-of-technology-calicut-2025-report"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-teal-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ NIRF #2 Architecture · Established 1961
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Calicut – Cutoff, Fees, Placements &amp; Ranking 2026
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            A high-density evaluation for <strong className="text-white">2026</strong> Engineering & Architecture Aspirants
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Kozhikode, Kerala' },
                            { icon: Calendar, text: 'Est. 1961' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #21' },
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
                    Located in the foothills of the Western Ghats, <strong className="text-gray-900">NIT Calicut (NITC)</strong> consistently maintains its stature as a premier technical university in Southern India. Known for its 291-acre green campus and architectural excellence, the institute ranks <strong className="text-gray-900">#21 in NIRF Engineering and #2 in Architecture</strong>.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-green-800">
                            <strong>Insight:</strong> The Home State quota offers a significant advantage for Kerala students, e.g., CSE closing rank of 8,657 (HS) compared to 5,964 (OS). <br />
                            <span className="text-xs opacity-80">*Reserved category ranks indicate approximate Round 1 category specific ranks.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹56.59 LPA' },
                            { label: 'Average Package', value: '₹12.17 LPA' },
                            { label: 'Median Package', value: '₹10.00 LPA' },
                            { label: 'Placement Rate', value: '72.98%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        While the overall placement percentage reflects industry high-intent hiring, CSE shines with a <strong>96.8%</strong> placement rate and an average of ₹19.37 LPA.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Notable Recruiters</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.avgPackage}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.placementRate}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.topRecruiters}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure & Waivers (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Income / Category</Th>
                                    <Th className="text-center">Tuition Fee</Th>
                                    <Th className="text-center">Other Fees</Th>
                                    <Th className="text-center">4-Year Total Estimate</Th>
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
                        <p>* Detailed hostel fees (excluding mess) range between ₹12,000 and ₹18,000 per year. Overall hostel fee including mess is around ₹74,060 annually.</p>
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
                    <SectionTitle icon={Award}>Rankings (2025)</SectionTitle>
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
                        Predict Your Admission Chances
                    </h2>
                    <p className="text-green-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Main rank to see if you can make it to NIT Calicut and explore detailed cutoffs.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-green-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <span>Use JEE College Predictor</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITCalicut;
