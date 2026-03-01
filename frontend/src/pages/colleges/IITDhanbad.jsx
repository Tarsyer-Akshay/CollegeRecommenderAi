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
    { param: 'College Name', detail: 'Indian Institute of Technology (ISM) Dhanbad' },
    { param: 'Location', detail: 'Dhanbad, Jharkhand' },
    { param: 'Established Year', detail: '1926' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 3585, ews: 458, obc: 1311, sc: 708, st: 318 },
    { branch: 'Mathematics & Computing', general: 4335, ews: 528, obc: 1983, sc: 1074, st: 621 },
    { branch: 'Electronics & Comm. (ECE)', general: 5839, ews: 721, obc: 2245, sc: 1337, st: 576 },
    { branch: 'Electrical Engineering', general: 7603, ews: 1121, obc: 2859, sc: 1757, st: 778 },
    { branch: 'Mechanical Engineering', general: 10273, ews: 1606, obc: 3835, sc: 2227, st: 1023 },
    { branch: 'Chemical Engineering', general: 11980, ews: 1889, obc: 4001, sc: 2456, st: 1189 },
    { branch: 'Petroleum Engineering', general: 12709, ews: 1904, obc: 4373, sc: 2624, st: 1122 },
    { branch: 'Mining Engineering', general: 15455, ews: 2302, obc: 5319, sc: 3089, st: 1255 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹31.71 LPA', highestPackage: '₹122.00 LPA' },
    { branch: 'Electronics & Comm. (ECE)', avgPackage: '₹24.02 LPA', highestPackage: '₹51.03 LPA' },
    { branch: 'Electrical Engineering', avgPackage: '₹20.49 LPA', highestPackage: '₹51.03 LPA' },
    { branch: 'Petroleum Engineering', avgPackage: '₹18.15 LPA', highestPackage: '₹51.00 LPA' },
    { branch: 'Mining Engineering', avgPackage: '₹14.46 LPA', highestPackage: '₹28.34 LPA' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹46,400', total: '₹1,46,400' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹46,400', total: '₹79,733' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹46,400', total: '₹46,400', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech (13 Specializations)', items: 'Including Mining Machinery Engineering and Environmental Engineering — unique to IIT Dhanbad' },
    { label: '5-Year Integrated M.Tech', items: 'Applied Geology and Applied Geophysics' },
    { label: 'Dual Degree: B.Tech Mining + MBA', items: 'Logistic & Supply Chain Management in collaboration with IIM Mumbai' },
    { label: 'Postgraduate Programs', items: 'M.Tech, MBA, M.Sc, and M.Sc Tech across multiple disciplines' },
];

const RANKINGS = [
    { body: 'NIRF 2025 (Engineering)', rank: '#15', icon: Award },
    { body: 'NIRF 2025 (Research)', rank: '#27', icon: Star },
    { body: 'QS World (Mining & Mineral)', rank: '#20 Globally · #1 in India', icon: Award },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 (to enter the top 2.5 lakh).',
    'Secure a rank in JEE Advanced 2026 (May 2026).',
    'Participate in JoSAA 2026 counseling and prioritize IIT Dhanbad.',
    'Secure a seat based on your All India Rank (AIR) and Category.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-zinc-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITDhanbad = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology (ISM) Dhanbad",
        "alternateName": "IIT Dhanbad",
        "url": "https://www.iitism.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Dhanbad (ISM), established in 1926, is one of India's oldest engineering institutions. Originally the Indian School of Mines, it was granted IIT status in 2016. It is the global leader in Mineral & Mining Engineering (QS #20).",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dhanbad",
            "addressRegion": "Jharkhand",
            "addressCountry": "IN"
        },
        "foundingDate": "1926"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Dhanbad CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Dhanbad was 3585.' },
        { q: 'What is the average placement package at IIT Dhanbad?', a: 'The overall average package (2025) is ₹17.60 LPA. CSE graduates averaged ₹31.71 LPA with a highest of ₹1.22 Crore (international). The highest domestic offer was ₹83.00 LPA.' },
        { q: 'What are the fees at IIT Dhanbad?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,46,400. SC/ST/PwD students pay ₹46,400 as tuition is fully exempted. Caution money is ₹30,000 (one-time, refundable).' },
        { q: 'Why is IIT Dhanbad unique?', a: 'IIT Dhanbad holds the legacy of the Indian School of Mines (1926). It is ranked #20 globally and #1 in India for Mineral & Mining Engineering by QS. Its Petroleum and Mining branches offer near-guaranteed PSU placements (ONGC, Coal India).' },
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
                title="IIT Dhanbad Cutoff, Fees, Placements, Ranking"
                description="Check IIT Dhanbad (ISM) branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data."
                canonicalPath="/colleges/iit-dhanbad"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-zinc-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            ⛏️ Est. 1926 · Coal Capital Legacy · QS #20 Mining Globally
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT (ISM) Dhanbad
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Dhanbad, Jharkhand' },
                            { icon: Calendar, text: 'Est. 1926' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #15' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-zinc-400/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-slate-500 pl-6">
                    The Indian Institute of Technology (Indian School of Mines), Dhanbad, <strong className="text-gray-900">established in 1926</strong>, is one of India's oldest and most prestigious institutions. Originally founded to serve the mining and petroleum sectors, it was granted IIT status in 2016. Located in the heart of India's "Coal Capital," IIT Dhanbad offers a unique blend of <strong className="text-gray-900">heritage and cutting-edge research</strong>, consistently ranking as the <strong className="text-gray-900">global leader in Mineral & Mining Engineering</strong>.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-slate-800"><strong>Pro Tip:</strong> Students with an AIR between <strong>12,000 and 15,000</strong> often prioritize IIT Dhanbad's Petroleum and Mining branches for near-guaranteed <strong>PSU placements</strong> (ONGC, Coal India) with high job security.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (Overall)', value: '₹17.60 LPA' },
                            { label: 'Highest International', value: '₹1.22 Cr PA' },
                            { label: 'Highest Domestic', value: '₹83.00 LPA' },
                            { label: 'Placement Rate', value: '~80.13%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-slate-50 to-zinc-50 border border-slate-200 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Tata Steel, ONGC, Coal India, Vedanta, Goldman Sachs
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
                                    <Th className="text-center">Other Fees</Th>
                                    <Th className="text-center">Total per Sem</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-slate-100 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Mess Advance: ₹18,000 per semester.</p>
                        <p>* Caution Money: ₹30,000 (One-time, Refundable).</p>
                        <p>* Admission Fee: Included in "Other Fees" for the first semester.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-slate-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-zinc-50 border border-slate-200 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-slate-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-zinc-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-slate-50 to-zinc-50 border border-slate-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-slate-700 to-zinc-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Dhanbad
                    </h2>
                    <p className="text-slate-200 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Dhanbad and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-slate-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITDhanbad;
