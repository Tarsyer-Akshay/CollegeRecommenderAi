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
    { param: 'College Name', detail: 'National Institute of Technology (NIT) Andhra Pradesh' },
    { param: 'Location', detail: 'Tadepalligudem, West Godavari District, Andhra Pradesh' },
    { param: 'Established Year', detail: '2015' },
    { param: 'Campus Size', detail: '178 Acres (Permanent Campus)' },
    { param: 'Institute Type', detail: 'NIT – Institute of National Importance (Youngest NIT)' },
    { param: 'NIRF Ranking 2025', detail: '201–300 Band (Engineering)' },
];

const CUTOFF_GEN = [
    { branch: 'Computer Science & Engineering', hs: '17,349', os: '22,270' },
    { branch: 'Electronics & Communication', hs: '26,754', os: '30,034' },
    { branch: 'Electrical & Electronics', hs: '39,438', os: '43,089' },
    { branch: 'Mechanical Engineering', hs: '44,846', os: '57,486' },
    { branch: 'Chemical Engineering', hs: '55,070', os: '59,560' },
    { branch: 'Civil Engineering', hs: '53,333', os: '76,167' },
    { branch: 'Biotechnology', hs: '61,356', os: '91,366' },
    { branch: 'Metallurgical & Materials', hs: '61,466', os: '78,606' },
];

const CUTOFF_CAT_OS = [
    { branch: 'CSE', obc: '29,695', sc: '3,153', st: '1,206', ews: '3,005' },
    { branch: 'ECE', obc: '40,587', sc: '4,500', st: '2,200', ews: '8,059' },
    { branch: 'EEE', obc: '51,887', sc: '6,500', st: '2,400', ews: '9,584' },
    { branch: 'Mechanical', obc: '63,517', sc: '8,200', st: '3,000', ews: '11,200' },
    { branch: 'Chemical', obc: '69,612', sc: '10,675', st: '8,284*', ews: '12,500*' },
];

const PLACEMENT_BRANCH = [
    { branch: 'CSE', rate: '78.08%', avg: '₹11.99 LPA', highest: '₹44.1 LPA' },
    { branch: 'ECE', rate: '33.70%*', avg: '₹8.66 LPA', highest: '₹44.1 LPA' },
    { branch: 'EEE', rate: '62.92%', avg: '₹6.50 LPA', highest: '₹15.0 LPA' },
    { branch: 'Chemical', rate: '100%', avg: '₹5.81 LPA', highest: '₹10.0 LPA' },
    { branch: 'Biotechnology', rate: '81.25%', avg: '₹6.24 LPA', highest: '₹10.0 LPA' },
    { branch: 'Civil', rate: '81.40%', avg: '₹5.43 LPA', highest: '₹6.57 LPA' },
    { branch: 'Mechanical', rate: '56.82%', avg: '₹6.11 LPA', highest: '₹10.0 LPA' },
    { branch: 'MME', rate: '31.25%', avg: '₹7.18 LPA', highest: '₹11.89 LPA' },
];

const FEE_DATA = [
    { component: 'Tuition Fee (Per Semester)', amount: '₹62,500' },
    { component: 'Student Establishment/Maint. (Per Sem)', amount: '₹2,400' },
    { component: 'Medical Insurance (Annual)', amount: '₹500' },
    { component: 'Total Academic Fee (Per Semester)', amount: '₹65,400' },
    { component: 'Hostel Maintenance (Per Semester)', amount: '₹12,500' },
    { component: 'Mess Advance (Per Semester)', amount: '₹15,000' },
    { component: 'Hostel Caution Deposit (One-time)', amount: '₹8,000' },
    { component: 'SC/ST/PwD (Tier 1)', amount: '100% Tuition Waiver (~₹2,900/sem total)', highlight: true },
    { component: 'Income < 1 Lakh (Tier 2)', amount: 'Full Tuition Remission (MEB)', highlight: true },
    { component: 'Income 1–5 Lakhs (Tier 3)', amount: '66.67% Tuition Remission (OEB)', highlight: true },
];

const ADMISSION_STEPS = [
    'Qualify JEE Main 2026 with minimum 75% in Class 12 (65% for SC/ST/PwD). Andhra Pradesh HS quota covers 50% of seats.',
    'Register on JoSAA portal and fill/lock choices. CSE closes earliest (~22,270 OS General); Biotechnology has the most accessible OS cutoff (~91,366).',
    'Participate in all 6 JoSAA rounds. CSAB special rounds available for remaining vacancies — useful for branches like Biotechnology and Metallurgy.',
    'Choose fee waiver category during admission. Tier 1 (SC/ST/PwD) pays effectively only ₹2,900/semester. Income documents required for Tiers 2 & 3.',
    'Report to Tadepalligudem campus with Aadhaar, PSAL letter, JEE Main scorecard, Class 10/12 originals, and category certificates.',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 ${className}`}>{children}</th>
);

const NITAndhraPradesh = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Andhra Pradesh",
        "alternateName": "NIT Andhra Pradesh",
        "url": "https://www.nitandhra.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Andhra Pradesh at Tadepalligudem is India's youngest NIT, established 2015 under Andhra Pradesh Reorganisation Act. ₹44.1 LPA highest package, 178-acre campus, Microsoft, Amazon, Google recruiters.",
        "address": { "@type": "PostalAddress", "addressLocality": "Tadepalligudem", "addressRegion": "Andhra Pradesh", "addressCountry": "IN" },
        "foundingDate": "2015"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Andhra Pradesh CSE?', a: 'In 2025, CSE (OS) closed at 22,270 for General category. Home State (Andhra Pradesh) CSE closed at 17,349. CSAB special rounds may extend this further.' },
        { q: 'What is the highest package at NIT Andhra Pradesh?', a: '₹44.1 LPA in 2024 (also matched in 2023 at ₹44.0 LPA), achieved by CSE and ECE students. Microsoft, Amazon, and Google are among the top recruiters.' },
        { q: 'When was NIT Andhra Pradesh established?', a: 'NIT Andhra Pradesh was established in 2015 under the Andhra Pradesh Reorganisation Act, making it the youngest of all 31 NITs. It operates from a 178-acre permanent campus in Tadepalligudem.' },
        { q: 'What is the fee at NIT Andhra Pradesh?', a: 'Tuition fee is ₹62,500/semester. Total per-semester fee is ₹65,400 (academic). Hostel adds ₹12,500 + ₹15,000 mess/semester. SC/ST/PwD pay effectively zero tuition; income below ₹1 Lakh also qualifies for full waiver.' },
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
                title="NIT Andhra Pradesh 2026: Placements, Cutoff, Fees & Admission"
                description="Explore NIT Andhra Pradesh 2025-26: JEE Main branch-wise cutoffs for all categories, ₹44.1 LPA highest placement, 7.22 LPA average, and hostel fee details."
                canonicalPath="/colleges/nit-andhra-pradesh"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-cyan-600 to-emerald-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🌿 Established 2015 · Tadepalligudem, Andhra Pradesh
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Andhra Pradesh – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            India's Youngest NIT · ₹44.1 LPA Highest · Microsoft, Amazon, Google
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Tadepalligudem, AP' },
                            { icon: Calendar, text: 'Est. 2015 · Youngest NIT' },
                            { icon: Building2, text: '178-Acre Campus' },
                            { icon: Award, text: 'NIRF 201–300' },
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
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-teal-500 pl-6">
                    <strong className="text-gray-900">NIT Andhra Pradesh</strong>, born from the 2015 AP Reorganisation Act, is India's youngest NIT. Despite its age, it has achieved a <strong className="text-gray-900">₹44.1 LPA peak package</strong>, a 178-acre permanent campus at Tadepalligudem, and partnerships with 500+ recruiters including Microsoft, Amazon, and Google. Its rapid institutional growth benchmarks against much older NITs.
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
                    <SectionTitle icon={TrendingUp}>JEE Main 2025 Cutoffs</SectionTitle>
                    <h3 className="font-semibold text-gray-800 mb-2">General Category – HS & OS Last Round</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Home State (HS)</Th><Th className="text-center">Other State (OS)</Th></tr></thead>
                            <tbody>{CUTOFF_GEN.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.hs}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.os}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <h3 className="font-semibold text-gray-800 mb-2">Reserved Category – Other State Quota (2025)</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">OBC-NCL</Th><Th className="text-center">SC</Th><Th className="text-center">ST</Th><Th className="text-center">EWS</Th></tr></thead>
                            <tbody>{CUTOFF_CAT_OS.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.obc}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.sc}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.st}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.ews}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-teal-800"><strong>Note:</strong> 50% seats are reserved for Andhra Pradesh HS candidates — a major advantage for AP students. Data marked * are estimates based on CSAB 2023-24 trends. Biotechnology OS closes at 91,366, making it accessible to a wide range of ranks.</p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics (2024)</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package', value: '₹44.1 LPA' },
                            { label: 'Average Package', value: '₹7.22 LPA' },
                            { label: 'Median Package', value: '₹7.56 LPA' },
                            { label: 'Students Placed (UG)', value: '393' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Overall placement rate: <strong>74.55%</strong> in 2024 (85.81% in 2023). Top recruiters: <strong>Microsoft, Amazon, Google, IBM, TCS, Wipro</strong> (Tech); BHEL, L&T, Reliance, JSW Steel (Core); Deloitte, Capgemini (Consulting). Chemical Engineering achieved <strong>100% placement</strong> in 2024.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Placement Rate</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Highest CTC</Th></tr></thead>
                            <tbody>{PLACEMENT_BRANCH.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.rate}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.avg}</td>
                                    <td className="px-4 py-3 text-center font-medium text-teal-700">{r.highest}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-2 text-xs text-gray-500">* ECE lower rate reflects ongoing specialized recruitment cycles noted in 2024 report.</motion.div>
                </section>

                <section id="fees">
                    <SectionTitle icon={IndianRupee}>Fee Structure (2025–2026)</SectionTitle>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Fee Component</Th><Th className="text-center">Amount (INR)</Th></tr></thead>
                            <tbody>{FEE_DATA.map((r, i) => (
                                <tr key={i} className={r.highlight ? 'bg-teal-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                    <td className="px-4 py-3 text-gray-900">{r.component}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500">
                        <p>* Hostel caution deposit (₹8,000) is refundable. Three-tier fee remission: SC/ST/PwD pay ~₹2,900/semester (only establishment + medical). Income-based Tiers 2 & 3 require income certificates from competent authority.</p>
                    </motion.div>
                </section>

                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {[
                            { label: 'B.Tech (8 Programs)', items: 'CSE, ECE, Electrical & Electronics, Mechanical, Chemical, Civil, Biotechnology, Metallurgical & Materials Engineering' },
                            { label: 'Postgraduate & Research', items: 'M.Tech specializations across departments · Ph.D. programs · 500+ company recruiter database' },
                        ].map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-teal-600 mb-2">{c.label}</div>
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="faq">
                    <SectionTitle icon={Users}>Frequently Asked Questions</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {faqItems.map((f, i) => (
                            <div key={i} className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <motion.section {...sectionAnim} className="text-center bg-gradient-to-r from-teal-700 to-cyan-600 rounded-2xl p-10 md:p-14 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Check Your Rank for NIT Andhra Pradesh</h2>
                    <p className="text-teal-100 mb-8 max-w-xl mx-auto">Use our AI predictor to see your chances at NIT AP's 8 B.Tech programs across HS and OS quotas.</p>
                    <Link to="/jee-mains">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="bg-white text-teal-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                            <span>Try College Predictor</span><ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default NITAndhraPradesh;
