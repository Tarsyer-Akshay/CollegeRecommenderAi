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
    { param: 'College Name', detail: 'Dr. B.R. Ambedkar National Institute of Technology' },
    { param: 'Known As', detail: 'NIT Jalandhar / NITJ' },
    { param: 'Location', detail: 'Jalandhar, Punjab' },
    { param: 'Established Year', detail: '1987 (as REC); NIT Status: 2002' },
    { param: 'Named After', detail: 'Dr. B.R. Ambedkar – Father of the Indian Constitution' },
    { param: 'B.Tech Seat Intake (2025)', detail: '993 seats across B.Tech programs' },
    { param: 'NIRF Ranking 2025', detail: '#54 Engineering (#58 in 2024)' },
];

const RANKINGS = [
    { body: 'NIRF 2025 – Engineering', rank: '#54 (up from #58 in 2024)', icon: Award },
    { body: 'QS Asia Rankings 2025', rank: '651–700 Band', icon: Star },
    { body: 'Specialty', rank: 'Unique: Textile Technology branch · ICE branch', icon: Award },
    { body: 'Highest Package 2025', rank: '₹52 LPA (Microsoft, multiple students)', icon: Star },
];

const CUTOFF_RNDL = [
    { branch: 'Computer Science & Engg.', r1OS: '13,737', lastOS: '13,737', r1HS: '16,325', lastHS: '16,325', ewsOS: '1,671' },
    { branch: 'Data Science', r1OS: '16,249', lastOS: '16,249', r1HS: '~19,000', lastHS: '~19,000', ewsOS: '~2,400' },
    { branch: 'Information Technology', r1OS: '17,236', lastOS: '17,236', r1HS: '~20,000', lastHS: '~20,000', ewsOS: '~2,600' },
    { branch: 'Electronics & Comm.', r1OS: '20,451', lastOS: '20,451', r1HS: '~24,000', lastHS: '~24,000', ewsOS: '~3,100' },
    { branch: 'Electrical Engineering', r1OS: '25,402', lastOS: '25,402', r1HS: '~30,000', lastHS: '~30,000', ewsOS: '~3,800' },
    { branch: 'Mechanical Engineering', r1OS: '36,865', lastOS: '36,865', r1HS: '~43,000', lastHS: '~43,000', ewsOS: '~5,500' },
    { branch: 'Chemical Engineering', r1OS: '46,097', lastOS: '46,097', r1HS: '~54,000', lastHS: '~54,000', ewsOS: '~7,000' },
    { branch: 'Civil Engineering', r1OS: '51,229', lastOS: '51,229', r1HS: '~60,000', lastHS: '~60,000', ewsOS: '~7,800' },
    { branch: 'Textile Technology', r1OS: '64,539', lastOS: '64,539', r1HS: '~75,000', lastHS: '~75,000', ewsOS: '~10,000' },
];

const PLACEMENT_DATA = [
    { branch: 'CSE', rate: '94.48%', highest: '₹52 LPA', avg: '₹15.83 LPA' },
    { branch: 'ECE', rate: '100%', highest: '₹52 LPA', avg: '₹13.20 LPA' },
    { branch: 'Electrical', rate: '90.91%', highest: '₹52 LPA', avg: '₹10.51 LPA' },
    { branch: 'IT', rate: '81.37%', highest: '₹52 LPA', avg: '₹15.07 LPA' },
    { branch: 'Chemical', rate: '100%', highest: '₹15.12 LPA', avg: '₹8.26 LPA' },
    { branch: 'Mechanical', rate: '100%', highest: '₹18.00 LPA', avg: '₹7.54 LPA' },
    { branch: 'Textile Technology', rate: '96.36%', highest: '₹18.00 LPA', avg: '₹5.46 LPA' },
];

const FEE_DATA = [
    { component: 'Tuition Fee (Per Semester, Gen/OBC > 5L)', amount: '₹62,500' },
    { component: 'Other Charges – Hosteller (Per Semester)', amount: '₹25,500' },
    { component: 'Total Semester Fee – Hosteller', amount: '₹88,000' },
    { component: 'Other Charges – Day Scholar (Per Semester)', amount: '₹17,000' },
    { component: 'Total Semester Fee – Day Scholar', amount: '₹79,500' },
    { component: 'Mess Caution + Admission (First Semester, one-time)', amount: '₹35,500' },
    { component: 'Total 4-Year B.Tech (estimated)', amount: '~₹7.44 Lakhs' },
    { component: 'SC/ST/PwD / Income < 1 LPA', amount: '100% Tuition Waiver', highlight: true },
    { component: 'Income 1–5 LPA', amount: '66.67% Tuition Remission', highlight: true },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026. NIT Jalandhar (50% HS Punjab / 50% OS) admits 993 students. CSE R1 OS closed at 13,737 — more accessible than MANIT or MNNIT.',
    'Unique branches: Data Science (OS ~16,249) and Textile Technology (OS ~64,539) provide broad rank accessibility from CSE to lower-ranked students.',
    'ECE, Chemical, and Mechanical all achieved 100% placement in 2025 — a differentiating factor vs. many higher-ranked NITs.',
    'GATE scores required for M.Tech admission. M.Sc via IIT-JAM. PhD via institute-level entrance.',
    'SC/ST/PwD and income below ₹1 Lakh: 100% tuition waiver. First-semester hostel cost adds ₹35,500 one-time charges. Report to Jalandhar campus.',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-cyan-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 ${className}`}>{children}</th>
);

const NITJalandhar = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Dr. B.R. Ambedkar National Institute of Technology Jalandhar",
        "alternateName": ["NIT Jalandhar", "NITJ"],
        "url": "https://www.nitj.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Jalandhar — NIRF #54 Engineering. ₹52 LPA highest in 2025 (Microsoft). CSE avg ₹15.83 LPA. ECE, Chemical, and Mechanical achieved 100% placement. Unique Textile Technology branch.",
        "address": { "@type": "PostalAddress", "addressLocality": "Jalandhar", "addressRegion": "Punjab", "addressCountry": "IN" },
        "foundingDate": "1987"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Jalandhar CSE?', a: 'NIT Jalandhar CSE (OS) closed at 13,737 in 2025 — more accessible than MANIT Bhopal (~9,249) despite a higher NIRF rank. HS (Punjab) closed at 16,325. Data Science OS: 16,249. EWS OS: 1,671.' },
        { q: 'What is the highest package at NIT Jalandhar?', a: '₹52 LPA in 2025, secured by multiple students from Microsoft. CSE average: ₹15.83 LPA. ECE, Chemical, and Mechanical branches all achieved 100% placement rate.' },
        { q: 'What makes NIT Jalandhar unique?', a: 'NIT Jalandhar offers Textile Technology (a rare specialized branch) and Instrumentation & Control Engineering — niche programs with strong placement records. 100% placement for ECE, Chemical, and Mechanical in 2025.' },
        { q: 'What is the total fee at NIT Jalandhar?', a: 'Total 4-year B.Tech est. ~₹7.44 Lakhs (hosteller, Gen/OBC). Per semester: ₹88,000 (hosteller) or ₹79,500 (day scholar). SC/ST/PwD get 100% tuition waiver. First-semester one-time hostel cost: ₹35,500.' },
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
                title="NIT Jalandhar 2026: Cutoff, Fees, Placements & Ranking"
                description="NIT Jalandhar 2025-26: JEE Main cutoffs (CSE OS 13,737), ₹52 LPA highest, CSE avg ₹15.83 LPA, 100% placement in ECE/Chemical/Mechanical, NIRF #54."
                canonicalPath="/colleges/nit-jalandhar"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏔️ Est. 1987 · Jalandhar, Punjab · NIRF #54
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Jalandhar – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            NIRF #54 · ₹52 LPA (Microsoft) · 100% ECE, Chemical & Mech Placement
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Jalandhar, Punjab' },
                            { icon: Calendar, text: 'NIT Status: 2002' },
                            { icon: Building2, text: '993 B.Tech Seats' },
                            { icon: Award, text: 'NIRF #54 Engineering' },
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
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-6">
                    <strong className="text-gray-900">NIT Jalandhar</strong>, named after Dr. B.R. Ambedkar, is notable for a standout data point: ECE, Chemical, and Mechanical branches all achieved <strong className="text-gray-900">100% placement</strong> in 2025. Its unique <strong className="text-gray-900">Textile Technology</strong> branch and an improving NIRF trajectory (#58 → #54) signal an institution in confident ascent.
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-5">
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
                    <SectionTitle icon={TrendingUp}>JEE Main 2025 Cutoffs</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Gen OS (Last Rd)</Th><Th className="text-center">Gen HS (Last Rd)</Th><Th className="text-center">EWS OS</Th></tr></thead>
                            <tbody>{CUTOFF_RNDL.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.lastOS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.lastHS}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.ewsOS}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-blue-800"><strong>Cutoff paradox:</strong> CSE OS (13,737) is more relaxed than MANIT Bhopal (~9,249) despite NIT Jalandhar having the higher NIRF rank — demonstrating that city/hub preference drives CSE demand. Values marked ~ are estimates. HS quota is for Punjab candidates.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2025 Batch)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹52 LPA' },
                            { label: 'CSE Average', value: '₹15.83 LPA' },
                            { label: 'ECE / Chemical / Mech', value: '100% Placed' },
                            { label: 'IT Average', value: '₹15.07 LPA' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        ₹52 LPA by Microsoft (multiple students). Top recruiters: <strong>Google, Nvidia, Atlassian, BPCL, Maruti Suzuki</strong>. Roles span Software Development, Data Science, VLSI, and Core Engineering. Textile Technology 96.36% placement rate is exceptional for a niche branch.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Placement %</Th><Th className="text-center">Highest CTC</Th><Th className="text-center">Average CTC</Th></tr></thead>
                            <tbody>{PLACEMENT_DATA.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.branch}</td>
                                    <td className="px-4 py-3 text-center font-semibold text-blue-700">{r.rate}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.highest}</td>
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
                            <thead><tr><Th>Fee Component</Th><Th className="text-center">Amount (INR)</Th></tr></thead>
                            <tbody>{FEE_DATA.map((r, i) => (
                                <tr key={i} className={r.highlight ? 'bg-blue-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
                            { label: 'B.Tech Programs (993 seats)', items: 'CSE, Data Science, IT, ECE, Electrical, Mechanical, Chemical, Civil, Textile Technology, Industrial & Production Engineering, Instrumentation & Control' },
                            { label: 'Postgraduate & Research', items: 'M.Tech via GATE across all departments · PhD programs · QS Asia 651-700 ranked institution' },
                        ].map((c, i) => (
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-700 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Check Your Chances at NIT Jalandhar</h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">Evaluate your rank against NIT Jalandhar's 11 B.Tech programs including Textile Technology and Data Science.</p>
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

export default NITJalandhar;
