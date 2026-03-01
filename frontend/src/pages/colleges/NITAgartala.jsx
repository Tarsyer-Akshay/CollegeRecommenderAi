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
    { param: 'College Name', detail: 'National Institute of Technology Agartala (NITA)' },
    { param: 'Location', detail: 'Jirania, Agartala, Tripura' },
    { param: 'Established Year', detail: '1965 (as TEC), 2006 (as NIT)' },
    { param: 'Campus Area', detail: '366 Acres' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engg', os: 22013, hs: 75417, ews_os: 3237, obc_os: 7008, sc_os: 3563, st_os: 1826 },
    { branch: 'Electronics & Comm Engg', os: 28758, hs: 105936, ews_os: 4152, obc_os: 8984, sc_os: 4245, st_os: 1972 },
    { branch: 'Dual (Computational Maths)', os: 32640, hs: 167791, ews_os: 4553, obc_os: 10210, sc_os: 5145, st_os: 2115 },
    { branch: 'Electrical Engineering', os: 35580, hs: 127385, ews_os: 5580, obc_os: 11260, sc_os: 5601, st_os: 2875 },
    { branch: 'Electronics & Instrumentation', os: 36589, hs: 147524, ews_os: 5689, obc_os: 11571, sc_os: 5557, st_os: 2858 },
    { branch: 'Mechanical Engineering', os: 45924, hs: 204344, ews_os: 6880, obc_os: 13825, sc_os: 6845, st_os: 3558 },
    { branch: 'Chemical Engineering', os: 50902, hs: 256835, ews_os: 7506, obc_os: 15155, sc_os: 7190, st_os: 2496 },
    { branch: 'Civil Engineering', os: 54950, hs: 237394, ews_os: 7082, obc_os: 16480, sc_os: 8117, st_os: 3428 },
    { branch: 'Production Engineering', os: 56880, hs: 308003, ews_os: 8655, obc_os: 17238, sc_os: 8596, st_os: 3137 },
    { branch: 'Biotechnology & Biochem', os: 59122, hs: 320421, ews_os: '-', obc_os: 19157, sc_os: '-', st_os: '-' },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', placementRate: 'High', averageCTC: '₹14.71 LPA', highestCTC: '₹52.00 LPA' },
    { branch: 'Electronics & Comm (ECE)', placementRate: 'High', averageCTC: '₹13.83 LPA', highestCTC: '₹41.00 LPA' },
    { branch: 'Overall (B.Tech)', placementRate: '80%', averageCTC: '₹9.83 LPA', highestCTC: '₹52.00 LPA' },
];

const FEE_DATA = [
    { category: 'B.Tech Tuition Fee (Approx)', total: '₹5.00 Lakhs (4 Years)' },
    { category: 'BS+MS Dual Degree (Approx)', total: '₹1.29 Lakhs (5 Years)' },
    { category: 'Hostel & Mess (Per Sem)', total: '₹31,200/Semester' },
    { category: 'Income < 1 Lakh / SC / ST', total: '100% Tuition Waiver' },
];

const COURSES = [
    { label: 'B.Tech & Dual Degrees', items: 'CSE, ECE, EE, EIE, Mech, Civil, Chemical, Production, Biotech, BS+MS Physics/Maths' },
    { label: 'Postgraduate Programs', items: 'M.Tech, MCA, MBA, PhD' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '101-150 Band (Engineering)', icon: Award },
    { body: 'QS World / Asia Rankings', rank: '739-740 (World) / 251-300 (Asia)', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a valid rank in JEE Main 2026.',
    'Satisfy the 75% boards criteria (65% for SC/ST/PwD).',
    'Participate in JoSAA/CSAB counseling rounds.',
    'Take advantage of the immense Home State quota leniency for Tripura residents.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-indigo-800 bg-indigo-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITAgartala = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Agartala",
        "alternateName": "NIT Agartala",
        "url": "https://www.nita.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Agartala is a massive 366-acre technical hub in the North-East, famous for unique dual-degree programs, high CSE placements averaging ₹14.71 LPA, and strategic industry ties.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Agartala",
            "addressRegion": "Tripura",
            "addressCountry": "IN"
        },
        "foundingDate": "1965"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Agartala CSE?', a: 'For the General category (OS), the JEE Main closing rank for CSE was 22,013. The Home State cutoff significantly extended to 75,417.' },
        { q: 'What is the highest package at NIT Agartala?', a: 'The highest package in the 2025 placement cycle was ₹52.00 LPA. Previously, top tech firms like Nvidia offered ₹41 LPA.' },
        { q: 'Are there dual-degree programs?', a: 'Yes! NITA is famous for its 5-year BS+MS programs in Physics, Chemistry, and Mathematics & Computing, offering an alternative track for high-level core research and analytics.' },
        { q: 'Is the Home State quota at NIT Agartala beneficial?', a: 'Extremely beneficial. General candidates from Tripura can gain admission into core branches like Production Engineering with ranks up to 3 Lakhs.' },
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
                title="NIT Agartala Cutoff, Fees, Placements &amp; Ranking 2026"
                description="Check NIT Agartala cutoff, placements, fees, ranking, and admission details. Updated 2026 data. CSE Average Package 14.7 LPA."
                canonicalPath="/colleges/nit-agartala"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-600 to-purple-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 1965 · The Regional Giant of the North-East
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Agartala – Excellence in Scale and Innovation
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Complete Breakdown of Dual Degrees, <strong className="text-white">2026</strong> Placements, Cutoffs & Subsidized Fees
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Agartala, Tripura' },
                            { icon: Calendar, text: 'Est. 1965' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF 101-150 Band' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-purple-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-indigo-500 pl-6">
                    Spanning a massive 366-acre campus, <strong className="text-gray-900">NIT Agartala</strong> distinguishes itself through its multidisciplinary offerings. Unlike traditional NITs, NITA provides specialized <strong>5-year dual degree (BS+MS)</strong> programs in pure sciences and integrated math, making it a hotspot for technical innovation combined with excellent corporate placements (averaging ~14.7 LPA for CSE).
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Closing Ranks (2025 Approximations)</SectionTitle>
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
                            <strong>Dual-Degree Access:</strong> The Integrated Computational Maths and Physics programs act as strategic backdoors for high-level analytics careers, closing around 32,640 OS compared to traditional CSE closing at 22k. <br />
                            <span className="text-xs opacity-80">*Some categorical ranks are derived from specific R6 allocations in 2025.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>2025 Core & Software Placements</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹52.00 LPA' },
                            { label: 'Overall Average', value: '₹9.83 LPA' },
                            { label: 'CSE Average', value: '₹14.71 LPA' },
                            { label: 'Companies Visited', value: '250+' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        NITA boasts intense corporate diversity. Hardware firms like <strong>Nvidia</strong> (offering up to ₹41 LPA prior) alongside Google, Oracle, Morgan Stanley, and PayPal routinely harvest talent from here. Heavyweights like GAIL and Powergrid hire extensively from core domains.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch Focus</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th></tr>
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
                    <SectionTitle icon={IndianRupee}>Financial Breakdown and Waivers</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Fee Component / Criteria</Th>
                                    <Th className="text-center">Estimated Expenditure</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* 100% Tuition fee waivers available for economically weaker sections (Family income under 1 Lakh) and SC/ST categories.</p>
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
                    <SectionTitle icon={Award}>Global & National Stature</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-5">
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
                    <SectionTitle icon={GraduationCap}>Entry Guidelines</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-indigo-800 to-purple-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Your Future at NIT Agartala?
                    </h2>
                    <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                        Evaluate your JEE performance to see if NITA's specialized dual-degree tech programs are within your grasp.
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

export default NITAgartala;
