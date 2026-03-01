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
    { param: 'College Name', detail: 'National Institute of Technology Manipur' },
    { param: 'Location', detail: 'Langthabal, Imphal, Manipur' },
    { param: 'Established Year', detail: '2010' },
    { param: 'Campus Area', detail: '341.5 Acres' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engineering', os: 45298, hs: 233574, ews_os: 3940, obc_os: 9699, sc_os: 4138, st_os: 2132 },
    { branch: 'Electronics & Communication Engg.', os: 65416, hs: 583994, ews_os: 5700, obc_os: 11245, sc_os: 5939, st_os: 2353 },
    { branch: 'Electrical Engineering', os: 84304, hs: 522808, ews_os: 6047, obc_os: 12796, sc_os: 7256, st_os: 2683 },
    { branch: 'Mechanical Engineering', os: 93650, hs: 1212150, ews_os: 7008, obc_os: 14492, sc_os: 7268, st_os: 2518 },
    { branch: 'Civil Engineering', os: 110888, hs: 137293, ews_os: 7433, obc_os: 15960, sc_os: 7906, st_os: 2526 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', averageCTC: '₹9.70 LPA (2023)', highestCTC: '₹47.00 LPA (Amazon)' },
    { branch: 'Electronics & Comm (ECE)', averageCTC: '₹7.50 LPA (Median)', highestCTC: '₹27.00 LPA' },
    { branch: 'Overall Average (2025)', averageCTC: '₹7.30 LPA', highestCTC: '₹14.50 LPA (Ongoing)' },
];

const FEE_DATA = [
    { category: 'General/OBC/EWS (Income > 5L)', sem1: '₹1,58,000 (Includes Hostel)' },
    { category: 'Tuition Fee (Per Sem)', sem1: '₹62,500' },
    { category: 'SC/ST/PwD/Income < 1L', sem1: '100% Tuition Waiver' },
    { category: 'Estimated Total 4-Year B.Tech', sem1: '₹5.79 Lakhs' },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'CSE, ECE, Electrical, Mechanical, Civil' },
    { label: 'Postgraduate Programs', items: 'M.Tech, M.Sc, PhD' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '151-200 Band (Engineering)', icon: Award },
    { body: 'IIRF 2025', rank: '#91 (Engineering)', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a valid JEE Main 2026 score.',
    'Satisfy the 75% aggregate in 12th standard (65% for SC/ST/PwD).',
    'Participate in JoSAA counseling for the first six rounds.',
    'Massive Home State quota relaxations available through JoSAA and CSAB.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-700 to-emerald-600 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-green-900 bg-green-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITManipur = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Manipur",
        "alternateName": "NIT Manipur",
        "url": "https://www.nitmanipur.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Manipur offers strong technical education through its 341.5-acre campus in Imphal, boasting peak packages of ₹47 LPA and excellent inclusivity.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Imphal",
            "addressRegion": "Manipur",
            "addressCountry": "IN"
        },
        "foundingDate": "2010"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Manipur CSE?', a: 'For the General category (OS), the JEE Main closing rank for CSE was around 45,298. For Home State candidates, it extended generously up to 233,574.' },
        { q: 'What is the highest package at NIT Manipur?', a: 'The highest package recorded is ₹47.00 LPA, offered by Amazon. The average package generally hovers around ₹7.3 to ₹9.7 LPA.' },
        { q: 'Is the Home State quota beneficial?', a: 'Extremely. The cutoff for Mechanical Engineering for Home State General candidates extends beyond 1.2 million, demonstrating incredible accessibility for local residents.' },
        { q: 'What is the B.Tech fee structure?', a: 'The total 4-year cost is estimated around ₹5.79 Lakhs. The first-year fee for a Hosteller (General, income >5L) is roughly ₹1,58,000. SC/ST/PwD and low-income students receive full tuition waivers.' },
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
                title="NIT Manipur Admission, Placements, and 2026 Cutoffs"
                description="Access the latest 2026 NIT Manipur JEE Main cutoffs, closing ranks, placements with a 47 LPA highest package, fee structures, and the JoSAA admission process."
                canonicalPath="/colleges/nit-manipur"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 2010 · Gateway to the Northeast
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Manipur – Bridge to Technical Modernity
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive Dimensions of <strong className="text-white">2026</strong> Admissions, Local Quotas & Tech Placement Trends
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Imphal, Manipur' },
                            { icon: Calendar, text: 'Est. 2010' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF 151-200 Band' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-emerald-500 pl-6">
                    Functioning from an expansive 341.5-acre campus in Langthabal, <strong className="text-gray-900">NIT Manipur</strong> represents a maturing tier of institutes. Serving as an economic and technical catalyst through India's "Act East" policy, it blends immense regional accessibility with peak global placements reaching up to ₹47 LPA.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-emerald-800">
                            <strong>Local Advantage:</strong> The cutoff for Mechanical Engineering for Home State General candidates extends beyond 1.2 million, demonstrating incredible accessibility for local residents compared to the ~93k OS mark. <br />
                            <span className="text-xs opacity-80">*Categorical limits represent R1 boundaries.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Tech Placements Highlights</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹47.00 LPA' },
                            { label: 'Avg Package (2025)', value: '₹7.30 LPA' },
                            { label: 'Avg Package (CSE)', value: '₹9.70 LPA' },
                            { label: 'Placement Rate', value: '81.40%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        In recent cycles, recruiters like <strong>Amazon (₹47 LPA)</strong>, Discovery, Edfora, Deloitte, Infoedge, and Tata Elxsi heavily recruited technical scholars. The presence of L&T ECC and BEL signals a balanced ecosystem.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch Overview</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.averageCTC}</td>
                                        <td className="px-4 py-3 text-center font-medium text-emerald-700">{r.highestCTC}</td>
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
                                    <Th className="text-center">Estimated Bracket (Semester/Annual)</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sem1}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* Excludes minor recurring mess advances not documented. 2/3rd tuition remissions available for families earning 1L-5L/year.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Undergraduate Scope</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-emerald-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-700 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-green-800 to-emerald-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Is NIT Manipur Your Destination?
                    </h2>
                    <p className="text-green-100 mb-8 max-w-xl mx-auto">
                        Evaluate your JEE Main score against historical trends and secure an exceptional tech education.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-green-800 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITManipur;
