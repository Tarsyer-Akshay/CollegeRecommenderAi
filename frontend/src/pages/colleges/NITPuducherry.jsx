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
    { param: 'College Name', detail: 'National Institute of Technology Puducherry (NITPY)' },
    { param: 'Location', detail: 'Karaikal, Puducherry' },
    { param: 'Established Year', detail: '2010' },
    { param: 'Specialty', detail: '#1 Engineering College in Puducherry (UT)' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Ministry of Education)' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '#99 Engineering', icon: Award },
    { body: 'NIRF 2024', rank: '#97 Engineering', icon: Award },
    { body: 'India Today 2025', rank: '#44 Engineering', icon: Star },
    { body: 'IIRF 2025', rank: '#97 Engineering', icon: Star },
];

const CUTOFF_OS = [
    { branch: 'Computer Science & Engineering', gen: '19,758', ews: '2,872', obc: '7,077', sc: '2,537', st: '1,216' },
    { branch: 'Electronics & Communication', gen: '24,078', ews: '3,099', obc: '10,711', sc: '4,131', st: '1,468' },
    { branch: 'Electrical & Electronics', gen: '33,769', ews: '4,600', obc: '13,587', sc: '5,327', st: '2,261' },
    { branch: 'Mechanical Engineering', gen: '42,881', ews: '5,575', obc: '11,540', sc: '6,354', st: '2,498' },
    { branch: 'Civil Engineering', gen: '49,922', ews: '7,690', obc: '15,994', sc: '7,644', st: '2,728' },
];

const CUTOFF_HS = [
    { branch: 'Computer Science & Engineering', gen: '64,692', ews: '33,632', obc: '24,651', sc: '13,433', st: '11,523' },
    { branch: 'Electronics & Communication', gen: '86,567', ews: '75,957', obc: '36,973', sc: '15,263', st: '13,032' },
    { branch: 'Electrical & Electronics', gen: '1,16,492', ews: '79,381', obc: '48,452', sc: '25,630', st: '13,067' },
    { branch: 'Mechanical Engineering', gen: '1,67,788', ews: '1,21,199', obc: '68,664', sc: '30,217', st: '18,797' },
    { branch: 'Civil Engineering', gen: '2,05,593', ews: 'NA', obc: '78,906', sc: '39,501', st: '23,430' },
];

const CSAB = [
    { branch: 'CSE (OS)', rank: '21,794' }, { branch: 'CSE (HS)', rank: '66,320' },
    { branch: 'ECE (OS)', rank: '31,341' }, { branch: 'ECE (HS)', rank: '2,79,925' },
    { branch: 'Electrical (OS)', rank: '43,171' }, { branch: 'Electrical (HS)', rank: '1,53,087' },
    { branch: 'Mechanical (OS)', rank: '2,40,080' }, { branch: 'Mechanical (HS)', rank: '3,01,362' },
    { branch: 'Civil (OS)', rank: '62,097' }, { branch: 'Civil (HS)', rank: '2,04,611' },
];

const PLACEMENT_DATA = [
    { branch: 'Computer Science & Engineering', highest: '₹16 LPA', avg: '₹10.22 LPA' },
    { branch: 'Electronics & Communication', highest: '₹16 LPA', avg: '₹7.90 LPA' },
    { branch: 'Electrical Engineering', highest: '₹16 LPA', avg: '₹6.21 LPA' },
    { branch: 'Mechanical Engineering', highest: '₹11 LPA', avg: '₹5.54 LPA' },
    { branch: 'Civil Engineering', highest: '₹22 LPA', avg: '₹8.60 LPA' },
];

const FEE_DATA = [
    { component: 'Tuition Fee (Per Semester)', amount: '₹62,500' },
    { component: 'Total Academic Fee (1st Year)', amount: '₹1.4 Lakhs' },
    { component: 'Hostel Fee – Male (Per Semester)', amount: '₹27,500 – ₹32,100' },
    { component: 'Hostel Fee – Female (Per Semester)', amount: '₹30,500 – ₹35,100' },
    { component: 'Caution Deposit (One-time, Refundable)', amount: '₹4,000' },
    { component: 'Total 4-Year B.Tech Tuition', amount: '₹5.00 Lakhs' },
    { component: 'SC/ST/PwD / Income < 1 LPA', amount: '100% Tuition Waiver', highlight: true },
    { component: 'Income 1–5 LPA', amount: '66.67% Tuition Remission', highlight: true },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026. Minimum 75% aggregate in Class 12 (65% for SC/ST/PwD).',
    'HS quota includes candidates from Puducherry UT. Note: HS ranks are far more accessible than OS (e.g., CSE HS General closes at 64,692 vs OS 19,758).',
    'Register on JoSAA and fill preferences. All 5 branches are available; Civil Engineering had the notable ₹22 LPA highest package in 2025.',
    'SC/ST/PwD and income below ₹1 LPA: full tuition waiver. Income 1–5 LPA: 66.67% remission.',
    'Report physically to Karaikal campus with originals. For M.Sc: admission via JAM. PhD: Institute-level entrance test.',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-600 to-orange-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 ${className}`}>{children}</th>
);

const NITPuducherry = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Puducherry",
        "alternateName": "NIT Puducherry",
        "url": "https://www.nitpy.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Puducherry (NITPY) at Karaikal — NIRF #99 Engineering 2025, top-ranked engineering college in Puducherry UT, offering 5 B.Tech programs with ₹22 LPA highest package.",
        "address": { "@type": "PostalAddress", "addressLocality": "Karaikal", "addressRegion": "Puducherry", "addressCountry": "IN" },
        "foundingDate": "2010"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Puducherry CSE?', a: 'In JoSAA 2025 final round, CSE (OS) closed at 19,758 for General. HS (Puducherry) candidates have a far more accessible cutoff at 64,692 — a significant regional advantage.' },
        { q: 'What is the highest placement at NIT Puducherry?', a: 'The highest B.Tech 2025 package was ₹22 LPA from the Civil Engineering branch — unusually high for a core branch and pointing to niche infrastructure roles. B.Tech average was ₹8.3 LPA (159 placed).' },
        { q: 'Is NIT Puducherry in the NIRF top 100?', a: 'Yes. NIT Puducherry is ranked #99 by NIRF 2025 in Engineering, placing it firmly in the top 100. It ranked #97 in NIRF 2024 and #44 by India Today 2025.' },
        { q: 'What is the total fee at NIT Puducherry?', a: 'Total 4-year B.Tech tuition is ₹5 Lakhs. 1st year academic fees total ~₹1.4 Lakhs. Hostel varies by gender (₹27,500–₹35,100/sem). SC/ST/PwD get full tuition waiver.' },
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
                title="NIT Puducherry Cutoff, Fees, Placements & Ranking 2026"
                description="Check NIT Puducherry 2026 JEE Main cutoffs (OS & HS), ₹22 LPA highest placement, fee structure, NIRF #99 ranking. Top engineering college in Puducherry."
                canonicalPath="/colleges/nit-puducherry"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-rose-700 via-orange-600 to-amber-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🌊 Established 2010 · Karaikal, Puducherry
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Puducherry – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            NIRF Top 100 · #1 in Puducherry UT · ₹22 LPA Highest · ABB, Zoho, Ford
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Karaikal, Puducherry' },
                            { icon: Calendar, text: 'Est. 2010' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'NIRF #99 · IT #44' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" /><span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-orange-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-rose-500 pl-6">
                    <strong className="text-gray-900">NIT Puducherry (NITPY)</strong>, at Karaikal, is the <strong className="text-gray-900">top-ranked engineering college in Puducherry UT</strong>. Its 2025 NIRF #99 rank and HS quota make it highly accessible to local candidates. A standout in 2025: Civil Engineering recorded the <strong className="text-gray-900">highest B.Tech package of ₹22 LPA</strong>, rare for a core branch.
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
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
                    <h3 className="font-semibold text-gray-800 mb-2">Home State (HS) Quota – Puducherry UT</h3>
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-rose-50 border border-rose-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-rose-800"><strong>Key Insight:</strong> Puducherry HS ranks are dramatically higher than OS — CSE HS closes at 64,692 vs OS 19,758 for General. Local candidates have a massive advantage and can secure seats at much lower ranks.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package (B.Tech)', value: '₹22 LPA' },
                            { label: 'Average Package (B.Tech)', value: '₹8.3 LPA' },
                            { label: 'Students Placed (B.Tech)', value: '159' },
                            { label: 'Placement Rate (B.Tech)', value: '85.0%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Civil Engineering recorded the highest B.Tech package (₹22 LPA) — unusual for a core branch, pointing to niche high-value infrastructure roles. M.Tech placed 66.66% at ₹9.7 LPA avg (₹23 LPA highest). Top recruiters: ABB, Ford-IT, Zoho, Tech Mahindra, Deloitte, L&T.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Highest CTC</Th><Th className="text-center">Average CTC</Th></tr></thead>
                            <tbody>{PLACEMENT_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center font-medium text-rose-700">{r.highest}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.avg}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                </section>

                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure (2025–2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Component</Th><Th className="text-center">Amount (INR)</Th></tr></thead>
                            <tbody>{FEE_DATA.map((r, i) => (
                                <tr key={i} className={r.highlight ? 'bg-rose-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                    <td className="px-4 py-3 text-gray-900">{r.component}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500">
                        <p>* Hostel fees vary by gender and odd/even semester (odd semester typically higher due to admission cycle). Caution deposit (₹4,000) is refundable on graduation.</p>
                    </motion.div>
                </section>

                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {[
                            { label: 'B.Tech Programs (5)', items: 'CSE, ECE, Electrical & Electronics, Mechanical Engineering, Civil Engineering' },
                            { label: 'Postgraduate & Research', items: 'M.Tech specializations, Integrated B.Sc. + B.Ed., M.Sc. (via JAM), Ph.D. across departments' },
                        ].map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-rose-600 mb-2">{c.label}</div>
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-600 to-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-rose-700 to-orange-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Check Your Chances at NIT Puducherry</h2>
                    <p className="text-rose-100 mb-8 max-w-xl mx-auto">Evaluate your JEE Main rank against NIT Puducherry's OS and HS quotas with our AI predictor.</p>
                    <Link to="/jee-mains">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="bg-white text-rose-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                            <span>Try College Predictor</span><ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITPuducherry;
