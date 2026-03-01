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
    { param: 'College Name', detail: 'National Institute of Technology Srinagar' },
    { param: 'Location', detail: 'Hazratbal, Srinagar, Jammu & Kashmir' },
    { param: 'Established Year', detail: '1960 (as REC), 2003 (as NIT)' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engg (CSE)', os: 26171, hs: 39108, ews_os: 3748, obc_os: 8325, sc_os: 3945, st_os: 1661 },
    { branch: 'Information Technology (IT)', os: 33379, hs: 62572, ews_os: 5123, obc_os: 10493, sc_os: 5356, st_os: 2388 },
    { branch: 'Electronics & Comm. (ECE)', os: 36651, hs: 71944, ews_os: 5356, obc_os: 11380, sc_os: 5243, st_os: 2157 },
    { branch: 'Electrical Engineering', os: 43282, hs: 87335, ews_os: 6703, obc_os: 13705, sc_os: 6746, st_os: 2549 },
    { branch: 'Mechanical Engineering', os: 48977, hs: 108745, ews_os: 8070, obc_os: 15732, sc_os: 6990, st_os: 2678 },
    { branch: 'Chemical Engineering', os: 55299, hs: 117046, ews_os: 8540, obc_os: 17681, sc_os: 8583, st_os: 3325 },
    { branch: 'Civil Engineering', os: 57319, hs: 105987, ews_os: 9150, obc_os: 18219, sc_os: 8478, st_os: 3230 },
    { branch: 'Metallurgical & Materials', os: 57881, hs: 133690, ews_os: 8584, obc_os: 18928, sc_os: 9456, st_os: 3336 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Information Technology (IT)', highestCTC: '₹35.50 LPA', averageCTC: '₹10.50 LPA', highlight: true },
    { branch: 'Computer Science (CSE)', highestCTC: '₹30.00 LPA', averageCTC: '₹11.00 LPA', highlight: true },
    { branch: 'Civil Engineering', highestCTC: '₹20.30 LPA', averageCTC: '₹8.00 LPA', highlight: false },
    { branch: 'Mechanical Engineering', highestCTC: '₹18.00 LPA', averageCTC: '₹8.00 LPA', highlight: false },
];

const FEE_DATA = [
    { category: 'General/OBC/EWS (Income > 5L)', sem1: '₹73,000' },
    { category: 'General/OBC/EWS (Income 1L - 5L)', sem1: '₹31,333' },
    { category: 'SC / ST / PwD / Income < 1L', sem1: '₹10,500' },
    { category: 'Hostel & Mess', sem1: '₹28,000 - ₹29,000' },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'CSE, IT, ECE, Electrical, Mechanical, Chemical, Civil, Metallurgy' },
    { label: 'Postgraduate', items: 'M.Tech, M.Sc, PhD' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#73 (Engineering)', icon: Award },
    { body: 'India Today 2025', rank: '#32 (Top Engineering Colleges)', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 with an eligible rank.',
    'Clear passing criteria (75% for Gen/OBC, 65% for SC/ST/PwD) in Class 12th.',
    'Enroll through JoSAA/CSAB counseling based on AIR.',
    'Significant Rank Relaxations for J&K and Ladakh domiciled students under Home State quota.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITSrinagar = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Srinagar",
        "alternateName": "NIT Srinagar",
        "url": "https://nitsri.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Srinagar is a premier technical institute in Jammu and Kashmir, known for its scenic campus, rigorous academics, and excellent placements in global tech hubs.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Srinagar",
            "addressRegion": "Jammu & Kashmir",
            "addressCountry": "IN"
        },
        "foundingDate": "1960"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Srinagar CSE?', a: 'For the General category (OS), the JEE Main 2024 closing rank for CSE was 26,171. The Home State cutoff allowed J&K residents up to rank 39,108.' },
        { q: 'What is the highest package at NIT Srinagar?', a: 'The highest package in the 2025 placement cycle reached ₹35.50 LPA for Information Technology.' },
        { q: 'Is the Home State quota at NIT Srinagar beneficial?', a: 'Very much so. The Home State quota offers massive relaxation. For example, Civil Engineering closed at 57,319 OS compared to 1,05,987 HS.' },
        { q: 'What is the fee structure for B.Tech?', a: 'For a General category student with family income > 5 Lakhs, Semester 1 tuition and charges total around ₹73,000. 100% tuition waivers are available for SC/ST/PwD students and income < 1L.' },
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
                title="NIT Srinagar Cutoff, Fees, Placements &amp; Ranking 2026"
                description="Check NIT Srinagar cutoff, placements, fees, ranking, and admission details. Updated 2026 data. Highest Package 35.5 LPA."
                canonicalPath="/colleges/nit-srinagar"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 1960 · Technical Resilience
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Srinagar – The Hazratbal Academic Corridor
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive Dimensions of <strong className="text-white">2026</strong> Admissions, Cutoffs & High-Value Placement Trends
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Srinagar, J&K' },
                            { icon: Calendar, text: 'Est. 1960' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #73' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-teal-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-emerald-500 pl-6">
                    Strategically located on the banks of Dal Lake, <strong className="text-gray-900">NIT Srinagar</strong> has seen a steady rise, culminating in its <strong className="text-gray-900">#73 rank in NIRF 2025</strong>. It presents a remarkable synthesis of high-altitude research infrastructure and robust placements with top-tier technology giants like Google and Microsoft.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (Last Round OS/HS Trends)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Branch</Th>
                                    <Th className="text-center">Gen (OS)</Th>
                                    <Th className="text-center">Gen (HS)</Th>
                                    <Th className="text-center">EWS (OS)*</Th>
                                    <Th className="text-center">OBC-NCL (OS)*</Th>
                                    <Th className="text-center">SC (OS)*</Th>
                                    <Th className="text-center">ST (OS)*</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {CUTOFF_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.hs}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.ews_os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.obc_os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sc_os}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.st_os}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-emerald-800">
                            <strong>Local Shielding:</strong> An incredible rank advantage exists for J&K/Ladakh students. A native can secure CSE with a rank near 39k, whereas an OS applicant requires sub-26k ranks. <br />
                            <span className="text-xs opacity-80">*Category ranks are category-specific specific closing lines derived from JoSAA data.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Strong Placement Integration</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹35.50 LPA' },
                            { label: 'Overall Average', value: '₹10.48 LPA' },
                            { label: 'CSE Average', value: '₹11.00 LPA' },
                            { label: 'Placement Rate', value: '~77%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        In 2025, over 80 companies visited, including tech behemoths like <strong>Google, Microsoft, and Amazon</strong>. Core agencies like L&T, Tata Motors, and NTPC extensively recruit from infrastructure-based branches.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Highest CTC</Th><Th className="text-center">Average CTC</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center font-medium text-emerald-700">{r.highestCTC}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.averageCTC}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Cost Details & Subsidy Framework</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Category / Liability Bracket</Th>
                                    <Th className="text-center">B.Tech First Semester (Approx Fee)</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sem1}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* Excludes one-time security deposits (₹12,000) and minor admission charges.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Undergraduate Scope</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-emerald-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Evaluative Rankings</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
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
                    <SectionTitle icon={GraduationCap}>Entry Guidelines</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Could NIT Srinagar Be Yours?
                    </h2>
                    <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
                        Verify if your JEE Main standing overlaps with historic closing boundaries to enter this beautiful technical enclave.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-emerald-800 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITSrinagar;
