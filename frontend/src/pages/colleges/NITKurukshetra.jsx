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
    { param: 'College Name', detail: 'National Institute of Technology Kurukshetra (NITK)' },
    { param: 'Location', detail: 'Kurukshetra, Haryana' },
    { param: 'Established Year', detail: '1963' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engg (CSE)', os: 7595, hs: 9353, ews_os: 8401, obc_os: 2059, sc_os: 41902, st_os: 64824 },
    { branch: 'AI & Data Science', os: 9831, hs: 11951, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Information Technology (IT)', os: 10099, hs: 11454, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'AI & Machine Learning', os: 11660, hs: 10215, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Math & Computing', os: 12368, hs: 13410, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Microelectronics & VLSI', os: 17093, hs: '-', ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Electrical Engineering', os: 20347, hs: 21795, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Mechanical Engineering', os: 27315, hs: 28538, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Civil Engineering', os: 40966, hs: 41698, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Production & Industrial', os: 46619, hs: 43737, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Information Technology', highestCTC: '₹63.12 LPA', averageCTC: '₹18.19 LPA', medianCTC: '₹12.00 LPA' },
    { branch: 'Computer Engineering', highestCTC: '₹63.12 LPA', averageCTC: '₹16.38 LPA', medianCTC: '₹12.00 LPA' },
    { branch: 'Electronics & Comm.', highestCTC: '₹52.00 LPA', averageCTC: '₹14.27 LPA', medianCTC: '₹12.00 LPA' },
    { branch: 'Electrical Engg.', highestCTC: '₹29.64 LPA', averageCTC: '₹10.92 LPA', medianCTC: '₹10.00 LPA' },
    { branch: 'Mechanical Engg.', highestCTC: '₹52.00 LPA', averageCTC: '₹10.03 LPA', medianCTC: '₹8.50 LPA' },
    { branch: 'Production & Industrial', highestCTC: '₹16.50 LPA', averageCTC: '₹9.03 LPA', medianCTC: '₹8.40 LPA' },
    { branch: 'Civil Engineering', highestCTC: '₹11.50 LPA', averageCTC: '₹7.63 LPA', medianCTC: '₹7.19 LPA' },
];

const FEE_DATA = [
    { category: 'Hosteller (Triple Seater)', sem1: '₹1,11,500', sem2: '₹83,900', total4Year: '₹7,11,100 (approx)' },
    { category: 'Hosteller (Single Seater)', sem1: '₹1,17,800', sem2: '₹90,200', total4Year: '₹7,61,500 (approx)' },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'CSE, AI & Data Science, Math & Computing, IT, ECE, VLSI, EE, ME, Civil, PIE' },
    { label: 'Dual Degree & Architecture', items: '5-Year B.Arch, 5-Year Integrated B.Tech + M.Tech' },
    { label: 'Postgraduate', items: 'M.Tech, MBA, MCA, M.Sc, Ph.D.' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#85 (Engineering)', icon: Award },
    { body: 'NIRF 2024', rank: '#81 (Engineering)', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a high rank in JEE Main 2026.',
    'Meet the 75% aggregate requirement in Class 12 (65% for SC/ST/PwD).',
    'Register for JoSAA and CSAB counseling.',
    'Select NIT Kurukshetra keeping in mind Home State and Other State quotas.',
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
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITKurukshetra = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Kurukshetra",
        "alternateName": "NIT Kurukshetra",
        "url": "https://nitkkr.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Kurukshetra is a premier technical university in Haryana, known for its strong placements in computational and industrial innovation.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kurukshetra",
            "addressRegion": "Haryana",
            "addressCountry": "IN"
        },
        "foundingDate": "1963"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Kurukshetra CSE?', a: 'For the General category under the Other State quota, the JEE Main 2024 closing rank for CSE was 7,595. The Home State cutoff was 9,353.' },
        { q: 'What are the new branches offered at NIT Kurukshetra?', a: 'The institute has introduced contemporary fields such as Artificial Intelligence and Data Science, Artificial Intelligence and Machine Learning, and Mathematics and Computing Engineering.' },
        { q: 'What is the highest package at NIT Kurukshetra in 2025?', a: 'The highest CTC offered in the 2025 placement cycle was ₹63.12 LPA, primarily to IT and Computer Engineering students.' },
        { q: 'What is the total fee for a 4-year B.Tech at NIT Kurukshetra?', a: 'The total 4-Year B.Tech Fee is approximately ₹7,11,100 for a triple-seater hosteller. This does not account for tuition fee waivers which are applicable based on family income.' },
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
                title="NIT Kurukshetra Admission 2026: Placements, Cutoff & Rankings"
                description="Comprehensive insights into NIT Kurukshetra admission, JEE Main cutoffs, branches like AI & ML, highest packages, and detailed fee structures."
                canonicalPath="/colleges/nit-kurukshetra"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-600 to-purple-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 1963 · NCR Industrial Proximity
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Kurukshetra – Haryana's Hub for Computational Innovation
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Detailed Admission Analytics & Outcomes for <strong className="text-white">2026</strong> Aspirants
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Kurukshetra, Haryana' },
                            { icon: Calendar, text: 'Est. 1963' },
                            { icon: Building2, text: 'NIT (Tier 2)' },
                            { icon: Award, text: 'NIRF #85' },
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
                    Established in 1963, <strong className="text-gray-900">NIT Kurukshetra</strong> has transitioned into a premier technical university with a modern focus on AI, Data Science, and robotics. Its proximity to the National Capital Region (NCR) provides unparalleled industry integration, driving consistently strong placement outcomes and robust student demand.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-indigo-800">
                            <strong>Shift in Interest:</strong> Contemporary branches like <em>AI & Data Science</em> (OS: 9,831) and <em>Information Technology</em> (OS: 10,099) are highly favored, nearly matching the appeal of core CSE. <br />
                            <span className="text-xs opacity-80">*Some reserved category data omitted for brevity.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Highlights (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹63.12 LPA' },
                            { label: 'Overall Average', value: '₹14.84 LPA' },
                            { label: 'Overall Median', value: '₹11.00 LPA' },
                            { label: 'Placement Rate', value: '83.31%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Top recruiters include Microsoft, Amazon, Flipkart, Google, Goldman Sachs, Synopsys, and Adani. IT and Computer Engineering lead the charts with the highest averages.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th><Th className="text-center">Median CTC</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.averageCTC}</td>
                                        <td className="px-4 py-3 text-center font-medium text-indigo-700">{r.highestCTC}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.medianCTC}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Cost & Fees (B.Tech 2026 Batch Estimate)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Accommodation Type</Th>
                                    <Th className="text-center">1st Semester Fee</Th>
                                    <Th className="text-center">2nd Semester Fee</Th>
                                    <Th className="text-center">Total 4-Year B.Tech (Approx)</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sem1}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sem2}</td>
                                        <td className="px-4 py-3 text-center font-medium text-indigo-700">{r.total4Year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* 100% tuition fee waiver for SC/ST and students with family income {"<"} ₹1 Lakh. 2/3rd waiver for income between ₹1-5 Lakhs.</p>
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
                    <SectionTitle icon={Award}>Rankings</SectionTitle>
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
                    <SectionTitle icon={GraduationCap}>Admission Process 2026</SectionTitle>
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
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at NIT Kurukshetra
                    </h2>
                    <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                        See how your JEE rank fares against NIT Kurukshetra's latest cutoffs for AI, IT, and CSE variants.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITKurukshetra;
