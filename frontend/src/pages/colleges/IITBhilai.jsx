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
    { param: 'College Name', detail: 'Indian Institute of Technology Bhilai (IITB)' },
    { param: 'Location', detail: 'Kutelabhata, Bhilai, Chhattisgarh' },
    { param: 'Established Year', detail: '2016' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 7382, ews: 996, obc: 2832, sc: 1343, st: 676 },
    { branch: 'Data Science & AI', general: 7934, ews: 1166, obc: 3135, sc: 1548, st: 680 },
    { branch: 'Electronics & Comm. (ECE)', general: 9668, ews: 1350, obc: 3474, sc: 1865, st: 940 },
    { branch: 'Electrical Engineering', general: 11592, ews: 1700, obc: 4149, sc: 2290, st: 1135 },
    { branch: 'Mechatronics Engineering', general: 12254, ews: 1950, obc: 4573, sc: 2320, st: 1270 },
    { branch: 'Mechanical Engineering', general: 14788, ews: 2150, obc: 4924, sc: 2846, st: 1229 },
    { branch: 'Materials & Metallurgical', general: 17478, ews: 2570, obc: 6053, sc: 3327, st: 1233 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹18.45 LPA', placementRate: '77.27%' },
    { branch: 'Data Science & AI', avgPackage: '₹17.92 LPA', placementRate: '90.00%' },
    { branch: 'Electrical Engineering', avgPackage: '₹14.50 LPA', placementRate: '73.17%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹12.80 LPA', placementRate: '80.00%' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹46,585', total: '₹1,46,585' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹46,585', total: '₹79,918' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹46,585', total: '₹46,585', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech (7 Branches)', items: 'CSE, Data Science & AI, ECE, Electrical, Mechatronics, Mechanical, and Materials Science & Metallurgical Engineering' },
    { label: '2-Year M.Tech (9 Specializations)', items: 'Electric Vehicle Technology, Bioengineering, and more' },
    { label: '2-Year M.Sc', items: 'Physics, Chemistry, and Mathematics & Computing' },
    { label: 'Executive M.Tech & e-Masters', items: 'Specialized programs for working professionals' },
];

const RANKINGS = [
    { body: 'NIRF 2025 (Engineering)', rank: '#72 — Up from #81 in 2023!', icon: Award },
    { body: 'Collegedunia 2025', rank: '#53 India · #1 Chhattisgarh', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 (to reach the top 2.5 lakh candidates).',
    'Secure a rank in JEE Advanced 2026 (held in May).',
    'Participate in JoSAA 2026 counseling and prioritize IIT Bhilai.',
    '(For PG): Admission via GATE (M.Tech) or IIT-JAM (M.Sc).',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITBhilai = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Bhilai",
        "alternateName": "IIT Bhilai",
        "url": "https://www.iitbhilai.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Bhilai, established in 2016, is one of the youngest and fastest-growing IITs. Located in Chhattisgarh, it is rapidly gaining recognition for its research in Mechatronics, Data Science, and Electric Vehicle Technology.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kutelabhata, Bhilai",
            "addressRegion": "Chhattisgarh",
            "addressCountry": "IN"
        },
        "foundingDate": "2016"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Bhilai CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Bhilai was 7382.' },
        { q: 'What is the average placement package at IIT Bhilai?', a: 'The B.Tech average package (2025) is ₹15.1 LPA with a median of ₹12 LPA. CSE graduates averaged ₹18.45 LPA. The highest domestic offer was ₹48.92 LPA.' },
        { q: 'What are the fees at IIT Bhilai?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,46,585. SC/ST/PwD students pay ₹46,585 as tuition is fully exempted.' },
        { q: 'What makes IIT Bhilai special?', a: 'IIT Bhilai is one of the fastest-growing IITs with a brand-new permanent campus featuring AC hostels. It offers unique programs like Mechatronics Engineering, M.Tech in Electric Vehicle Technology, and Executive M.Tech for working professionals.' },
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
                title="IIT Bhilai Cutoff, Fees, Placements, Ranking"
                description="Check IIT Bhilai (IITB) branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data."
                canonicalPath="/colleges/iit-bhilai"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-orange-700 via-orange-600 to-red-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏭 Newest Permanent Campus · Mechatronics & EV Tech Hub
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Bhilai
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
                            { icon: MapPin, text: 'Bhilai, Chhattisgarh' },
                            { icon: Calendar, text: 'Est. 2016' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #72' },
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
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-6">
                    The Indian Institute of Technology Bhilai (IIT Bhilai), established in 2016, is one of the <strong className="text-gray-900">youngest and fastest-growing IITs</strong> in India. Located in the industrial heart of Chhattisgarh, the institute has recently moved to its <strong className="text-gray-900">permanent campus in Kutelabhata</strong>, featuring state-of-the-art academic buildings and fully air-conditioned hostels. IIT Bhilai is rapidly gaining recognition for its research in <strong className="text-gray-900">Mechatronics, Data Science, and Electric Vehicle Technology</strong>.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-orange-800"><strong>Pro Tip:</strong> Students with an AIR between <strong>7,000 and 10,000</strong> often choose IIT Bhilai for its CSE or DS&AI branches due to the modern curriculum and high placement growth compared to core branches in older IITs.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (B.Tech)', value: '₹15.1 LPA' },
                            { label: 'Avg Package (Overall)', value: '₹13.28 LPA' },
                            { label: 'Highest Domestic', value: '₹48.92 LPA' },
                            { label: 'Placement Rate', value: '73.54%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Amazon, Nvidia, TCS, Deloitte, Accenture, HCL Tech
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
                                    <Th className="text-center">Other Fees*</Th>
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
                        <p>* Other Fees include hostel seat rent, mess charges (₹26,660), and insurance premium.</p>
                        <p>* One-time Admission Fee: ₹19,000 (Payable at registration).</p>
                        <p>* Refundable Deposit: ₹12,000 (Caution Money).</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-orange-600 mb-2">{c.label}</div>
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

                {/* ── 7. Admission Process ──────────────────────────────────────── */}
                <section id="admission">
                    <SectionTitle icon={GraduationCap}>Admission Process 2026</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Bhilai
                    </h2>
                    <p className="text-orange-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Bhilai and other top IITs.
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

export default IITBhilai;
