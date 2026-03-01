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
    { param: 'College Name', detail: 'National Institute of Technology Mizoram' },
    { param: 'Location', detail: 'Aizawl, Mizoram' },
    { param: 'Established Year', detail: '2010' },
    { param: 'Campus Area', detail: '190 - 263 Acres (In development)' },
];

const CUTOFF_DATA = [
    { branch: 'Maths & Computing', os: 37859, hs: 764291, ews_os: 5249, obc_os: 10673, sc_os: '-', st_os: '-' },
    { branch: 'Computer Science & Engineering', os: 37751, hs: 563566, ews_os: 4490, obc_os: 11286, sc_os: 97390, st_os: 7874 },
    { branch: 'Electronics & Comm Engg.', os: 44871, hs: 1105820, ews_os: 5437, obc_os: 11695, sc_os: 5563, st_os: 32474 },
    { branch: 'Mechanical Engineering', os: 55295, hs: 1314967, ews_os: 7078, obc_os: 15170, sc_os: 7347, st_os: 25443 },
    { branch: 'Civil Engineering', os: 61620, hs: 548694, ews_os: 7550, obc_os: 16248, sc_os: 8133, st_os: 8689 },
];

const PLACEMENT_BRANCH_DATA = [
    { branch: 'Computer Science (CSE)', placementRate: '97%', averageCTC: '₹7.15 LPA', highestCTC: '₹35.00 LPA' },
    { branch: 'Mechanical Engineering', placementRate: '93% - 100%', averageCTC: '₹7.45 LPA', highestCTC: '₹14.50 LPA' },
    { branch: 'Electrical Engineering', placementRate: '93%', averageCTC: '₹7.68 LPA', highestCTC: '₹14.50 LPA' },
    { branch: 'Overall Average (2025)', placementRate: '93.1%', averageCTC: '₹8.40 LPA', highestCTC: '₹35.00 LPA' },
];

const FEE_DATA = [
    { category: 'Tuition Fee (Per Sem)', total: '₹62,500' },
    { category: 'Total First Semester (Hosteller)', total: '~₹1,21,000' },
    { category: 'Hostel Rent & Mess Advance', total: '₹5,000 + ₹30,000 / Sem' },
    { category: 'Estimated Total 4-Year Cost', total: '₹6.00L to ₹8.00L' },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'CSE, ECE, EE, ME, Civil, Math & Computing, Chemical Science' },
    { label: 'Postgraduate Programs', items: 'M.Tech (Thermal, Microelectronics, CSE), PhD' },
];

const RANKINGS = [
    { body: 'NIRF 2024 / 2025', rank: '101-150 Band (Engineering)', icon: Award },
    { body: 'IIRF 2025', rank: '#78 (Engineering)', icon: Star },
];

const ADMISSION_STEPS = [
    'Apply via NTA for JEE Main 2026.',
    'Clear 75% boards criteria (65% for SC/ST).',
    'Follow up with JoSAA and CSAB counseling options.',
    'Make use of late-round rank drops and HS quotas heavily.',
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-700 to-fuchsia-600 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-violet-900 bg-violet-50 ${className}`}>{children}</th>
);

// ── Component ───────────────────────────────────────────────────────────────────

const NITMizoram = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Mizoram",
        "alternateName": "NIT Mizoram",
        "url": "https://www.nitmz.ac.in/",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Mizoram offers exceptional returns with a 93.1% placement rate, an ₹8.40 LPA overall average, and diverse cutting-edge branches like Mathematics and Computing.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Aizawl",
            "addressRegion": "Mizoram",
            "addressCountry": "IN"
        },
        "foundingDate": "2010"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Mizoram CSE?', a: 'For the General category (All India), the JEE Main closing rank for CSE in R6 was roughly 37,751. Mathematics and Computing closed nearby at 37,859.' },
        { q: 'What is the highest package at NIT Mizoram?', a: 'The highest package in the ongoing 2025 placement cycle witnessed a significant jump to ₹35.00 LPA.' },
        { q: 'What is the placement rate like?', a: 'Outstanding. The institute recorded an overall placement percentage of 93.1%, with core branches like Mechanical reporting close to 100% execution.' },
        { q: 'Are there any unusual branches?', a: 'Yes, NIT Mizoram offers unique and high-demand modern courses like Mathematics & Computing and Chemical Science & Technology.' },
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
                title="NIT Mizoram Admission 2026, 35 LPA Package, and Cutoffs"
                description="Access latest NIT Mizoram 2026 JEE Main cutoffs, closing ranks. Review placement stats including a ₹35 LPA highest package and 93.1% placement rate."
                canonicalPath="/colleges/nit-mizoram"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-violet-700 to-fuchsia-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏛️ Established 2010 · Academic Resilience
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Mizoram – Diversity and Modern Computing
                        </h1>
                        <p className="text-xl md:text-2xl text-violet-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Complete Breakdown of <strong className="text-white">2026</strong> Modernized Branches, 93%+ Placements & Late Round Deflations
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
                    >
                        {[
                            { icon: MapPin, text: 'Aizawl, Mizoram' },
                            { icon: Calendar, text: 'Est. 2010' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF 101-150 Band' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" />
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-fuchsia-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-violet-500 pl-6">
                    Tucked away in the culturally thriving Aizawl, <strong className="text-gray-900">NIT Mizoram</strong> is quickly elevating its stance via non-traditional engineering avenues. Its introduction of Mathematics & Computing alongside Chemical Science has catapulted its placement matrix to an impressive 93.1%, making it a highly rewarding detour from standard tech education.
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
                    <SectionTitle icon={TrendingUp}>Branch-Wise Cutoffs (Last Round OS/HS Trends - 2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Branch</Th>
                                    <Th className="text-center">Gen (OS R6)</Th>
                                    <Th className="text-center">Gen (HS R6)</Th>
                                    <Th className="text-center">EWS (OS R1)*</Th>
                                    <Th className="text-center">OBC-NCL (OS R1)*</Th>
                                    <Th className="text-center">SC (OS R1)*</Th>
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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-violet-50 border border-violet-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-violet-800">
                            <strong>Late-Round Deflations:</strong> As evident by the numbers, a significant "late-round drop" in ranks occurs towards CSAB Special Rounds, permitting students with lower scores to snag core branches relatively easily. <br />
                            <span className="text-xs opacity-80">*Category boundaries denote indicative early round drops.</span>
                        </p>
                    </motion.div>
                </section>

                {/* ── 3. Placements ─────────────────────────────────────────────── */}
                <section id="placements">
                    <SectionTitle icon={Briefcase}>Exceptional Placement Rate (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹35.00 LPA' },
                            { label: 'Overall Average', value: '₹8.40 LPA' },
                            { label: 'CSE Coverage', value: '97%' },
                            { label: 'Overall Rate', value: '93.1%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        A massive leap was taken when highest CTC jumped to <strong>₹35 LPA</strong>, driven by Microsoft, Adobe, and IBM. Core giants like Larsen & Toubro, Alstom, and Powergrid propelled mechanical placement rates up to nearly 100%.
                    </motion.div>

                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr><Th>Branch Overview</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th></tr>
                            </thead>
                            <tbody>
                                {PLACEMENT_BRANCH_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                        <td className="px-4 py-3 text-center text-violet-700 font-bold">{r.placementRate}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.averageCTC}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.highestCTC}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 4. Fee Structure ──────────────────────────────────────────── */}
                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Cost Approximations</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr>
                                    <Th>Fee Component / Criteria</Th>
                                    <Th className="text-center">Estimated Bracket</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEE_DATA.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 text-gray-900">{r.category}</td>
                                        <td className="px-4 py-3 text-center text-gray-700">{r.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* ── 5. Courses Offered ────────────────────────────────────────── */}
                <section id="courses">
                    <SectionTitle icon={BookOpen}>Undergraduate Scope</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-violet-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── 6. Rankings ───────────────────────────────────────────────── */}
                <section id="rankings">
                    <SectionTitle icon={Award}>Global & National Stature</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-violet-600 shrink-0 mt-0.5" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-700 to-fuchsia-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                            <div key={i} className="bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────── */}
                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-violet-800 to-fuchsia-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Can You Unlock NIT Mizoram?
                    </h2>
                    <p className="text-violet-100 mb-8 max-w-xl mx-auto">
                        Evaluate your JEE Main score and capitalize on late-round CSAB drops.
                    </p>
                    <Link to="/jee-mains">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-violet-800 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
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

export default NITMizoram;
