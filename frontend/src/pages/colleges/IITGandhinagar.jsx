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
    { param: 'College Name', detail: 'Indian Institute of Technology Gandhinagar (IITGN)' },
    { param: 'Location', detail: 'Palaj, Gandhinagar, Gujarat' },
    { param: 'Established Year', detail: '2008' },
    { param: 'Type', detail: 'IIT (Institute of National Importance)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', general: 2020, ews: 281, obc: 805, sc: 428, st: 178 },
    { branch: 'Artificial Intelligence (AI)', general: 2236, ews: 315, obc: 1140, sc: 740, st: 310 },
    { branch: 'Electrical Engineering', general: 3931, ews: 585, obc: 1973, sc: 1245, st: 634 },
    { branch: 'Integrated Circuit Design', general: 4652, ews: 682, obc: 2245, sc: 1580, st: 715 },
    { branch: 'Mechanical Engineering', general: 6904, ews: 1045, obc: 3110, sc: 1769, st: 820 },
    { branch: 'Chemical Engineering', general: 9276, ews: 1420, obc: 3883, sc: 2092, st: 904 },
    { branch: 'Civil Engineering', general: 10796, ews: 1650, obc: 4112, sc: 2639, st: 565 },
    { branch: 'Materials Engineering', general: 11066, ews: 1780, obc: 4728, sc: 2858, st: 1291 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', avgPackage: '₹27.73 LPA', placementRate: '86.05%' },
    { branch: 'Electrical Engineering', avgPackage: '₹23.88 LPA', placementRate: '72.97%' },
    { branch: 'Chemical Engineering', avgPackage: '₹17.52 LPA', placementRate: '73.33%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹14.55 LPA', placementRate: '79.49%' },
    { branch: 'Civil Engineering', avgPackage: '₹12.40 LPA', placementRate: '47.62%' },
];

const FEE_DATA = [
    { category: 'Gen/OBC (> ₹5L income)', tuition: '₹1,00,000', other: '₹46,588', total: '₹1,46,588' },
    { category: 'Gen/OBC (₹1L – ₹5L income)', tuition: '₹33,333', other: '₹46,588', total: '₹79,921' },
    { category: 'SC/ST/PwD / Income < ₹1L', tuition: '₹0', other: '₹46,588', total: '₹46,588', highlight: true },
];

const COURSES = [
    { label: '4-Year B.Tech', items: 'AI, CSE, Chemical, Civil, Electrical, Mechanical, and Materials Engineering' },
    { label: 'Unique Program', items: 'Integrated Circuit Design & Technology (pioneering program in the IIT circuit)' },
    { label: 'Dual Degree Options', items: 'Students can convert B.Tech to a B.Tech+M.Tech/M.Sc dual degree' },
    { label: 'Minors', items: 'Data Analytics, Management, or Cognitive Science' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#25 (Engineering) | #39 (Overall)', icon: Award },
    { body: 'India Today 2025', rank: '#9 (Engineering)', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026.',
    'Secure a rank in JEE Advanced 2026.',
    'Participate in JoSAA 2026 counseling and choose IIT Gandhinagar.',
    'Secure a seat based on your All India Rank (AIR) and Category.',
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

const IITGandhinagar = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Gandhinagar",
        "alternateName": "IIT Gandhinagar",
        "url": "https://www.iitgn.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "IIT Gandhinagar, established in 2008, is renowned for its innovative curriculum, student-centric focus, and world-class sustainable campus on the banks of the Sabarmati river.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Palaj, Gandhinagar",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
        },
        "foundingDate": "2008"
    };

    const faqItems = [
        { q: 'What is the cutoff for IIT Gandhinagar CSE?', a: 'For the General (Gender-Neutral) category, the JEE Advanced 2025 closing rank for CSE at IIT Gandhinagar was 2020.' },
        { q: 'What is the average placement package at IIT Gandhinagar?', a: 'The B.Tech overall average package is ₹18.20 LPA. CSE graduates received an average of ₹27.73 LPA.' },
        { q: 'What are the fees at IIT Gandhinagar?', a: 'The total per-semester fee for General/OBC students (income > ₹5L) is ₹1,46,588. SC/ST/PwD students pay ₹46,588 as tuition is fully exempted.' },
        { q: 'Does IIT Gandhinagar offer an AI program?', a: 'Yes, IIT Gandhinagar offers a dedicated Artificial Intelligence (AI) B.Tech program with a closing rank of 2236 (General), as well as a unique Integrated Circuit Design & Technology program.' },
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
                title="IIT Gandhinagar Cutoff, Fees, Placements, Ranking"
                description="Check IIT Gandhinagar (IITGN) branch-wise JEE Advanced 2025 cutoffs, 2026 placement data, fee structure, and NIRF rankings. Updated 2026 data."
                canonicalPath="/colleges/iit-gandhinagar"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-lime-700 via-lime-600 to-green-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🌿 Sustainable Campus on the Sabarmati · Fastest-Growing IIT
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            IIT Gandhinagar
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
                            { icon: MapPin, text: 'Gandhinagar, Gujarat' },
                            { icon: Calendar, text: 'Est. 2008' },
                            { icon: Building2, text: 'IIT' },
                            { icon: Award, text: 'NIRF #25' },
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
                    The Indian Institute of Technology Gandhinagar (IITGN), established in 2008, is one of the <strong className="text-gray-900">second-generation IITs</strong>. Located on the banks of the Sabarmati river in Palaj, IIT Gandhinagar is renowned for its <strong className="text-gray-900">innovative curriculum, student-centric focus, and world-class sustainable campus</strong>. It is widely considered one of the fastest-growing IITs in India.
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-lime-50 border border-lime-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-lime-800"><strong>Pro Tip:</strong> IIT Gandhinagar's <strong>Integrated Circuit Design & Technology</strong> (closing rank 4652, General) is a pioneering program uniquely offered by IITGN — ideal for students interested in VLSI and semiconductor design.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>

                    {/* Stats cards */}
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Avg Package (B.Tech)', value: '₹18.20 LPA' },
                            { label: 'Avg CSE Package', value: '₹27.73 LPA' },
                            { label: 'Median Package', value: '₹14.43 LPA' },
                            { label: 'Highest Package', value: '₹62–80 LPA' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-lime-50 to-green-50 border border-lime-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Goldman Sachs, Barclays, Texas Instruments, Deloitte
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
                                    <Th className="text-center">Hostel & Other</Th>
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
                        <p>* Hostel Seat Rent & Utilities: ₹17,250 per semester.</p>
                        <p>* Mess & Laundry Advance: ₹21,000 per semester.</p>
                        <p>* One-time Admission Fee: ₹12,750 (includes refundable deposit).</p>
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
                        Check Your Chances at IIT Gandhinagar
                    </h2>
                    <p className="text-lime-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Advanced rank and get instant, AI-powered predictions for IIT Gandhinagar and other top IITs.
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

export default IITGandhinagar;
