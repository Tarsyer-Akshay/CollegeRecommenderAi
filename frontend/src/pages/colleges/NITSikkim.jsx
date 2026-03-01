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
    { param: 'College Name', detail: 'National Institute of Technology Sikkim (NITSKM)' },
    { param: 'Location', detail: 'Ravangla, South Sikkim' },
    { param: 'Established Year', detail: '2010' },
    { param: 'Hostels', detail: "9 Boys' Hostels + 3 Girls' Hostels" },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government/Autonomous)' },
];

const CUTOFF_2024 = [
    { branch: 'Computer Science & Engineering', r1: 23245, last: 39917 },
    { branch: 'AI and Machine Learning', r1: 25843, last: 47089 },
    { branch: 'Electronics & Communication', r1: 33269, last: 51050 },
    { branch: 'Electrical & Electronics', r1: 35527, last: 62382 },
    { branch: 'Mechanical Engineering', r1: 40597, last: 75190 },
    { branch: 'Civil Engineering', r1: 48441, last: 94766 },
];

const CUTOFF_2025 = [
    { branch: 'Computer Science & Engineering', r1: 21087, last: 31754 },
    { branch: 'AI and Machine Learning', r1: 26980, last: 42422 },
    { branch: 'Electronics & Communication', r1: 31018, last: 49155 },
    { branch: 'Electrical & Electronics', r1: 35180, last: 56813 },
    { branch: 'Mechanical Engineering', r1: 39937, last: 64686 },
    { branch: 'Civil Engineering', r1: 49684, last: 84897 },
];

const PLACEMENT_DATA = [
    { branch: 'B.Tech CSE', offers: 24, avg: '₹13.76 LPA' },
    { branch: 'B.Tech ECE', offers: 13, avg: '₹12.57 LPA' },
    { branch: 'B.Tech EEE', offers: 18, avg: '₹10.87 LPA' },
    { branch: 'B.Tech Mechanical', offers: 16, avg: '₹8.56 LPA' },
    { branch: 'B.Tech Civil', offers: 10, avg: '₹6.21 LPA' },
];

const FEE_DATA = [
    { component: 'Tuition Fee (Per Semester)', amount: '₹62,500' },
    { component: 'Exam, Library, Lab & Other (Per Sem)', amount: '₹5,898' },
    { component: 'Internet + Insurance (Per Sem)', amount: '₹1,170' },
    { component: 'Institute Development + T&P (Per Sem)', amount: '₹2,327' },
    { component: 'Total Recurring (Per Semester)', amount: '₹70,945', highlight: true },
    { component: 'One-Time Charges (Admission Year)', amount: '₹10,927' },
    { component: 'Hostel Fees (1st Semester)', amount: '₹16,750' },
    { component: 'Hostel Fees (Subsequent Semesters)', amount: '₹8,250/sem' },
    { component: 'SC/ST/PwD / Family Income < 1 LPA', amount: '100% Tuition Waiver' },
    { component: 'Estimated Total 4-Year B.Tech', amount: '~₹6.15 Lakhs' },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'CSE, AI & Machine Learning, ECE, Electrical & Electronics, Mechanical, Civil' },
    { label: 'Postgraduate & Research', items: 'M.Tech programs and Ph.D. fellowships across engineering disciplines' },
];

const RANKINGS = [
    { body: 'NIRF 2024', rank: '151–200 Band (Engineering)', icon: Award },
    { body: 'IIRF 2025', rank: '#99 (Top Public Colleges)', icon: Star },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026. Ensure 75% in Class 12 (65% for SC/ST/PwD).',
    'Register on JoSAA portal and fill/lock preferences. CSE and AI & ML are the most competitive branches.',
    'Participate in all six JoSAA rounds followed by CSAB special rounds for vacant seats.',
    'Accept seat via Freeze/Float/Slide. SC/ST/PwD and income below ₹1 LPA students get 100% tuition waiver.',
    'Upload documents online and report physically to Ravangla campus with original certificates for verification.',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-600 to-cyan-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 ${className}`}>{children}</th>
);

const NITSikkim = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Sikkim",
        "alternateName": "NIT Sikkim",
        "url": "https://www.nitsikkim.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Sikkim is an Institute of National Importance in Ravangla, known for ₹44 LPA NVIDIA offer and a B.Tech in AI & ML.",
        "address": { "@type": "PostalAddress", "addressLocality": "Ravangla", "addressRegion": "Sikkim", "addressCountry": "IN" },
        "foundingDate": "2010"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Sikkim CSE?', a: 'For General (Other State), the 2025 last round closing rank for CSE was 31,754 — tighter than 2024\'s 39,917, reflecting growing prestige.' },
        { q: 'What is the highest package at NIT Sikkim?', a: '₹44 LPA from NVIDIA, offered to ECE and EEE students — one of the highest across all second-generation NITs.' },
        { q: 'Does NIT Sikkim offer AI & ML B.Tech?', a: 'Yes, NIT Sikkim offers B.Tech in AI and Machine Learning, making it one of the few NITs with this undergraduate specialization.' },
        { q: 'What is the placement rate at NIT Sikkim?', a: '75.37% in 2024, rising to ~86% in 2025. Average CSE package was ₹13.76 LPA in 2024.' },
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
                title="NIT Sikkim Cutoff, Fees, Placements & Ranking 2026"
                description="Check NIT Sikkim 2026 JEE Main cutoffs, ₹44 LPA highest placement (NVIDIA), fee structure, AI & ML B.Tech, and NIRF ranking. Updated 2026 data."
                canonicalPath="/colleges/nit-sikkim"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-cyan-600 to-teal-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏔️ Established 2010 · Ravangla, South Sikkim
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Sikkim – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Home to India's ₹44 LPA NVIDIA offer · AI &amp; ML Flagship Program
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Ravangla, Sikkim' },
                            { icon: Calendar, text: 'Est. 2010' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF 151–200 Band' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" /><span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-sky-500 pl-6">
                    Nestled in the Eastern Himalayas, <strong className="text-gray-900">NIT Sikkim (NITSKM)</strong> has emerged as a placement powerhouse. Its landmark <strong className="text-gray-900">₹44 LPA from NVIDIA</strong> and a thriving B.Tech in AI &amp; ML make it a top choice for elite tech careers from a focused academic environment.
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

                <section id="cutoffs">
                    <SectionTitle icon={TrendingUp}>JEE Main Cutoffs (General – Other State)</SectionTitle>
                    <h3 className="font-semibold text-gray-800 mb-2">2024 Closing Ranks</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Round 1</Th><Th className="text-center">Last Round</Th></tr></thead>
                            <tbody>{CUTOFF_2024.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.r1.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.last.toLocaleString()}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <h3 className="font-semibold text-gray-800 mb-2">2025 Closing Ranks</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Round 1</Th><Th className="text-center">Last Round</Th></tr></thead>
                            <tbody>{CUTOFF_2025.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.r1.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.last.toLocaleString()}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-sky-800"><strong>Key Insight:</strong> CSE last round rank tightened by ~8,000 between 2024–2025. AI &amp; ML is increasingly competitive, nearly rivaling CSE cutoffs.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2024)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹44.00 LPA' },
                            { label: 'Avg CSE Package', value: '₹13.76 LPA' },
                            { label: 'Placement Rate 2024', value: '75.37%' },
                            { label: 'Placement Rate 2025', value: '~86%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        <strong>₹44 LPA from NVIDIA</strong> secured by ECE and EEE students. Top recruiters: NVIDIA, Deloitte, Samsung, IBM, Intel, Oracle, Maruti Suzuki.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Job Offers</Th><Th className="text-center">Average Package</Th></tr></thead>
                            <tbody>{PLACEMENT_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.offers}</td>
                                    <td className="px-4 py-3 text-center font-medium text-sky-700">{r.avg}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                </section>

                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure (2024–2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Fee Component</Th><Th className="text-center">Amount (INR)</Th></tr></thead>
                            <tbody>{FEE_DATA.map((r, i) => (
                                <tr key={i} className={r.highlight ? 'bg-sky-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                    <td className="px-4 py-3 text-gray-900">{r.component}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500">
                        <p>* Hostel caution deposits (₹3,000 + ₹500 mess) are refundable. Income 1–5 LPA: 66.67% tuition waiver.</p>
                    </motion.div>
                </section>

                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-sky-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="rankings">
                    <SectionTitle icon={Award}>Rankings (2024–2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-gray-900">{r.body}</div>
                                    <div className="text-sm text-gray-600 mt-1">{r.rank}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="admission">
                    <SectionTitle icon={GraduationCap}>Admission Process 2026</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-sky-600 to-cyan-500 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Could You Get Into NIT Sikkim?</h2>
                    <p className="text-sky-100 mb-8 max-w-xl mx-auto">Use our AI predictor to check your chances at NIT Sikkim and explore other top engineering colleges.</p>
                    <Link to="/jee-mains">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="bg-white text-sky-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                            <span>Try College Predictor</span><ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITSikkim;
