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
    { param: 'College Name', detail: 'National Institute of Technology Nagaland (NITN)' },
    { param: 'Location', detail: 'Chumukedima, Dimapur, Nagaland' },
    { param: 'Established Year', detail: '2010' },
    { param: 'Campus Size', detail: '~291 Acres (Permanent Campus)' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government/Autonomous)' },
];

const CUTOFF_2024_DATA = [
    { branch: 'Computer Science & Engineering', r1: 27265, last: 50509 },
    { branch: 'Electronics & Communication', r1: 34582, last: 65666 },
    { branch: 'Electrical & Electronics', r1: 41483, last: 82021 },
    { branch: 'Electronics & Instrumentation', r1: 42254, last: 83283 },
    { branch: 'Mechanical Engineering', r1: 46956, last: 90771 },
    { branch: 'Civil Engineering', r1: 49671, last: '1,06,408' },
];

const CUTOFF_2025_DATA = [
    { branch: 'Computer Science & Engineering', r1: 32418, last: 56055 },
    { branch: 'Electronics & Communication', r1: 38323, last: 67989 },
    { branch: 'Electrical & Electronics', r1: 42864, last: 81638 },
    { branch: 'Electronics & Instrumentation', r1: 44096, last: 93859 },
    { branch: 'Mechanical Engineering', r1: 46466, last: '1,03,395' },
    { branch: 'Civil Engineering', r1: 52097, last: '1,11,764' },
];

const PLACEMENT_DATA = [
    { branch: 'Computer Science & Engg.', placed: 13, avg: '₹7.00 LPA', highest: '₹10.00 LPA' },
    { branch: 'Electronics & Comm. Engg.', placed: 17, avg: '₹6.00 LPA', highest: '₹9.00 LPA' },
    { branch: 'Electrical & Electronics', placed: 20, avg: '₹7.00 LPA', highest: '₹14.00 LPA' },
    { branch: 'Electronics & Instrum.', placed: 23, avg: '₹6.00 LPA', highest: '₹14.00 LPA' },
    { branch: 'Mechanical Engineering', placed: 22, avg: '₹7.00 LPA', highest: '₹14.00 LPA' },
    { branch: 'Civil Engineering', placed: 9, avg: '₹5.00 LPA', highest: '₹13.95 LPA' },
];

const FEE_DATA = [
    { category: 'Tuition Fee (Per Semester)', amount: '₹62,500' },
    { category: 'Computer & Internet Fee (Per Sem)', amount: '₹2,000' },
    { category: 'Library, Exam & Misc. (Per Sem)', amount: '₹4,950' },
    { category: 'One-Time Charges (Admission Yr)', amount: '₹6,600' },
    { category: 'Hostel + Mess (Per Semester)', amount: '~₹35,500' },
    { category: 'SC/ST/PwD / Income &lt;1 LPA', amount: '100% Tuition Waiver', highlight: true },
    { category: 'Income 1–5 LPA', amount: '66.67% Tuition Remission', highlight: true },
    { category: 'Estimated Total 4-Year B.Tech', amount: '~₹7.41 Lakhs' },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'CSE, ECE, Electrical & Electronics, Electronics & Instrumentation, Civil, Mechanical' },
    { label: 'Postgraduate & Research', items: 'M.Tech (CSE, ECE), M.Sc (Physics, Chemistry), Ph.D. across departments' },
];

const RANKINGS = [
    { body: 'NIRF 2024', rank: '151–200 Band (Engineering)', icon: Award },
    { body: 'IIRF 2025', rank: '#89 (Top Public Colleges)', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a valid JEE Main 2026 score and qualify Class 12 with 75% aggregate (65% for SC/ST/PwD).',
    'Register on the JoSAA portal using your JEE Main credentials and fill/lock your choices.',
    'Participate in all six JoSAA rounds followed by two CSAB special rounds for vacant seats.',
    'Choose Freeze/Float/Slide on seat allotment. Home State (Nagaland) quota offers massive rank relaxation.',
    'Complete online document verification and report physically to the institute for final admission.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITNagaland = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Nagaland",
        "alternateName": "NIT Nagaland",
        "url": "https://www.nitnagaland.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Nagaland is a premier technical institute in the North-Eastern tribal belt, offering B.Tech programs in CSE, ECE, EEE, and more from its 291-acre campus in Chumukedima, Dimapur.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chumukedima, Dimapur",
            "addressRegion": "Nagaland",
            "addressCountry": "IN"
        },
        "foundingDate": "2010"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Nagaland CSE?', a: 'For the General category (Other State), the JEE Main 2025 closing rank for CSE was around 56,055. The 2024 last round closing rank was 50,509.' },
        { q: 'What is the highest placement package at NIT Nagaland?', a: 'The highest package in 2024 was ₹13.95 LPA (Civil Engineering). Core branches like EEE, Mechanical, and Electronics & Instrumentation also touched ₹14 LPA.' },
        { q: 'What is the total B.Tech fee at NIT Nagaland?', a: 'The total estimated 4-year B.Tech cost for a General/OBC student is approximately ₹7.41 Lakhs, including hostel and mess. SC/ST/PwD students and those with family income below ₹1 Lakh receive full tuition waivers.' },
        { q: 'Is NIT Nagaland ranked?', a: 'Yes, NIT Nagaland is ranked in the 151–200 band in NIRF 2024 Engineering and #89 in the IIRF 2025 Top Public Colleges ranking.' },
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
                title="NIT Nagaland Cutoff, Fees, Placements & Ranking 2026"
                description="Check NIT Nagaland 2026 JEE Main cutoffs, placements (₹14 LPA highest), fee structure, NIRF ranking, and admission details. Updated data for all branches."
                canonicalPath="/colleges/nit-nagaland"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-orange-700 via-amber-600 to-yellow-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 2010 · Chumukedima, Nagaland
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Nagaland – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive 2026 institutional data for engineering aspirants of the North-East
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Chumukedima, Nagaland' },
                            { icon: Calendar, text: 'Est. 2010' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF 151–200 Band' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-6">
                    <strong className="text-gray-900">NIT Nagaland (NITN)</strong>, established in 2010 under the mentorship of NIT Silchar, now operates from its permanent 291-acre campus in Chumukedima, near Dimapur. Despite its remote location in the North-Eastern tribal belt, the institute has carved a strong niche in core engineering and electronics, with peak placements touching <strong className="text-gray-900">₹14 LPA</strong> and a consistent intake from national recruiters.
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

                {/* ── 2. Cutoffs ────────────────────────────────────────────────── */}
                <section id="cutoffs">
                    <SectionTitle icon={TrendingUp}>JEE Main Cutoffs (General – Other State)</SectionTitle>

                    <motion.div {...sectionAnim} className="mb-3">
                        <h3 className="font-semibold text-gray-800 mb-2">2024 Closing Ranks</h3>
                        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm md:text-base">
                                <thead>
                                    <tr>
                                        <Th>Branch</Th>
                                        <Th className="text-center">Round 1</Th>
                                        <Th className="text-center">Last Round</Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CUTOFF_2024_DATA.map((r, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                            <td className="px-4 py-3 text-center text-gray-700">{r.r1.toLocaleString()}</td>
                                            <td className="px-4 py-3 text-center text-gray-700">{typeof r.last === 'number' ? r.last.toLocaleString() : r.last}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-3 mt-8">
                        <h3 className="font-semibold text-gray-800 mb-2">2025 Closing Ranks</h3>
                        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm md:text-base">
                                <thead>
                                    <tr>
                                        <Th>Branch</Th>
                                        <Th className="text-center">Round 1</Th>
                                        <Th className="text-center">Last Round</Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CUTOFF_2025_DATA.map((r, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                            <td className="px-4 py-3 text-center text-gray-700">{r.r1.toLocaleString()}</td>
                                            <td className="px-4 py-3 text-center text-gray-700">{typeof r.last === 'number' ? r.last.toLocaleString() : r.last}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-orange-800">
                            <strong>Trend:</strong> 2025 ranks are slightly higher than 2024 for CSE/ECE, reflecting growing awareness of this institute. Home State (Nagaland) quota offers enormous relaxation — ST candidates have secured CSE seats at ranks as high as 7,01,848 via CSAB.
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2024)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹13.95 LPA' },
                            { label: 'Campus Average CTC', value: '₹4.22 LPA' },
                            { label: 'Total Students Placed', value: '104' },
                            { label: 'Overall Placement %', value: '61.54%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        A surprising highlight of 2024: core branches (EEE, Mechanical, Electronics &amp; Instrumentation) recorded the highest individual packages at <strong>₹14 LPA</strong>, outperforming CSE for that cycle. Top recruiters include Publicis Sapient, Samsung, Jio Infocomm, Oracle, IBM, Deloitte, and TCS.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Students Placed</Th><Th className="text-center">Avg Package</Th><Th className="text-center">Highest Package</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.placed}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.avg}</td>
                                        <td className="px-4 py-3 text-center font-medium text-orange-700">{r.highest}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure (2024–2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Component / Category</Th><Th className="text-center">Amount (INR)</Th></tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={r.highlight ? 'bg-orange-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                        <td className="px-4 py-3 text-gray-900" dangerouslySetInnerHTML={{ __html: r.category }} />
                                        <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500">
                        <p>* Hostel includes establishment charges, seat rent, and mess advance. One-time charges include admission fee, deposits, I-card, and convocation fee. Refundable deposits excluded from 4-year total estimate.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses ────────────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-orange-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Rankings (2024–2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-gray-900">{r.body}</div>
                                    <div className="text-sm text-gray-600 mt-1">{r.rank}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 7. Admission ──────────────────────────────────────────────── */}
                <section id="admission">
                    <SectionTitle icon={GraduationCap}>Admission Process 2026</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Check Your Chances at NIT Nagaland
                    </h2>
                    <p className="text-orange-100 mb-8 max-w-xl mx-auto">
                        Use our AI predictor to see if your JEE Main rank qualifies for NIT Nagaland and explore other top engineering colleges.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-orange-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <span>Try College Predictor</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITNagaland;
