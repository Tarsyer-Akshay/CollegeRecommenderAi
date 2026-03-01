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
    { param: 'College Name', detail: 'National Institute of Technology Meghalaya' },
    { param: 'Location', detail: 'Shillong / Sohra (Cherrapunji), Meghalaya' },
    { param: 'Established Year', detail: '2010' },
    { param: 'Campus Area', detail: '300 Acres (Permanent Site)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engineering', os: 35937, hs: 59949, ews_os: 3119, obc_os: 6270, sc_os: 2616, st_os: 1297 },
    { branch: 'Electronics & Communication Engg.', os: 44548, hs: 146176, ews_os: 4041, obc_os: 9282, sc_os: 4505, st_os: 1705 },
    { branch: 'Electrical & Electronics Engg.', os: 52822, hs: 146012, ews_os: 5315, obc_os: 11494, sc_os: 5950, st_os: 4013 },
    { branch: 'Mechanical Engineering', os: 60085, hs: 136427, ews_os: 6344, obc_os: 12047, sc_os: 6881, st_os: 2380 },
    { branch: 'Civil Engineering', os: 81562, hs: 318381, ews_os: 6889, obc_os: 14765, sc_os: 6462, st_os: 1960 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', placementRate: 'High', averageCTC: '₹12.79 LPA', highestCTC: '₹51.03 LPA' },
    { branch: 'Electronics & Comm (ECE)', placementRate: 'High', averageCTC: '₹10.50 LPA', highestCTC: '₹52.00 LPA' },
    { branch: 'Mechanical Engineering', placementRate: '80.0%', averageCTC: '₹12.93 LPA', highestCTC: 'N/A' },
];

const FEE_DATA = [
    { category: 'Tuition Fee (Per Sem)', total: '₹62,500' },
    { category: 'Total Admission Payable (Gen/OBC)', total: '₹1,06,450 (Includes Hostel)' },
    { category: 'Hostel Seat Rent & Mess', total: '₹7,500 + ₹25,000 / Sem' },
    { category: 'Income < 1 Lakh / SC / ST', total: 'Tuition completely waived (Pay ~₹61,450)' },
];

const COURSES = [
    { label: 'B.Tech Specializations', items: 'CSE, ECE, EEE, Mechanical, Civil' },
    { label: 'Postgraduate Programs', items: 'M.Tech, M.Sc, PhD' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '83rd (Engineering)', icon: Award },
    { body: 'NIRF 2024', rank: '59th (Engineering)', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a competitive rank in JEE Main 2026.',
    'Clear passing criteria (75% for Gen/OBC, 65% for SC/ST/PwD) in Class 12th.',
    'Enroll through JoSAA/CSAB counseling based on AIR.',
    'Benefit from Home State quotas for candidates from Meghalaya.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-600 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITMeghalaya = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Meghalaya",
        "alternateName": "NIT Meghalaya",
        "url": "https://www.nitm.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Meghalaya boasts top-tier rigorous academics in the scenic northeast, ranking 83rd in NIRF 2025, with phenomenal CSE and ME averages up to ₹12.93 LPA.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Shillong",
            "addressRegion": "Meghalaya",
            "addressCountry": "IN"
        },
        "foundingDate": "2010"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Meghalaya CSE?', a: 'For the General category (OS), the JEE Main closing rank for CSE was around 35,937. Home State cutoff extended to approximately 59,949.' },
        { q: 'What is the highest package at NIT Meghalaya?', a: 'The highest package in the 2025 placement cycle was a staggering ₹52.00 LPA for the ECE branch, followed closely by ₹51.03 LPA for CSE.' },
        { q: 'Does NIT Meghalaya have good Mechanical placements?', a: 'Yes. Mechanical Engineering achieved a remarkable 80% placement rate with an unusually high average package of ₹12.93 LPA.' },
        { q: 'What is the B.Tech fee at NIT Meghalaya?', a: 'The total payable at admission for a General/OBC hosteller (Spring 2026 guidelines) is roughly ₹1,06,450. SC/ST candidates pay around ₹61,450, completely skipping tuition.' },
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
                title="NIT Meghalaya: 2026 Cutoffs, 52 LPA Package, and Admissions"
                description="Explore detailed NIT Meghalaya reports for 2026, including JEE Main category closing ranks. Review placement stats with a ₹52 LPA highest package and revised fees."
                canonicalPath="/colleges/nit-meghalaya"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 2010 · Top-Tier Institute
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Meghalaya – The Crest of Technical Excellence
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Detailed Insight into <strong className="text-white">2026</strong> Placements (₹52 LPA Peak), Tight Cutoffs & Sohra Campus
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Shillong / Sohra' },
                            { icon: Calendar, text: 'Est. 2010' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #83' },
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

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-6">
                    Consistently maintaining an upward trajectory, <strong className="text-gray-900">NIT Meghalaya</strong> is an undisputed regional leader. Transitioning to its sprawling 300-acre campus in the ultra-scenic Sohra (Cherrapunji), it sports fierce stringency in OS admissions (CSE closing ~35k) and elite ₹12.93 LPA averages sweeping even across core branches like Mechanical Engineering.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (Last Round OS/HS Trends - 2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Branch</Th>
                                    <Th className="text-center">Gen (OS R6)</Th>
                                    <Th className="text-center">Gen (HS R6)</Th>
                                    <Th className="text-center">EWS (OS R1)*</Th>
                                    <Th className="text-center">OBC-NCL (OS R1)*</Th>
                                    <Th className="text-center">SC (OS R1)*</Th>
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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-blue-800">
                            <strong>High Stringency:</strong> NIT Meghalaya is much more rigorous to enter compared to neighboring NITs, demanding high Top-35,000 ranks from national aspirants looking at software hubs. <br />
                            <span className="text-xs opacity-80">*Category boundaries denote R1 approximations.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Extraordinary 2025 Placements</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹52.00 LPA' },
                            { label: 'Average (CSE)', value: '₹12.79 LPA' },
                            { label: 'Average (ME)', value: '₹12.93 LPA' },
                            { label: 'Recruiters Visited', value: '~80+' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        In recent cycles, software heavyweights like <strong>Microsoft, Amazon, IBM India, and Infoedge</strong> were highly active. Core Mechanical engineering thrived massively with giants like L&T Construction and Reliance Jio locking in 80% coverage.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch Overview</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-blue-700 font-bold">{r.placementRate}</td>
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
                    <SectionTitle icon={IndianRupee}>Financial Details</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Fee Component / Criteria</Th>
                                    <Th className="text-center">Estimated Total Requirements</Th>
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
                        <p>* Admission totals account for heavy one-time security deposits (₹10,000).</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Undergraduate Scope</SectionTitle>
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
                    <SectionTitle icon={Award}>Global & National Stature</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5">
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
                    <SectionTitle icon={GraduationCap}>Entry Guidelines</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-blue-800 to-indigo-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Could NIT Meghalaya Be Yours?
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Verify if your JEE Main standing lines up with Meghalaya's rigorous technological entry ranks.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-800 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITMeghalaya;
