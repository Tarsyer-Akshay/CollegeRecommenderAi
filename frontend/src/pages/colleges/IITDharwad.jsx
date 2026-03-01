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
    { param: 'College Name', detail: 'Indian Institute of Technology Dharwad (IITDH)' },
    { param: 'Location', detail: 'Dharwad, Karnataka' },
    { param: 'Established Year', detail: '2016' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 7208, ews: 850, obc: 2603, sc: 1367, st: 574 },
    { branch: 'Mathematics & Computing', general: 8222, ews: 1177, obc: 2829, sc: 1471, st: 798 },
    { branch: 'Electronics & Comm. (ECE)', general: 9476, ews: 1468, obc: 3378, sc: 1722, st: 840 },
    { branch: 'Electrical Engineering', general: 11051, ews: 1577, obc: 3833, sc: 2090, st: 915 },
    { branch: 'Mechanical Engineering', general: 14852, ews: 2206, obc: 5092, sc: 2641, st: 1120 },
    { branch: 'Engineering Physics', general: 15353, ews: 2349, obc: 5267, sc: 3143, st: 1271 },
    { branch: 'Chemical & Biochemical', general: 16680, ews: 2473, obc: 5840, sc: 3131, st: 1340 },
    { branch: 'Civil & Infrastructure', general: 17472, ews: 2432, obc: 5559, sc: 2866, st: 1080 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹18.00 LPA', placementRate: '96.1%' },
    { branch: 'Electrical Engineering', avgPackage: '₹14.50 LPA', placementRate: '87.5%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹11.20 LPA', placementRate: '84.2%' },
    { branch: 'Civil Engineering', avgPackage: '₹9.80 LPA', placementRate: '90.0%' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹42,750', total: '₹1,42,750' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹42,750', total: '₹76,083' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹42,750', total: '₹42,750', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech (8 Branches)', items: 'CSE, MnC, ECE, EE, ME, Engineering Physics, Chemical & Biochemical, Civil & Infrastructure' },
    { label: '5-Year BS-MS', items: 'Integrated Interdisciplinary Sciences program' },
    { label: 'M.Tech', items: 'Specializations in Data Science, AI, and Microelectronics' },
    { label: 'Executive M.Tech', items: 'Specialized programs for working professionals' },
];

const RANKINGS = [
    { body: 'NIRF 2025 (Engineering)', rank: '#77 — Up 24+ ranks from 2024!', icon: Award },
    { body: 'IIRF 2025', rank: '#57 in India', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 (held in January/April 2026).',
    'Secure a rank in JEE Advanced 2026 (Scheduled for May 17, 2026).',
    'Participate in JoSAA 2026 counseling and prioritize IIT Dharwad.',
    '(For PG): Admission via GATE (M.Tech) or IIT-JAM (M.Sc).',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lime-600 to-green-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-lime-700 bg-lime-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITDharwad = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Dharwad",
        "alternateName": "IIT Dharwad",
        "url": "https://www.iitdh.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Dharwad, established in 2016, is a third-generation IIT in Karnataka's Knowledge Hub. Known for its focus on Data Science, Sustainable Energy, and Advanced Manufacturing with a 470-acre permanent campus.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dharwad",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
        },
        "foundingDate": "2016"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Dharwad CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Dharwad was 7208.' },
        { q: 'What is the average placement package at IIT Dharwad?', a: 'The overall average package (2025) is ₹14.65 LPA. CSE graduates averaged ₹18.00 LPA with 96.1% placement. The highest was ₹55 LPA (international) and ₹38.50 LPA (domestic).' },
        { q: 'What are the fees at IIT Dharwad?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,42,750. SC/ST/PwD students pay ₹42,750 as tuition is fully exempted.' },
        { q: 'What makes IIT Dharwad special?', a: 'IIT Dharwad jumped 24+ ranks in NIRF 2025 to #77 Engineering. It has a brand-new 470-acre permanent campus in Chikkamalligawad, offers unique programs like BS-MS Interdisciplinary Sciences, and is known for Data Science, Sustainable Energy, and Advanced Manufacturing research.' },
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
                title="IIT Dharwad Cutoff, Fees, Placements, Ranking"
                description="Check IIT Dharwad branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data for aspirants."
                canonicalPath="/colleges/iit-dharwad"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-lime-700 via-lime-600 to-green-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            📚 Karnataka's Knowledge Hub · 470-Acre Permanent Campus
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Dharwad
                        </h1>
                        <p className="text-xl md:text-2xl text-lime-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Dharwad, Karnataka' },
                            { icon: Calendar, text: 'Est. 2016' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #77' },
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
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-lime-500 pl-6">
                    The Indian Institute of Technology Dharwad (IITDH), established in 2016, is a premier third-generation IIT located in the "Knowledge Hub" of Karnataka. Since its inception, the institute has made rapid strides in research and academic excellence, recently moving to its <strong className="text-gray-900">permanent 470-acre campus in Chikkamalligawad</strong>. Known for its focus on <strong className="text-gray-900">Data Science, Sustainable Energy, and Advanced Manufacturing</strong>, IIT Dharwad is a top choice for students looking for a modern IIT experience in South India.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-lime-50 border border-lime-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-lime-800"><strong>Pro Tip:</strong> Students with an AIR between <strong>6,000 and 9,000</strong> often choose IIT Dharwad for CSE or MnC due to the high placement trajectory and the mentorship provided by established academic bodies.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (Overall)', value: '₹14.65 LPA' },
                            { label: 'Highest Domestic', value: '₹38.50 LPA' },
                            { label: 'Highest International', value: '₹55.00 LPA' },
                            { label: 'Placement Rate', value: '89.65%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-lime-50 to-green-50 border border-lime-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Amazon, Google, Microsoft, Texas Instruments, NVIDIA, Goldman Sachs, Siemens
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
                                    <tr key={i} className={r.highlight ? 'bg-lime-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel Seat Rent: ₹1,000 per semester. Mess Advance: ₹21,000 – ₹24,500 (Adjustable).</p>
                        <p>* One-time Admission Fee: ₹5,000. Refundable Deposits: ₹6,000 (Institute & Library).</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-lime-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-lime-50 to-green-50 border border-lime-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-lime-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-600 to-green-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-lime-50 to-green-50 border border-lime-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-lime-600 to-green-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Dharwad
                    </h2>
                    <p className="text-lime-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Dharwad and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-lime-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITDharwad;
