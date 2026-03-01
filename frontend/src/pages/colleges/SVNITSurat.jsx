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
    { param: 'College Name', detail: 'Sardar Vallabhbhai National Institute of Technology (SVNIT)' },
    { param: 'Known As', detail: 'SVNIT Surat / NIT Surat' },
    { param: 'Location', detail: 'Surat, Gujarat' },
    { param: 'Established Year', detail: '1961' },
    { param: 'Named After', detail: 'Sardar Vallabhbhai Patel – Iron Man of India' },
    { param: 'B.Tech + Integrated Seats (2025)', detail: '1,260 seats across all UG programs' },
    { param: 'NIRF Ranking 2025', detail: '#65 Engineering (consistent for 2+ years)' },
];

const RANKINGS = [
    { body: 'NIRF 2025 – Engineering', rank: '#65 (same as 2024; was #58 in 2023)', icon: Award },
    { body: 'Industry Strength', rank: 'Strong petrochemical & chemical sector ties', icon: Star },
    { body: 'Highest Package 2025', rank: '₹62 LPA (up from ₹52.71 LPA in 2024)', icon: Award },
    { body: 'Unique Programs', rank: 'Integrated M.Sc (Physics, Chemistry, Maths)', icon: Star },
];

const CUTOFF_DATA = [
    { branch: 'Computer Science & Engg.', r1OS: '8,130', r6OS: '8,130', r1HS: '8,105', r6HS: '8,105', ewsOS: '1,170', obcOS: '3,087' },
    { branch: 'Artificial Intelligence', r1OS: '10,721', r6OS: '10,721', r1HS: '~11,000', r6HS: '~11,000', ewsOS: '~1,600', obcOS: '~3,800' },
    { branch: 'Mathematics & Computing', r1OS: '10,306', r6OS: '10,306', r1HS: '~10,500', r6HS: '~10,500', ewsOS: '~1,550', obcOS: '~3,700' },
    { branch: 'Electronics & Comm.', r1OS: '14,086', r6OS: '14,086', r1HS: '~14,500', r6HS: '~14,500', ewsOS: '~2,200', obcOS: '~5,100' },
    { branch: 'Electrical Engineering', r1OS: '19,406', r6OS: '19,406', r1HS: '~20,000', r6HS: '~20,000', ewsOS: '~3,000', obcOS: '~7,100' },
    { branch: 'Mechanical Engineering', r1OS: '27,882', r6OS: '27,882', r1HS: '~29,000', r6HS: '~29,000', ewsOS: '~4,300', obcOS: '~10,200' },
    { branch: 'Chemical Engineering', r1OS: '36,111', r6OS: '36,111', r1HS: '~37,000', r6HS: '~37,000', ewsOS: '~5,600', obcOS: '~13,200' },
    { branch: 'Civil Engineering', r1OS: '41,558', r6OS: '41,558', r1HS: '~43,000', r6HS: '~43,000', ewsOS: '~6,400', obcOS: '~15,100' },
];

const PLACEMENT_DATA = [
    { branch: 'CSE', rate: '64%', highest: '₹62 LPA', avg: '₹16.73 LPA', median: '₹15.19 LPA' },
    { branch: 'Electronics', rate: '66%', highest: '₹32.82 LPA', avg: '₹13.35 LPA', median: '₹12.37 LPA' },
    { branch: 'Electrical', rate: '70%', highest: '₹16.20 LPA', avg: '₹8.35 LPA', median: '₹7.92 LPA' },
    { branch: 'Chemical', rate: '70%', highest: '₹21 LPA', avg: '₹8.22 LPA', median: '₹7.50 LPA' },
    { branch: 'Mechanical', rate: '68%', highest: '₹20 LPA', avg: '₹8.01 LPA', median: '₹7.50 LPA' },
    { branch: 'Civil', rate: '47%', highest: '₹13 LPA', avg: '₹7.21 LPA', median: '₹7.50 LPA' },
];

const FEE_DATA = [
    { component: 'B.Tech (4-Year) – Tuition Total', amount: '₹5,00,000' },
    { component: 'B.Tech (4-Year) – All-in Total (est.)', amount: '₹6,48,000' },
    { component: 'B.Tech + M.Tech Dual (5-Year) – Total', amount: '₹8,03,000' },
    { component: 'B.Sc + M.Sc Integrated (5-Year) – Total', amount: '₹4,50,000' },
    { component: 'Hostel (Single Room, Annual incl. Mess)', amount: '~₹51,380/year' },
    { component: 'SC/ST/PwD / Income < 1 LPA', amount: '100% Tuition Waiver', highlight: true },
    { component: 'Income 1–5 LPA', amount: '66.67% Tuition Remission', highlight: true },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026. SVNIT Surat admits 1,260 students across B.Tech, B.Tech+M.Tech dual, and Integrated M.Sc programs (50% HS Gujarat / 50% OS).',
    'CSE (OS General) closed at 8,130 — more competitive than NIT Jalandhar and MANIT, reflecting western India\'s strong demand for IT talent in Surat\'s industrial ecosystem.',
    'AI and Mathematics & Computing both close around 10,000–11,000 OS — strong alternatives at similar rank bands if CSE is out of reach.',
    'Integrated M.Sc Physics (44,792 OS closing) provides an accessible path to high-quality science education at a premier NIT — a unique filter-page opportunity.',
    'Report with originals: Aadhaar, JEE scorecard, board certificates, category documents. Hostel single-room annual cost ~₹51,380 (includes mess advance + electricity).',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-50 ${className}`}>{children}</th>
);

const SVNITSurat = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Sardar Vallabhbhai National Institute of Technology Surat",
        "alternateName": ["SVNIT Surat", "NIT Surat"],
        "url": "https://www.svnit.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "SVNIT Surat — NIRF #65 Engineering. ₹62 LPA highest in 2025 (domestic), CSE avg ₹16.73 LPA. 1,260 seats. Unique Integrated M.Sc and AI branch. Amazon, Barclays, Qualcomm, Samsung recruit.",
        "address": { "@type": "PostalAddress", "addressLocality": "Surat", "addressRegion": "Gujarat", "addressCountry": "IN" },
        "foundingDate": "1961"
    };

    const faqItems = [
        { q: 'What is the cutoff for SVNIT Surat CSE?', a: 'CSE (OS) closed at 8,130 in 2025 Round 6 — more competitive than NIT Jalandhar and comparable to MANIT Bhopal. HS (Gujarat) closed at 8,105. EWS OS: 1,170. OBC-NCL OS: 3,087.' },
        { q: 'What is the highest package at SVNIT Surat?', a: '₹62 LPA (domestic) in 2025 — up from ₹52.71 LPA in 2024. CSE average: ₹16.73 LPA. Electronics avg: ₹13.35 LPA. Top recruiters: Amazon, Barclays, Qualcomm, Samsung, Microsoft, Siemens.' },
        { q: 'What are the unique programs at SVNIT Surat?', a: 'SVNIT offers integrated B.Sc + M.Sc programs in Physics, Chemistry, and Mathematics — a rare offering at NITs with accessible closing ranks (Physics OS ~44,792). Also has an AI branch closing at ~10,721 OS.' },
        { q: 'What is the total fee at SVNIT Surat?', a: 'B.Tech total (4-year, all-in): ~₹6.48 Lakhs. Tuition alone: ₹5 Lakhs. Integrated M.Sc (5-year): ₹4.50 Lakhs. Hostel single room: ~₹51,380/year. SC/ST/PwD get 100% tuition waiver.' },
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
                title="SVNIT Surat 2026: Cutoff, Fees, Placements & Ranking"
                description="SVNIT Surat 2025-26: JEE Main cutoffs (CSE OS 8,130), ₹62 LPA highest, CSE avg ₹16.73 LPA, AI branch OS 10,721, Integrated M.Sc. NIRF #65."
                canonicalPath="/colleges/svnit-surat"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-orange-700 via-red-600 to-rose-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏭 Est. 1961 · Surat, Gujarat · Industrial Hub NIT
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            SVNIT Surat – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            NIRF #65 · ₹62 LPA Highest · AI Branch · Amazon, Qualcomm, Barclays
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Surat, Gujarat' },
                            { icon: Calendar, text: 'Est. 1961' },
                            { icon: Building2, text: '1,260 UG Seats' },
                            { icon: Award, text: 'NIRF #65 Engineering' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" /><span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-red-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-6">
                    <strong className="text-gray-900">SVNIT Surat</strong> is Gujarat's premier NIT, with the strongest industry-academia ties to the petrochemical and chemical sectors. Its <strong className="text-gray-900">₹62 LPA domestic peak</strong> (2025, up from ₹52.71 LPA) and an <strong className="text-gray-900">AI branch</strong> (OS ~10,721) make it very competitive. Rare Integrated M.Sc programs also attract science-oriented students at accessible ranks.
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
                    <SectionTitle icon={Award}>Rankings &amp; Recognition</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {RANKINGS.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-gray-900">{r.body}</div>
                                    <div className="text-sm text-gray-600 mt-1">{r.rank}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="cutoffs">
                    <SectionTitle icon={TrendingUp}>JEE Main 2025 Cutoffs (Round 6)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Gen OS (R6)</Th><Th className="text-center">Gen HS (R6)</Th><Th className="text-center">EWS OS</Th><Th className="text-center">OBC-NCL OS</Th></tr></thead>
                            <tbody>{CUTOFF_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.r6OS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.r6HS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.ewsOS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.obcOS}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-orange-800"><strong>Note:</strong> CSE OS (8,130) and HS (8,105) are nearly identical — unusually tight parity reflecting high demand from Gujarat students and all-India top rankers alike. AI and Math &amp; Computing close around the same rank band (~10,000-11,000 OS). Values marked ~ are estimated.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2025 Batch)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package (Domestic)', value: '₹62 LPA' },
                            { label: 'CSE Average', value: '₹16.73 LPA' },
                            { label: 'Electronics Average', value: '₹13.35 LPA' },
                            { label: 'Previous High (2024)', value: '₹52.71 LPA' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Strong upward trend: ₹62 LPA in 2025 vs ₹52.71 LPA in 2024. Core sector (L&T, petrochemical firms) supplements IT. Top recruiters: <strong>Amazon, Barclays, Qualcomm, Samsung, Microsoft, Siemens</strong>. Geographic advantage: Surat's industrial base drives Chemical Engineering demand (70% placement rate).
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Placement %</Th><Th className="text-center">Highest CTC</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Median CTC</Th></tr></thead>
                            <tbody>{PLACEMENT_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.rate}</td>
                                    <td className="px-4 py-3 text-center font-medium text-orange-700">{r.highest}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.avg}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.median}</td>
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
                                <tr key={i} className={r.highlight ? 'bg-orange-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                    <td className="px-4 py-3 text-gray-900">{r.component}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500">
                        <p>* Hostel single-room cost (~₹51,380/year) includes mess advance and electricity charges. B.Sc + M.Sc Integrated (5-year) tuition: ₹3,12,000.</p>
                    </motion.div>
                </section>

                <section id="courses">
                    <SectionTitle icon={BookOpen}>Programs Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {[
                            { label: 'B.Tech Programs (1,260 total seats)', items: 'CSE, Artificial Intelligence, Mathematics & Computing, ECE, Electrical, Mechanical, Chemical, Civil Engineering' },
                            { label: 'Unique / Integrated Programs', items: 'B.Tech + M.Tech Dual (5-year) · Integrated B.Sc + M.Sc (Physics, Chemistry, Maths) · M.Tech via GATE · PhD programs' },
                        ].map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-orange-600 mb-2">{c.label}</div>
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-orange-700 to-red-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Check Your Chances at SVNIT Surat</h2>
                    <p className="text-orange-100 mb-8 max-w-xl mx-auto">Evaluate your rank across SVNIT's B.Tech, AI, and Integrated M.Sc programs.</p>
                    <Link to="/jee-mains">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="bg-white text-orange-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                            <span>Try College Predictor</span><ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default SVNITSurat;
