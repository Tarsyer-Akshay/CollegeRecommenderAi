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
    { param: 'College Name', detail: 'National Institute of Technology Raipur' },
    { param: 'Location', detail: 'Raipur, Chhattisgarh' },
    { param: 'Established Year', detail: '1956 (as GEC), 2005 (as NIT)' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', os: 12916, hs: 21540, ews_os: 2000, obc_os: 4000, sc_os: 2500, st_os: 1200 },
    { branch: 'Information Technology (IT)', os: 15169, hs: 30190, ews_os: 2500, obc_os: 5000, sc_os: 3000, st_os: 1500 },
    { branch: 'Electronics & Comm. (ECE)', os: 10267, hs: 34859, ews_os: 1800, obc_os: 3500, sc_os: 2000, st_os: 1000 },
    { branch: 'Electrical Engineering', os: 22820, hs: 42081, ews_os: 3500, obc_os: 7000, sc_os: 4500, st_os: 2000 },
    { branch: 'Mechanical Engineering', os: 29260, hs: 52957, ews_os: 4500, obc_os: 9000, sc_os: 5500, st_os: 2500 },
    { branch: 'Chemical Engineering', os: 42148, hs: 62746, ews_os: 6500, obc_os: 13000, sc_os: 7500, st_os: 3500 },
    { branch: 'Civil Engineering', os: 47242, hs: 64072, ews_os: 7500, obc_os: 15000, sc_os: 8500, st_os: 4000 },
    { branch: 'Mining Engineering', os: 50575, hs: 91812, ews_os: 8000, obc_os: 16000, sc_os: 9000, st_os: 4500 },
    { branch: 'Bio Technology', os: 42463, hs: 107472, ews_os: 6800, obc_os: 14000, sc_os: 8000, st_os: 3800 },
    { branch: 'Bio Medical Engineering', os: 53572, hs: 107214, ews_os: 8500, obc_os: 17000, sc_os: 9500, st_os: 5000 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Mechanical Engineering', placementRate: '92.55%', offersReceived: 89 },
    { branch: 'Chemical Engineering', placementRate: '84.29%', offersReceived: 63 },
    { branch: 'Metallurgy', placementRate: '82.35%', offersReceived: 72 },
    { branch: 'Electrical Engineering', placementRate: '81.42%', offersReceived: 95 },
    { branch: 'IT and CSE', placementRate: '81% / 77%', offersReceived: '95 / 91' },
    { branch: 'Mining Engineering', placementRate: '54.76%', offersReceived: 46 },
];

const FEE_DATA = [
    { category: 'Tuition Fee (Per Semester)', amount: '₹62,500' },
    { category: 'One-Time Admission Fee', amount: '₹22,000 (Sem 1 Only)' },
    { category: 'Institutional Charges (Per Sem)', amount: '₹10,800 (Sem 1) / ₹7,800 (Sem 2)' },
    { category: 'Caution Money (Refundable)', amount: '₹10,000 (Sem 1 Only)' },
    { category: 'Hostel Fees (Per Semester)', amount: '₹27,300' },
];

const COURSES = [
    { label: 'Core Engineering', items: 'Mechanical, Civil, Chemical, Electrical, Metallurgy, Mining' },
    { label: 'Tech & Niche Disciplines', items: 'Computer Science, IT, Bio-Medical, Bio-Technology' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#86 (Engineering)', icon: Award },
    { body: 'Establishment Date', rank: 'One of the oldest in India (Est. 1956)', icon: Star },
];

const ADMISSION_STEPS = [
    'Attain competitive percentiles in JEE Main 2026.',
    'Clear 75% aggregates for Gen/OBC (65% for SC/ST) in passing school criteria.',
    'Counseling and Seat Allocation happens exclusively through JoSAA/CSAB.',
    'Utilize Central India specific Home State quotas, unlocking seats up to 1,00,000 ranks in select branches.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-700 to-rose-600 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-red-900 bg-red-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITRaipur = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Raipur",
        "alternateName": "NIT Raipur",
        "url": "http://www.nitrr.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Raipur is a strategic hub of technical study in Central India, providing unmatched placement metrics in core sectors such as Mining, Mechanical, and Metallurgy.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Raipur",
            "addressRegion": "Chhattisgarh",
            "addressCountry": "IN"
        },
        "foundingDate": "1956"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Raipur CSE?', a: 'For the General category (Other State), the JEE Main 2024 closing rank for CSE was 12,916. The Home State cutoff significantly extended to 21,540.' },
        { q: 'What is the highest package at NIT Raipur?', a: 'The highest package in the 2025 placement cycle was ₹60.00 LPA (compared to ₹62 LPA in 2024).' },
        { q: 'Is NIT Raipur renowned for Mining Engineering?', a: 'Yes. Due to its strategic location in Chhattisgarh, the Mining Engineering department leverages vast mineral resources for unbridled exposure, closing at rank 50,575 OS / 91,812 HS.' },
        { q: 'What is the B.Tech fee at NIT Raipur?', a: 'The first-semester cost is around ₹1.32 Lakhs (inclusive of one-time deposits and hostel rent). The total 4-year tuition & institutional fee revolves around ₹5.49 Lakhs without hostel.' },
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
                title="NIT Raipur Cutoffs, 60 LPA Placements, Mining Branch & Fees 2026"
                description="Your complete guide to NIT Raipur. Inspect branch JEE Main quotas, 73% overall placement analytics, core industrial tie-ups, outstation and home rank analysis."
                canonicalPath="/colleges/nit-raipur"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-rose-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 1956 · The Strategic Hub of Central India
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Raipur – Forging Central India's Technical Backbone
                        </h1>
                        <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Complete Cutoffs, Strategic Mineral Mining Branches & Placement Metrics for <strong className="text-white">2026</strong> Admits
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Raipur, Chhattisgarh' },
                            { icon: Calendar, text: 'Est. 1956' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #86' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-rose-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-red-500 pl-6">
                    Ranked <strong className="text-gray-900">#86 in NIRF Engineering 2025</strong>, <strong className="text-gray-900">NIT Raipur</strong> anchors technological study in mineral-rich Central India. Its unique offering lies directly in core domains, empowering fields like Metallurgical and Mining Engineering that bridge localized natural resources to worldwide solutions.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-red-800">
                            <strong>Tremendous Home State Cushions:</strong> Bio Technology drops from 42,463 (OS) safely down to 1,07,472 (HS), granting widespread accessibility to in-state candidates pursuing technical disciplines. <br />
                            <span className="text-xs opacity-80">*Some reserve categorical ranks are estimated.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>2025 Placement Landscape</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹60.00 LPA' },
                            { label: 'Overall Average', value: '₹11.10 LPA' },
                            { label: 'Total Offers', value: '762' },
                            { label: 'Visits from Companies', value: '131' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        While IT firms like Amazon and Microsoft frequent campus bounds, the <strong>Mechanical (92.55%)</strong> and <strong>Chemical Engineering (84.29%)</strong> departments eclipse the average benchmark alongside heavyweights like Vedanta, Tata Steel, L&T, and Reliance.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch (2025 Result)</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Total Offers Yielded</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center font-semibold text-red-700">{r.placementRate}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.offersReceived}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Financial Breakdown (Semester-Wise)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Fee Component</Th>
                                    <Th className="text-center">Amount Demanded</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* Therefore, the total initial installment equates roughly to INR 1.32 Lakhs. The 4-year cumulative cost estimates ~INR 5.49 Lakhs excluding accommodation limits.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Niche Engineering Offerings</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-red-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Rankings Framework</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
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
                    <SectionTitle icon={GraduationCap}>Eligibility Directives</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-700 to-rose-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-red-800 to-red-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Unsure of Your Chance at NIT Raipur?
                    </h2>
                    <p className="text-red-100 mb-8 max-w-xl mx-auto">
                        Measure your present capacities versus the JEE Main previous allocations. Ascertain your rank possibilities.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-red-800 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITRaipur;
