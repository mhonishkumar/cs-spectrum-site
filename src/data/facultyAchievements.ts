export interface FacultyAchievement {
  id: string;
  facultyName: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  year: string;
  date: string;
  organization: string;
  image: string;
}

export const FACULTY_ACHIEVEMENTS: FacultyAchievement[] = [
  {
    id: "nptel-data-science-2025",
    facultyName: "Mr. Raja R",
    title: "SWAYAM NPTEL Data Science Domain Certification",
    category: "Certification",
    description: "The Department of Computer Science and Engineering proudly congratulates Mr. Raja R for earning the prestigious SWAYAM-NPTEL Data Science Domain Certification (Computer Science) awarded by NPTEL, IIT Madras. This national-level certification recognizes learners who successfully complete a carefully curated set of core and elective courses in the field of Data Science while meeting stringent academic performance criteria. To achieve this certification, Mr. Raja R successfully completed six NPTEL courses covering Python for Data Science, Data Analytics with Python, Introduction to Machine Learning, Deep Learning, Reinforcement Learning, and Introduction to Large Language Models (LLMs) offered by premier IITs. The combined duration of these courses exceeded 60 weeks of rigorous learning, and he secured a total aggregate score of 386 marks.",
    shortDescription: "Awarded for completing six advanced AI and Data Science courses exceeding 60 weeks of rigorous learning with top performance.",
    year: "2025",
    date: "October 2025",
    organization: "NPTEL, IIT Madras",
    image: "/achievements/faculty-certificates/image2.jpeg"
  },
  {
    id: "nptel-believer-2025",
    facultyName: "Mr. Raja R",
    title: "NPTEL Believer Recognition",
    category: "Recognition",
    description: "The Department of Computer Science and Engineering is delighted to congratulate Mr. Raja R on receiving the prestigious NPTEL Believer Recognition for the July–December 2025 semester. The NPTEL Believer title is awarded by NPTEL, IIT Madras to learners who demonstrate exceptional dedication towards online education by registering for multiple NPTEL certification examinations and successfully passing at least four certified courses within a single semester. The recognition reflects consistency, perseverance, and an unwavering commitment to academic excellence.",
    shortDescription: "Honored for exceptional dedication to online education by successfully passing at least four certified courses in a single semester.",
    year: "2025",
    date: "Jul–Dec 2025",
    organization: "NPTEL, IIT Madras",
    image: "/achievements/faculty-certificates/image3.jpeg"
  },
  {
    id: "nptel-discipline-star-2024",
    facultyName: "Mr. Raja R",
    title: "NPTEL Discipline Star in Computer Science and Engineering",
    category: "Recognition",
    description: "The Department of Computer Science and Engineering proudly congratulates Mr. Raja R on being recognized as an NPTEL Discipline Star in Computer Science and Engineering for the July–December 2024 semester by NPTEL, IIT Madras. The NPTEL Discipline Star recognition is awarded to learners who successfully complete more than 50 weeks of certified courses within the same discipline while securing a minimum score of 55% in every course. This recognition highlights consistent academic excellence and in-depth knowledge in a specialized field. Through his dedicated efforts and outstanding academic performance, Mr. Raja R fulfilled all the eligibility criteria and earned this prestigious national recognition.",
    shortDescription: "Recognized for completing over 50 weeks of certified courses within the CS discipline while securing top grades.",
    year: "2024",
    date: "Jul–Dec 2024",
    organization: "NPTEL, IIT Madras",
    image: "/achievements/faculty-certificates/image4.jpeg"
  }
];
