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
    { param: 'College Name', detail: 'Indian Institute of Technology Guwahati (IITG)' },
    { param: 'Location', detail: 'Guwahati, Assam' },
    { param: 'Established Year', detail: '1994' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 792, ews: 118, obc: 183, sc: 183, st: 99 },
    { branch: 'Data Science & AI', general: 1078, ews: 190, obc: 468, sc: 297, st: 128 },
    { branch: 'Mathematics & Computing', general: 1276, ews: 214, obc: 1000, sc: 343, st: 225 },
    { branch: 'Electronics & Comm. (ECE)', general: 1829, ews: 301, obc: 499, sc: 499, st: 283 },
    { branch: 'Electrical Engineering (EEE)', general: 2195, ews: 377, obc: 656, sc: 656, st: 325 },
    { branch: 'Mechanical Engineering', general: 4892, ews: 825, obc: 1240, sc: 1240, st: 610 },
    { branch: 'Chemical Engineering', general: 6053, ews: 1074, obc: 1490, sc: 1490, st: 857 },
    { branch: 'Civil Engineering', general: 9021, ews: 1379, obc: 1997, sc: 1997, st: 749 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'CSE', avgPackage: '₹36.94 LPA', highestPackage: '₹1.25 Cr' },
    { branch: 'Mathematics & Computing', avgPackage: '₹34.78 LPA', highestPackage: '₹1.10 Cr' },
    { branch: 'ECE', avgPackage: '₹27.30 LPA', highestPackage: '₹1.20 Cr' },
    { branch: 'Chemical Engineering', avgPackage: '₹22.49 LPA', highestPackage: '₹75.97 LPA' },
    { branch: 'Mechanical Engineering', avgPackage: '₹18.19 LPA', highestPackage: '₹74.74 LPA' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹49,530', total: '₹1,49,530' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹49,530', total: '₹82,863' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹49,530', total: '₹49,530', highlight: true },
];

const COURSES = [
    { label: 'B.Tech', items: '12 disciplines including Energy Engineering and Engineering Physics' },
    { label: 'B.Des', items: 'One of the few IITs to offer a top-rated Bachelor of Design program' },
    { label: 'M.Tech / M.Sc', items: 'Multiple specializations across engineering and science' },
    { label: 'MA', items: 'Development Studies (Unique to IITG)' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#7 (Engineering) | #8 (Overall)', icon: Award },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026.',
    'Secure a rank in JEE Advanced 2026.',
    'Register for JoSAA 2026 counseling and lock IIT Guwahati.',
    'Secure a seat based on your All India Rank (AIR) and Category.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-600 to-blue-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITGuwahati = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Guwahati",
        "alternateName": "IIT Guwahati",
        "url": "https://www.iitg.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Guwahati, established in 1994, is the sixth member of the IIT fraternity. Spanning 700 acres on the banks of the Brahmaputra, it is renowned for research in Data Science, AI, and Biotechnology.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Guwahati",
            "addressRegion": "Assam",
            "addressCountry": "IN"
        },
        "foundingDate": "1994"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Guwahati CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Guwahati was 792.' },
        { q: 'What is the average placement package at IIT Guwahati?', a: 'The overall average B.Tech package is ₹25.21 LPA. CSE graduates received an average of ₹36.94 LPA with the highest at ₹1.25 Crore.' },
        { q: 'What are the fees at IIT Guwahati?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,49,530. SC/ST/PwD students pay ₹49,530 as tuition is fully exempted.' },
        { q: 'Does IIT Guwahati offer a Data Science & AI program?', a: 'Yes, IIT Guwahati offers a dedicated Data Science & AI program with a closing rank of 1078 (General), making it one of the top AI programs available through JEE Advanced.' },
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
                title="IIT Guwahati Cutoff, Fees, Placements, Ranking"
                description="Check IIT Guwahati (IITG) branch-wise cutoff (2025), latest placement statistics (2026), fee structure, and NIRF rankings. Updated data for 2026 aspirants."
                canonicalPath="/colleges/iit-guwahati"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-blue-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🌊 700-Acre Campus on the Brahmaputra
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Guwahati
                        </h1>
                        <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Guwahati, Assam' },
                            { icon: Calendar, text: 'Est. 1994' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #7' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-sky-500 pl-6">
                    The Indian Institute of Technology Guwahati (IITG), established in 1994, is the <strong className="text-gray-900">sixth member of the IIT fraternity</strong>. Spanning 700 acres on the banks of the Brahmaputra river, it is renowned for its scenic campus and top-tier research in <strong className="text-gray-900">Data Science, AI, and Biotechnology</strong>.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-sky-800"><strong>Pro Tip:</strong> IIT Guwahati's <strong>Data Science & AI program</strong> (closing rank 1078, General) is one of the most sought-after AI seats in India, alongside dedicated programs at IIT Kharagpur and IIT Hyderabad.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025-26 Season)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (B.Tech)', value: '₹25.21 LPA' },
                            { label: 'Median Package', value: '₹19.48 LPA' },
                            { label: 'Highest Package', value: '₹1.25 Cr PA' },
                            { label: 'Total Offers', value: '1,001+' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Qualcomm, Apple, JP Morgan
                    </motion.div>

                    {/* Branch-wise table */}
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average Package (LPA)</Th><Th className="text-center">Highest Package</Th></tr>
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
                                    <Th className="text-center">Other Fees</Th>
                                    <Th className="text-center">Total per Sem</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-sky-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel Rent: ₹1,000 per semester.</p>
                        <p>* Mess Advance: ₹14,000 per semester (adjustable).</p>
                        <p>* Admission Fee (One-time): ₹15.9K (approx).</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-sky-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-sky-600 to-blue-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Guwahati
                    </h2>
                    <p className="text-sky-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Guwahati and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-sky-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITGuwahati;
