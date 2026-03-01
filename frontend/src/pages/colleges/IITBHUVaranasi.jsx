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
    { param: 'College Name', detail: 'Indian Institute of Technology (BHU) Varanasi' },
    { param: 'Location', detail: 'Varanasi, Uttar Pradesh' },
    { param: 'Established Year', detail: '1919 (as BENCO)' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 1489, ews: 189, obc: 528, sc: 283, st: 165 },
    { branch: 'Mathematics & Computing', general: 1924, ews: 265, obc: 883, sc: 674, st: 372 },
    { branch: 'Electronics Engineering', general: 2635, ews: 415, obc: 1261, sc: 805, st: 463 },
    { branch: 'Electrical Engineering', general: 3537, ews: 595, obc: 1491, sc: 999, st: 485 },
    { branch: 'Mechanical Engineering', general: 7286, ews: 1100, obc: 2829, sc: 1749, st: 871 },
    { branch: 'Chemical Engineering', general: 8381, ews: 1341, obc: 3434, sc: 2011, st: 1016 },
    { branch: 'Civil Engineering', general: 10278, ews: 1554, obc: 3888, sc: 2261, st: 896 },
    { branch: 'Mining Engineering', general: 14243, ews: 2100, obc: 5319, sc: 3019, st: 1368 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹34.87 LPA', placementRate: '89.81%' },
    { branch: 'Electronics Engineering', avgPackage: '₹27.47 LPA', placementRate: '81.63%' },
    { branch: 'Electrical Engineering', avgPackage: '₹24.81 LPA', placementRate: '78.50%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹19.03 LPA', placementRate: '75.20%' },
    { branch: 'Chemical Engineering', avgPackage: '₹19.97 LPA', placementRate: '74.71%' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹6,350', total: '₹1,21,600' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹6,350', total: '₹54,933' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹6,350', total: '₹21,600', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech (15 Specializations)', items: 'Including Ceramic Engineering and Pharmaceutical Engineering — unique to IIT BHU' },
    { label: '5-Year Integrated Dual Degree (IDD)', items: 'Bachelor + Master of Technology combined in a single program' },
    { label: '5-Year B.Arch', items: 'Admitted via JEE Advanced + Architecture Aptitude Test (AAT)' },
    { label: 'B.Pharm / M.Pharm', items: 'One of the few IITs with a dedicated Pharmacy department' },
];

const RANKINGS = [
    { body: 'NIRF 2025 (Engineering)', rank: '#10', icon: Award },
    { body: 'NIRF 2025 (Research)', rank: '#22', icon: Star },
    { body: 'NIRF 2025 (Overall)', rank: '#31', icon: Award },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 (to enter the top 2.5 lakh).',
    'Secure a rank in JEE Advanced 2026 (held in May).',
    'Participate in JoSAA 2026 counseling and prioritize IIT (BHU) Varanasi.',
    'Secure a seat based on your All India Rank (AIR) and Category.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-600 to-red-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITBHUVaranasi = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology (BHU) Varanasi",
        "alternateName": "IIT BHU",
        "url": "https://www.iitbhu.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT (BHU) Varanasi, founded in 1919, is one of India's oldest and most prestigious engineering institutions. Integrated into the IIT system in 2012, it combines a century-old legacy with modern research infrastructure.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Varanasi",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
        },
        "foundingDate": "1919"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT BHU CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT (BHU) Varanasi was 1489.' },
        { q: 'What is the average placement package at IIT BHU?', a: 'The B.Tech average package (2026 Phase 1) is ₹29.33 LPA. CSE graduates averaged ₹34.87 LPA. The overall highest package was ₹1.67 Crore, with 280 PPOs and 1,005 total Phase 1 offers.' },
        { q: 'What are the fees at IIT BHU?', a: 'The total payable at admission for General/OBC students (income > ₹5L) is ₹1,21,600. SC/ST/PwD students pay ₹21,600 as tuition is fully exempted.' },
        { q: 'What makes IIT BHU unique?', a: 'IIT BHU is one of India\'s oldest engineering institutions (1919). It offers 15 B.Tech specializations including unique ones like Ceramic Engineering and Pharmaceutical Engineering. It also has dedicated B.Pharm/M.Pharm programs — rare among IITs.' },
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
                title="IIT (BHU) Varanasi Cutoff, Fees, Placements, Ranking"
                description="Check IIT (BHU) Varanasi (IIT BHU) branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data."
                canonicalPath="/colleges/iit-bhu-varanasi"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-rose-700 via-rose-600 to-red-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Est. 1919 · Century-Old Legacy · 1,300-Acre BHU Campus
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT (BHU) Varanasi
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
                            { icon: MapPin, text: 'Varanasi, UP' },
                            { icon: Calendar, text: 'Est. 1919' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #10' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-red-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-rose-500 pl-6">
                    The Indian Institute of Technology (BHU) Varanasi, <strong className="text-gray-900">founded in 1919</strong> as Banaras Engineering College (BENCO), is one of India's oldest and most prestigious engineering institutions. Integrated into the IIT system in 2012, it combines a <strong className="text-gray-900">century-old legacy with modern research infrastructure</strong>. Located within the sprawling 1,300-acre BHU campus, it offers a unique cultural and academic environment unmatched by any other IIT.
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
                                    <Th>Branch (B.Tech)</Th>
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
                        <p className="text-sm text-rose-800"><strong>Pro Tip:</strong> For the Integrated Dual Degree (IDD), closing ranks are generally <strong>500–1,000 ranks higher</strong> than 4-year B.Tech counterparts, making them an excellent choice for students prioritizing the branch over duration.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025-26 Phase 1)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (Phase 1)', value: '₹29.33 LPA' },
                            { label: 'Highest Package', value: '₹1.67 Cr PA' },
                            { label: 'Total Offers', value: '1,005' },
                            { label: 'PPOs', value: '280' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Goldman Sachs, Uber, Qualcomm, Rakuten, NVIDIA
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
                                    <Th className="text-center">Total at Admission</Th>
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
                        <p>* Mess Advance: ₹16,500 per semester.</p>
                        <p>* Hostel Seat Rent: ₹300 per semester (Waived for SC/ST).</p>
                        <p>* Refundable Deposit: ₹9,000 (One-time).</p>
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
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-3 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100 rounded-xl p-5">
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-600 to-red-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-rose-600 to-red-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT (BHU) Varanasi
                    </h2>
                    <p className="text-rose-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT BHU and other top IITs.
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

export default IITBHUVaranasi;
