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
    { param: 'College Name', detail: 'Indian Institute of Technology Mandi (IITM)' },
    { param: 'Location', detail: 'Kamand, Mandi, Himachal Pradesh' },
    { param: 'Established Year', detail: '2009' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 3123, ews: 527, obc: 1454, sc: 767, st: 370 },
    { branch: 'Data Science & AI', general: 3928, ews: 621, obc: 1782, sc: 1266, st: 542 },
    { branch: 'Mathematics & Computing', general: 4285, ews: 614, obc: 1935, sc: 1329, st: 617 },
    { branch: 'Microelectronics & VLSI', general: 6166, ews: 1006, obc: 2842, sc: 1503, st: 715 },
    { branch: 'Electrical Engineering', general: 7590, ews: 1750, obc: 3288, sc: 1613, st: 844 },
    { branch: 'Mechanical Engineering', general: 10267, ews: 2430, obc: 4165, sc: 2092, st: 994 },
    { branch: 'General Engineering', general: 11034, ews: 1847, obc: 4674, sc: 2520, st: 1315 },
    { branch: 'Civil Engineering', general: 14274, ews: 3000, obc: 6320, sc: 2347, st: 864 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹29.33 LPA', placementRate: '100%' },
    { branch: 'Data Science & AI', avgPackage: '₹23.98 LPA', placementRate: '96.77%' },
    { branch: 'Electrical Engineering', avgPackage: '₹19.11 LPA', placementRate: '93.18%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹14.46 LPA', placementRate: '100%' },
    { branch: 'Civil Engineering', avgPackage: '₹12.12 LPA', placementRate: '80%' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹28,950', total: '₹1,28,950' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹28,950', total: '₹62,283' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹28,950', total: '₹28,950', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech (10 Disciplines)', items: 'CSE, Data Science & Engineering, EE, ME, CE, Engineering Physics, Bioengineering, General Engineering, Microelectronics & VLSI, and Materials Science' },
    { label: 'B.Tech-M.Tech Dual Degree', items: 'Integrated 5-year program in Bio-Engineering' },
    { label: 'Integrated MBA (IMBA)', items: 'Unique 5-year program for business aspirants' },
    { label: 'M.Sc', items: 'Physics, Chemistry, and Applied Mathematics' },
];

const RANKINGS = [
    { body: 'NIRF 2025 (Engineering)', rank: '#26', icon: Award },
    { body: 'NIRF 2025 (Innovation)', rank: '#10', icon: Star },
    { body: 'NIRF 2025 (Overall)', rank: '#58', icon: Award },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 (to reach top 2.5 lakh).',
    'Secure a rank in JEE Advanced 2026 (held in May).',
    'Participate in JoSAA 2026 counseling and prioritize IIT Mandi.',
    'Secure a seat based on your All India Rank (AIR) and Category.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-green-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITMandi = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Mandi",
        "alternateName": "IIT Mandi",
        "url": "https://www.iitmandi.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Mandi, established in 2009, is renowned for its unique Fractal Academic System, focus on Data Science & AI, and commitment to sustainable development in the Himalayan region.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kamand, Mandi",
            "addressRegion": "Himachal Pradesh",
            "addressCountry": "IN"
        },
        "foundingDate": "2009"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Mandi CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Mandi was 3123.' },
        { q: 'What is the average placement package at IIT Mandi?', a: 'The B.Tech average package (2025) is ₹21.64 LPA with a median of ₹17.00 LPA. CSE graduates averaged ₹29.33 LPA with 100% placement. The highest offer was ₹60.00 LPA.' },
        { q: 'What are the fees at IIT Mandi?', a: 'The total 1st-semester fee for General/OBC students (income > ₹5L) is ₹1,28,950. SC/ST/PwD students pay ₹28,950 as tuition is fully exempted.' },
        { q: 'What is the Fractal Academic System?', a: 'IIT Mandi follows a unique Fractal Academic System that encourages interdisciplinary learning, project-based courses, and flexibility in choosing specializations throughout the degree.' },
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
                title="IIT Mandi Cutoff, Fees, Placements, Ranking"
                description="Check IIT Mandi (IITM) branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data for aspirants."
                canonicalPath="/colleges/iit-mandi"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏔️ Himalayan Campus · 95% Placement Rate · Innovation #10
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Mandi
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Mandi, Himachal Pradesh' },
                            { icon: Calendar, text: 'Est. 2009' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #26' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-green-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-emerald-500 pl-6">
                    The Indian Institute of Technology Mandi (IIT Mandi), established in 2009, is a premier second-generation IIT located in the picturesque Kamand Valley of Himachal Pradesh. Spread across a stunning 538-acre campus, IIT Mandi is renowned for its <strong className="text-gray-900">unique Fractal Academic System, focus on Data Science & AI</strong>, and its commitment to sustainable development in the Himalayan region.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (JEE Advanced 2025 – Round 6)</SectionTitle>
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-emerald-800"><strong>Pro Tip:</strong> Students with an AIR between <strong>3,000 and 4,500</strong> often choose IIT Mandi for its specialized Microelectronics & VLSI and Mathematics & Computing branches over core branches in older IITs.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (B.Tech)', value: '₹21.64 LPA' },
                            { label: 'Median Package', value: '₹17.00 LPA' },
                            { label: 'Highest Package', value: '₹60.00 LPA' },
                            { label: 'Placement Rate', value: '95.04%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Microsoft, Amazon, Google, Adobe, Flipkart, Deloitte, ISRO, ICICI Bank · <strong>215+</strong> companies visited
                    </motion.div>

                    {/* Branch-wise table */}
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average Package (LPA)</Th><Th className="text-center">Placement %</Th></tr>
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
                                    <Th className="text-center">Total 1st Sem</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-emerald-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel Charges: ₹9,600 per semester.</p>
                        <p>* Mess Charges: Approx. ₹15,360 per semester (adjustable).</p>
                        <p>* One-time Deposit (Refundable): ₹12,000.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
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
                    <SectionTitle icon={Award}>Rankings (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-3 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-5">
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
                    <SectionTitle icon={GraduationCap}>Admission Process 2026</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-green-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Mandi
                    </h2>
                    <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Mandi and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-emerald-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITMandi;
