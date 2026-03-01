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
    { param: 'College Name', detail: 'National Institute of Technology Goa (NIT Goa)' },
    { param: 'Location', detail: 'Cuncolim, South Goa' },
    { param: 'Established Year', detail: '2010' },
    { param: 'Campus Size', detail: '120 Acres (Permanent Campus, Cuncolim)' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Ministry of Education)' },
];

const RANKINGS = [
    { body: 'NIRF 2025', rank: '101–150 Band (Engineering)', icon: Award },
    { body: 'NIRF 2023', rank: '#90 Engineering', icon: Award },
    { body: 'India Today 2024', rank: '#26 Engineering', icon: Star },
    { body: 'IIRF 2024', rank: '#72 B.Tech', icon: Star },
];

const CUTOFF_OS = [
    { branch: 'Computer Science & Engineering', gen: '13,640', ews: '1,948', obc: '4,846', sc: '2,416', st: '685' },
    { branch: 'Electronics & Communication', gen: '17,673', ews: '2,311', obc: '5,958', sc: '3,004', st: '1,359' },
    { branch: 'Electrical & Electronics', gen: '26,451', ews: '3,341', obc: '7,538', sc: '3,931', st: 'NA' },
    { branch: 'Mechanical Engineering', gen: '34,851', ews: '6,640', obc: '10,033', sc: '4,827', st: '2,076' },
    { branch: 'Civil Engineering', gen: '45,845', ews: '5,258', obc: '12,710', sc: '4,588', st: '2,060' },
];

const CUTOFF_HS = [
    { branch: 'Computer Science & Engineering', gen: '16,198', ews: '17,059', obc: '12,567', sc: 'NA', st: 'NA' },
    { branch: 'Electronics & Communication', gen: '31,764', ews: 'NA', obc: '20,787', sc: '9,024', st: '9,150' },
    { branch: 'Electrical & Electronics', gen: '41,813', ews: '21,619', obc: '27,441', sc: 'NA', st: '13,067' },
    { branch: 'Mechanical Engineering', gen: '44,999', ews: 'NA', obc: '43,297', sc: '19,831', st: 'NA' },
    { branch: 'Civil Engineering', gen: '56,169', ews: 'NA', obc: '34,891', sc: '22,346', st: 'NA' },
];

const CSAB = [
    { branch: 'CSE (OS)', rank: '17,448' }, { branch: 'CSE (HS/GO)', rank: '33,056' },
    { branch: 'ECE (OS)', rank: '22,755' }, { branch: 'ECE (HS)', rank: '38,018' },
    { branch: 'Mechanical (OS)', rank: '39,394' }, { branch: 'Mechanical (HS)', rank: '1,92,409' },
    { branch: 'Civil (OS)', rank: '49,391' }, { branch: 'Civil (HS)', rank: '1,98,417' },
];

const PLACEMENT_BRANCH = [
    { branch: 'CSE', avg: '₹11.02 LPA', highest: '₹20.00 LPA' },
    { branch: 'ECE', avg: '₹9.00 LPA', highest: '₹20.00 LPA' },
    { branch: 'EEE', avg: '₹9.60 LPA', highest: '₹12.00 LPA' },
    { branch: 'Mechanical', avg: '₹7.80 LPA', highest: '₹12.00 LPA' },
    { branch: 'Civil', avg: '₹8.80 LPA', highest: '₹12.00 LPA' },
];

const FEE_DATA = [
    { sem: 'Semester I', acad: '₹84,000', hostel: '₹44,250', mess: '₹21,750' },
    { sem: 'Semesters III, V, VII', acad: '₹74,000', hostel: '₹37,750', mess: '₹21,750' },
    { sem: 'Semesters II, IV, VI, VIII', acad: '₹63,500', hostel: '₹36,750', mess: '₹21,750' },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026. HS quota for NIT Goa includes Goa, Daman & Diu, Dadra & Nagar Haveli, and Lakshadweep candidates.',
    'Register on JoSAA. NIT Goa offers 5 B.Tech programs with a smaller intake — seats fill fast especially in CSE and ECE.',
    'Participate in JoSAA rounds. Note: Goa HS ranks tend to be significantly lower than OS for most branches.',
    'SC/ST and income below ₹1 LPA: 100% tuition waiver. Income 1–5 LPA: 66.67% waiver.',
    'Report to Cuncolim campus with originals. M.Tech admissions through GATE; PhD through institute-level entrance.',
];

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
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 ${className}`}>{children}</th>
);

const NITGoa = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Goa",
        "alternateName": "NIT Goa",
        "url": "https://www.nitgoa.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Goa at Cuncolim offers 5 specialized B.Tech programs in a boutique 120-acre campus. NIRF 101-150 Engineering 2025, highest ever placement of ₹44 LPA.",
        "address": { "@type": "PostalAddress", "addressLocality": "Cuncolim", "addressRegion": "Goa", "addressCountry": "IN" },
        "foundingDate": "2010"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Goa CSE?', a: 'In JoSAA 2025 final round, CSE (OS) closed at 13,640 for General. CSAB special round extended this to 17,448. NIT Goa CSE is competitive despite its smaller intake.' },
        { q: 'What is the highest package at NIT Goa?', a: 'The all-time highest is ₹44 LPA. In 2025, the highest was ₹21.6 LPA (B.Tech) and ₹35 LPA (M.Tech — VLSI and Power Electronics). Amazon, Deloitte, Samsung recruit regularly.' },
        { q: 'Does NIT Goa have a small intake?', a: 'Yes. NIT Goa deliberately maintains a smaller batch size to ensure high faculty-to-student interaction ratio and a research-intensive culture — similar to boutique engineering institutes.' },
        { q: 'What is the total fee at NIT Goa?', a: 'Total B.Tech tuition is ₹5 Lakhs over 4 years (₹62,500/semester). Semester I has a higher fee of ₹84,000 (academic) + ₹44,250 (hostel) + ₹21,750 (mess). Subsequent semesters are lower.' },
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
                title="NIT Goa Cutoff, Fees, Placements & Ranking 2026"
                description="Check NIT Goa 2026 JEE Main cutoffs, ₹21.6 LPA highest placement, detailed semester-wise fees, NIRF 101-150 ranking, and admission details."
                canonicalPath="/colleges/nit-goa"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-600 to-green-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🌊 Established 2010 · Cuncolim, South Goa
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Goa – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Boutique Engineering Excellence · ₹44 LPA All-Time High · India Today #26
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Cuncolim, Goa' },
                            { icon: Calendar, text: 'Est. 2010' },
                            { icon: Building2, text: 'NIT · 120-Acre Campus' },
                            { icon: Award, text: 'NIRF 101–150 · IT #26' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" /><span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-teal-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-emerald-500 pl-6">
                    <strong className="text-gray-900">NIT Goa</strong> is a boutique NIT with a deliberate smaller intake — enabling high faculty-to-student interaction and a research-driven culture. On its permanent 120-acre campus at Cuncolim, the institute has recorded an <strong className="text-gray-900">all-time highest package of ₹44 LPA</strong> and placed 220+ students with a 75.83% overall rate in 2025.
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
                    <h3 className="font-semibold text-gray-800 mb-2">Home State (HS) Quota – Goa / Daman / Lakshadweep</h3>
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
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-emerald-800"><strong>Note:</strong> HS quota includes Goa, Daman &amp; Diu, Dadra &amp; Nagar Haveli, and Lakshadweep. Very high HS ranks for Mechanical and Civil (1,92,409 and 1,98,417) indicate minimal local competition in those branches.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package (B.Tech)', value: '₹21.6 LPA' },
                            { label: 'All-Time Highest', value: '₹44 LPA' },
                            { label: 'Overall Average', value: '₹9.24 LPA' },
                            { label: 'Placement Rate', value: '75.83%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        220+ total offers generated. M.Tech placed 91.66% at ₹12.5 LPA average (₹35 LPA highest). Top recruiters: Amazon, Deloitte, TCS, Infosys, Capgemini, Samsung.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th></tr></thead>
                            <tbody>{PLACEMENT_BRANCH.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.avg}</td>
                                    <td className="px-4 py-3 text-center font-medium text-emerald-700">{r.highest}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                </section>

                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure (2025–2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Semester</Th><Th className="text-center">Academic Fee (INR)</Th><Th className="text-center">Hostel Fee (INR)</Th><Th className="text-center">Mess Advance (INR)</Th></tr></thead>
                            <tbody>{FEE_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.sem}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.acad}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.hostel}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.mess}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-3 gap-4">
                        {[
                            { label: 'Total 4-Year Tuition', value: '₹5.00 Lakhs' },
                            { label: 'SC/ST / Income &lt; 1 LPA', value: '100% Waiver' },
                            { label: 'Income 1–5 LPA', value: '66.67% Remission' },
                        ].map((s, i) => (
                            <div key={i} className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center">
                                <div className="font-bold text-gray-900" dangerouslySetInnerHTML={{ __html: s.value }} />
                                <div className="text-xs text-gray-500 mt-1" dangerouslySetInnerHTML={{ __html: s.label }} />
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {[
                            { label: 'B.Tech Programs (5)', items: 'CSE, ECE, Electrical & Electronics, Mechanical, Civil Engineering' },
                            { label: 'Postgraduate', items: 'M.Tech in VLSI Design, Power Electronics, CSE · Ph.D. across all departments' },
                        ].map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-emerald-600 mb-2">{c.label}</div>
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

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

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Could You Get Into NIT Goa?</h2>
                    <p className="text-emerald-100 mb-8 max-w-xl mx-auto">Check your JEE Main rank against NIT Goa's competitive cutoffs with our AI college predictor.</p>
                    <Link to="/jee-mains">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="bg-white text-emerald-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                            <span>Try College Predictor</span><ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITGoa;
