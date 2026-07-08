export interface ProjectVideo {
  id: string;
  title: string;
  videoId: string;
  students: string[];
  facultyGuide: string;
  technology: string[];
  year: string;
  category: string;
  batch: string;
  description: string;
  objectives: string[];
  github?: string;
  paper?: string;
}

export const INNOVATION_PROJECTS: ProjectVideo[] = [
  {
    id: "proj-1",
    title: "AI-Based Smart Attendance System",
    videoId: "#", // Placeholder mock ID
    students: ["Harish Narayan", "Karthik R."],
    facultyGuide: "Dr. R. Venkadesh",
    technology: ["React", "Flask", "OpenCV", "TensorFlow"],
    year: "2025",
    category: "Computer Vision",
    batch: "2021-2025",
    description: "An AI-powered attendance system using facial recognition that automates the roll-call process in large classrooms with 99% accuracy.",
    objectives: [
      "Automate attendance tracking using IP cameras.",
      "Reduce proxy attendance to zero.",
      "Generate daily reports and notify absentees automatically."
    ],
    github: "https://github.com/example/attendance-ai",
  },
  {
    id: "proj-2",
    title: "Zero-Trust IoT Security Gateway",
    videoId: "#", // Placeholder mock ID
    students: ["Divya S.", "Priya M."],
    facultyGuide: "Dr. Meenakshi Iyer",
    technology: ["Python", "AWS IoT", "Docker", "Raspberry Pi"],
    year: "2024",
    category: "Cybersecurity",
    batch: "2020-2024",
    description: "A lightweight, secure gateway for edge devices implementing Zero-Trust Architecture to prevent lateral movement during network breaches.",
    objectives: [
      "Implement mutual TLS for all edge node communications.",
      "Monitor traffic anomalies in real-time.",
      "Isolate compromised nodes autonomously."
    ],
    paper: "https://arxiv.org/abs/example",
  },
  {
    id: "proj-3",
    title: "Predictive Healthcare Analytics Engine",
    videoId: "#", // Placeholder mock ID
    students: ["Aravind K.", "Rahul V."],
    facultyGuide: "Prof. Anitha Suresh",
    technology: ["Next.js", "FastAPI", "PostgreSQL", "Scikit-Learn"],
    year: "2026",
    category: "Data Science",
    batch: "2022-2026",
    description: "A clinical decision support system that predicts patient readmission risks using historical electronic health records.",
    objectives: [
      "Process multi-modal patient data securely.",
      "Achieve an AUC-ROC score > 0.85 on readmission predictions.",
      "Provide an interpretable dashboard for clinicians."
    ],
    github: "https://github.com/example/health-predict",
  },
  {
    id: "proj-4",
    title: "Decentralized Academic Credentials",
    videoId: "#", // Placeholder mock ID
    students: ["Siddharth M."],
    facultyGuide: "Dr. R. Venkadesh",
    technology: ["Solidity", "React", "Ethereum", "IPFS"],
    year: "2025",
    category: "Blockchain",
    batch: "2021-2025",
    description: "A blockchain-based system for issuing and verifying university degrees and transcripts, eliminating the possibility of forged documents.",
    objectives: [
      "Issue non-fungible academic credentials.",
      "Store encrypted data on IPFS.",
      "Allow instant verification by employers via a web portal."
    ],
    github: "https://github.com/example/d-credentials",
  },
  {
    id: "proj-5",
    title: "Autonomous Warehouse Robot",
    videoId: "#", // Placeholder mock ID
    students: ["Naveen T.", "Vijay P."],
    facultyGuide: "Dr. Meenakshi Iyer",
    technology: ["ROS", "C++", "Lidar", "Arduino"],
    year: "2024",
    category: "Robotics",
    batch: "2020-2024",
    description: "A prototype of an autonomous guided vehicle (AGV) capable of navigating indoor environments and avoiding dynamic obstacles.",
    objectives: [
      "Implement SLAM for indoor mapping.",
      "Navigate smoothly around moving humans.",
      "Integrate with an inventory management API."
    ]
  },
  {
    id: "proj-6",
    title: "Serverless E-Commerce Microservices",
    videoId: "#", // Reusing a valid placeholder
    students: ["Sneha R.", "Ananya J."],
    facultyGuide: "Prof. Anitha Suresh",
    technology: ["AWS Lambda", "DynamoDB", "React", "Node.js"],
    year: "2026",
    category: "Cloud Computing",
    batch: "2022-2026",
    description: "A highly scalable e-commerce backend built entirely using serverless components to reduce cold starts and optimize cost.",
    objectives: [
      "Handle up to 10k concurrent requests.",
      "Maintain latency under 200ms.",
      "Implement event-driven architecture for order processing."
    ],
    github: "https://github.com/example/serverless-shop",
  }
];
