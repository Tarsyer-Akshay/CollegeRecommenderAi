import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    MapPin, Calendar, Building2, GraduationCap, TrendingUp,
    IndianRupee, Award, BookOpen, ArrowRight, CheckCircle2,
    Briefcase, Star, Info, Users
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const BASIC_INFO = [
    { param: 'College Name', detail: 'Maulana Azad National Institute of Technology (MANIT)' },
    { param: 'Known As', detail: 'NIT Bhopal / MANIT Bhopal' },
    { param: 'Location', detail: 'Bhopal, Madhya Pradesh' },
    { param: 'Established Year', detail: '1960' },
    { param: 'Campus Size', detail: '650 Acres' },
    { param: 'Named After', detail: 'Maulana Abul Kalam Azad – India\'s first Education Minister' },
    { param: 'NIRF Ranking 2025', detail: '#80 Engineering · #17 Architecture (2024)' },
];

const RANKINGS = [
    { body: 'NIRF 2025 – Engineering', rank: '#80', icon: Award },
    { body: 'NIRF 2024 – Architecture', rank: '#17 (National)', icon: Star },
    { body: 'The Week 2024 – B.Tech', rank: '#33', icon: Award },
    { body: 'Highest Package (2024 peak)', rank: '₹82 LPA (Atlassian)', icon: Star },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engg.', genOS: '9,249', genHS: '11,415', ewsOS: '1,348', obcOS: '3,393', scOS: '1,827', stOS: '667' },
    { branch: 'Electronics & Communication', genOS: '14,205', genHS: '18,120', ewsOS: '~2,100', obcOS: '~5,200', scOS: '~2,800', stOS: '~1,000' },
    { branch: 'Electrical Engineering', genOS: '20,770', genHS: '~24,000', ewsOS: '~3,200', obcOS: '~7,500', scOS: '~3,700', stOS: '~1,400' },
    { branch: 'Mechanical Engineering', genOS: '29,613', genHS: '~35,000', ewsOS: '~4,500', obcOS: '~11,000', scOS: '~5,500', stOS: '~2,000' },
    { branch: 'Chemical Engineering', genOS: '35,814', genHS: '~42,000', ewsOS: '~5,500', obcOS: '~13,000', scOS: '~7,000', stOS: '~2,500' },
    { branch: 'Civil Engineering', genOS: '42,750', genHS: '~50,000', ewsOS: '~6,500', obcOS: '~15,000', scOS: '~8,000', stOS: '~3,000' },
    { branch: 'Material Science & MME', genOS: '45,803', genHS: '~54,000', ewsOS: '~7,000', obcOS: '~16,000', scOS: '~9,000', stOS: '~3,500' },
];

const PLACEMENT_DATA = [
    { branch: 'CSE', highest: '₹56 LPA', avg: '₹25.51 LPA', median: '₹19 LPA', rate: '95%' },
    { branch: 'ECE', highest: '₹56 LPA', avg: '₹18.92 LPA', median: '₹12 LPA', rate: '75%' },
    { branch: 'Electrical', highest: '₹55 LPA', avg: '₹11.13 LPA', median: '₹9.5 LPA', rate: '86%' },
    { branch: 'Mechanical', highest: '₹30.5 LPA', avg: '₹10.89 LPA', median: '₹8 LPA', rate: '86%' },
    { branch: 'Chemical', highest: '₹30.5 LPA', avg: '₹13.38 LPA', median: '₹7.5 LPA', rate: '80%' },
    { branch: 'Civil', highest: '₹30.5 LPA', avg: '₹11.25 LPA', median: '₹9 LPA', rate: '68%' },
    { branch: 'MME', highest: '₹30.5 LPA', avg: '₹12.71 LPA', median: '₹8 LPA', rate: '85%' },
];

const FEE_DATA = [
    { component: 'B.Tech (4 Years) – Total Tuition', amount: '₹5,76,000' },
    { component: 'B.Arch (5 Years) – Total Tuition', amount: '₹7,20,000' },
    { component: 'B.Plan (4 Years) – Total Tuition', amount: '₹5,78,000' },
    { component: 'B.Tech + M.Tech Dual (5 Years)', amount: '₹7,18,000' },
    { component: 'Hostel Maintenance (Per Semester)', amount: '₹10,500' },
    { component: 'Hostel Usage – Triple Occupancy (Per Sem)', amount: '₹5,000' },
    { component: 'Hostel Usage – Double Occupancy (Per Sem)', amount: '₹7,500' },
    { component: 'SC/ST/PwD / Income < 1 LPA', amount: '100% Tuition Waiver', highlight: true },
    { component: 'Income 1–5 LPA', amount: '66.67% Tuition Remission', highlight: true },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 with minimum 75% in Class 12 (65% for SC/ST/PwD). MANIT Bhopal follows 50/50 HS (Madhya Pradesh) / OS quota split.',
    'CSE (OS General) closes around AIR 9,249 — tighter than many NITs ranked higher, reflecting Bhopal\'s IT hub positioning.',
    'B.Arch and B.Plan admissions are also via JEE Main Paper 2A/2B. MANIT\'s Architecture program is ranked #17 nationally.',
    'Apply fee remission during document verification: SC/ST/PwD and income below ₹1 Lakh receive 100% tuition waiver.',
    'MANIT has 12 hostels. Report to Bhopal campus (650-acre) with Aadhaar, board certificates, JEE scorecard, and category documents.',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-green-700 bg-green-50 ${className}`}>{children}</th>
);

const MANITBhopal = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Maulana Azad National Institute of Technology Bhopal",
        "alternateName": ["MANIT Bhopal", "NIT Bhopal"],
        "url": "https://www.manit.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "MANIT Bhopal — NIRF #80 Engineering, #17 Architecture. 650-acre campus, CSE average ₹25.51 LPA in 2025, ₹82 LPA historical peak (Atlassian). Central India's premier NIT.",
        "address": { "@type": "PostalAddress", "addressLocality": "Bhopal", "addressRegion": "Madhya Pradesh", "addressCountry": "IN" },
        "foundingDate": "1960"
    };

    const faqItems = [
        { q: 'What is the cutoff for MANIT Bhopal CSE?', a: 'In JoSAA 2025, CSE (OS) closed at 9,249 for General category — more competitive than many higher-NIRF-ranked NITs. HS (Madhya Pradesh) closed at 11,415. EWS OS: 1,348, OBC OS: 3,393.' },
        { q: 'What is the highest placement at MANIT Bhopal?', a: 'The all-time highest was ₹82 LPA by Atlassian in 2024. In 2025, the highest package was ₹56 LPA (CSE and ECE). CSE average was ₹25.51 LPA with 95% placement rate.' },
        { q: 'Does MANIT Bhopal offer B.Arch?', a: 'Yes. MANIT Bhopal offers B.Arch (5-year, ₹7.20 Lakh total tuition) and B.Plan (4-year), both through JEE Main Paper 2. The Architecture program is ranked #17 nationally by NIRF 2024.' },
        { q: 'What is the total fee at MANIT Bhopal?', a: 'B.Tech 4-year total tuition: ₹5.76 Lakhs. Hostel adds ₹10,500/semester (maintenance) + ₹5,000–7,500 (room occupancy). SC/ST/PwD and income below ₹1 Lakh receive 100% tuition waiver.' },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(f => ({
            "@type": "Question", "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    };

    return (
        <div className="min-h-screen">
            <SEOHead
                title="MANIT Bhopal 2026: Cutoff, Fees, Placements & Ranking"
                description="MANIT Bhopal 2025-26: JEE Main cutoffs (CSE OS 9,249), ₹82 LPA peak, ₹25.51 LPA CSE avg, B.Arch #17, 650-acre campus. NIRF #80 Engineering."
                canonicalPath="/colleges/manit-bhopal"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-green-800 via-emerald-700 to-teal-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🌿 Est. 1960 · Bhopal, Madhya Pradesh · 650-Acre Campus
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            MANIT Bhopal – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Central India's Premier NIT · ₹82 LPA Peak · NIRF #80 Engg · #17 Arch
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Bhopal, Madhya Pradesh' },
                            { icon: Calendar, text: 'Est. 1960' },
                            { icon: Building2, text: '650-Acre Campus' },
                            { icon: Award, text: 'NIRF #80 · Arch #17' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" /><span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-green-500 pl-6">
                    <strong className="text-gray-900">MANIT Bhopal</strong>, named after India's first Education Minister Maulana Abul Kalam Azad, is Central India's flagship NIT. A key data point: its <strong className="text-gray-900">CSE OS cutoff (~9,249)</strong> is tighter than many higher-ranked NITs, reflecting Bhopal's growing IT ecosystem. The <strong className="text-gray-900">₹82 LPA historical peak</strong> (Atlassian, 2024) and a #17 Architecture ranking make it doubly competitive.
                </motion.p>

                <section id="basic-info">
                    <SectionTitle icon={Info}>Basic Info</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Parameter</Th><Th>Details</Th></tr></thead>
                            <tbody>{BASIC_INFO.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.param}</td>
                                    <td className="px-4 py-3 text-gray-700">{r.detail}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                </section>

                <section id="rankings">
                    <SectionTitle icon={Award}>Rankings</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-gray-900">{r.body}</div>
                                    <div className="text-sm text-gray-600 mt-1">{r.rank}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="cutoffs">
                    <SectionTitle icon={TrendingUp}>JEE Main 2025 Cutoffs (Round 1 / Last Round)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Gen (OS)</Th><Th className="text-center">Gen (HS)</Th><Th className="text-center">EWS (OS)</Th><Th className="text-center">OBC-NCL</Th><Th className="text-center">SC (OS)</Th><Th className="text-center">ST (OS)</Th></tr>
                            </thead>
                            <tbody>{CUTOFF_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.genOS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.genHS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.ewsOS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.obcOS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.scOS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.stOS}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-green-800"><strong>Strategic insight:</strong> CSE OS (9,249) is tighter than NIT Jalandhar (13,737), despite MANIT having a lower NIRF rank — students prefer Bhopal's IT hub location. Values marked ~ are estimates. HS quota is for MP candidates.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2025 Batch)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package (2025)', value: '₹56 LPA' },
                            { label: 'CSE Average Package', value: '₹25.51 LPA' },
                            { label: 'PPO Average (2024)', value: '₹18.95 LPA' },
                            { label: 'CSE Placement Rate', value: '95%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Historical peak: <strong>₹82 LPA by Atlassian (2024)</strong>. Top recruiters: Google, Microsoft, Amazon, Flipkart, Goldman Sachs, Deloitte. Strong PPO pipeline averaging ₹18.95 LPA in 2024. Chemical Engineering shows notably strong average (₹13.38 LPA) for a core branch.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Highest CTC</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Median CTC</Th><Th className="text-center">Placement%</Th></tr></thead>
                            <tbody>{PLACEMENT_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.branch}</td>
                                    <td className="px-4 py-3 text-center font-medium text-green-700">{r.highest}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.avg}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.median}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.rate}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                </section>

                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure (2025–2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Fee Component</Th><Th className="text-center">Amount (INR)</Th></tr></thead>
                            <tbody>{FEE_DATA.map((r, i) => (
                                <tr key={i} className={r.highlight ? 'bg-green-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                    <td className="px-4 py-3 text-gray-900">{r.component}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                </section>

                <section id="courses">
                    <SectionTitle icon={BookOpen}>Programs Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {[
                            { label: 'B.Tech (7 Branches)', items: 'CSE, ECE, Electrical, Mechanical, Chemical, Civil, Material Science & Metallurgy' },
                            { label: 'Other Programs', items: 'B.Arch (5-year, #17 NIRF), B.Plan (4-year), B.Tech + M.Tech Dual (5-year), M.Tech, PhD across all departments' },
                        ].map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-green-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="admission">
                    <SectionTitle icon={GraduationCap}>Admission Process 2026</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-green-700 to-emerald-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Check Your Rank for MANIT Bhopal</h2>
                    <p className="text-green-100 mb-8 max-w-xl mx-auto">See your admission chances across MANIT's 7 B.Tech branches and B.Arch program.</p>
                    <Link to="/jee-mains">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="bg-white text-green-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                            <span>Try College Predictor</span><ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default MANITBhopal;
