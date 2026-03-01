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
    { param: 'College Name', detail: 'National Institute of Technology Uttarakhand (NITUK)' },
    { param: 'Location', detail: 'Srinagar (Garhwal), Uttarakhand' },
    { param: 'Established Year', detail: '2009' },
    { param: 'Institute Type', detail: 'Institute of National Importance (Government/Autonomous)' },
    { param: 'Total 4-Year Fee (General)', detail: '₹5,00,000 (Tuition Only)' },
];

const CUTOFF_2024_HS = [
    { branch: 'B.Tech CSE', r1: 29393, last: 31244 },
    { branch: 'B.Tech ECE', r1: 39909, last: 45096 },
    { branch: 'B.Tech EEE', r1: 45224, last: 50715 },
    { branch: 'B.Tech Mechanical', r1: 50302, last: 59119 },
    { branch: 'B.Tech Civil', r1: 55671, last: 59638 },
];

const CUTOFF_2025_OS = [
    { branch: 'Computer Science & Engineering', r1: '19,599 / 28,371', last: '19,705 / 30,851' },
    { branch: 'Electronics & Communication', r1: '34,673 / 37,522', last: '36,046 / 43,978' },
    { branch: 'Electrical & Electronics', r1: '26,664 / 43,526', last: '45,169 / 48,247' },
    { branch: 'Mechanical Engineering', r1: '40,050 / 48,910', last: '40,050 / 52,147' },
    { branch: 'Civil Engineering', r1: '45,940 / 53,260', last: '53,893 / 61,063' },
];

const PLACEMENT_2025 = [
    { branch: 'CSE', highest: '₹12.50 LPA', avg: '₹9.45 LPA', median: '₹11.00 LPA' },
    { branch: 'ECE', highest: '₹12.50 LPA', avg: '₹10.36 LPA', median: '₹12.00 LPA' },
    { branch: 'EEE', highest: '₹12.00 LPA', avg: '₹8.43 LPA', median: '₹7.00 LPA' },
    { branch: 'Mechanical', highest: '₹12.00 LPA', avg: '₹5.92 LPA', median: '₹6.00 LPA' },
    { branch: 'Civil', highest: '₹7.00 LPA', avg: '₹6.00 LPA', median: '₹6.00 LPA' },
];

const FEE_DATA = [
    { component: 'Tuition Fee (Per Year)', amount: '₹1,25,000' },
    { component: 'One-Time Security/Admission (Year 1)', amount: '₹29,692' },
    { component: 'Hostel Rent (Per Year)', amount: '₹10,308' },
    { component: 'Hostel Maintenance (Per Year)', amount: '₹2,000' },
    { component: 'Mess Fees Advance (Per Year)', amount: '₹44,000' },
    { component: 'Electricity & Water Advance (Per Year)', amount: '₹6,442' },
    { component: 'Total Annual Hostel Fee', amount: '₹62,750', highlight: true },
    { component: 'Total First Year Cost', amount: '~₹2,17,442' },
    { component: 'SC/ST/PwD / Income &lt; 1 LPA', amount: '100% Tuition Waiver' },
    { component: 'Income 1–5 LPA', amount: '66.67% Tuition Remission' },
    { component: 'Estimated Total 4-Year B.Tech', amount: '~₹8.04 Lakhs' },
];

const COURSES = [
    { label: 'B.Tech Programs', items: 'Computer Science & Engineering, ECE, Electrical & Electronics, Mechanical Engineering, Civil Engineering' },
    { label: 'Research Focus', items: 'Civil Engineering research on Himalayan seismic conditions is a key specialization, relevant to mountain infrastructure challenges' },
];

const RANKINGS = [
    { body: 'NIRF 2024', rank: '101–150 Band (Engineering)', icon: Award },
    { body: 'India Today 2025', rank: '#19 (Engineering)', icon: Star },
];

const ADMISSION_STEPS = [
    'Secure a competitive JEE Main 2026 score. Class 12 minimum: 75% aggregate (65% for SC/ST/PwD).',
    'Register on JoSAA portal and fill preferences. CSE and ECE are most competitive; HS quota is available for Uttarakhand candidates.',
    'Participate in all six JoSAA rounds followed by CSAB special rounds.',
    'Bring Aadhaar card, PSAL letter, and category certificates (OBC/EWS must be issued after April 1, 2026) for physical reporting.',
    'Anti-ragging undertaking via the national helpline is mandatory. Transfer/Migration and conduct certificates required from previous school.',
];

const sectionAnim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SectionTitle = ({ icon: Icon, children }) => (
    <motion.div {...sectionAnim} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{children}</h2>
    </motion.div>
);

const Th = ({ children, className = '' }) => (
    <th className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-violet-700 bg-violet-50 ${className}`}>{children}</th>
);

const NITUttarakhand = () => {
    const collegeSchema = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "National Institute of Technology Uttarakhand",
        "alternateName": "NIT Uttarakhand",
        "url": "https://www.nituk.ac.in",
        "logo": "https://rankkmate.in/logo.png",
        "description": "NIT Uttarakhand is the premier engineering institution in Uttarakhand, ranked #19 by India Today 2025, offering B.Tech programs in CSE, ECE, EEE, Mechanical, and Civil Engineering from its campus in Srinagar (Garhwal).",
        "address": { "@type": "PostalAddress", "addressLocality": "Srinagar, Garhwal", "addressRegion": "Uttarakhand", "addressCountry": "IN" },
        "foundingDate": "2009"
    };

    const faqItems = [
        { q: 'What is the cutoff for NIT Uttarakhand CSE?', a: 'For General (Other State) in 2025, the last round closing rank for CSE was approximately 30,851. This is highly competitive for a second-generation NIT, reflecting strong demand.' },
        { q: 'What is the highest package at NIT Uttarakhand?', a: 'The 2024 cycle saw a peak of ₹32 LPA (ECE branch). The 2025 cycle peak was ₹12.50 LPA, shared between CSE and ECE, reflecting current market conditions.' },
        { q: 'What is NIT Uttarakhand\'s ranking?', a: 'NIT Uttarakhand is ranked in the NIRF 101–150 Engineering band (2024) and #19 in the India Today Engineering 2025 ranking — among the highest for a 2009-era NIT.' },
        { q: 'What is the total B.Tech fee at NIT Uttarakhand?', a: 'The estimated total 4-year cost including hostel and mess is approximately ₹8.04 Lakhs. Tuition alone is ₹5 Lakhs for General candidates; SC/ST/PwD receive full tuition waiver.' },
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
                title="NIT Uttarakhand Cutoff, Fees, Placements & Ranking 2026"
                description="Check NIT Uttarakhand 2026 JEE Main cutoffs, ₹32 LPA highest placement, fee structure (~₹8 Lakhs), India Today #19 ranking, and admission details. Updated 2026 data."
                canonicalPath="/colleges/nit-uttarakhand"
                ogType="article"
                schemaMarkup={[collegeSchema, faqSchema]}
            />

            <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-500 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            🏔️ Established 2009 · Srinagar, Uttarakhand
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            NIT Uttarakhand – Cutoff, Fees, Placements &amp; Ranking
                        </h1>
                        <p className="text-xl md:text-2xl text-violet-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            India Today #19 Engineering · ₹32 LPA Peak · Himalayan Academic Excellence
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base">
                        {[
                            { icon: MapPin, text: 'Srinagar, Uttarakhand' },
                            { icon: Calendar, text: 'Est. 2009' },
                            { icon: Building2, text: 'NIT' },
                            { icon: Award, text: 'India Today #19' },
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
                <motion.p {...sectionAnim} className="text-lg text-gray-600 leading-relaxed border-l-4 border-violet-500 pl-6">
                    <strong className="text-gray-900">NIT Uttarakhand (NITUK)</strong>, established in 2009, is the premier engineering institution of the state. Ranked <strong className="text-gray-900">#19 by India Today 2025</strong> and in the NIRF 101–150 engineering band, it is the most academically selective of the three Himalayan NITs. Its Civil Engineering department is a significant research hub for mountain and seismic engineering.
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
                    <SectionTitle icon={TrendingUp}>JEE Main Cutoffs</SectionTitle>
                    <h3 className="font-semibold text-gray-800 mb-2">2024 Closing Ranks – General (Home State)</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Round 1</Th><Th className="text-center">Last Round</Th></tr></thead>
                            <tbody>{CUTOFF_2024_HS.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.r1.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.last.toLocaleString()}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <h3 className="font-semibold text-gray-800 mb-2">2025 Closing Ranks – General (Other State)</h3>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Round 1</Th><Th className="text-center">Last Round</Th></tr></thead>
                            <tbody>{CUTOFF_2025_OS.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.branch}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.r1}</td>
                                    <td className="px-4 py-3 text-center text-gray-700">{r.last}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-4 flex items-start gap-3 bg-violet-50 border border-violet-200 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-violet-800">
                            <strong>Note:</strong> The 2025 OS cutoffs show two figures (R1/Last Round from two sub-rounds). The CSE OS last round rank of ~30,851 is extremely competitive for a 2009-era NIT, showing high student demand.
                        </p>
                    </motion.div>
                </section>

                <section id="placements">
                    <SectionTitle icon={Briefcase}>Placement Statistics</SectionTitle>
                    <motion.div {...sectionAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Highest Package (2024)', value: '₹32.00 LPA' },
                            { label: 'Highest Package (2025)', value: '₹12.50 LPA' },
                            { label: 'Average CTC (2025)', value: '₹8.03 LPA' },
                            { label: 'Batch Size (2025)', value: '137 Students' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-xl p-5 text-center">
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...sectionAnim} className="mb-4 text-sm text-gray-600">
                        Top recruiters include Google, Adobe, Samsung, Siemens, Amazon, IBM, and Capgemini. Students also receive internship stipends of up to <strong>₹1 Lakh/month</strong> during pre-final year.
                    </motion.div>
                    <motion.div {...sectionAnim} className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm md:text-base">
                            <thead><tr><Th>Branch</Th><Th className="text-center">Highest CTC</Th><Th className="text-center">Average CTC</Th><Th className="text-center">Median CTC</Th></tr></thead>
                            <tbody>{PLACEMENT_2025.map((r, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{r.branch}</td>
                                    <td className="px-4 py-3 text-center font-medium text-violet-700">{r.highest}</td>
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
                                <tr key={i} className={r.highlight ? 'bg-violet-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                                    <td className="px-4 py-3 text-gray-900" dangerouslySetInnerHTML={{ __html: r.component }} />
                                    <td className="px-4 py-3 text-center text-gray-700">{r.amount}</td>
                                </tr>
                            ))}</tbody>
                        </table>
                    </motion.div>
                    <motion.div {...sectionAnim} className="mt-3 text-xs text-gray-500">
                        <p>* Security deposit is partially refundable. For SC/ST/PwD and low-income students, the 4-year cost reduces to approximately ₹3.04 Lakhs (hostel and mess only).</p>
                    </motion.div>
                </section>

                <section id="courses">
                    <SectionTitle icon={BookOpen}>Courses Offered</SectionTitle>
                    <motion.div {...sectionAnim} className="grid sm:grid-cols-2 gap-4">
                        {COURSES.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-semibold text-violet-600 mb-2">{c.label}</div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                <section id="rankings">
                    <SectionTitle icon={Award}>Rankings (2024–2025)</SectionTitle>
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

                <section id="admission">
                    <SectionTitle icon={GraduationCap}>Admission Process 2026</SectionTitle>
                    <motion.div {...sectionAnim} className="space-y-4">
                        {ADMISSION_STEPS.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Check Your Rank for NIT Uttarakhand</h2>
                    <p className="text-violet-100 mb-8 max-w-xl mx-auto">
                        Use our AI predictor to evaluate your JEE Main rank against NIT Uttarakhand's competitive cutoffs.
                    </p>
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

export default NITUttarakhand;
