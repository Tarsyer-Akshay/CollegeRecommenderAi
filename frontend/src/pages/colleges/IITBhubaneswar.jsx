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
    { param: 'College Name', detail: 'Indian Institute of Technology Bhubaneswar (IITBBS)' },
    { param: 'Location', detail: 'Argul, Khordha (near Bhubaneswar), Odisha' },
    { param: 'Established Year', detail: '2008' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 4162, ews: 538, obc: 1510, sc: 747, st: 265 },
    { branch: 'Mathematics & Computing', general: 4708, ews: 770, obc: 2092, sc: 1200, st: 769 },
    { branch: 'Electronics & Comm. (ECE)', general: 5885, ews: 817, obc: 2248, sc: 1481, st: 563 },
    { branch: 'Electrical Engineering', general: 8165, ews: 1224, obc: 3215, sc: 1828, st: 919 },
    { branch: 'Mechanical Engineering', general: 11678, ews: 1717, obc: 4142, sc: 2479, st: 1134 },
    { branch: 'Engineering Physics', general: 12466, ews: 2184, obc: 4834, sc: 2874, st: 1221 },
    { branch: 'Civil Engineering', general: 16156, ews: 2346, obc: 5414, sc: 2872, st: 1093 },
    { branch: 'Metallurgical & Materials', general: 16268, ews: 2514, obc: 5774, sc: 3054, st: 1406 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹23.2 LPA', placementRate: '95.3%' },
    { branch: 'Electronics & Comm. (ECE)', avgPackage: '₹19.8 LPA', placementRate: '78.7%' },
    { branch: 'Electrical Engineering', avgPackage: '₹19.0 LPA', placementRate: '91.5%' },
    { branch: 'Metallurgical & Materials', avgPackage: '₹18.7 LPA', placementRate: '89.4%' },
    { branch: 'Civil Engineering', avgPackage: '₹14.8 LPA', placementRate: '88.6%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹14.77 LPA', placementRate: '93.7%' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹42,150', total: '₹1,42,150' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹42,150', total: '₹75,483' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹37,150', total: '₹37,150', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech', items: 'CSE, ECE, EE, ME, CE, Metallurgical & Materials, Engineering Physics' },
    { label: '4-Year B.S.', items: 'Mathematics and Computing' },
    { label: '5-Year Dual Degree (B.Tech + M.Tech)', items: 'Offered in CSE, Electrical, Civil, and Mechanical' },
    { label: 'Integrated Teacher Education (ITEP)', items: 'B.Sc. B.Ed. (Physics, Chemistry, Math, Economics)' },
];

const RANKINGS = [
    { body: 'NIRF 2025 (Engineering)', rank: '#39 — Jumped 15 spots from 2024!', icon: Award },
    { body: 'NIRF 2025 (Overall)', rank: '#80', icon: Star },
];

const ADMISSION_STEPS = [
    'Clear JEE Main 2026 to qualify for Advanced.',
    'Secure a rank in JEE Advanced 2026.',
    'Participate in JoSAA 2026 counseling and choose IIT Bhubaneswar.',
    'Secure a seat based on your All India Rank (AIR) and Category.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-600 to-pink-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITBhubaneswar = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Bhubaneswar",
        "alternateName": "IIT Bhubaneswar",
        "url": "https://www.iitbbs.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Bhubaneswar, established in 2008, is a second-generation IIT with a 936-acre campus at Argul. Known for its cutting-edge research in Climate Science and Electronic Systems Design.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Argul, Khordha",
            "addressRegion": "Odisha",
            "addressCountry": "IN"
        },
        "foundingDate": "2008"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Bhubaneswar CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Bhubaneswar was 4162.' },
        { q: 'What is the average placement package at IIT Bhubaneswar?', a: 'The B.Tech average package is ₹14.98 LPA. CSE graduates received an average of ₹23.2 LPA with a 95.3% placement rate.' },
        { q: 'What are the fees at IIT Bhubaneswar?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,42,150. SC/ST/PwD students pay ₹37,150 as tuition is fully exempted.' },
        { q: 'What is IIT Bhubaneswar\'s NIRF ranking?', a: 'IIT Bhubaneswar is ranked #39 in Engineering by NIRF 2025, jumping 15 spots from the previous year. Overall ranking is #80.' },
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
                title="IIT Bhubaneswar Cutoff, Fees, Placements, Ranking"
                description="Check IIT Bhubaneswar (IITBBS) branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated data for 2026 aspirants."
                canonicalPath="/colleges/iit-bhubaneswar"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-rose-700 via-rose-600 to-pink-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🚀 2nd-Gen IIT · NIRF #39 (↑15 Spots!)
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Bhubaneswar
                        </h1>
                        <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Bhubaneswar, Odisha' },
                            { icon: Calendar, text: 'Est. 2008' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #39' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-rose-500 pl-6">
                    The Indian Institute of Technology Bhubaneswar (IITBBS), established in 2008, is one of the <strong className="text-gray-900">second-generation IITs</strong>. Operating from its permanent 936-acre campus at Argul, it has rapidly climbed the rankings, specifically known for its cutting-edge research in <strong className="text-gray-900">Climate Science and Electronic Systems Design</strong>.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-rose-50 border border-rose-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-rose-800"><strong>Pro Tip:</strong> IIT Bhubaneswar's CSE closing rank of <strong>4162 (General)</strong> makes it an excellent option for students in the 4000-5000 AIR range looking for an IIT CSE seat.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (B.Tech)', value: '₹14.98 LPA' },
                            { label: 'Median Package', value: '₹12.0 LPA' },
                            { label: 'Highest Domestic', value: '₹67.6 LPA' },
                            { label: 'Placement Rate', value: '90.07%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Oracle, Goldman Sachs, Zomato, Tata Steel, BEL, BPCL, HPCL
                    </motion.div>

                    {/* Branch-wise table */}
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average Package (LPA)</Th><Th className="text-center">Placement Rate</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.avgPackage}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.placementRate}</td>
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
                                    <Th className="text-center">Other Fees</Th>
                                    <Th className="text-center">Total per Sem</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-rose-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel Mess Advance: ₹18,000 per semester.</p>
                        <p>* Caution Money: ₹12,000 (One-time, Refundable).</p>
                        <p>* One-time Admission Fee: ₹8,000.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-rose-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-rose-600 to-pink-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Bhubaneswar
                    </h2>
                    <p className="text-rose-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Bhubaneswar and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-rose-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITBhubaneswar;
