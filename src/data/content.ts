import {
  Cpu, Shield, Cloud, Brain, Code2, Database, Boxes, Bot,
  GraduationCap, Trophy, Users, Rocket, BookOpen, Calendar,
  FileText, Github, Play
} from "lucide-react";

import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

export const TECHS = [
  { icon: Brain, label: "AI & Machine Learning", desc: "Deep learning, NLP, generative AI research." },
  { icon: Database, label: "Data Science & Big Data", desc: "Analytics pipelines and Spark clusters." },
  { icon: Shield, label: "Cybersecurity", desc: "Ethical hacking, forensics, zero-trust systems." },
  { icon: Boxes, label: "Internet of Things", desc: "Edge devices, sensors, smart environments." },
  { icon: Cloud, label: "Cloud Computing", desc: "AWS, Azure, GCP hands-on labs." },
  { icon: Cpu, label: "Blockchain", desc: "Smart contracts and decentralised apps." },
  { icon: Bot, label: "Robotics & Automation", desc: "ROS, computer vision, RPA." },
  { icon: Code2, label: "Full-Stack Development", desc: "MERN, Next.js, TypeScript, cloud native." },
];

export const JOURNEY = [
  { year: "Year 1", title: "Foundations", body: "C, Python, data structures, digital logic and mathematics for computing." },
  { year: "Year 2", title: "Systems & Design", body: "Operating systems, DBMS, computer networks, software engineering." },
  { year: "Year 3", title: "Specialisation", body: "AI, cybersecurity, cloud, mobile — pick your track and dive deep." },
  { year: "Year 4", title: "Capstone & Career", body: "Industry internship, capstone project, and campus placements." },
];

export const FACULTY = [
  { name: "Dr. R. Venkadesh", role: "Professor & Head", area: "Machine Learning · NLP", img: faculty2 },
  { name: "Dr. Meenakshi Iyer", role: "Associate Professor", area: "Cybersecurity · IoT", img: faculty1 },
  { name: "Prof. Anitha Suresh", role: "Assistant Professor", area: "Cloud · DevOps", img: faculty3 },
];

export const TESTIMONIALS = [
  { name: "Aravind K.", role: "Software Engineer, Zoho", body: "The mix of theory and hands-on projects here gave me the confidence to crack SDE interviews." },
  { name: "Divya S.", role: "Data Scientist, Freshworks", body: "Faculty pushed us into research early. My ML paper was published before graduation." },
  { name: "Rahul V.", role: "Founder, StackForge", body: "The entrepreneurship cell helped us prototype and validate our SaaS idea in months." },
];

export const EVENTS = [
  { date: "18 Jan", title: "HackVIT 2026 – 24 hr Hackathon", tag: "Flagship" },
  { date: "05 Feb", title: "AI Symposium with IIT Madras", tag: "Talk" },
  { date: "22 Feb", title: "Google Cloud Study Jam", tag: "Workshop" },
  { date: "10 Mar", title: "Capstone Demo Day", tag: "Showcase" },
];

export const RESOURCES = [
  { icon: FileText, title: "Subject-Wise Notes", href: "https://drive.google.com/drive/folders/19yLKZUvIJDHQA0FTo-l0DKYttGmt-Ze1?usp=sharing" },
  { icon: Play, title: "YouTube Lecture Series", href: "https://youtu.be/dKe5pJljThc?feature=shared" },
  { icon: Github, title: "Open-source Projects", href: "#" },
  { icon: BookOpen, title: "Research Publications", href: "#" },
];
