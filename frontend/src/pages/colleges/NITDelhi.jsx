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
    { param: 'College Name', detail: 'National Institute of Technology Delhi' },
    { param: 'Location', detail: 'Narela, New Delhi' },
    { param: 'Established Year', detail: '2010' },
    { param: 'Campus Size', detail: '51 Acres (Narela, Delhi)' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Ministry of Education)' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#65 Engineering', icon: Award },
    { body: 'NIRF 2024', rank: '#45 Engineering', icon: Award },
    { body: 'India Today 2025', rank: '#22 Engineering', icon: Star },
    { body: 'IIRF 2024', rank: '#72 Engineering', icon: Star },
];

const CUTOFF_OS = [
    { branch: 'CSE', gen: '6,746', ews: '1,084', obc: '2,903', sc: '1,317', st: '520' },
    { branch: 'AI & Data Science', gen: '6,896', ews: '1,095', obc: '3,085', sc: '1,370', st: '575' },
    { branch: 'ECE', gen: '10,909', ews: '2,299', obc: '5,553', sc: '2,350', st: '2,626' },
    { branch: 'VLSI Design', gen: '12,972', ews: '3,824', obc: '6,448', sc: '2,801', st: '1,078' },
    { branch: 'Aerospace Engg.', gen: '13,389', ews: '6,727', obc: '9,622', sc: '1,910', st: '4,076' },
    { branch: 'Electrical', gen: '15,718', ews: '3,865', obc: '8,026', sc: '3,439', st: '2,854' },
    { branch: 'Mechanical', gen: '21,049', ews: '4,501', obc: '10,988', sc: '3,908', st: '2,943' },
    { branch: 'Civil', gen: '27,647', ews: '4,703', obc: '11,444', sc: '4,245', st: '1,953' },
];

const CUTOFF_HS = [
    { branch: 'CSE', gen: '8,971', ews: '2,083', obc: '4,773', sc: '1,430', st: '1,277' },
    { branch: 'AI & Data Science', gen: '9,420', ews: '1,846', obc: '4,835', sc: '1,465', st: '1,301' },
    { branch: 'ECE', gen: '12,508', ews: '2,095', obc: '5,553', sc: '2,350', st: '2,626' },
    { branch: 'VLSI Design', gen: '13,927', ews: '3,824', obc: '6,448', sc: '2,801', st: '1,078' },
    { branch: 'Aerospace Engg.', gen: '14,639', ews: '6,727', obc: '9,622', sc: '1,910', st: '4,076' },
    { branch: 'Electrical', gen: '16,098', ews: '3,526', obc: '8,026', sc: '3,439', st: '2,179' },
    { branch: 'Mechanical', gen: '19,493', ews: '3,616', obc: '10,025', sc: '3,645', st: '2,943' },
    { branch: 'Civil', gen: '28,420', ews: '4,703', obc: '9,825', sc: '4,245', st: '1,953' },
];

const CSAB = [
    { branch: 'CSE (HS)', rank: '17,194' }, { branch: 'CSE (OS)', rank: '8,778' },
    { branch: 'ECE (HS)', rank: '29,998' }, { branch: 'ECE (OS)', rank: '15,151' },
    { branch: 'Electrical (HS)', rank: '37,307' }, { branch: 'Electrical (OS)', rank: '15,927' },
    { branch: 'Mechanical (HS)', rank: '36,330' }, { branch: 'Mechanical (OS)', rank: '21,111' },
    { branch: 'Civil (HS)', rank: '52,560' }, { branch: 'Civil (OS)', rank: '34,303' },
];

const PLACEMENT_BRANCH = [
    { branch: 'Computer Science & Engg.', avg: '₹18.87 LPA', highest: '₹52.5 LPA', rate: '100%' },
    { branch: 'Electronics & Comm.', avg: '₹15.24 LPA', highest: '₹58.5 LPA', rate: '68.22%' },
    { branch: 'Electrical Engineering', avg: '₹16.3 LPA', highest: '₹58.5 LPA', rate: '85.71%' },
];

const FEE_DATA = [
    { component: 'Tuition Fee (Per Semester)', amount: '₹62,500' },
    { component: 'Admission Fee (One-time)', amount: '₹1,500' },
    { component: 'One-Time Charges (ID, Alumni etc.)', amount: '₹23,700' },
    { component: 'Hostel – AC Room (Per Semester)', amount: '₹28,000' },
    { component: 'Hostel – Non-AC Room (Per Semester)', amount: '₹18,000' },
    { component: 'Mess Charges (Monthly)', amount: '₹3,800' },
    { component: 'Caution Money (Refundable)', amount: '₹20,000' },
    { component: 'Total 4-Year Tuition', amount: '₹5.00 Lakhs' },
    { component: 'Total Academic Fees (incl. other charges)', amount: '₹7.12 Lakhs' },
    { component: 'SC/ST/PwD / Family Income < 1 LPA', amount: '100% Tuition Waiver', highlight: true },
    { component: 'Income 1–5 LPA', amount: '66.67% Tuition Remission', highlight: true },
];

const COURSES = [
    { label: 'B.Tech Programs (8 Branches)', items: 'CSE, AI & Data Science, ECE, VLSI Design & Technology, Aerospace Engineering, Electrical, Mechanical, Civil' },
    { label: 'Postgraduate & Research', items: 'M.Tech in multiple disciplines, Ph.D. with focus on Semiconductors, AI & Power Systems' },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026. Meet 75% aggregate in Class 12 (65% for SC/ST/PwD) or top 20 percentile of board.',
    'Register on JoSAA. NIT Delhi accepts JEE Main scores only — not JEE Advanced.',
    'Fill choices. CSE/AI&DS close earliest (~6,746 Gen OS). Aerospace is a unique offering with more accessible cutoff (~13k OS).',
    'For vacant seats, apply via CSAB special rounds (typically higher closing ranks).',
    'Report to Narela campus with Aadhaar, PSAL letter, and all original certificates.',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 ${className}`}>{children}</th>
);

const NITDelhi = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Delhi",
        "alternateName": "NIT Delhi",
        "url": "https://www.nitdelhi.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Delhi, Narela — NIRF #65 Engineering 2025, 8 B.Tech programs including unique Aerospace and VLSI, ₹58.5 LPA highest placement, 230+ recruiting companies.",
        "address": { "@type": "PostalAddress", "addressLocality": "Narela, New Delhi", "addressRegion": "Delhi", "addressCountry": "IN" },
        "foundingDate": "2010"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Delhi CSE?', a: 'In JoSAA 2025 final round, CSE closed at 6,746 (Gen OS) and 8,971 (Gen HS). AI & Data Science closed at 6,896 OS and 9,420 HS — among the most competitive cutoffs outside the IITs.' },
        { q: 'What is the highest placement at NIT Delhi?', a: '₹58.5 LPA from ECE and Electrical branches in 2025. CSE highest was ₹52.5 LPA. Google visited for the first time in 2025. B.Tech average was ₹17.19 LPA.' },
        { q: 'What is the NIRF rank of NIT Delhi?', a: 'NIRF 2025: #65 Engineering. NIRF 2024: #45. India Today 2025: #22 Engineering.' },
        { q: 'What is the total fee at NIT Delhi?', a: 'Total 4-year tuition: ₹5 Lakhs. Total academic fees with other charges: ₹7.12 Lakhs. SC/ST/PwD and income below ₹1 LPA get 100% tuition waiver.' },
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
                title="NIT Delhi Cutoff, Fees, Placements & Ranking 2026"
                description="Check NIT Delhi 2026 JEE Main cutoffs, ₹58.5 LPA placements, fee structure, NIRF #65 ranking. 8 B.Tech programs including Aerospace & VLSI."
                canonicalPath="/colleges/nit-delhi"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-indigo-700 to-blue-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏙️ Established 2010 · Narela, New Delhi
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Delhi – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            NCR's Premier NIT · ₹58.5 LPA Highest · Google, Amazon, Microsoft
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Narela, New Delhi' },
                            { icon: Calendar, text: 'Est. 2010' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #65 · India Today #22' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" /><span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-6">
                    <strong className="text-gray-900">NIT Delhi</strong> leverages its NCR location to achieve placements rivaling mid-tier IITs. With <strong className="text-gray-900">8 unique B.Tech programs</strong> — including niche offerings like Aerospace Engineering and VLSI Design — it attracted <strong className="text-gray-900">230+ companies</strong> in 2025, with Google visiting for the first time.
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-gray-900">{r.body}</div>
                                    <div className="text-sm text-gray-600 mt-1">{r.rank}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="cutoffs">
                    <SectionTitle icon={TrendingUp}>JEE Main 2025 Cutoffs (JoSAA Final Round)</SectionTitle>
                    <h3 className="font-semibold text-gray-800 mb-2">Other State (OS) Quota</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Gen</Th><Th className="text-center">EWS</Th><Th className="text-center">OBC-NCL</Th><Th className="text-center">SC</Th><Th className="text-center">ST</Th></tr></thead>
                            <tbody>{CUTOFF_OS.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.gen}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.ews}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.obc}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.sc}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.st}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <h3 className="font-semibold text-gray-800 mb-2">Home State (HS) Quota – Delhi Candidates</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Gen</Th><Th className="text-center">EWS</Th><Th className="text-center">OBC-NCL</Th><Th className="text-center">SC</Th><Th className="text-center">ST</Th></tr></thead>
                            <tbody>{CUTOFF_HS.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.gen}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.ews}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.obc}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.sc}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.st}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <h3 className="font-semibold text-gray-800 mb-2">CSAB 2025 Special Round (General-Open)</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch (Quota)</Th><Th className="text-center">Closing Rank</Th></tr></thead>
                            <tbody>{CSAB.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.rank}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-blue-800"><strong>Note:</strong> Accepts JEE Main only (not Advanced). Aerospace Engineering offers a niche, accessible entry at ~13,389 Gen OS. VLSI Design is a unique program not offered at most NITs.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹58.5 LPA' },
                            { label: 'B.Tech Average', value: '₹17.19 LPA' },
                            { label: 'Total Offers', value: '417' },
                            { label: 'Companies Visited', value: '230+' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Google visited for the first time in 2025. Other top recruiters: Amazon, Adobe, Microsoft, Intel, Qualcomm, Samsung. CSE placed 100% of eligible students.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th><Th className="text-center">Placement %</Th></tr></thead>
                            <tbody>{PLACEMENT_BRANCH.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.avg}</td>
                                    <td className="px-4 py-3 text-center font-medium text-blue-700">{r.highest}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.rate}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Metric</Th><Th className="text-center">B.Tech 2025</Th><Th className="text-center">M.Tech 2025</Th></tr></thead>
                            <tbody>{[
                                { m: 'Highest Package', b: '₹58.5 LPA', mt: '₹23.5 LPA' },
                                { m: 'Average Package', b: '₹17.19 LPA', mt: '₹8.58 LPA' },
                                { m: 'Total Placed', b: '151', mt: '100' },
                                { m: 'Placement %', b: '86.28%', mt: '65.35%' },
                            ].map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.m}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.b}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.mt}</td>
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
                                <tr key={i} className={r.highlight ? 'bg-blue-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                    <td className="px-4 py-3 text-gray-900">{r.component}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500">
                        <p>* Caution money is refundable. Mess charges of ₹3,800/month billed separately. AC rooms attract higher hostel rent than non-AC.</p>
                    </motion.div>
                </section>

                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-blue-600 mb-2">{c.label}</div>
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-700 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-blue-700 to-indigo-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Check Your Chances at NIT Delhi</h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">Evaluate your JEE Main rank against NIT Delhi's competitive cutoffs using our AI predictor.</p>
                    <Link to="/jee-mains">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                            <span>Try College Predictor</span><ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITDelhi;
