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
    { param: 'College Name', detail: 'Indian Institute of Technology Indore (IITI)' },
    { param: 'Location', detail: 'Simrol, Indore, Madhya Pradesh' },
    { param: 'Established Year', detail: '2009' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 1775, ews: 216, obc: 585, sc: 329, st: 155 },
    { branch: 'Mathematics & Computing', general: 2099, ews: 332, obc: 999, sc: 713, st: 360 },
    { branch: 'Electrical Engineering', general: 3723, ews: 609, obc: 1651, sc: 978, st: 492 },
    { branch: 'Space Sciences & Eng.', general: 7419, ews: 1395, obc: 3048, sc: 1502, st: 795 },
    { branch: 'Mechanical Engineering', general: 7545, ews: 1225, obc: 2937, sc: 1871, st: 804 },
    { branch: 'Engineering Physics', general: 8299, ews: 1666, obc: 3586, sc: 2373, st: 1248 },
    { branch: 'Chemical Engineering', general: 8824, ews: 1297, obc: 3502, sc: 2047, st: 985 },
    { branch: 'Civil Engineering', general: 10641, ews: 1651, obc: 3937, sc: 2406, st: 842 },
    { branch: 'Metallurgical & Materials', general: 11274, ews: 1912, obc: 4698, sc: 2719, st: 1242 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹32.60 LPA', placementRate: '96.8%' },
    { branch: 'Electrical Engineering', avgPackage: '₹25.70 LPA', placementRate: '96.8%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹21.88 LPA', placementRate: '88.3%' },
    { branch: 'Metallurgical & Materials', avgPackage: '₹18.95 LPA', placementRate: '89.2%' },
    { branch: 'Civil Engineering', avgPackage: '₹17.37 LPA', placementRate: '71.0%' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹59,550', total: '₹1,59,550' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹59,550', total: '₹92,883' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹59,550', total: '₹59,550', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech (9 Disciplines)', items: 'CSE, Electrical, Mechanical, Civil, Chemical, Metallurgical, Engineering Physics, Math & Computing, and Space Sciences & Engineering' },
    { label: 'B.Des (Bachelor of Design)', items: 'Admissions via UCEED' },
    { label: 'M.Tech', items: 'Advanced Manufacturing, VLSI Design, Space Engineering, and more' },
    { label: 'M.Sc', items: 'Physics, Chemistry, Mathematics, and Astronomy' },
];

const RANKINGS = [
    { body: 'NIRF 2025 (Engineering)', rank: '#12 — Climbed from #16 in 2024!', icon: Award },
    { body: 'NIRF 2025 (Overall)', rank: '#27', icon: Award },
    { body: 'QS World 2026', rank: '#556 Globally', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 to be eligible for the next stage.',
    'Secure a rank in JEE Advanced 2026 (held in May).',
    'Participate in JoSAA 2026 counseling and prioritize IIT Indore.',
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

const IITIndore = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Indore",
        "alternateName": "IIT Indore",
        "url": "https://www.iiti.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Indore, established in 2009, is known for its world-class research facilities and a modern 500-acre campus. A top choice for Space Science and Computer Science programs.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Simrol, Indore",
            "addressRegion": "Madhya Pradesh",
            "addressCountry": "IN"
        },
        "foundingDate": "2009"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Indore CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Indore was 1775.' },
        { q: 'What is the average placement package at IIT Indore?', a: 'The B.Tech average package (2025) is ₹27.00 LPA — a 13% surge over the previous year. CSE graduates averaged ₹32.60 LPA. The highest international offer was ₹1.37 Crore.' },
        { q: 'What are the fees at IIT Indore?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,59,550. SC/ST/PwD students pay ₹59,550 as tuition is fully exempted.' },
        { q: 'What is IIT Indore\'s NIRF ranking?', a: 'IIT Indore is ranked #12 in Engineering by NIRF 2025, climbing from #16 in 2024. Its overall ranking is #27. It is also ranked #556 globally by QS World 2026.' },
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
                title="IIT Indore Cutoff, Fees, Placements, Ranking"
                description="Check IIT Indore (IITI) branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data for aspirants."
                canonicalPath="/colleges/iit-indore"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-blue-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🚀 NIRF #12 (↑4 Spots!) · Space Science & CS Hub
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Indore
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
                            { icon: MapPin, text: 'Indore, Madhya Pradesh' },
                            { icon: Calendar, text: 'Est. 2009' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #12' },
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
                    The Indian Institute of Technology Indore (IITI), established in 2009, is a premier second-generation IIT located in Simrol, Madhya Pradesh. Known for its <strong className="text-gray-900">world-class research facilities and a modern 500-acre campus</strong>, IIT Indore has quickly become a top choice for students, particularly for its <strong className="text-gray-900">Space Science and Computer Science programs</strong>.
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
                        <p className="text-sm text-sky-800"><strong>Pro Tip:</strong> IIT Indore's CSE closing rank of <strong>1775 (General)</strong> is among the most competitive in the second-generation IITs. Its unique <strong>Space Sciences & Engineering</strong> program (rank 7419) is ideal for ISRO aspirants.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (B.Tech)', value: '₹27.00 LPA' },
                            { label: 'Highest International', value: '₹1.37 Cr PA' },
                            { label: 'Highest Domestic', value: '₹68.00 LPA' },
                            { label: 'Placement Rate', value: '88%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Nvidia, Goldman Sachs, Samsung R&D, Texas Instruments
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
                                    <Th className="text-center">Other Charges*</Th>
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
                        <p>* Other Charges include accommodation, mess advance (₹17,550), and group insurance.</p>
                        <p>* One-time Admission Fee: ₹18,100 (Payable at admission).</p>
                        <p>* Refundable Deposit: ₹10,000.</p>
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
                    <SectionTitle icon={Award}>Rankings (2025-2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-3 gap-4">
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
                        Check Your Chances at IIT Indore
                    </h2>
                    <p className="text-sky-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Indore and other top IITs.
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

export default IITIndore;
