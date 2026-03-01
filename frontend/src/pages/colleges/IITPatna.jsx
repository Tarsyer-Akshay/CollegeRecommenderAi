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
    { param: 'College Name', detail: 'Indian Institute of Technology Patna (IITP)' },
    { param: 'Location', detail: 'Bihta, Patna, Bihar' },
    { param: 'Established Year', detail: '2008' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 3377, ews: 531, obc: 1312, sc: 988, st: 375 },
    { branch: 'AI & Data Science', general: 4312, ews: 621, obc: 1862, sc: 1022, st: 585 },
    { branch: 'Mathematics & Computing', general: 4851, ews: 751, obc: 2095, sc: 1577, st: 711 },
    { branch: 'Electronics & Comm. (ECE)', general: 6167, ews: 817, obc: 2225, sc: 1291, st: 1015 },
    { branch: 'Electrical & Electronics (EEE)', general: 7502, ews: 920, obc: 3094, sc: 1900, st: 850 },
    { branch: 'Mechanical Engineering', general: 11758, ews: 1889, obc: 4001, sc: 2313, st: 1254 },
    { branch: 'Engineering Physics', general: 12986, ews: 2184, obc: 4834, sc: 2874, st: 1221 },
    { branch: 'Chemical Engineering', general: 13715, ews: 2355, obc: 5617, sc: 3026, st: 1332 },
    { branch: 'Civil Engineering', general: 15400, ews: 2541, obc: 5850, sc: 3254, st: 1446 },
    { branch: 'Metallurgical & Materials', general: 16510, ews: 2700, obc: 6100, sc: 3400, st: 1500 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹31.71 LPA', highestPackage: '₹85 LPA' },
    { branch: 'AI & Data Science', avgPackage: '₹26.00 LPA', highestPackage: '₹144 LPA' },
    { branch: 'Electrical Engineering', avgPackage: '₹16.89 LPA', highestPackage: '₹56 LPA' },
    { branch: 'Mechanical Engineering', avgPackage: '₹14.40 LPA', highestPackage: '₹56 LPA' },
    { branch: 'Civil Engineering', avgPackage: '₹14.36 LPA', highestPackage: '₹32.57 LPA' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹27,000', total: '₹1,64,750' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹27,000', total: '₹98,083' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹27,000', total: '₹64,750', highlight: true },
];

const COURSES = [
    { label: 'B.Tech (11 Specializations)', items: 'CSE, AI & Data Science, ECE, EEE, Mechanical, Chemical, Civil, Metallurgical, Engineering Physics, and more' },
    { label: 'Dual Degree (5 Years)', items: 'B.Tech + M.Tech and B.Tech + MBA (Integrated with IIM Bodh Gaya / IIM Mumbai)' },
    { label: 'M.Tech (18 Specializations)', items: 'Mechatronics, VLSI, Power & Control, and more' },
    { label: 'B.Sc (Hons)', items: 'Computer Science & Data Analytics (3-year program)' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#19 (Engineering) | #36 (Overall) | #39 (Research)', icon: Award },
    { body: 'QS BRICS', rank: '#108', icon: Star },
];

const ADMISSION_STEPS = [
    'Clear JEE Main 2026 to qualify for Advanced.',
    'Secure a rank in JEE Advanced 2026.',
    'Participate in JoSAA 2026 counseling and lock IIT Patna.',
    '(For Dual Degree B.Tech+MBA): Admission is via JEE Advanced + Interview process.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-teal-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-cyan-700 bg-cyan-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const IITPatna = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Patna",
        "alternateName": "IIT Patna",
        "url": "https://www.iitp.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Patna, established in 2008, is one of the fastest-growing second-generation IITs. It is a hub for research in Artificial Intelligence, VLSI Design, and Sustainable Energy.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bihta, Patna",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
        },
        "foundingDate": "2008"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Patna CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Patna was 3377.' },
        { q: 'What is the average placement package at IIT Patna?', a: 'The B.Tech average (2026 Phase 1) is ₹25.82 LPA, up from ₹20.89 LPA in 2025. CSE graduates averaged ₹31.71 LPA. The highest offer was ₹1.17 Crore (₹117 LPA).' },
        { q: 'What are the fees at IIT Patna?', a: 'The total 1st semester fee for General/OBC students (income > ₹5L) is ₹1,64,750. SC/ST/PwD students pay ₹64,750 as tuition is fully exempted.' },
        { q: 'Does IIT Patna offer a B.Tech + MBA dual degree?', a: 'Yes! IIT Patna offers a unique B.Tech + MBA dual degree integrated with IIM Bodh Gaya and IIM Mumbai, combining engineering with management education.' },
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
                title="IIT Patna Cutoff, Fees, Placements, Ranking"
                description="Check IIT Patna (IITP) branch-wise JEE Advanced 2025 cutoffs, latest 2026 placement data (Phase 1), fee structure, and NIRF rankings. Updated 2026 data."
                canonicalPath="/colleges/iit-patna"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-cyan-700 via-cyan-600 to-teal-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🚀 Fastest-Growing IIT · ₹1.17 Cr Highest Package!
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Patna
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                            { icon: MapPin, text: 'Patna, Bihar' },
                            { icon: Calendar, text: 'Est. 2008' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #19' },
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
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-teal-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                {/* ── Intro paragraph ───────────────────────────────────────────── */}
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-cyan-500 pl-6">
                    The Indian Institute of Technology Patna (IITP), established in 2008, has become one of the <strong className="text-gray-900">fastest-growing second-generation IITs</strong>. Located in Bihta, the institute is a hub for research and innovation, particularly in <strong className="text-gray-900">Artificial Intelligence, VLSI Design, and Sustainable Energy</strong>. In 2025, IIT Patna made a significant leap in national rankings, solidifying its position among India's elite engineering institutions.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-cyan-50 border border-cyan-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-cyan-800"><strong>Pro Tip:</strong> IIT Patna's CSE closing rank of <strong>3377 (General)</strong> and AI & DS at <strong>4312</strong> make it a strong option for students in the 3,000–5,000 rank range looking for top-tier tech programs at an IIT.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025-26 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (2026)', value: '₹25.82 LPA' },
                            { label: 'Avg Package (2025)', value: '₹20.89 LPA' },
                            { label: 'Highest Package', value: '₹1.17 Cr PA' },
                            { label: 'Phase 1 Rate (CSE)', value: '90%+' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Samsung, BEL, BPCL, CISCO, Optum, Goldman Sachs
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
                                    <Th className="text-center">Campus Amenities</Th>
                                    <Th className="text-center">Total 1st Sem</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-cyan-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                        <p>* Hostel Fee: Included in Campus Amenities (approx. ₹6,500).</p>
                        <p>* Mess Charges: Approx. ₹18,000 – ₹22,000 per semester (Paid separately).</p>
                        <p>* Refundable Caution Deposit: ₹20,000 (One-time).</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-cyan-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-cyan-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-cyan-600 to-teal-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at IIT Patna
                    </h2>
                    <p className="text-cyan-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Patna and other top IITs.
                    </p>
                    <Link to="/jee-advanced">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-cyan-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default IITPatna;
