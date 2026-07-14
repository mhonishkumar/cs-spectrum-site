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
  { icon: FileText, title: "Circular", href: "/Circular to upload.pdf" },
  { icon: FileText, title: "Subject-Wise Notes", href: "https://drive.google.com/drive/folders/19yLKZUvIJDHQA0FTo-l0DKYttGmt-Ze1?usp=sharing" },
  { icon: BookOpen, title: "Teaching Methodologies (Pedagogy)", href: "https://drive.google.com/file/d/1Kb1O86soWiyhUgwCoGXXlM9-SGrSx9Md/view?usp=drive_link" },
  { icon: Play, title: "YouTube Lecture Series", href: "https://youtube.com/@innovatecse?si=mX3h1bWgCHNAYnFr" },
  { 
    icon: GraduationCap, 
    title: "Google Classroom", 
    links: [
      { label: "Classroom 1 (2022-2023)", href: "https://drive.google.com/file/d/1B0Q25SZomZ_Uckier58M930mm6U_-_bo/view?usp=drive_link" },
      { label: "Classroom 2 (2023-2024)", href: "https://drive.google.com/file/d/1ap12U-yBtprDpnRXzi0kFp--_RtWpQKK/view?usp=drive_link" },
      { label: "Classroom 3 (2024-2025)", href: "https://drive.google.com/file/d/1xn4ahdr_SwkI-d6qHrg4PLU94k_MKlhW/view?usp=drive_link" },
      { label: "Classroom 4 (2025-2026)", href: "https://drive.google.com/file/d/1O2zXfxnJ3f4T7ZJ1F4v4l3LZR8a5-hXY/view?usp=drive_link" },
    ] 
  }
];

export const FACULTY_FEEDBACK = [
  {
    name: "Dr. V. Illayaraja",
    role: "Associate Professor",
    department: "Department of Computer Science & Engineering",
    college:"Other College",
    email: "infoilai11@gmail.com",
    body: "After carefully reviewing the lecture notes, laboratory manuals, question papers, and course materials, I am pleased to note that the overall quality of the resources is excellent. The lecture notes are well-structured, comprehensive, and presented in a logical sequence that will help students understand the concepts with ease. The laboratory manuals are detailed, user-friendly, and provide clear procedural steps, enabling students to perform experiments confidently. The question papers are balanced, covering all Course Outcomes and different cognitive levels, ensuring a fair assessment of students' knowledge and analytical abilities. The course materials demonstrate academic rigor, relevance, and a strong commitment to quality education. I appreciate the effort invested in preparing these resources, and I believe they will significantly enhance the teaching-learning process.",
  },
  {
    name: "Dr. K. Balachander",
    role: "Professor",
    department: "Department of Computer Science & Engineering",
    college:"Other College",
    email: "kbc.cse@gmail.com",
    body: "I found the course materials to be professionally prepared and aligned with the curriculum requirements. The lecture notes explain complex concepts in a simple and effective manner with appropriate examples, making them highly beneficial for students. The laboratory manuals are systematic, comprehensive, and encourage practical understanding of the subject. The question papers are thoughtfully designed, ensuring an appropriate balance between theoretical knowledge and problem-solving skills. It is evident that considerable time and dedication have been invested in preparing these materials. Overall, the teaching resources are of a very high standard and will contribute positively to students' academic growth and learning outcomes.",
  },
  {
    name: "Mr. Kannan G",
    role: "Assistant Professor",
    department: "Department of Computer Science & Engineering",
    college:"Velammal Institute Of Technology",
    body: "The teaching materials reflect excellent academic planning and attention to detail. The lecture notes are organized, informative, and cover the syllabus comprehensively while maintaining clarity throughout. The laboratory manuals provide detailed instructions and are suitable for effective hands-on learning. The question papers are well-balanced and aligned with the expected Course Outcomes, enabling students to demonstrate both conceptual understanding and analytical thinking. I appreciate the dedication shown in preparing these resources, and I recommend only minor refinements to further improve presentation and readability.",
  },
  {
    name: "Mrs. Joice Ruby J",
    role: "Assistant Professor",
    department: "Department of Computer Science & Engineering",
    college:"Velammal Institute of Technology",
    body: "The overall quality of the course materials is highly commendable. The lecture notes are engaging, accurate, and student-friendly, making them an excellent learning resource. The laboratory manuals are clearly written and provide sufficient guidance for students to complete practical exercises independently. The assessment materials are fair, comprehensive, and effectively evaluate students across multiple learning domains. The effort and professionalism demonstrated in the preparation of these teaching resources are truly appreciable. These materials will undoubtedly support effective teaching and foster meaningful learning experiences for students.",
  },
];

export const FACULTY_RESEARCH = [
  {
    facultyName: "Dr. R. Venkadesh",
    role: "Professor & Head",
    avatar: faculty2,
    papers: [
      {
        title: "Advancements in Transformer Models for Resource-Constrained Environments",
        journal: "IEEE Transactions on Neural Networks and Learning Systems",
        date: "Dec 2025",
        type: "Journal",
        link: "#",
      },
      {
        title: "A Federated Learning Framework for Privacy-Preserving Medical Image Analysis",
        journal: "International Conference on Machine Learning (ICML)",
        date: "Jul 2025",
        type: "Conference",
        link: "#",
      }
    ]
  },
  {
    facultyName: "Prof. Anitha Suresh",
    role: "Assistant Professor",
    avatar: faculty3,
    papers: [
      {
        title: "Optimizing Serverless Cold Starts using Predictive Resource Allocation",
        journal: "IEEE Cloud Computing",
        date: "Nov 2025",
        type: "Journal",
        link: "#",
      },
      {
        title: "Active Learning Pedagogies in Undergraduate Computer Science Education",
        journal: "ACM SIGCSE Technical Symposium",
        date: "Mar 2025",
        type: "Conference",
        link: "#",
      }
    ]
  }
];
