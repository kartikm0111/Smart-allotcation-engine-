// ===== Location & Sector Constants =====

export const locations = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Remote",
] as const;

export type Location = (typeof locations)[number];

export const sectors = [
  "Technology",
  "Finance & Banking",
  "Healthcare",
  "E-Commerce",
  "Education",
  "Manufacturing",
  "Energy & Power",
  "Agriculture & Rural Dev",
] as const;

export type Sector = (typeof sectors)[number];

// ===== Recommended Internships =====

export interface RecommendedInternship {
  id: string;
  title: string;
  company: string;
  location: Location;
  matchScore: number;
  skills: string;
  sector: Sector;
  description: string;
  stipend: string;
  duration: string;
  dataAiHint: string;
}

export const recommendedInternships: RecommendedInternship[] = [
  {
    id: "rec-1",
    title: "AI/ML Research Intern",
    company: "Infosys",
    location: "Bangalore",
    matchScore: 96,
    skills: "Python, TensorFlow, Machine Learning, NLP",
    sector: "Technology",
    description:
      "Work on cutting-edge AI research projects developing intelligent automation solutions for enterprise clients across India.",
    stipend: "₹35,000/month",
    duration: "6 months",
    dataAiHint: "technology research",
  },
  {
    id: "rec-2",
    title: "Cloud Engineering Intern",
    company: "TCS",
    location: "Mumbai",
    matchScore: 91,
    skills: "AWS, Docker, Kubernetes, Linux",
    sector: "Technology",
    description:
      "Join TCS's cloud infrastructure team to build and manage scalable cloud-native solutions for government and private sector projects.",
    stipend: "₹30,000/month",
    duration: "6 months",
    dataAiHint: "cloud server",
  },
  {
    id: "rec-3",
    title: "Full Stack Developer Intern",
    company: "Wipro",
    location: "Hyderabad",
    matchScore: 88,
    skills: "React, Node.js, TypeScript, MongoDB",
    sector: "Technology",
    description:
      "Develop modern web applications using the latest tech stack for Wipro's digital transformation initiatives across Smart City projects.",
    stipend: "₹28,000/month",
    duration: "4 months",
    dataAiHint: "coding software",
  },
  {
    id: "rec-4",
    title: "Data Analytics Intern",
    company: "Reliance Industries",
    location: "Delhi NCR",
    matchScore: 84,
    skills: "SQL, Power BI, Python, Excel, Statistics",
    sector: "Finance & Banking",
    description:
      "Analyze large-scale business datasets and create actionable dashboards for strategic decision-making in Reliance's financial division.",
    stipend: "₹32,000/month",
    duration: "6 months",
    dataAiHint: "data charts",
  },
  {
    id: "rec-5",
    title: "Product Management Intern",
    company: "Flipkart",
    location: "Bangalore",
    matchScore: 79,
    skills: "Product Strategy, Agile, Data Analysis, UX Research",
    sector: "E-Commerce",
    description:
      "Drive product roadmap for Flipkart's next-gen e-commerce features, working closely with engineering and design teams.",
    stipend: "₹40,000/month",
    duration: "5 months",
    dataAiHint: "ecommerce shopping",
  },
  {
    id: "rec-6",
    title: "Space Systems Engineering Intern",
    company: "ISRO",
    location: "Chennai",
    matchScore: 72,
    skills: "MATLAB, C++, Embedded Systems, Signal Processing",
    sector: "Manufacturing",
    description:
      "Contribute to satellite subsystem design and testing at ISRO's Satellite Centre, supporting India's ambitious space missions.",
    stipend: "₹25,000/month",
    duration: "6 months",
    dataAiHint: "space satellite",
  },
];

// ===== Posted Internships =====

export interface PostedInternship {
  id: string;
  title: string;
  company: string;
  location: Location;
  skillsRequired: string;
  capacity: number;
  applicants: number;
  sector: Sector;
  description: string;
  dataAiHint: string;
}

export const postedInternships: PostedInternship[] = [
  {
    id: "post-1",
    title: "Cybersecurity Analyst Intern",
    company: "Tech Mahindra",
    location: "Pune",
    skillsRequired: "Network Security, SIEM, Ethical Hacking, Python",
    capacity: 3,
    applicants: 47,
    sector: "Technology",
    description:
      "Assist in vulnerability assessments and security audits for enterprise clients. Hands-on experience with SOC tools and threat intelligence.",
    dataAiHint: "cybersecurity lock",
  },
  {
    id: "post-2",
    title: "Renewable Energy Research Intern",
    company: "Adani Green Energy",
    location: "Delhi NCR",
    skillsRequired: "Solar PV, Energy Modelling, AutoCAD, Python",
    capacity: 2,
    applicants: 31,
    sector: "Energy & Power",
    description:
      "Research and optimize solar energy solutions for large-scale installations. Work on India's clean energy transition projects.",
    dataAiHint: "solar energy",
  },
  {
    id: "post-3",
    title: "FinTech Product Intern",
    company: "Paytm",
    location: "Delhi NCR",
    skillsRequired: "Financial Analysis, SQL, Product Design, APIs",
    capacity: 4,
    applicants: 63,
    sector: "Finance & Banking",
    description:
      "Support the development of next-generation digital payment products for India's growing fintech ecosystem.",
    dataAiHint: "finance payment",
  },
  {
    id: "post-4",
    title: "AgriTech Data Intern",
    company: "ITC Limited",
    location: "Kolkata",
    skillsRequired: "R, GIS Mapping, Data Science, Agriculture Knowledge",
    capacity: 5,
    applicants: 28,
    sector: "Agriculture & Rural Dev",
    description:
      "Leverage data science to optimize crop yield predictions and supply chain logistics for ITC's agricultural business unit.",
    dataAiHint: "agriculture farming",
  },
];

// ===== Allocations =====

export interface Allocation {
  id: string;
  studentName: string;
  internshipTitle: string;
  company: string;
  matchScore: number;
  status: "confirmed" | "pending" | "under-review";
  location: Location;
}

export const allocations: Allocation[] = [
  {
    id: "alloc-1",
    studentName: "Aarav Sharma",
    internshipTitle: "AI/ML Research Intern",
    company: "Infosys",
    matchScore: 96,
    status: "confirmed",
    location: "Bangalore",
  },
  {
    id: "alloc-2",
    studentName: "Priya Patel",
    internshipTitle: "Cloud Engineering Intern",
    company: "TCS",
    matchScore: 91,
    status: "confirmed",
    location: "Mumbai",
  },
  {
    id: "alloc-3",
    studentName: "Rohan Mehta",
    internshipTitle: "Data Analytics Intern",
    company: "Reliance Industries",
    matchScore: 87,
    status: "pending",
    location: "Delhi NCR",
  },
  {
    id: "alloc-4",
    studentName: "Ananya Krishnan",
    internshipTitle: "Product Management Intern",
    company: "Flipkart",
    matchScore: 83,
    status: "confirmed",
    location: "Bangalore",
  },
  {
    id: "alloc-5",
    studentName: "Vikram Singh",
    internshipTitle: "Space Systems Engineering Intern",
    company: "ISRO",
    matchScore: 78,
    status: "under-review",
    location: "Chennai",
  },
  {
    id: "alloc-6",
    studentName: "Sneha Reddy",
    internshipTitle: "Full Stack Developer Intern",
    company: "Wipro",
    matchScore: 75,
    status: "pending",
    location: "Hyderabad",
  },
];

// ===== Diversity / Chart Data =====

export interface PieDataEntry {
  name: string;
  value: number;
  fill: string;
}

export const diversityPieData: PieDataEntry[] = [
  { name: "Urban", value: 310, fill: "hsl(var(--chart-1))" },
  { name: "Rural", value: 190, fill: "hsl(var(--chart-2))" },
];

export interface BarDataEntry {
  category: string;
  count: number;
  fill: string;
}

export const socialCategoryData: BarDataEntry[] = [
  { category: "General", count: 250, fill: "hsl(var(--chart-1))" },
  { category: "OBC", count: 180, fill: "hsl(var(--chart-2))" },
  { category: "SC", count: 95, fill: "hsl(var(--chart-3))" },
  { category: "ST", count: 65, fill: "hsl(var(--chart-4))" },
  { category: "EWS", count: 45, fill: "hsl(var(--chart-5))" },
];

// ===== Aggregate Stats =====

export interface StatsData {
  totalStudents: number;
  companiesPartner: number;
  avgMatch: number;
  statesCovered: number;
}

export const statsData: StatsData = {
  totalStudents: 10247,
  companiesPartner: 524,
  avgMatch: 87.3,
  statesCovered: 28,
};
