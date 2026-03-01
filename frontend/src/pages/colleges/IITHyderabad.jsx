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
    { param: 'College Name', detail: 'Indian Institute of Technology Hyderabad (IITH)' },
    { param: 'Location', detail: 'Kandi, Sangareddy, Telangana' },
    { param: 'Established Year', detail: '2008' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 673, ews: 127, obc: 293, sc: 198, st: 89 },
    { branch: 'Artificial Intelligence (AI)', general: 861, ews: 165, obc: 380, sc: 222, st: 115 },
    { branch: 'Mathematics & Computing', general: 1015, ews: 215, obc: 441, sc: 303, st: 155 },
    { branch: 'Computational Engineering', general: 1866, ews: 347, obc: 945, sc: 705, st: 312 },
    { branch: 'Electrical Engineering', general: 1900, ews: 400, obc: 1024, sc: 553, st: 203 },
    { branch: 'Mechanical Engineering', general: 4443, ews: 750, obc: 2005, sc: 1187, st: 605 },
    { branch: 'Chemical Engineering', general: 5756, ews: 920, obc: 2453, sc: 1448, st: 690 },
    { branch: 'Civil Engineering', general: 8698, ews: 1450, obc: 3453, sc: 1844, st: 749 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹43.10 LPA', placementRate: '98.0%' },
    { branch: 'Artificial Intelligence (AI)', avgPackage: '₹31.99 LPA', placementRate: '88.9%' },
    { branch: 'Electrical Engineering', avgPackage: '₹24.00 LPA', placementRate: '93.1%' },
    { branch: 'Bioengineering', avgPackage: '₹21.63 LPA', placementRate: '75.0%' },
    { branch: 'Chemical Engineering', avgPackage: '₹20.49 LPA', placementRate: '67.6%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹20.00 LPA', placementRate: '82.0%' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹45,190', total: '₹1,45,190' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹45,190', total: '₹78,523' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹45,190', total: '₹45,190', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech', items: 'CSE, AI, Electrical, Mechanical, Civil, Chemical, Engineering Physics, and Biomedical Engineering' },
    { label: 'Bachelor of Design (B.Des)', items: 'Renowned program admitted via UCEED' },
    { label: 'Interdisciplinary Programs', items: 'Computational Engineering and Engineering Science' },
    { label: 'Dual Degree', items: 'B.Tech + M.Tech options in several core branches' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#7 (Engineering) | #12 (Overall)', icon: Award },
    { body: 'QS World 2026', rank: '#664 (Global) | #60 (Southern Asia)', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 (to reach the top 2.5 lakh candidates).',
    'Secure a top rank in JEE Advanced 2026 (May 2026).',
    'Participate in JoSAA 2026 counseling and choose IIT Hyderabad.',
    '(For B.Des): Admission is via UCEED 2026.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-600 to-purple-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-fuchsia-700 bg-fuchsia-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITHyderabad = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Hyderabad",
        "alternateName": "IIT Hyderabad",
        "url": "https://www.iith.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Hyderabad, established in 2008, is a pioneer in interdisciplinary research, offering unique programs like Artificial Intelligence and Fractal Academics. It consistently ranks in the Top 10 Engineering institutes in India.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kandi, Sangareddy",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
        },
        "foundingDate": "2008"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Hyderabad CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Hyderabad was 673.' },
        { q: 'What is the average placement package at IIT Hyderabad?', a: 'The B.Tech average package is ₹30.62 LPA. CSE graduates averaged ₹43.10 LPA with a 98% placement rate. The highest international offer was ₹1.6 Crore.' },
        { q: 'What are the fees at IIT Hyderabad?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,45,190. SC/ST/PwD students pay ₹45,190 as tuition is fully exempted.' },
        { q: 'Does IIT Hyderabad offer a B.Tech in AI?', a: 'Yes! IITH was the first IIT to launch a full B.Tech in Artificial Intelligence, with a closing rank of 861 (General). It remains the most competitive AI program nationwide.' },
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
                title="IIT Hyderabad Cutoff, Fees, Placements, Ranking"
                description="Check IIT Hyderabad (IITH) branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data for aspirants."
                canonicalPath="/colleges/iit-hyderabad"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-700 via-fuchsia-600 to-purple-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🤖 India's AI Pioneer · First B.Tech in AI
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Hyderabad
                        </h1>
                        <p className="text-xl md:text-2xl text-fuchsia-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Sangareddy, Telangana' },
                            { icon: Calendar, text: 'Est. 2008' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-purple-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-fuchsia-500 pl-6">
                    The Indian Institute of Technology Hyderabad (IITH), established in 2008, has rapidly emerged as one of the most innovative second-generation IITs. Located in Kandi, Sangareddy, IITH is a <strong className="text-gray-900">pioneer in interdisciplinary research</strong>, offering unique programs like <strong className="text-gray-900">Artificial Intelligence and Fractal Academics</strong>. It consistently ranks in the Top 10 Engineering institutes in India.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-fuchsia-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-fuchsia-800"><strong>Pro Tip:</strong> IITH was the <strong>first IIT to launch a full B.Tech in Artificial Intelligence</strong>, and it remains the most competitive program in this domain nationwide (closing rank 861, General).</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (B.Tech)', value: '₹30.62 LPA' },
                            { label: 'Highest Domestic', value: '₹90 LPA' },
                            { label: 'Highest International', value: '₹1.6 Cr PA' },
                            { label: 'Placement Rate', value: '96%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-fuchsia-50 to-purple-50 border border-fuchsia-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Total Offers:</strong> 710+ &nbsp;|&nbsp; <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Goldman Sachs, Qualcomm, Facebook, Oracle, Samsung
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
                                    <tr key={i} className={r.highlight ? 'bg-fuchsia-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel & Mess Charges: Approx. ₹31,470 per semester (included in "Other Fees").</p>
                        <p>* One-time Admission Fee: ₹19,000 (Payable at registration).</p>
                        <p>* Refundable Deposits: ₹6,000.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-fuchsia-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Rankings (2025-2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-fuchsia-50 to-purple-50 border border-fuchsia-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-fuchsia-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-fuchsia-600 to-purple-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Hyderabad
                    </h2>
                    <p className="text-fuchsia-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Hyderabad and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-fuchsia-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITHyderabad;
