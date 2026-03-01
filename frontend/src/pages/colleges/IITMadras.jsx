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
    { param: 'College Name', detail: 'Indian Institute of Technology Madras (IITM)' },
    { param: 'Location', detail: 'Chennai, Tamil Nadu' },
    { param: 'Established Year', detail: '1959' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 171, ews: 29, obc: 87, sc: 31, st: 19 },
    { branch: 'Artificial Intelligence (AI & DA)', general: 306, ews: 65, obc: 165, sc: 44, st: 28 },
    { branch: 'Electrical Engineering', general: 849, ews: 198, obc: 396, sc: 153, st: 148 },
    { branch: 'Engineering Physics', general: 1441, ews: 586, obc: 1011, sc: 719, st: 478 },
    { branch: 'Mechanical Engineering', general: 2468, ews: 479, obc: 1070, sc: 386, st: 351 },
    { branch: 'Aerospace Engineering', general: 3211, ews: 645, obc: 1508, sc: 417, st: 540 },
    { branch: 'Chemical Engineering', general: 4116, ews: 767, obc: 1869, sc: 620, st: 609 },
    { branch: 'Civil Engineering', general: 6112, ews: 949, obc: 2403, sc: 424, st: 374 },
    { branch: 'Metallurgical & Materials', general: 5499, ews: 1115, obc: 2343, sc: 739, st: 700 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'CSE', avgPackage: '₹53.20 LPA', topIndustry: 'IT / Software / Quant' },
    { branch: 'Electrical', avgPackage: '₹28.80 LPA', topIndustry: 'Core Electronics / AI' },
    { branch: 'Engineering Physics', avgPackage: '₹34.10 LPA', topIndustry: 'R&D / Consulting' },
    { branch: 'Mechanical', avgPackage: '₹18.50 LPA', topIndustry: 'Manufacturing / EV' },
    { branch: 'Aerospace', avgPackage: '₹17.10 LPA', topIndustry: 'Space-Tech / Defense' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹15,417', total: '₹1,15,417' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹15,417', total: '₹48,750' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹15,417', total: '₹15,417', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech', items: '12 disciplines including Naval Architecture & Ocean Engineering and Biological Engineering' },
    { label: '5-Year Dual Degree (B.Tech + M.Tech)', items: 'Aerospace, Engineering Design, and more' },
    { label: '5-Year Dual Degree (BS + MS)', items: 'Physics and Biological Sciences' },
    { label: 'Interdisciplinary Dual Degree (IDDD)', items: 'Data Science, Robotics, and Energy Systems' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#1 (Engineering) | #1 (Overall)', icon: Award },
    { body: 'QS World 2026', rank: '#227 (Globally)', icon: Star },
];

const ADMISSION_STEPS = [
    'Clear JEE Main 2026 (to qualify for Advanced).',
    'Secure a top rank in JEE Advanced 2026 (held in May).',
    'Apply through JoSAA Counseling and lock IIT Madras as your first choice.',
    'Secure a seat based on your All India Rank (AIR) and Category.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITMadras = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Madras",
        "alternateName": "IIT Madras",
        "url": "https://www.iitm.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Madras, established in 1959, has been ranked #1 Engineering Institute in India by NIRF for the 10th consecutive year. It is the most sought-after destination for JEE Advanced toppers.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
        },
        "foundingDate": "1959"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Madras CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Madras was 171. Students with an AIR below 200 consistently choose IIT Madras CSE.' },
        { q: 'What is the average placement package at IIT Madras?', a: 'The overall average B.Tech package is ₹22–24 LPA. CSE graduates received an average of ₹53.20 LPA, one of the highest in India.' },
        { q: 'What are the fees at IIT Madras?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,15,417. SC/ST/PwD students pay ₹15,417 as tuition is fully exempted.' },
        { q: 'Why is IIT Madras ranked #1?', a: 'IIT Madras has been ranked #1 in Engineering by NIRF for 10 consecutive years due to its exceptional research output, placement record, and academic standards.' },
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
                title="IIT Madras Cutoff, Fees, Placements, Ranking"
                description="Explore IIT Madras (IITM) branch-wise JEE Advanced 2025 cutoffs, 2026 fee structure, and the latest placement statistics. Updated data for 2026 aspirants."
                canonicalPath="/colleges/iit-madras"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏆 NIRF #1 Engineering for 10 Consecutive Years
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Madras
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Chennai, Tamil Nadu' },
                            { icon: Calendar, text: 'Est. 1959' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #1' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-6">
                    The Indian Institute of Technology Madras (IITM), established in 1959, is the jewel of India's technical education. For the <strong className="text-gray-900">10th consecutive year</strong>, it has been ranked as the <strong className="text-gray-900">#1 Engineering Institute in India by NIRF</strong>, making it the most sought-after destination for JEE Advanced toppers.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-blue-800"><strong>Pro Tip:</strong> Students with an AIR below 200 consistently choose IIT Madras CSE, making it one of the elite <strong>"Top 5" branches</strong> in the country.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2024-25 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (B.Tech)', value: '₹22–24 LPA' },
                            { label: 'Median Package', value: '₹19.60 LPA' },
                            { label: 'Highest Package', value: '₹1.31 Cr PA' },
                            { label: 'Placement Rate', value: '80%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Microsoft, Google, Amazon, American Express, Goldman Sachs, Airbus, Mercedes-Benz R&amp;D
                    </motion.div>

                    {/* Branch-wise table */}
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average Package (LPA)</Th><Th className="text-center">Top Industry</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.avgPackage}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.topIndustry}</td>
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
                                    <tr key={i} className={r.highlight ? 'bg-blue-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel Fees: Approx. ₹7,500 per semester (Seat Rent).</p>
                        <p>* Mess Advance: Approx. ₹22,500 per semester.</p>
                        <p>* One-time Admission Fee: ₹20,000 (Payable only in the 1st semester).</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-blue-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Madras
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Madras and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITMadras;
