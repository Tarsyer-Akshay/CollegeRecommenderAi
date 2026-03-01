import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Award, TrendingUp, ArrowRight, GraduationCap } from 'lucide-react';
import SEOHead from '../components/SEOHead';

// ── College Directory ───────────────────────────────────────────────────────────
// Add new colleges here as they are created. Each entry feeds the listing cards.

const COLLEGES = [
    {
        name: 'IIT Bombay',
        slug: 'iit-bombay',
        location: 'Powai, Mumbai',
        established: 1958,
        type: 'IIT',
        nirfRank: 3,
        avgPackage: '₹23.50 LPA',
        topBranch: 'CSE – AIR 66',
        color: 'from-purple-600 to-pink-500',
        tagline: 'India\'s #1 engineering institute by India Today 2025',
    },
    // ── Future colleges will be added below ──────────────────────────────────
    // {
    //     name: 'IIT Delhi',
    //     slug: 'iit-delhi',
    //     ...
    // },
    {
        name: 'IIT Kharagpur',
        slug: 'iit-kharagpur',
        location: 'Kharagpur, West Bengal',
        established: 1951,
        type: 'IIT',
        nirfRank: 5,
        avgPackage: '₹24.30 LPA',
        topBranch: 'CSE – AIR 466',
        color: 'from-orange-500 to-red-500',
        tagline: 'India\'s oldest IIT — NIRF #5 Engineering',
    },
    {
        name: 'IIT Madras',
        slug: 'iit-madras',
        location: 'Chennai, Tamil Nadu',
        established: 1959,
        type: 'IIT',
        nirfRank: 1,
        avgPackage: '₹22-24 LPA',
        topBranch: 'CSE – AIR 171',
        color: 'from-blue-600 to-cyan-500',
        tagline: 'NIRF #1 Engineering for 10 consecutive years',
    },
    {
        name: 'IIT Kanpur',
        slug: 'iit-kanpur',
        location: 'Kanpur, Uttar Pradesh',
        established: 1959,
        type: 'IIT',
        nirfRank: 4,
        avgPackage: '₹26.27 LPA',
        topBranch: 'CSE – AIR 271',
        color: 'from-emerald-600 to-teal-500',
        tagline: 'NIRF #4 Engineering — Pioneer of Data Science',
    },
    {
        name: 'IIT Delhi',
        slug: 'iit-delhi',
        location: 'Hauz Khas, New Delhi',
        established: 1961,
        type: 'IIT',
        nirfRank: 2,
        avgPackage: '₹27.00 LPA',
        topBranch: 'CSE – AIR 126',
        color: 'from-indigo-600 to-violet-500',
        tagline: 'NIRF #2 Engineering — QS World #150',
    },
    {
        name: 'IIT Guwahati',
        slug: 'iit-guwahati',
        location: 'Guwahati, Assam',
        established: 1994,
        type: 'IIT',
        nirfRank: 7,
        avgPackage: '₹25.21 LPA',
        topBranch: 'CSE – AIR 792',
        color: 'from-sky-600 to-blue-500',
        tagline: 'NIRF #7 Engineering — Data Science & AI Hub',
    },
    {
        name: 'IIT Roorkee',
        slug: 'iit-roorkee',
        location: 'Roorkee, Uttarakhand',
        established: 1847,
        type: 'IIT',
        nirfRank: 6,
        avgPackage: '₹19.64 LPA',
        topBranch: 'CSE – AIR 592',
        color: 'from-amber-600 to-yellow-500',
        tagline: 'Asia\'s oldest technical institution — NIRF #1 Architecture',
    },
    {
        name: 'IIT Bhubaneswar',
        slug: 'iit-bhubaneswar',
        location: 'Bhubaneswar, Odisha',
        established: 2008,
        type: 'IIT',
        nirfRank: 39,
        avgPackage: '₹14.98 LPA',
        topBranch: 'CSE – AIR 4162',
        color: 'from-rose-600 to-pink-500',
        tagline: 'NIRF #39 (↑15 spots) — Climate Science & ESD Research',
    },
    {
        name: 'IIT Gandhinagar',
        slug: 'iit-gandhinagar',
        location: 'Gandhinagar, Gujarat',
        established: 2008,
        type: 'IIT',
        nirfRank: 25,
        avgPackage: '₹18.20 LPA',
        topBranch: 'CSE – AIR 2020',
        color: 'from-lime-600 to-green-500',
        tagline: 'India Today #9 — IC Design & AI Pioneer',
    },
    {
        name: 'IIT Hyderabad',
        slug: 'iit-hyderabad',
        location: 'Sangareddy, Telangana',
        established: 2008,
        type: 'IIT',
        nirfRank: 7,
        avgPackage: '₹30.62 LPA',
        topBranch: 'CSE – AIR 673',
        color: 'from-fuchsia-600 to-purple-500',
        tagline: 'NIRF #7 — India\'s First B.Tech in AI',
    },
    {
        name: 'IIT Jodhpur',
        slug: 'iit-jodhpur',
        location: 'Jodhpur, Rajasthan',
        established: 2008,
        type: 'IIT',
        nirfRank: 27,
        avgPackage: '₹16.73 LPA',
        topBranch: 'CSE – AIR 2918',
        color: 'from-orange-500 to-amber-500',
        tagline: 'NIRF #27 — AI & Cyber-Physical Systems Hub',
    },
    {
        name: 'IIT Patna',
        slug: 'iit-patna',
        location: 'Patna, Bihar',
        established: 2008,
        type: 'IIT',
        nirfRank: 19,
        avgPackage: '₹25.82 LPA',
        topBranch: 'CSE – AIR 3377',
        color: 'from-cyan-600 to-teal-500',
        tagline: 'NIRF #19 — ₹1.17 Cr Highest Package',
    },
    {
        name: 'IIT Ropar',
        slug: 'iit-ropar',
        location: 'Rupnagar, Punjab',
        established: 2008,
        type: 'IIT',
        nirfRank: 32,
        avgPackage: '₹23.07 LPA',
        topBranch: 'CSE – AIR 2512',
        color: 'from-violet-600 to-indigo-500',
        tagline: 'NIRF #32 — Digital Agriculture & AI Pioneer',
    },
    {
        name: 'IIT Indore',
        slug: 'iit-indore',
        location: 'Indore, Madhya Pradesh',
        established: 2009,
        type: 'IIT',
        nirfRank: 12,
        avgPackage: '₹27.00 LPA',
        topBranch: 'CSE – AIR 1775',
        color: 'from-sky-600 to-blue-500',
        tagline: 'NIRF #12 — Space Science & ₹1.37 Cr Package',
    },
    {
        name: 'IIT Mandi',
        slug: 'iit-mandi',
        location: 'Mandi, Himachal Pradesh',
        established: 2009,
        type: 'IIT',
        nirfRank: 26,
        avgPackage: '₹21.64 LPA',
        topBranch: 'CSE – AIR 3123',
        color: 'from-emerald-600 to-green-500',
        tagline: 'NIRF #26 — 95% Placement · Innovation #10',
    },
    {
        name: 'IIT (BHU) Varanasi',
        slug: 'iit-bhu-varanasi',
        location: 'Varanasi, Uttar Pradesh',
        established: 1919,
        type: 'IIT',
        nirfRank: 10,
        avgPackage: '₹29.33 LPA',
        topBranch: 'CSE – AIR 1489',
        color: 'from-rose-600 to-red-500',
        tagline: 'NIRF #10 — Century-Old Legacy · ₹1.67 Cr Package',
    },
    {
        name: 'IIT Palakkad',
        slug: 'iit-palakkad',
        location: 'Palakkad, Kerala',
        established: 2015,
        type: 'IIT',
        nirfRank: 64,
        avgPackage: '₹13.98 LPA',
        topBranch: 'CSE – AIR 6454',
        color: 'from-teal-600 to-emerald-500',
        tagline: 'NIRF #64 — Mentored by IIT Madras',
    },
    {
        name: 'IIT Tirupati',
        slug: 'iit-tirupati',
        location: 'Tirupati, Andhra Pradesh',
        established: 2015,
        type: 'IIT',
        nirfRank: 57,
        avgPackage: '₹17.58 LPA',
        topBranch: 'CSE – AIR 5034',
        color: 'from-amber-600 to-yellow-500',
        tagline: 'NIRF #57 — CSE 98% Placement · ₹65 LPA Highest',
    },
    {
        name: 'IIT (ISM) Dhanbad',
        slug: 'iit-dhanbad',
        location: 'Dhanbad, Jharkhand',
        established: 1926,
        type: 'IIT',
        nirfRank: 15,
        avgPackage: '₹17.60 LPA',
        topBranch: 'CSE – AIR 3585',
        color: 'from-slate-700 to-zinc-500',
        tagline: 'NIRF #15 — QS #20 Mining Globally · Est. 1926',
    },
    {
        name: 'IIT Bhilai',
        slug: 'iit-bhilai',
        location: 'Bhilai, Chhattisgarh',
        established: 2016,
        type: 'IIT',
        nirfRank: 72,
        avgPackage: '₹15.1 LPA',
        topBranch: 'CSE – AIR 7382',
        color: 'from-orange-600 to-red-500',
        tagline: 'NIRF #72 — DS&AI 90% Placement · New Campus',
    },
    {
        name: 'IIT Goa',
        slug: 'iit-goa',
        location: 'Ponda, Goa',
        established: 2016,
        type: 'IIT',
        nirfRank: 150,
        avgPackage: '₹19.15 LPA',
        topBranch: 'CSE – AIR 6242',
        color: 'from-cyan-600 to-blue-500',
        tagline: 'CSE 97.5% Placed · ₹1.12 Cr Highest · Small Batches',
    },
    {
        name: 'IIT Jammu',
        slug: 'iit-jammu',
        location: 'Jammu, J&K',
        established: 2016,
        type: 'IIT',
        nirfRank: 56,
        avgPackage: '₹15.5 LPA',
        topBranch: 'CSE – AIR 6651',
        color: 'from-indigo-600 to-violet-500',
        tagline: 'NIRF #56 — CSE ₹21.5 LPA · German-Tech Campus',
    },
    {
        name: 'IIT Dharwad',
        slug: 'iit-dharwad',
        location: 'Dharwad, Karnataka',
        established: 2016,
        type: 'IIT',
        nirfRank: 77,
        avgPackage: '₹14.65 LPA',
        topBranch: 'CSE – AIR 7208',
        color: 'from-lime-600 to-green-500',
        tagline: 'NIRF #77 (↑24!) · 470-Acre Campus · CSE 96.1%',
    },
    {
        name: 'NIT Trichy',
        slug: 'nit-trichy',
        location: 'Tiruchirappalli, Tamil Nadu',
        established: 1964,
        type: 'NIT',
        nirfRank: 9,
        avgPackage: '₹17.50 LPA',
        topBranch: 'CSE – AIR 1605',
        color: 'from-blue-600 to-indigo-500',
        tagline: 'India\'s #1 NIT — NIRF #9 Engineering',
    },
    {
        name: 'NIT Surathkal',
        slug: 'nit-surathkal',
        location: 'Surathkal, Karnataka',
        established: 1960,
        type: 'NIT',
        nirfRank: 17,
        avgPackage: '₹17.48 LPA',
        topBranch: 'CSE – AIR 1827',
        color: 'from-cyan-600 to-blue-500',
        tagline: 'Top NIT in Karnataka — NIRF #17 Engineering',
    },
    {
        name: 'NIT Warangal',
        slug: 'nit-warangal',
        location: 'Warangal, Telangana',
        established: 1959,
        type: 'NIT',
        nirfRank: 28,
        avgPackage: '₹14.35 LPA',
        topBranch: 'CSE – AIR 2409',
        color: 'from-emerald-600 to-teal-500',
        tagline: 'India\'s First REC — NIRF #28 Engineering',
    },
    {
        name: 'NIT Calicut',
        slug: 'national-institute-of-technology-calicut-2025-report',
        location: 'Kozhikode, Kerala',
        established: 1961,
        type: 'NIT',
        nirfRank: 21,
        avgPackage: '₹12.17 LPA',
        topBranch: 'CSE – AIR 5964',
        color: 'from-green-600 to-teal-500',
        tagline: 'NIRF #2 Architecture · Established 1961',
    },
    {
        name: 'NIT Rourkela',
        slug: 'national-institute-of-technology-rourkela-2025-admission',
        location: 'Rourkela, Odisha',
        established: 1961,
        type: 'NIT',
        nirfRank: 13,
        avgPackage: '₹15.25 LPA',
        topBranch: 'CSE – AIR 4245',
        color: 'from-purple-600 to-indigo-500',
        tagline: 'Massive 647 Acre Campus · 1.2 Cr Highest',
    },
    {
        name: 'NIT Durgapur',
        slug: 'national-institute-of-technology-durgapur-2025-admission-guide',
        location: 'Durgapur, West Bengal',
        established: 1960,
        type: 'NIT',
        nirfRank: 49,
        avgPackage: '₹12.61 LPA',
        topBranch: 'CSE – AIR 9836',
        color: 'from-indigo-700 to-blue-500',
        tagline: 'Industrial Heartland Hub · Core Engg Strength',
    },
    {
        name: 'NIT Kurukshetra',
        slug: 'nit-kurukshetra',
        location: 'Kurukshetra, Haryana',
        established: 1963,
        type: 'NIT',
        nirfRank: 85,
        avgPackage: '₹14.84 LPA',
        topBranch: 'CSE – AIR 7595',
        color: 'from-indigo-600 to-purple-500',
        tagline: 'Established 1963 · NCR Industrial Proximity',
    },
    {
        name: 'NIT Silchar',
        slug: 'nit-silchar',
        location: 'Silchar, Assam',
        established: 1967,
        type: 'NIT',
        nirfRank: 50,
        avgPackage: '₹12.25 LPA',
        topBranch: 'CSE – AIR 14914',
        color: 'from-teal-600 to-green-500',
        tagline: 'Premier Hub of the North-East · 60 LPA Highest',
    },
    {
        name: 'NIT Hamirpur',
        slug: 'nit-hamirpur',
        location: 'Hamirpur, HP',
        established: 1986,
        type: 'NIT',
        nirfRank: '101-150',
        avgPackage: '₹10.58 LPA',
        topBranch: 'CSE – AIR 12236',
        color: 'from-cyan-600 to-blue-500',
        tagline: 'Himalayan Academic Ecosystem · 205 LPA Highest',
    },
    {
        name: 'NIT Jamshedpur',
        slug: 'nit-jamshedpur',
        location: 'Jamshedpur, Jharkhand',
        established: 1960,
        type: 'NIT',
        nirfRank: 82,
        avgPackage: '₹13.62 LPA',
        topBranch: 'CSE – AIR 10736',
        color: 'from-orange-600 to-amber-500',
        tagline: 'The Hidden Diamond · 144 LPA Highest',
    },
    {
        name: 'NIT Patna',
        slug: 'nit-patna',
        location: 'Patna, Bihar',
        established: 1886,
        type: 'NIT',
        nirfRank: 53,
        avgPackage: '₹9.90 LPA',
        topBranch: 'CSE – AIR 13235',
        color: 'from-indigo-700 to-violet-600',
        tagline: 'Legacy of Technical Innovation · 103% Placements',
    },
    {
        name: 'NIT Raipur',
        slug: 'nit-raipur',
        location: 'Raipur, Chhattisgarh',
        established: 1956,
        type: 'NIT',
        nirfRank: 86,
        avgPackage: '₹11.10 LPA',
        topBranch: 'CSE – AIR 12916',
        color: 'from-red-700 to-rose-600',
        tagline: 'The Strategic Hub of Central India · Mining Focus',
    },
    {
        name: 'NIT Srinagar',
        slug: 'nit-srinagar',
        location: 'Srinagar, J&K',
        established: 1960,
        type: 'NIT',
        nirfRank: 73,
        avgPackage: '₹10.48 LPA',
        topBranch: 'CSE – AIR 26171',
        color: 'from-emerald-800 to-teal-600',
        tagline: 'Technical Resilience · 35.5 LPA Highest',
    },
    {
        name: 'NIT Agartala',
        slug: 'nit-agartala',
        location: 'Agartala, Tripura',
        established: 1965,
        type: 'NIT',
        nirfRank: '101-150',
        avgPackage: '₹9.83 LPA',
        topBranch: 'CSE – AIR 22013',
        color: 'from-indigo-800 to-purple-600',
        tagline: 'Scale and Innovation · 52 LPA Highest',
    },
    {
        name: 'NIT Arunachal Pradesh',
        slug: 'nit-arunachal-pradesh',
        location: 'Jote, Arunachal Pradesh',
        established: 2010,
        type: 'NIT',
        nirfRank: '101-150',
        avgPackage: '₹7.37 LPA',
        topBranch: 'CSE – AIR 30607',
        color: 'from-fuchsia-900 to-pink-600',
        tagline: 'Rising Tech Powerhouse · 59 LPA Highest',
    },
    {
        name: 'NIT Manipur',
        slug: 'nit-manipur',
        location: 'Langthabal, Imphal',
        established: 2010,
        type: 'NIT',
        nirfRank: '150-200',
        avgPackage: '₹7.30 LPA',
        topBranch: 'CSE – AIR 45298',
        color: 'from-green-700 to-emerald-600',
        tagline: 'Technical Education in the Northeast · ₹47 LPA Peak',
    },
    {
        name: 'NIT Meghalaya',
        slug: 'nit-meghalaya',
        location: 'Shillong / Sohra',
        established: 2010,
        type: 'NIT',
        nirfRank: 83,
        avgPackage: '₹12.79 LPA',
        topBranch: 'CSE – AIR 35937',
        color: 'from-blue-700 to-indigo-600',
        tagline: 'The Crest of Technical Excellence · ₹52 LPA Peak',
    },
    {
        name: 'NIT Mizoram',
        slug: 'nit-mizoram',
        location: 'Aizawl, Mizoram',
        established: 2010,
        type: 'NIT',
        nirfRank: '101-150',
        avgPackage: '₹8.40 LPA',
        topBranch: 'CSE – AIR 37751',
        color: 'from-violet-700 to-fuchsia-600',
        tagline: 'Diversity and Modern Computing · 93%+ Placements',
    },
    {
        name: 'NIT Nagaland',
        slug: 'nit-nagaland',
        location: 'Chumukedima, Nagaland',
        established: 2010,
        type: 'NIT',
        nirfRank: '151-200',
        avgPackage: '₹4.22 LPA',
        topBranch: 'EEE/ME – ₹14 LPA Highest',
        color: 'from-orange-600 to-amber-500',
        tagline: 'Industrial Hub of the NE · ₹14 LPA Highest · 291-Acre Campus',
    },
    {
        name: 'NIT Sikkim',
        slug: 'nit-sikkim',
        location: 'Ravangla, Sikkim',
        established: 2010,
        type: 'NIT',
        nirfRank: '151-200',
        avgPackage: '₹13.76 LPA',
        topBranch: 'CSE – AIR 21087',
        color: 'from-sky-600 to-cyan-500',
        tagline: 'NVIDIA ₹44 LPA · AI & ML B.Tech · 86% Placement Rate',
    },
    {
        name: 'NIT Uttarakhand',
        slug: 'nit-uttarakhand',
        location: 'Srinagar, Uttarakhand',
        established: 2009,
        type: 'NIT',
        nirfRank: '101-150',
        avgPackage: '₹8.03 LPA',
        topBranch: 'CSE – AIR 19599',
        color: 'from-violet-700 to-purple-600',
        tagline: 'India Today #19 Engineering · ₹32 LPA Peak · Est. 2009',
    },
    {
        name: 'NIT Delhi',
        slug: 'nit-delhi',
        location: 'Narela, New Delhi',
        established: 2010,
        type: 'NIT',
        nirfRank: '65',
        avgPackage: '₹17.19 LPA',
        topBranch: 'CSE – AIR 6,746',
        color: 'from-blue-700 to-indigo-600',
        tagline: 'NCR Power · ₹58.5 LPA Highest · Google, Amazon, Microsoft',
    },
    {
        name: 'NIT Goa',
        slug: 'nit-goa',
        location: 'Cuncolim, Goa',
        established: 2010,
        type: 'NIT',
        nirfRank: '101-150',
        avgPackage: '₹9.24 LPA',
        topBranch: 'CSE – AIR 13,640',
        color: 'from-emerald-600 to-teal-500',
        tagline: 'Boutique NIT · ₹44 LPA All-Time High · India Today #26',
    },
    {
        name: 'NIT Puducherry',
        slug: 'nit-puducherry',
        location: 'Karaikal, Puducherry',
        established: 2010,
        type: 'NIT',
        nirfRank: '99',
        avgPackage: '₹8.3 LPA',
        topBranch: 'CSE – AIR 19,758',
        color: 'from-rose-600 to-orange-500',
        tagline: 'NIRF Top 100 · #1 in Puducherry · Civil ₹22 LPA Highest',
    },
    {
        name: 'NIT Andhra Pradesh',
        slug: 'nit-andhra-pradesh',
        location: 'Tadepalligudem, Andhra Pradesh',
        established: 2015,
        type: 'NIT',
        nirfRank: '201-300',
        avgPackage: '₹7.22 LPA',
        topBranch: 'CSE – AIR 22,270',
        color: 'from-teal-600 to-cyan-500',
        tagline: 'Youngest NIT · ₹44.1 LPA Highest · 178-Acre Permanent Campus',
    },
    {
        name: 'MNIT Jaipur',
        slug: 'mnit-jaipur',
        location: 'Jaipur, Rajasthan',
        established: 1963,
        type: 'NIT',
        nirfRank: '42',
        avgPackage: '₹11.58 LPA',
        topBranch: 'CSE – AIR 5,995',
        color: 'from-amber-600 to-orange-500',
        tagline: 'NIRF #42 Engg · #12 Architecture · ₹64 LPA · Google, D.E. Shaw',
    },
    {
        name: 'MANIT Bhopal',
        slug: 'manit-bhopal',
        location: 'Bhopal, Madhya Pradesh',
        established: 1960,
        type: 'NIT',
        nirfRank: '80',
        avgPackage: '₹15.6 LPA',
        topBranch: 'CSE – AIR 9,249',
        color: 'from-green-700 to-emerald-500',
        tagline: 'NIRF #80 Engg · #17 Arch · ₹82 LPA Peak · 650-Acre Campus',
    },
    {
        name: 'MNNIT Allahabad',
        slug: 'mnnit-allahabad',
        location: 'Prayagraj, Uttar Pradesh',
        established: 1961,
        type: 'NIT',
        nirfRank: '61',
        avgPackage: '₹20.43 LPA',
        topBranch: 'CSE – AIR 6,364',
        color: 'from-violet-700 to-purple-500',
        tagline: 'NIRF #61 · ₹72 LPA Highest · ₹27.72 LPA CSE Avg · Google, Adobe',
    },
    {
        name: 'NIT Jalandhar',
        slug: 'nit-jalandhar',
        location: 'Jalandhar, Punjab',
        established: 1987,
        type: 'NIT',
        nirfRank: '54',
        avgPackage: '₹9.78 LPA',
        topBranch: 'CSE – AIR 13,737',
        color: 'from-blue-700 to-cyan-500',
        tagline: 'NIRF #54 · ₹52 LPA (Microsoft) · 100% ECE & Chemical Placement',
    },
    {
        name: 'SVNIT Surat',
        slug: 'svnit-surat',
        location: 'Surat, Gujarat',
        established: 1961,
        type: 'NIT',
        nirfRank: '65',
        avgPackage: '₹10.22 LPA',
        topBranch: 'CSE – AIR 8,130',
        color: 'from-orange-600 to-red-500',
        tagline: 'NIRF #65 · ₹62 LPA Highest · AI Branch · Amazon, Qualcomm, Barclays',
    },
];

// ── Component ───────────────────────────────────────────────────────────────────

const Colleges = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredColleges = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();
        if (!q) return COLLEGES;
        return COLLEGES.filter(
            (c) =>
                c.name.toLowerCase().includes(q) ||
                c.location.toLowerCase().includes(q) ||
                c.type.toLowerCase().includes(q)
        );
    }, [searchQuery]);

    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Top Engineering Colleges in India",
        "description": "Browse top IITs, NITs, and IIITs with cutoff, placement, and fee details.",
        "url": "https://rankkmate.in/colleges",
    };

    return (
        <div className="min-h-screen">
            <SEOHead
                title="Top Engineering Colleges in India – Cutoff, Fees, Placements"
                description="Explore India's top IITs, NITs & IIITs. Compare cutoffs, placements, fees, and rankings. Updated for 2026."
                canonicalPath="/colleges"
                schemaMarkup={pageSchema}
            />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 pt-24 pb-16 px-4">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                            🎓 College Directory
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Explore Top Engineering Colleges
                        </h1>
                        <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                            Cutoff, fees, placements &amp; rankings — all in one place. Find the right college for your JEE rank.
                        </p>
                    </motion.div>

                    {/* Search bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="max-w-xl mx-auto"
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                id="college-search"
                                type="text"
                                placeholder="Search by college name, city, or type…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/95 backdrop-blur-md text-gray-900 placeholder-gray-400 shadow-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all text-base"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Decorative circles */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-16 w-24 h-24 bg-pink-300/20 rounded-full blur-xl" />
            </section>

            {/* ── Results ───────────────────────────────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-4 py-14">
                {/* Results header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-between mb-8"
                >
                    <p className="text-gray-500 text-sm">
                        Showing <strong className="text-gray-800">{filteredColleges.length}</strong> college{filteredColleges.length !== 1 && 's'}
                    </p>
                </motion.div>

                {filteredColleges.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No colleges found</h3>
                        <p className="text-gray-500">Try a different search term or browse all colleges.</p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-4 text-purple-600 font-medium hover:underline"
                        >
                            Clear search
                        </button>
                    </motion.div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredColleges.map((college, index) => (
                            <motion.div
                                key={college.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                            >
                                <Link to={`/colleges/${college.slug}`} className="block h-full">
                                    <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                        {/* Gradient header */}
                                        <div className={`h-2 bg-gradient-to-r ${college.color}`} />

                                        <div className="p-6">
                                            {/* Type badge */}
                                            <span className={`inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4 bg-gradient-to-r ${college.color} text-white`}>
                                                {college.type}
                                            </span>

                                            {/* Name */}
                                            <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                                                {college.name}
                                            </h2>
                                            <p className="text-sm text-gray-500 mb-5">{college.tagline}</p>

                                            {/* Stats grid */}
                                            <div className="grid grid-cols-2 gap-3 mb-5">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <MapPin className="w-4 h-4 text-purple-500 shrink-0" />
                                                    <span className="truncate">{college.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Calendar className="w-4 h-4 text-purple-500 shrink-0" />
                                                    <span>Est. {college.established}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Award className="w-4 h-4 text-purple-500 shrink-0" />
                                                    <span>NIRF #{college.nirfRank}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <TrendingUp className="w-4 h-4 text-purple-500 shrink-0" />
                                                    <span>{college.avgPackage}</span>
                                                </div>
                                            </div>

                                            {/* Top branch highlight */}
                                            <div className="bg-purple-50 border border-purple-100 rounded-xl px-4 py-2.5 text-sm text-purple-800 mb-5">
                                                <strong>Top Branch:</strong> {college.topBranch}
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-1 transition-transform duration-300 text-sm">
                                                <span>View Details</span>
                                                <ArrowRight className="w-4 h-4 ml-1.5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>

            {/* ── Coming Soon banner ────────────────────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-8 md:p-10 text-center"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">More Colleges Coming Soon!</h3>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        We're adding detailed pages for IIT Delhi, IIT Madras, IIT Kanpur, NITs, IIITs, and more. Stay tuned!
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default Colleges;
