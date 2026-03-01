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
    { param: 'College Name', detail: 'National Institute of Technology Hamirpur (NITH)' },
    { param: 'Location', detail: 'Hamirpur, Himachal Pradesh' },
    { param: 'Established Year', detail: '1986' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government)' },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science (CSE)', os: 12236, hs: 28278, ews_os: 2092, obc_os: 4356, sc_os: 2773, st_os: 1084 },
    { branch: 'Math & Computing', os: 16502, hs: '-', ews_os: 5902, obc_os: 12148, sc_os: 6233, st_os: 2365 },
    { branch: 'Electronics & Comm. (ECE)', os: 18421, hs: 37939, ews_os: 3408, obc_os: 6794, sc_os: 4553, st_os: 2164 },
    { branch: 'Electrical Engg.', os: 25782, hs: 53347, ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Mechanical Engg.', os: 30851, hs: 66968, ews_os: 4528, obc_os: 10132, sc_os: 5475, st_os: 2071 },
    { branch: 'Chemical Engineering', os: 39188, hs: '-', ews_os: '-', obc_os: '-', sc_os: '-', st_os: '-' },
    { branch: 'Civil Engineering', os: 41202, hs: 90801, ews_os: 6032, obc_os: 12644, sc_os: 6133, st_os: 1877 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Material Science', highestPackage: '₹10.00 LPA', averagePackage: '₹7.05 LPA', placementRate: '100.00%' },
    { branch: 'Mechanical Engg.', highestPackage: '₹205.00 LPA', averagePackage: '₹9.74 LPA', placementRate: '99.04%' },
    { branch: 'Electrical Engg.', highestPackage: '₹30.00 LPA', averagePackage: '₹7.91 LPA', placementRate: '97.96%' },
    { branch: 'Computer Science', highestPackage: '₹58.00 LPA', averagePackage: '₹14.83 LPA', placementRate: '93.27%' },
    { branch: 'Chemical Engg.', highestPackage: '₹23.50 LPA', averagePackage: '₹8.45 LPA', placementRate: '88.14%' },
    { branch: 'Math & Computing', highestPackage: '₹53.00 LPA', averagePackage: '₹14.82 LPA', placementRate: '85.37%' },
    { branch: 'Civil Engineering', highestPackage: '₹21.00 LPA', averagePackage: '₹8.29 LPA', placementRate: '83.10%' },
    { branch: 'ECE', highestPackage: '₹53.00 LPA', averagePackage: '₹11.46 LPA', placementRate: '80.65%' },
];

const FEE_DATA = [
    { category: 'General (Income > 5L)', sem1: '₹78,900', total4Year: '₹6,82,000' },
    { category: 'SC / ST / PwD', sem1: 'Tuition Fee Waiver', total4Year: '₹1,82,000 (approx)' },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'CSE, ECE, EE, Mechanical, Civil, Chemical, Material Science, Engg Physics, Math & Computing' },
    { label: 'Dual Degree & Architecture', items: '5-Year B.Arch, 5-Year Dual Degree (CSE, ECE)' },
    { label: 'Postgraduate', items: 'M.Tech, M.Sc (Phy, Chem, Math & Computing), MBA' },
];

const RANKINGS = [
    { body: 'NIRF 2024 / 2025', rank: '101-150 Band (Engineering) | #32 (Architecture)', icon: Award },
    { body: 'India Today 2025', rank: '#22 (Engineering) | #7 (Architecture)', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a valid JEE Main 2026 score (or JEE Main Paper 2 for B.Arch).',
    'Meet the Class 12 aggregate requirements (75% for Gen/OBC, 65% for SC/ST).',
    'Register and participate in JoSAA / CSAB counseling.',
    'Utilize the Home State (HP) quota for relaxed closing ranks.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-cyan-800 bg-cyan-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITHamirpur = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Hamirpur",
        "alternateName": "NIT Hamirpur",
        "url": "https://nith.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Hamirpur is a premier institution in Himachal Pradesh, known for its picturesque campus, strong architecture program, and core engineering placements.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hamirpur",
            "addressRegion": "Himachal Pradesh",
            "addressCountry": "IN"
        },
        "foundingDate": "1986"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Hamirpur CSE?', a: 'For the General category (Other State), the JEE Main 2024 closing rank for CSE was 12,236. For Home State candidates (Himachal Pradesh), the cutoff was extremely relaxed at 28,278.' },
        { q: 'How are the placements at NIT Hamirpur in 2025?', a: 'Placements were robust. A standout was a record-breaking ₹205 LPA package offered to a Mechanical Engineering student. B.Tech Computer Science also saw a highest package of ₹58 LPA.' },
        { q: 'Is NIT Hamirpur good for Architecture?', a: 'Yes, it is highly reputable for Architecture, securing #7 in India Today 2025 and #32 in NIRF 2024 specifically for Architecture, with 100% placements in 2025.' },
        { q: 'What is the fee structure for NIT Hamirpur?', a: 'The 4-year B.Tech fee total is roughly ₹6.82 Lakhs for General students with family income > 5L. Significant tuition waivers apply to SC/ST, PwD, and low-income students.' },
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
                title="NIT Hamirpur Admission 2026: Cutoffs, 205 LPA Placement, Fees & Ranking"
                description="Get detailed NIT Hamirpur insights: JEE Main branch-wise cutoffs, 205 LPA mechanical placement details, fee waivers, and top architecture programs."
                canonicalPath="/colleges/nit-hamirpur"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-cyan-800 via-sky-600 to-blue-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 1986 · Himalayan Academic Ecosystem
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Hamirpur – Technical Education Excellence
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            A Comprehensive Look at <strong className="text-white">2026</strong> Admissions: Rankings, Top Placements, and Core Growth
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Hamirpur, HP' },
                            { icon: Calendar, text: 'Est. 1986' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'India Today #22' },
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

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-cyan-500 pl-6">
                    Known for its breathtakingly aesthetic campus in Himachal Pradesh, <strong className="text-gray-900">NIT Hamirpur (NITH)</strong> offers a unique specialized ecosystem. It excels profoundly in Architecture and Mathematics & Computing, while delivering remarkable placement outcomes in traditional core engineering sectors.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (JEE Main 2024)</SectionTitle>
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-cyan-50 border border-cyan-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-cyan-800">
                            <strong>Strategic Edge:</strong> The Home State quota offers substantial relaxation. For example, Civil Engineering closed at 41,202 (OS) but extended to 90,801 for Home State candidates in 2024. <br />
                            <span className="text-xs opacity-80">*Some reserved category data omitted for brevity.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Record-Breaking Placements (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹205.00 LPA' },
                            { label: 'Overall Average (B.Tech)', value: '₹10.58 LPA' },
                            { label: 'Overall Placement %', value: '90.50%' },
                            { label: 'Architecture Placement', value: '100%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        In a stunning outcome, the 2025 placement cycle saw a record-breaking <strong>₹205 LPA</strong> offered to a Mechanical Engineering student. Core branches have recorded astonishing placement percentages, emphasizing that high-value opportunities exist beyond the IT sector.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Highest Package</Th><Th className="text-center">Average Package</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.placementRate}</td>
                                        <td className="px-4 py-3 text-center font-medium text-cyan-700">{r.highestPackage}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.averagePackage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Expenditure and Fee Policy (2025-2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Category</Th>
                                    <Th className="text-center">Semester 1 Fee (approx)</Th>
                                    <Th className="text-center">Total 4-Year B.Tech Fee</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.sem1}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.total4Year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500 space-y-1">
                        <p>* The institution provides 8 boys' and 4 girls' hostels. Hostel fees plus mess advances range between ₹35,000 to ₹40,000 annually.</p>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Academic Array</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-3 gap-4">
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
                    <SectionTitle icon={Award}>Recent Recognitions</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-5">
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
                    <SectionTitle icon={GraduationCap}>Admission Process</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Is NIT Hamirpur in Your Reach?
                    </h2>
                    <p className="text-cyan-100 mb-8 max-w-xl mx-auto">
                        Weigh your JEE Main percentile against past trends to predict your chances of studying in this Himalayan tech hub.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-cyan-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITHamirpur;
