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
    { param: 'College Name', detail: 'Indian Institute of Technology Palakkad (IITPKD)' },
    { param: 'Location', detail: 'Kanjikode, Palakkad, Kerala' },
    { param: 'Established Year', detail: '2015' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 6454, ews: 792, obc: 2379, sc: 1182, st: 498 },
    { branch: 'Data Science & Engineering', general: 8640, ews: 1140, obc: 3150, sc: 1650, st: 720 },
    { branch: 'Electrical Engineering', general: 10396, ews: 1345, obc: 3650, sc: 2250, st: 1045 },
    { branch: 'Mechanical Engineering', general: 12606, ews: 1920, obc: 4450, sc: 2650, st: 1172 },
    { branch: 'Civil Engineering', general: 16753, ews: 2519, obc: 5841, sc: 3024, st: 1250 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹17.45 LPA', placementRate: '84.78%' },
    { branch: 'Electrical Engineering', avgPackage: '₹15.50 LPA', placementRate: '78.13%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹10.89 LPA', placementRate: '95.83%' },
    { branch: 'Civil Engineering', avgPackage: '₹7.37 LPA', placementRate: '94.44%' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹40,540', total: '₹1,40,540' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹40,540', total: '₹73,873' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹40,540', total: '₹40,540', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech', items: 'CSE, Data Science & Engineering, Electrical, Mechanical, and Civil Engineering' },
    { label: 'M.Tech (10 Specializations)', items: 'Computing and Mathematics, SoC Design, Geotechnical Engineering, and more' },
    { label: 'M.Sc', items: 'Physics, Chemistry, and Mathematics' },
    { label: 'Research Programs', items: 'MS (by Research) and Ph.D. in various engineering and science disciplines' },
];

const RANKINGS = [
    { body: 'NIRF 2025 (Engineering)', rank: '#64', icon: Award },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 to be eligible for the next level.',
    'Secure a rank in JEE Advanced 2026 (held in May).',
    'Participate in JoSAA 2026 counseling and lock IIT Palakkad as your choice.',
    '(For PG): Admission is via GATE (for M.Tech) or IIT-JAM (for M.Sc).',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600 to-emerald-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITPalakkad = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Palakkad",
        "alternateName": "IIT Palakkad",
        "url": "https://www.iitpkd.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Palakkad, established in 2015, is a third-generation IIT mentored by IIT Madras. Located at the foot of the Western Ghats in Kerala, it is a hub for Data Science, Sustainable Engineering, and Civil Infrastructure research.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kanjikode, Palakkad",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
        "foundingDate": "2015"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Palakkad CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Palakkad was 6454.' },
        { q: 'What is the average placement package at IIT Palakkad?', a: 'The overall average package (2025) is ₹13.98 LPA with a median of ₹12.00 LPA. CSE graduates averaged ₹17.45 LPA. The highest offer was ₹52.00 LPA. 168+ companies visited campus.' },
        { q: 'What are the fees at IIT Palakkad?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,40,540. SC/ST/PwD students pay ₹40,540 as tuition is fully exempted.' },
        { q: 'Is IIT Palakkad mentored by IIT Madras?', a: 'Yes! IIT Palakkad is mentored by IIT Madras, which influences its curriculum design, research quality, and academic standards, making it a strong choice among third-generation IITs.' },
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
                title="IIT Palakkad Cutoff, Fees, Placements, Ranking"
                description="Check IIT Palakkad (IITPKD) branch-wise JEE Advanced 2025 cutoffs, latest 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data."
                canonicalPath="/colleges/iit-palakkad"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🌿 Western Ghats Campus · Mentored by IIT Madras
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Palakkad
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Palakkad, Kerala' },
                            { icon: Calendar, text: 'Est. 2015' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #64' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-teal-500 pl-6">
                    The Indian Institute of Technology Palakkad (IITPKD), established in 2015, is one of the third-generation IITs. Located at the foot of the Western Ghats in Kerala, the institute is <strong className="text-gray-900">mentored by IIT Madras</strong> and has quickly established itself as a hub for research in <strong className="text-gray-900">Data Science, Sustainable Engineering, and Civil Infrastructure</strong>. With its permanent campus at Kanjikode, IIT Palakkad offers a pristine academic environment combined with the excellence of the IIT system.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-teal-800"><strong>Pro Tip:</strong> Students with an AIR between <strong>5,000 and 8,000</strong> often choose IIT Palakkad for its CSE and Data Science programs due to the mentorship and curriculum design influenced by IIT Madras.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (Overall)', value: '₹13.98 LPA' },
                            { label: 'Median Package', value: '₹12.00 LPA' },
                            { label: 'Highest Package', value: '₹52.00 LPA' },
                            { label: 'Placement Rate', value: '86.67%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, AMD, TCS, Infosys, L&T, Texas Instruments · <strong>168+</strong> companies
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
                                    <Th className="text-center">Total per Sem</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-teal-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel Seat Rent: ₹6,500 per semester.</p>
                        <p>* Advance Dining (Mess): ₹20,000 per semester (Adjustable against actual bills).</p>
                        <p>* One-time Admission Fee: ₹7,500. Caution Deposit (Refundable): ₹3,500.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-teal-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-teal-600 to-emerald-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Palakkad
                    </h2>
                    <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Palakkad and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-teal-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITPalakkad;
