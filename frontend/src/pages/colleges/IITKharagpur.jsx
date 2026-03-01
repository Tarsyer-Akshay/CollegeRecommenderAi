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
    { param: 'College Name', detail: 'Indian Institute of Technology Kharagpur (IITKGP)' },
    { param: 'Location', detail: 'Kharagpur, West Bengal' },
    { param: 'Established Year', detail: '1951' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 466, ews: 78, obc: 212, sc: 102, st: 68 },
    { branch: 'Artificial Intelligence', general: 953, ews: 143, obc: 381, sc: 250, st: 90 },
    { branch: 'Electronics & Electrical Comm.', general: 1485, ews: 230, obc: 646, sc: 410, st: 225 },
    { branch: 'Electrical Engineering', general: 1985, ews: 340, obc: 895, sc: 610, st: 320 },
    { branch: 'Mechanical Engineering', general: 4016, ews: 750, obc: 1850, sc: 1100, st: 580 },
    { branch: 'Aerospace Engineering', general: 4872, ews: 884, obc: 2202, sc: 1167, st: 593 },
    { branch: 'Chemical Engineering', general: 5222, ews: 920, obc: 2400, sc: 1350, st: 690 },
    { branch: 'Civil Engineering', general: 7774, ews: 1450, obc: 3007, sc: 1650, st: 720 },
];

const PLACEMENT_STATS = [
    { label: 'Average Package', value: '₹24.30 LPA' },
    { label: 'Median Package', value: '₹19.76 LPA' },
    { label: 'Highest Domestic', value: '₹2.14 Cr PA' },
    { label: 'Highest International', value: '₹2.44 Cr PA' },
];

const FEE_DATA = [
    { category: 'General/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹43,076', total: '₹1,43,076' },
    { category: 'General/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹43,076', total: '₹76,409' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹43,076', total: '₹43,076', highlight: true },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '5th (Engineering) | 6th (Overall)', icon: Award },
    { body: 'QS World 2026', rank: '215th (Globally)', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 and rank in the top 2,50,000 candidates.',
    'Clear JEE Advanced 2026 (Expected in May 2026).',
    'Register for JoSAA Counseling and select IIT Kharagpur as your preference.',
    'Secure a seat based on your All India Rank (AIR) and Category.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITKharagpur = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Kharagpur",
        "alternateName": "IIT Kharagpur",
        "url": "https://www.iitkgp.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Kharagpur, established in 1951, is the oldest and largest IIT. Known for its 2,100-acre campus and exceptional research, it ranks among India's top 5 engineering colleges.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kharagpur",
            "addressRegion": "West Bengal",
            "addressCountry": "IN"
        },
        "foundingDate": "1951"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Kharagpur CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Kharagpur was 466.' },
        { q: 'What is the average placement package at IIT Kharagpur?', a: 'The overall average package for the 2025-26 season is ₹24.30 LPA, with a median of ₹19.76 LPA.' },
        { q: 'What are the fees at IIT Kharagpur?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is approximately ₹1,43,076. SC/ST/PwD students pay ₹43,076 as tuition is exempted.' },
        { q: 'How to get admission in IIT Kharagpur?', a: 'You must clear JEE Main, then JEE Advanced. After qualifying, participate in JoSAA Counseling and select IIT Kharagpur branches based on your AIR and category.' },
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
                title="IIT Kharagpur Cutoff, Fees, Placements, Ranking"
                description="Check IIT Kharagpur (IITKGP) branch-wise cutoff, 2025 placement data, fee structure, and NIRF ranking. Updated data for 2026 aspirants."
                canonicalPath="/colleges/iit-kharagpur"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-500 to-pink-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ India's Oldest IIT — Est. 1951
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Kharagpur
                        </h1>
                        <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Kharagpur, West Bengal' },
                            { icon: Calendar, text: 'Est. 1951' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #5' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-orange-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-6">
                    The Indian Institute of Technology Kharagpur (IITKGP), established in 1951, is the <strong className="text-gray-900">oldest and largest of all IITs</strong>. Known for its sprawling 2,100-acre campus and exceptional research facilities, it remains a top choice for engineering students globally.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-orange-800"><strong>Pro Tip:</strong> IIT Kharagpur offers a dedicated <strong>AI program</strong> with a closing rank of 953 (General), making it one of the most competitive AI seats in India.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025-26 Season)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {PLACEMENT_STATS.map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="text-sm text-gray-600">
                        <strong>Total Offers:</strong> 1,811+ (Ongoing) &nbsp;|&nbsp; <strong>Top Recruiters:</strong> Google, Apple, Microsoft, Goldman Sachs, Nvidia, Texas Instruments, Uber
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
                                    <Th className="text-center">Other Charges</Th>
                                    <Th className="text-center">Total per Sem</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-orange-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel Fees: Approx. ₹24,180 per semester (included in "Other Charges" above).</p>
                        <p>* Caution Money: ₹6,000 (Refundable, one-time). Fees subject to revision.</p>
                    </motion.div>
                </section>

                {/* ── 5. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Rankings (2025-2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-gray-900">{r.body}</div>
                                    <div className="text-sm text-gray-600 mt-1">{r.rank}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Admission Process ──────────────────────────────────────── */}
                <section id="admission">
                    <SectionTitle icon={GraduationCap}>Admission Process 2026</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Kharagpur
                    </h2>
                    <p className="text-orange-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Kharagpur and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-orange-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITKharagpur;
