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
    { param: 'College Name', detail: 'National Institute of Technology Karnataka (NITK) Surathkal' },
    { param: 'Location', detail: 'Surathkal, Mangalore, Karnataka' },
    { param: 'Established Year', detail: '1960 (as KREC – Karnataka Regional Engineering College)' },
    { param: 'Campus Size', detail: '250 Acres · Private Beach · Lighthouse' },
    { param: 'Institute Type', detail: 'NIT – Institute of National Importance ("Big Three" NIT)' },
    { param: 'NIRF Ranking 2025', detail: '#17 Engineering · #54 Overall' },
    { param: 'B.Tech Seats', detail: '~782 seats across 11 programs' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science', os: '2,158', hs: '2,800', ews: '316', obc: '577', sc: '364', st: '138' },
    { branch: 'Artificial Intelligence', os: '3,264', hs: '3,579', ews: '~400', obc: '~740', sc: '~586', st: '~314' },
    { branch: 'Information Technology', os: '3,739', hs: '4,086', ews: '~500', obc: '~850', sc: '~700', st: '~450' },
    { branch: 'Comp. & Data Science', os: '4,470', hs: '4,805', ews: '~550', obc: '~950', sc: '~850', st: '~500' },
    { branch: 'Electronics & Comm.', os: '5,316', hs: '5,573', ews: '~700', obc: '~1,200', sc: '~1,100', st: '~600' },
    { branch: 'Electrical & Electronics', os: '7,913', hs: '7,493', ews: '~1,100', obc: '~2,100', sc: '~1,800', st: '~900' },
    { branch: 'Mechanical', os: '14,036', hs: '12,126', ews: '~1,900', obc: '~3,800', sc: '~3,100', st: '~1,400' },
    { branch: 'Chemical', os: '17,020', hs: '18,581', ews: '~2,100', obc: '~4,300', sc: '~3,500', st: '~1,600' },
    { branch: 'Civil', os: '25,914', hs: '28,252', ews: '~3,700', obc: '~7,100', sc: '~5,500', st: '~2,000' },
    { branch: 'Metallurgical & Materials', os: '24,126', hs: '24,264', ews: '~3,600', obc: '~6,800', sc: '~5,200', st: '~1,800' },
    { branch: 'Mining', os: '31,695', hs: '39,455', ews: '~4,500', obc: '~9,000', sc: '~6,500', st: '~2,500' },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science', avgPackage: '₹26.85 LPA', rate: '93.2%' },
    { branch: 'Information Technology', avgPackage: '₹23.25 LPA', rate: '83.75%' },
    { branch: 'Electronics & Comm.', avgPackage: '₹21.57 LPA', rate: '76.72%' },
    { branch: 'Artificial Intelligence', avgPackage: '₹20.88 LPA', rate: '87.8%' },
    { branch: 'Electrical & Electronics', avgPackage: '₹18.55 LPA', rate: '78.7%' },
    { branch: 'Civil Engineering', avgPackage: '₹11.91 LPA', rate: '74.19%' },
    { branch: 'Mechanical Engineering', avgPackage: '₹11.41 LPA', rate: '79.5%' },
    { branch: 'Mining Engineering', avgPackage: '₹11.21 LPA', rate: '71.79%' },
    { branch: 'Metallurgical Engg.', avgPackage: '₹11.01 LPA', rate: '84.44%' },
    { branch: 'Chemical Engineering', avgPackage: '₹10.86 LPA', rate: '75.51%' },
];

const FEE_DATA = [
    { year: 'Year 1', tuition: '₹1,25,000', other: '₹41,950', total: '₹1,66,950', hostel: '~₹70,000' },
    { year: 'Year 2', tuition: '₹1,25,000', other: '₹22,060', total: '₹1,47,060', hostel: '~₹70,000' },
    { year: 'Year 3', tuition: '₹1,25,000', other: '₹19,120', total: '₹1,44,120', hostel: '~₹70,000' },
    { year: 'Year 4', tuition: '₹1,25,000', other: '₹19,000', total: '₹1,44,000', hostel: '~₹70,000' },
];

const COURSES = [
    { label: 'B.Tech Programs (11 Branches)', items: 'CSE, AI, IT, Computational & Data Science, ECE, Electrical & Electronics, Mechanical, Chemical, Civil, Metallurgical & Materials, Mining Engineering' },
    { label: 'Unique Niche', items: 'Marine Structures & Coastal Engineering expertise. DASA/CIWG quota for NRI/Gulf diaspora. M.Tech, MBA, MCA & PhD programs available.' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#17 Engineering · #54 Overall', icon: Award },
    { body: 'QS World 2026', rank: '#113 (Southern Asia)', icon: Star },
    { body: 'Placement 2025', rank: '₹63.3 LPA Highest · ₹17.48 LPA Avg · 80.6% Rate', icon: Star },
    { body: 'Campus Specialty', rank: 'Only NIT with private beach & lighthouse', icon: Award },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026. NITK CSE requires AIR within top 0.2% nationally — typically under 2,200 (OS General). Plan strategy across the IT Cluster and circuital branches.',
    'Note DASA/CIWG quota: special seats for students from abroad and Children of Indian Workers in Gulf.',
    'Register on JoSAA, fill all 11 branch choices. Use IT Cluster (CSE/AI/IT/CDS) vs. ECE/EEE trade-off to maximize chances.',
    'SC/ST/PwD and income below ₹1 Lakh receive 100% tuition remission (~₹35,310/semester total cost).',
    'Report to Surathkal campus with Aadhaar, JEE scorecard, board certificates, and category documents.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITSurathkal = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Karnataka, Surathkal",
        "alternateName": "NIT Surathkal",
        "url": "https://www.nitk.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Surathkal is a top-ranked engineering institute known for its coastal campus and strong IT placements.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surathkal",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
        },
        "foundingDate": "1960"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Surathkal CSE?', a: 'For the General category, the JEE Main 2025 closing rank for CSE (Other State) at NIT Surathkal was 1827. Home state cutoff was 2800.' },
        { q: 'What is the highest package at NIT Surathkal?', a: 'The highest package in 2025 was ₹63.30 LPA, secured by a student in the IT branch.' },
        { q: 'Does NIT Surathkal have international placements?', a: 'Yes, NITK facilitated around 12 international offers in 2025 in countries like Germany, Japan, and Singapore (firms like Rakuten and Adobe).' },
        { q: 'What is unique about NIT Surathkal?', a: 'It has a sprawling 295-acre campus along the Arabian Sea coast, giving it a unique edge and niche expertise in Marine Structures and Coastal Engineering.' },
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
                title="NIT Surathkal Cutoff, Fees, Placements, Ranking"
                description="Check NIT Surathkal cutoff, placements, fees, ranking, and admission details. Updated 2026 data."
                canonicalPath="/colleges/nit-surathkal"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🌊 Specialized Coastal Engineering · NIRF #17
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            NIT Surathkal – Cutoff, Fees, Placements & Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Complete insights for <strong className="text-white">2026</strong> Aspirants
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Surathkal, Karnataka' },
                            { icon: Calendar, text: 'Est. 1960' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #17' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-indigo-500 pl-6">
                    Founded in 1960 as the <strong className="text-gray-900">Karnataka Regional Engineering College (KREC)</strong>, NITK Surathkal is one of India's "Big Three" NITs — alongside NIT Trichy and NIT Warangal. Its <strong className="text-gray-900">250-acre coastal campus</strong> sits on the Arabian Sea with a private beach and lighthouse. Ranked <strong className="text-gray-900">#17 in NIRF 2025</strong>, it has deep ties to the Bangalore tech corridor, drawing Google, Microsoft, Goldman Sachs, and Morgan Stanley to campus.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (JEE Main 2025 – Round 6)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Branch</Th>
                                    <Th className="text-center">Gen (OS)</Th>
                                    <Th className="text-center">Gen (HS)</Th>
                                    <Th className="text-center">EWS (OS)</Th>
                                    <Th className="text-center">OBC-NCL</Th>
                                    <Th className="text-center">SC (OS)</Th>
                                    <Th className="text-center">ST (OS)</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {CUTOFF_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.hs}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.ews}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.obc}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sc}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.st}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-indigo-800"><strong>IT Cluster:</strong> CSE (2,158), AI (3,264), IT (3,739), and CDS (4,470) all close under 4,500 OS — virtually impossible without AIR under 5,000. Values marked ~ are approximate. Full reserved-category CSE data: SC 364, ST 138.</p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placements (2025 Batch)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹63.30 LPA' },
                            { label: 'Average Package', value: '₹17.48 LPA' },
                            { label: 'Median Package', value: '₹14.00 LPA' },
                            { label: 'Placement Rate', value: '80.60%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>2025:</strong> 1,246 placed (1,323 in 2024). Overall rate 77.34%. Top Tech: Microsoft, Amazon, Google, Nvidia, Adobe. FinTech: Goldman Sachs, Morgan Stanley, PayPal. Core/PSU: GAIL, BPCL, Mercedes-Benz, Bosch.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Average Package</Th><Th className="text-center">Placement Rate</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center font-medium text-indigo-700">{r.avgPackage}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.rate}</td>
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
                                    <Th>Year</Th>
                                    <Th className="text-center">Tuition (INR)</Th>
                                    <Th className="text-center">Other Fees</Th>
                                    <Th className="text-center">Total Academic</Th>
                                    <Th className="text-center">Hostel (est.)</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900">{r.year}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.tuition}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.other}</td>
                                        <td className="px-4 py-3 text-center font-semibold text-gray-900">{r.total}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.hostel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* Total 4-year academic: ~₹6.02 Lakhs. Hostel 4-year est.: ~₹2.80 Lakhs. SC/ST/PwD and income below ₹1 Lakh receive 100% tuition remission.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-indigo-600 mb-2">{c.label}</div>
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at NIT Surathkal
                    </h2>
                    <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                        Enter your JEE Main rank and get instant, AI-powered predictions for NIT Surathkal and other top NITs.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <span>Try JEE Main Predictor</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITSurathkal;
