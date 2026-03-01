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
    { param: 'College Name', detail: 'National Institute of Technology Arunachal Pradesh (NITAP)' },
    { param: 'Location', detail: 'Jote, Papum Pare, Arunachal Pradesh' },
    { param: 'Established Year', detail: '2010' },
    { param: 'Campus', detail: '301-Acre Permanent Campus (Eco-Friendly)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', os: 30607, hs: 78084, ews_os: 4648, obc_os: 9908, sc_os: 4755, st_os: 1942 },
    { branch: 'Electronics & Comm (ECE)', os: 41523, hs: 115892, ews_os: 5850, obc_os: 12571, sc_os: 6758, st_os: 2737 },
    { branch: 'Electrical Engineering', os: 47047, hs: 170231, ews_os: 7190, obc_os: 14893, sc_os: 8042, st_os: 2900 },
    { branch: 'Mechanical Engineering', os: 50560, hs: 201715, ews_os: 7550, obc_os: 16768, sc_os: 8274, st_os: 3054 },
    { branch: 'Civil Engineering', os: 58464, hs: 174477, ews_os: 8766, obc_os: 19096, sc_os: 8810, st_os: 3040 },
    { branch: 'Biosciences & Bioengg', os: 61897, hs: 182602, ews_os: 8904, obc_os: 19859, sc_os: 10047, st_os: 3782 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', placementRate: '79.68%', averageCTC: '₹7.37 LPA', highestCTC: '₹59.00 LPA' },
    { branch: 'Electrical Engineering (EE)', placementRate: '90.91%', averageCTC: '₹6.24 LPA', highestCTC: '₹15.50 LPA' },
    { branch: 'Mechanical Engineering (ME)', placementRate: '89.79%', averageCTC: '₹6.02 LPA', highestCTC: '₹15.50 LPA' },
    { branch: 'Electronics & Comm (ECE)', placementRate: '80.33%', averageCTC: '₹6.92 LPA', highestCTC: '₹21.00 LPA' },
    { branch: 'Civil Engineering (CE)', placementRate: '73.91%', averageCTC: '₹6.74 LPA', highestCTC: '₹15.50 LPA' },
];

const FEE_DATA = [
    { category: 'B.Tech Tuition Fee', total: '₹5.39 Lakhs (Total 4 Years for Gen/OBC)' },
    { category: 'Semester Tuition (Gen/OBC > 5L)', total: '₹62,500/Sem' },
    { category: 'Hostel Rent & Institute Fees', total: '₹11,000/Sem' },
    { category: 'Income < 1L / SC / ST', total: '₹0 Tuition Fee (100% Waiver)' },
];

const COURSES = [
    { label: 'B.Tech Domains', items: 'CSE, ECE, Electrical, Mechanical, Civil, Biosciences & Bioengineering' },
    { label: 'Postgraduate', items: 'M.Tech, M.Sc (via JAM), PhD' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '101-150 Band (Engineering)', icon: Award },
    { body: 'IIRF 2025', rank: '#67 (Engineering)', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 successfully.',
    'Clear 75% boards criteria (65% for SC/ST/PwD).',
    'Execute choices in JoSAA/CSAB counseling strictly based on AIR.',
    'Arunachal Pradesh residents enjoy ultra-relaxed Home State quotas.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-700 to-pink-600 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-fuchsia-900 bg-fuchsia-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITArunachal = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Arunachal Pradesh",
        "alternateName": "NIT Arunachal Pradesh",
        "url": "http://www.nitap.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Arunachal Pradesh, located in Jote, is an emerging tech powerhouse with stellar 2025 placements including a ₹59 LPA peak offer from Microsoft.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jote, Papum Pare",
            "addressRegion": "Arunachal Pradesh",
            "addressCountry": "IN"
        },
        "foundingDate": "2010"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Arunachal Pradesh CSE?', a: 'For the General category (OS), the JEE Main 2024 closing rank for CSE was 30,607. The HS cutoff closed at 78,084.' },
        { q: 'What is the highest package at NIT Arunachal Pradesh?', a: 'The highest package in the 2025 placement cycle hit a staggering ₹59.00 LPA via Microsoft (off-campus), and ₹42 LPA on-campus from GoMotive.' },
        { q: 'Does NIT Arunachal provide good core engineering placements?', a: 'Yes! Electrical Engineering placed 91% of its batch, and Mechanical placed 90%, proving that its core departments are thriving.' },
        { q: 'Is there a permanent campus?', a: 'Yes! After functioning from Yupia for a decade, NIT Arunachal Pradesh has successfully fully transitioned to its eco-friendly 301-acre permanent campus at Jote.' },
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
                title="NIT Arunachal Pradesh Cutoff, Fees, Placements &amp; Ranking 2026"
                description="Check NIT Arunachal Pradesh cutoff, placements, fees, ranking, and admission details. Updated 2026 data. Microsoft Highest Package 59 LPA."
                canonicalPath="/colleges/nit-arunachal-pradesh"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-900 via-fuchsia-700 to-pink-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 2010 · The Vanguard of Frontier Engineering
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Arunachal Pradesh – Rising Tech Powerhouse
                        </h1>
                        <p className="text-xl md:text-2xl text-fuchsia-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            A <strong className="text-white">2026</strong> Review of Cutoffs, Stunning Placements (₹59 LPA Peak), and Jote Campus
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Jote, Arunachal Pradesh' },
                            { icon: Calendar, text: 'Est. 2010' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-fuchsia-500 pl-6">
                    A stellar testament to modern technical education growth, <strong className="text-gray-900">NIT Arunachal Pradesh</strong>. Armed with a ₹59 LPA Microsoft offer, an 89.3% overall placement rate, and a new 301-acre sustainable campus in Jote, it is firmly shedding its "New NIT" label to become a highly demanded technology ecosystem.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (Last Round OS/HS Trends)</SectionTitle>
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-fuchsia-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-fuchsia-800">
                            <strong>Mid-Tier Competitive Benchmark:</strong> The Outside State CSE cutoff solidifying at 30k highlights that NITA is firmly attracting serious national talent. <br />
                            <span className="text-xs opacity-80">*Some categorical ranks are precise closing lines derived from updated JoSAA stats.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>2025 Transformative Outcomes</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Peak Package', value: '₹59.00 LPA' },
                            { label: 'Overall Average', value: '₹7.37 LPA' },
                            { label: 'Total Placed %', value: '89.3% - 95%' },
                            { label: 'EE/ME Placement %', value: '> 90%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-fuchsia-50 to-pink-50 border border-fuchsia-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Top recruiters like <strong>Microsoft, Amazon, and Google</strong> are bridging geographical gaps, validating the intensive backend bootcamps NITA runs. Heavyweights such as JSW, Vedanta, and Reliance are scooping up core engineering graduates with near 90%+ branch placement records.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Department (2025)</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-fuchsia-700 font-bold">{r.placementRate}</td>
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
                    <SectionTitle icon={IndianRupee}>4-Year Cost Analysis</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Expense / Remission Class</Th>
                                    <Th className="text-center">Fee Overview</Th>
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
                        <p>* NITA maintains a highly affordable model. 2/3rd tuition remissions actively apply for students matching the 1L to 5L family income tier.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Undergraduate Scope</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-fuchsia-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Standing</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-fuchsia-50 to-pink-50 border border-fuchsia-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-fuchsia-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-700 to-pink-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-fuchsia-50 to-pink-50 border border-fuchsia-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-fuchsia-800 to-pink-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Start at NIT Arunachal Pradesh?
                    </h2>
                    <p className="text-fuchsia-100 mb-8 max-w-xl mx-auto">
                        Track your JEE percentiles to verify your likelihood of grabbing high-demand tech branches in this emerging ecosystem.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-fuchsia-800 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITArunachal;
