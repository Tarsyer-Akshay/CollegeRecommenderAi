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
    { param: 'College Name', detail: 'Motilal Nehru National Institute of Technology (MNNIT)' },
    { param: 'Known As', detail: 'MNNIT Allahabad / NIT Allahabad' },
    { param: 'Location', detail: 'Prayagraj (Allahabad), Uttar Pradesh' },
    { param: 'Established Year', detail: '1961 (as Regional Engineering College)' },
    { param: 'Campus Size', detail: '222 Acres' },
    { param: 'B.Tech Seat Intake (2025)', detail: '768 students across 11 specializations' },
    { param: 'NIRF Ranking 2025', detail: '#61 Engineering (#62 in 2024)' },
];

const RANKINGS = [
    { body: 'NIRF 2025 – Engineering', rank: '#61', icon: Award },
    { body: 'NIRF 2024 – Engineering', rank: '#62', icon: Award },
    { body: 'Infrastructure Rating', rank: '4.6/5 (Value for Money)', icon: Star },
    { body: 'Placement 2025', rank: '₹72 LPA Highest · ₹20.43 LPA Avg', icon: Star },
];

const CUTOFF_DATA = [
    { branch: 'CSE', genHS: '7,816', genOS: '~6,364', ewsHS: '1,223', note: 'R6' },
    { branch: 'Electronics & Communication', genHS: '9,577', genOS: '~9,041', ewsHS: '~1,500', note: 'R6' },
    { branch: 'Electrical Engineering', genHS: '12,018', genOS: '~11,000', ewsHS: '~1,800', note: 'R6' },
    { branch: 'Mechanical Engineering', genHS: '21,070', genOS: '~18,750', ewsHS: '~3,200', note: 'R6' },
    { branch: 'Chemical Engineering', genHS: '21,558', genOS: '~20,589', ewsHS: '~3,300', note: 'R6' },
    { branch: 'Civil Engineering', genHS: '29,451', genOS: '~25,983', ewsHS: '~4,500', note: 'R6' },
    { branch: 'Biotechnology', genHS: '39,400', genOS: '~35,329', ewsHS: '~6,000', note: 'R6' },
];

const PLACEMENT_DATA = [
    { prog: 'B.Tech – Overall', highest: '₹72 LPA', avg: '₹20.43 LPA', median: '₹12.6 LPA', rate: '83.29%' },
    { prog: 'B.Tech – CSE', highest: '₹72 LPA', avg: '₹27.72 LPA', median: '₹12.6 LPA', rate: '96.75%' },
    { prog: 'B.Tech – ECE', highest: '₹72 LPA', avg: '₹22.98 LPA', median: '₹12.6 LPA', rate: '81.82%' },
    { prog: 'B.Tech – Electrical', highest: '₹63.78 LPA', avg: '₹22.14 LPA', median: '₹12.6 LPA', rate: '79.49%' },
    { prog: 'B.Tech – Mechanical', highest: '₹63.78 LPA', avg: '₹10.41 LPA', median: '₹12.6 LPA', rate: '83.19%' },
    { prog: 'MCA', highest: '₹38.12 LPA', avg: '₹11.12 LPA', median: '₹9.0 LPA', rate: '84.4%' },
    { prog: 'MBA', highest: '₹12 LPA', avg: '₹7.34 LPA', median: '₹7.2 LPA', rate: '67.86%' },
];

const FEE_DATA = [
    { component: 'Tuition Fee (Per Semester, Gen/OBC > 5L)', amount: '₹62,500' },
    { component: 'Other Institutional Fee (Annual)', amount: '₹36,000' },
    { component: 'Hostel Fee (Per Semester)', amount: '₹12,000' },
    { component: 'Mess Charges (Per Semester)', amount: '₹25,000' },
    { component: 'One-Time Admission Fee', amount: '₹3,000' },
    { component: 'Total 4-Year B.Tech Cost (est.)', amount: '₹6.52L – ₹6.92L' },
    { component: 'SC/ST/PwD / Income < 1 LPA', amount: '100% Tuition Waiver', highlight: true },
    { component: 'Income 1–5 LPA', amount: '66.67% Tuition Remission', highlight: true },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026. MNNIT Allahabad admits via 50/50 HS (Uttar Pradesh) / OS quota. 768 B.Tech seats across 11 specializations.',
    'CSE HS (General) closed at 7,816 (R6) in 2025; OS is even more competitive at ~6,364. ECE HS: 9,577. Strong preference from North India JEE toppers.',
    'Biotechnology OS (35,329) offers the most accessible entry — well-suited for candidates with ranks 30k-40k OS General.',
    'M.Sc admissions via IIT-JAM / CCMN process. Math & Scientific Computing had a highly competitive closing mark of 41.33.',
    'SC/ST/PwD and income below ₹1 Lakh: 100% tuition waiver. Income 1–5 LPA: 66.67% remission. Report to Prayagraj campus with originals.',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-700 to-purple-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-violet-700 bg-violet-50 ${className}`}>{children}</th>
);

const MNNITAllahabad = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Motilal Nehru National Institute of Technology Allahabad",
        "alternateName": ["MNNIT Allahabad", "NIT Allahabad"],
        "url": "https://www.mnnit.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "MNNIT Allahabad — NIRF #61 Engineering. Exceptional placements with ₹72 LPA highest and ₹20.43 LPA average in 2025. CSE average ₹27.72 LPA at 96.75% rate. Google, Microsoft, Adobe, Amazon recruit.",
        "address": { "@type": "PostalAddress", "addressLocality": "Prayagraj", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" },
        "foundingDate": "1961"
    };

    const faqItems = [
        { q: 'What is the cutoff for MNNIT Allahabad CSE?', a: 'In 2025 Round 6, CSE HS (General) closed at 7,816; OS is more competitive at ~6,364. EWS HS: 1,223. MNNIT CSE is among the most competitive NIT programs due to its ₹27.72 LPA average package and 96.75% placement rate.' },
        { q: 'What is the highest placement at MNNIT Allahabad?', a: '₹72 LPA in 2025 — achieved by CSE, ECE, and Electrical branch students. The overall B.Tech average is ₹20.43 LPA with 83.29% placement rate. CSE alone averages ₹27.72 LPA.' },
        { q: 'Is MNNIT Allahabad in NIRF top 100?', a: 'Yes. MNNIT is ranked #61 by NIRF 2025 Engineering (up from #62 in 2024), firmly in the top 100. Infrastructure rated 4.6/5.' },
        { q: 'What is the total fee at MNNIT Allahabad?', a: 'Total 4-year B.Tech cost is ₹6.52L–₹6.92L. Tuition is ₹62,500/semester. Hostel adds ₹12,000/semester + ₹25,000 mess. SC/ST/PwD and income below ₹1 Lakh get 100% tuition waiver.' },
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
                title="MNNIT Allahabad 2026: Cutoff, Fees, Placements & Ranking"
                description="MNNIT Allahabad 2025-26: JEE Main cutoffs (CSE HS 7,816), ₹72 LPA highest, ₹20.43 LPA overall avg, CSE avg ₹27.72 LPA, NIRF #61 Engineering."
                canonicalPath="/colleges/mnnit-allahabad"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-violet-800 via-purple-700 to-indigo-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🎓 Est. 1961 · Prayagraj, Uttar Pradesh · NIRF #61
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            MNNIT Allahabad – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-violet-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            NIRF #61 · ₹72 LPA Highest · ₹20.43 LPA Avg · Google, Microsoft, Adobe
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Prayagraj, Uttar Pradesh' },
                            { icon: Calendar, text: 'Est. 1961' },
                            { icon: Building2, text: '222-Acre Campus' },
                            { icon: Award, text: 'NIRF #61 Engineering' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" /><span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-purple-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-violet-500 pl-6">
                    <strong className="text-gray-900">MNNIT Allahabad</strong> is a top-tier NIT powerhouse in placement outcomes. Its <strong className="text-gray-900">₹20.43 LPA overall average</strong> and <strong className="text-gray-900">₹27.72 LPA CSE average</strong> (2025) rival several IITs. Located in Prayagraj — a major JEE aspirant hub — it has a near-99% PPO conversion rate for top-tier roles and consistently attracts Google, Microsoft, Adobe, and Amazon.
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-violet-600 shrink-0 mt-0.5" />
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
                            <thead>
                                <tr><Th>Branch</Th><Th className="text-center">Gen (HS)</Th><Th className="text-center">Gen (OS, est.)</Th><Th className="text-center">EWS (HS)</Th><Th className="text-center">Round</Th></tr>
                            </thead>
                            <tbody>{CUTOFF_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.genHS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.genOS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.ewsHS}</td>
                                    <td className="px-4 py-3 text-center text-gray-500 text-xs">{r.note}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-violet-50 border border-violet-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-violet-800"><strong>Key insight:</strong> OS cutoff for CSE (~6,364) is sometimes more competitive than HS (7,816), reflecting demand from all-India top rankers. HS quota is for Uttar Pradesh candidates. Values marked ~ are estimates from R1–R6 trends.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2025 Batch)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹72 LPA' },
                            { label: 'Overall B.Tech Avg', value: '₹20.43 LPA' },
                            { label: 'CSE Average', value: '₹27.72 LPA' },
                            { label: 'CSE Placement Rate', value: '96.75%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Top recruiters: <strong>Google, Microsoft, Adobe, Amazon</strong>. Near-99% PPO conversion rate for top-tier roles. CSE average (₹27.72 LPA) rivals many IIT branches. ECE average (₹22.98 LPA) and Electrical (₹22.14 LPA) are exceptionally high for core branches.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Program</Th><Th className="text-center">Highest CTC</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Median CTC</Th><Th className="text-center">Placement%</Th></tr></thead>
                            <tbody>{PLACEMENT_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.prog}</td>
                                    <td className="px-4 py-3 text-center font-medium text-violet-700">{r.highest}</td>
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
                                <tr key={i} className={r.highlight ? 'bg-violet-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                            { label: 'B.Tech (11 Specializations)', items: 'CSE, ECE, Electrical, Mechanical, Chemical, Civil, Biotechnology + 4 emerging specializations' },
                            { label: 'PG & Integrated Programs', items: 'MCA, MBA, M.Tech across all depts · M.Sc via JAM/CCMN (Math & Scientific Computing closing mark: 41.33) · PhD' },
                        ].map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-violet-600 mb-2">{c.label}</div>
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-700 to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-violet-700 to-purple-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Check Your Chances at MNNIT Allahabad</h2>
                    <p className="text-violet-100 mb-8 max-w-xl mx-auto">Evaluate your JEE Main rank against MNNIT's HS and OS cutoffs across all branches.</p>
                    <Link to="/jee-mains">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="bg-white text-violet-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                            <span>Try College Predictor</span><ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default MNNITAllahabad;
