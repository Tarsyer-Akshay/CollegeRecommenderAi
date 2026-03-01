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
    { param: 'College Name', detail: 'Indian Institute of Technology Tirupati (IITTP)' },
    { param: 'Location', detail: 'Yerpedu, Tirupati, Andhra Pradesh' },
    { param: 'Established Year', detail: '2015' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 5034, ews: 635, obc: 1727, sc: 882, st: 545 },
    { branch: 'Electrical Engineering', general: 9468, ews: 1176, obc: 3248, sc: 2016, st: 898 },
    { branch: 'Mechanical Engineering', general: 11023, ews: 2092, obc: 4120, sc: 2580, st: 1260 },
    { branch: 'Engineering Physics', general: 12915, ews: 2092, obc: 4500, sc: 2996, st: 1376 },
    { branch: 'Chemical Engineering', general: 14186, ews: 2150, obc: 5034, sc: 2777, st: 1260 },
    { branch: 'Civil Engineering', general: 16548, ews: 2029, obc: 5400, sc: 2678, st: 1074 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹23.00 LPA', highestPackage: '₹65.00 LPA' },
    { branch: 'Electrical Engineering', avgPackage: '₹17.14 LPA', highestPackage: '₹38.00 LPA' },
    { branch: 'Mechanical Engineering', avgPackage: '₹13.00 LPA', highestPackage: '₹42.00 LPA' },
    { branch: 'Chemical Engineering', avgPackage: '₹12.25 LPA', highestPackage: '₹16.00 LPA' },
    { branch: 'Civil Engineering', avgPackage: '₹7.68 LPA', highestPackage: '₹13.00 LPA' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹42,350', total: '₹1,49,860' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,334', other: '₹42,350', total: '₹83,194' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹42,350', total: '₹49,860', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech', items: 'CSE, Electrical, Mechanical, Chemical, Civil Engineering, and Engineering Physics' },
    { label: 'M.Tech (12 Specializations)', items: 'Signal Processing, Structural Engineering, Data Science, and more' },
    { label: 'M.Sc', items: 'Physics, Chemistry, and Mathematics & Statistics' },
    { label: 'Master of Public Policy (MPP)', items: 'Unique interdisciplinary program for policy aspirants' },
];

const RANKINGS = [
    { body: 'NIRF 2025 (Engineering)', rank: '#57 — Up from #61 in 2024!', icon: Award },
    { body: 'IIRF 2025 (Engineering)', rank: '#47', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 to be eligible for the top 2.5 lakh candidates.',
    'Secure a rank in JEE Advanced 2026 (Scheduled for May 17, 2026).',
    'Participate in JoSAA 2026 counseling and prioritize IIT Tirupati.',
    '(For PG): Admission via GATE (M.Tech) or IIT-JAM (M.Sc).',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITTirupati = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Tirupati",
        "alternateName": "IIT Tirupati",
        "url": "https://www.iittp.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Tirupati, established in 2015, is a premier third-generation IIT located in Tirupati, Andhra Pradesh. Known for its focus on Electronic Systems, Structural Engineering, and Sustainable Energy.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Yerpedu, Tirupati",
            "addressRegion": "Andhra Pradesh",
            "addressCountry": "IN"
        },
        "foundingDate": "2015"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Tirupati CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Tirupati was 5034.' },
        { q: 'What is the average placement package at IIT Tirupati?', a: 'The overall B.Tech average package (2025) is ₹17.58 LPA with a median of ₹11.00 LPA. CSE graduates averaged ₹23.00 LPA with a 98% placement rate. The highest offer was ₹65.00 LPA.' },
        { q: 'What are the fees at IIT Tirupati?', a: 'The total 1st-semester fee for General/OBC students (income > ₹5L) is ₹1,49,860. SC/ST/PwD students pay ₹49,860 as tuition is fully exempted.' },
        { q: 'What is IIT Tirupati\'s NIRF ranking?', a: 'IIT Tirupati is ranked #57 in Engineering by NIRF 2025, up from #61 in 2024, showing consistent improvement. It is also ranked #47 by IIRF 2025.' },
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
                title="IIT Tirupati Cutoff, Fees, Placements, Ranking"
                description="Check IIT Tirupati (IITTP) branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data."
                canonicalPath="/colleges/iit-tirupati"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🛕 Temple Town Campus · 548-Acre Permanent Campus
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Tirupati
                        </h1>
                        <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Cutoff, Fees, Placements &amp; Ranking — Updated for <strong className="text-white">2026</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Tirupati, Andhra Pradesh' },
                            { icon: Calendar, text: 'Est. 2015' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #57' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Decorative circles */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-amber-500 pl-6">
                    The Indian Institute of Technology Tirupati (IITTP), established in 2015, is one of the premier third-generation IITs. Located in the temple town of Tirupati, Andhra Pradesh, the institute has quickly emerged as a center of excellence in engineering and technology. Operating from its <strong className="text-gray-900">permanent 548-acre campus in Yerpedu</strong>, IIT Tirupati is renowned for its focus on <strong className="text-gray-900">Electronic Systems, Structural Engineering, and Sustainable Energy</strong>.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (JEE Advanced 2025 – Final Round)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Branch</Th>
                                    <Th className="text-center">General</Th>
                                    <Th className="text-center">EWS</Th>
                                    <Th className="text-center">OBC-NCL</Th>
                                    <Th className="text-center">SC</Th>
                                    <Th className="text-center">ST</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {CUTOFF_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.general}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.ews}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.obc}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sc}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.st}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-amber-800"><strong>Pro Tip:</strong> Students with an AIR between <strong>4,500 and 6,000</strong> often prioritize IIT Tirupati CSE due to its modern curriculum and proximity to tech hubs like Bangalore and Chennai.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (Overall)', value: '₹17.58 LPA' },
                            { label: 'Avg Package (CSE)', value: '₹23.00 LPA' },
                            { label: 'Highest Package', value: '₹65.00 LPA' },
                            { label: 'CSE Placement Rate', value: '98%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Amazon, Microsoft, Adobe, IBM, TCS, Deloitte, Texas Instruments, L&T, Tata Motors
                    </motion.div>

                    {/* Branch-wise table */}
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average Package (LPA)</Th><Th className="text-center">Highest Package (LPA)</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.avgPackage}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.highestPackage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure (2025-26 Academic Year)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Category</Th>
                                    <Th className="text-center">Tuition (Per Sem)</Th>
                                    <Th className="text-center">Hostel & Mess</Th>
                                    <Th className="text-center">Total 1st Sem</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-amber-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel Seat Rent: ₹7,000 per semester. Mess Advance: ₹19,350 per semester.</p>
                        <p>* One-time Admission Fee: ₹4,550. Refundable Deposits: ₹5,000.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-amber-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-amber-600 to-yellow-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Tirupati
                    </h2>
                    <p className="text-amber-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Tirupati and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-amber-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <span>Try JEE Advanced Predictor</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default IITTirupati;
