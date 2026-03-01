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
    { param: 'College Name', detail: 'Malaviya National Institute of Technology (MNIT) Jaipur' },
    { param: 'Location', detail: 'Jawahar Lal Nehru Marg, Jaipur, Rajasthan' },
    { param: 'Established Year', detail: '1963 (as Regional Engineering College)' },
    { param: 'Named After', detail: 'Pandit Madan Mohan Malaviya (Legendary Indian Educationist)' },
    { param: 'Institute Type', detail: 'NIT – Institute of National Importance' },
    { param: 'Accreditation', detail: 'A++ Grade (NAAC)' },
    { param: 'NIRF Ranking 2025', detail: '#42 Engineering · #12 Architecture · #77 Overall' },
];

const RANKINGS = [
    { body: 'NIRF 2025 – Engineering', rank: '#42', icon: Award },
    { body: 'NIRF 2025 – Architecture', rank: '#12 (Among Best in India)', icon: Star },
    { body: 'NIRF 2025 – Overall', rank: '#77', icon: Award },
    { body: 'Placement 2025', rank: '₹64 LPA Highest · ₹11.58 LPA Avg', icon: Star },
];

const CUTOFF_GEN = [
    { branch: 'Computer Science & Engineering', hs: '6,013', os: '5,995' },
    { branch: 'AI & Data Engineering', hs: '6,433', os: '7,921' },
    { branch: 'Electronics & Communication', hs: '10,539', os: '10,827' },
    { branch: 'Electrical Engineering', hs: '14,240', os: '17,573' },
    { branch: 'Mechanical Engineering', hs: '19,756', os: '25,728' },
    { branch: 'Chemical Engineering', hs: '26,449', os: '30,464' },
    { branch: 'Civil Engineering', hs: '28,717', os: '37,637' },
    { branch: 'Metallurgical & Materials', hs: '33,703', os: '38,727' },
    { branch: 'B.Arch (Architecture)', hs: '1,615', os: '996' },
];

const CSE_CAT_RANK = [
    { cat: 'General', r2025: '5,995', r2024: '4,790' },
    { cat: 'OBC-NCL', r2025: '8,559', r2024: '8,461' },
    { cat: 'SC', r2025: '1,071', r2024: '1,023*' },
    { cat: 'ST', r2025: '393', r2024: '220' },
    { cat: 'EWS', r2025: '704', r2024: '862' },
];

const PLACEMENT_BRANCH = [
    { branch: 'CSE', placed: '85', avg: '₹19.80 LPA', rate: '77.27%' },
    { branch: 'ECE', placed: '87', avg: '₹16.21 LPA', rate: '84.47%' },
    { branch: 'Electrical', placed: '80', avg: '₹14.73 LPA', rate: '75.47%' },
    { branch: 'Mechanical', placed: '87', avg: '₹10.74 LPA', rate: '87.88%' },
    { branch: 'Chemical', placed: '72', avg: '₹10.23 LPA', rate: '75.79%' },
    { branch: 'Civil', placed: '46', avg: '₹8.82 LPA', rate: '68.66%' },
    { branch: 'Metallurgy', placed: '78', avg: '₹9.52 LPA', rate: '80.41%' },
    { branch: 'Architecture', placed: '32', avg: '₹6.24 LPA', rate: '80.00%' },
];

const FEE_DATA = [
    { component: 'Registration Fee (Per Semester)', amount: '₹1,000' },
    { component: 'Tuition Fee (Per Semester)', amount: '₹62,500' },
    { component: 'Institute Fee – Maint., Dev., etc. (Per Sem)', amount: '₹21,450' },
    { component: 'One-time Caution Money', amount: '₹15,000' },
    { component: 'Annual Insurance Fee', amount: '₹787' },
    { component: 'Total Academic Fees (Per Year)', amount: '~₹1,85,687' },
    { component: 'Hostel + Mess Advance (Per Semester)', amount: '~₹25,000' },
    { component: 'Total 4-Year B.Tech (academic only)', amount: '~₹6.76 Lakhs' },
    { component: 'B.Arch Total (5-year academic)', amount: '~₹6.25 Lakhs', highlight: true },
    { component: 'SC/ST/PwD / Income < 1 LPA', amount: '100% Tuition Waiver', highlight: true },
    { component: 'Income 1–5 LPA', amount: '66.67% Tuition Remission', highlight: true },
];

const ADMISSION_STEPS = [
    'B.Tech: Qualify JEE Main Paper 1. B.Arch: Qualify JEE Main Paper 2 (requires artistic and mathematical aptitude).',
    'MNIT Jaipur is 50/50 HS (Rajasthan)/OS. HS quota is competitive — CSE HS closed at 6,013 in 2025; OS was even tighter at 5,995.',
    'AI & Data Engineering (new branch) immediately became the second most competitive program, closing at 7,921 OS General.',
    'B.Arch OS closed at 996 — reflecting the department\'s #12 national NIRF rank in Architecture. Consider this if you have design aptitude.',
    'SC/ST/PwD and income below ₹1 Lakh: 100% tuition waiver. Income 1–5 LPA: 66.67% remission. 132 PPOs were extended in 2025.',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-orange-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 ${className}`}>{children}</th>
);

const MNITJaipur = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Malaviya National Institute of Technology Jaipur",
        "alternateName": ["MNIT Jaipur", "NIT Jaipur"],
        "url": "https://www.mnit.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "MNIT Jaipur — NIRF #42 Engineering, #12 Architecture 2025. ₹64 LPA highest package for 3 consecutive years. 9 B.Tech + B.Arch programs. Google, Apple, Microsoft, D.E. Shaw recruit.",
        "address": { "@type": "PostalAddress", "addressLocality": "Jaipur", "addressRegion": "Rajasthan", "addressCountry": "IN" },
        "foundingDate": "1963"
    };

    const faqItems = [
        { q: 'What is the cutoff for MNIT Jaipur CSE?', a: 'JoSAA 2025 CSE closing ranks: OS General 5,995 (2024: 4,790); HS General 6,013. OBC-NCL OS: 8,559. SC OS: 1,071. ST OS: 393. EWS OS: 704. Cutoffs have been remarkably stable across years.' },
        { q: 'What is the highest placement at MNIT Jaipur?', a: '₹64 LPA in 2025 — matching the 2024 figure exactly (three-year streak at ₹64 LPA). B.Tech average: ₹11.58 LPA. Top recruiters: Google, Apple, Microsoft, Amazon, D.E. Shaw, Goldman Sachs.' },
        { q: 'Does MNIT Jaipur offer B.Arch?', a: 'Yes. MNIT Jaipur is ranked #12 in Architecture by NIRF 2025. B.Arch (Paper 2) OS General cutoff: 996 — highly competitive. It is a 5-year program with total academic fee of ~₹6.25 Lakhs.' },
        { q: 'What is the total fee at MNIT Jaipur?', a: 'Total 4-year B.Tech academic fee: ~₹6.76 Lakhs. B.Arch (5-year): ~₹6.25 Lakhs academic + ~₹12.52 Lakhs including hostel and mess. Annual fee: ~₹1,85,687. SC/ST/PwD receive 100% tuition waiver.' },
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
                title="MNIT Jaipur 2026: Placements (₹64 LPA), Cutoff, Fees & B.Arch"
                description="MNIT Jaipur 2025-26: JEE Main cutoffs for CSE, AI & Data Engineering, B.Arch (OS 996). ₹64 LPA highest, ₹11.58 LPA avg, NIRF #42 Engineering, #12 Architecture."
                canonicalPath="/colleges/mnit-jaipur"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 via-orange-600 to-yellow-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏯 Est. 1963 · Jaipur, Rajasthan · A++ Grade NIT
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            MNIT Jaipur – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            NIRF #42 Engg. · #12 Architecture · ₹64 LPA Peak · Google, D.E. Shaw
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Jaipur, Rajasthan' },
                            { icon: Calendar, text: 'Est. 1963' },
                            { icon: Building2, text: 'NIT · A++ Accred.' },
                            { icon: Award, text: 'NIRF #42 Engg · #12 Arch' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <s.icon className="w-4 h-4" /><span>{s.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl" />
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-amber-500 pl-6">
                    <strong className="text-gray-900">MNIT Jaipur</strong> is distinguished by its rare twin excellence — <strong className="text-gray-900">NIRF #42 Engineering</strong> and <strong className="text-gray-900">#12 Architecture</strong>. Its ₹64 LPA peak has been hit for three consecutive years, and 250+ companies visit annually including Google, Apple, D.E. Shaw, and Goldman Sachs. The newly launched <strong className="text-gray-900">AI & Data Engineering</strong> branch immediately became the second most competitive program.
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
                            <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-5">
                                <r.icon className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
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
                    <h3 className="font-semibold text-gray-800 mb-2">General Category – HS & OS (Last Round)</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Course</Th><Th className="text-center">Home State (HS)</Th><Th className="text-center">Other State (OS)</Th></tr></thead>
                            <tbody>{CUTOFF_GEN.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.hs}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.os}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <h3 className="font-semibold text-gray-800 mb-2">CSE – Category-wise OS Cutoff (2025 vs 2024)</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Category</Th><Th className="text-center">Closing Rank 2025</Th><Th className="text-center">Closing Rank 2024</Th></tr></thead>
                            <tbody>{CSE_CAT_RANK.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.cat}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.r2025}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.r2024}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-amber-800"><strong>B.Arch opportunity:</strong> OS General cutoff of 996 reflects elite Architecture status. AI & Data Engineering (7,921 OS) closed near ECE — confirming permanent shift toward data-centric programs. CSE cutoffs have been remarkably stable across years.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2025)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹64 LPA' },
                            { label: 'Average Package', value: '₹11.58 LPA' },
                            { label: 'Median Package', value: '₹9.00 LPA' },
                            { label: 'Pre-Placement Offers', value: '132 PPOs' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        776 students placed out of 1,062 registered (73%). ₹64 LPA is a 3-year streak. Top Tech: <strong>Google, Apple, Microsoft, Amazon, Oracle, Adobe, Salesforce, Nvidia</strong>. Finance: D.E. Shaw, Goldman Sachs, JP Morgan, Deutsche Bank, Wells Fargo. Core: Tata Motors, Reliance, L&T, BPCL, Hero MotoCorp.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Students Placed</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Placement Rate</Th></tr></thead>
                            <tbody>{PLACEMENT_BRANCH.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.placed}</td>
                                    <td className="px-4 py-3 text-center font-medium text-amber-700">{r.avg}</td>
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
                                <tr key={i} className={r.highlight ? 'bg-amber-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                    <td className="px-4 py-3 text-gray-900">{r.component}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500">
                        <p>* B.Arch total 5-year estimated cost (including hostel and mess): ~₹12.52 Lakhs. Annual caution money: ₹15,000 (one-time, refundable).</p>
                    </motion.div>
                </section>

                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {[
                            { label: 'B.Tech Programs (8 + B.Arch)', items: 'CSE, AI & Data Engineering, ECE, Electrical, Mechanical, Chemical, Civil, Metallurgical & Materials Engineering, B.Arch (5-year)' },
                            { label: 'Postgraduate & Research', items: 'M.Tech, MBA, MCA programs · Ph.D. research across all engineering departments · 250+ annual recruiting companies' },
                        ].map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-amber-600 mb-2">{c.label}</div>
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-amber-700 to-orange-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Check Your Chances at MNIT Jaipur</h2>
                    <p className="text-amber-100 mb-8 max-w-xl mx-auto">Evaluate your JEE Main rank against MNIT Jaipur's B.Tech and B.Arch cutoffs with our AI predictor.</p>
                    <Link to="/jee-mains">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="bg-white text-amber-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                            <span>Try College Predictor</span><ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default MNITJaipur;
