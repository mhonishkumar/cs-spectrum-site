export interface ProjectVideo {
  id: string;
  title: string;
  videoId: string;
  students: string[];
  description: string;
}

export const INNOVATION_PROJECTS: ProjectVideo[] = [
  {
    id: "proj-1",
    title: "Eco Crop: Enhancing Agricultural Productivity  Full Project Video YouTube Description",
    videoId: "https://youtu.be/G8ghEsRRV4Y", // Placeholder mock ID
    students: ["Manoj"],
    description: "🌱 Eco Crop: Enhancing Agricultural Productivity Through Smart Solutions | Full Project Video\n\nWelcome to the complete demonstration of Eco Crop, an innovative smart agriculture project developed to enhance agricultural productivity through intelligent technologies. This project integrates AI, IoT, and data-driven solutions to help farmers monitor crops, optimize resources, and improve farming efficiency.\n#EcoCrop #SmartAgriculture #PrecisionFarming #ArtificialIntelligence #IoT #AgricultureTechnology #SustainableFarming #StudentProject #FinalYearProject #Innovation #EngineeringProjects #ProjectShowcase",
  },
  {
    id: "proj-2",
    title: "AI-Driven 3D Virtual Museum Guide | QR-Based Multilingual Navigation",
    videoId: "https://youtu.be/dmGaRY-RMpc", // Placeholder mock ID
    students: ["Divya S.", "Priya M."],
    description: "Design and Development of an AI-Driven Multilingual 3D Virtual Museum Guide Using QR-Based Technology is an innovative project that enhances the museum experience through Artificial Intelligence, 3D virtual environments, multilingual support, and QR code integration.",
  },
  {
    id: "proj-3",
    title: "Travel Planner AI | Smart Trip Planning Using Artificial Intelligence",
    videoId: "https://youtu.be/NOVZX5tJ-Ko", // Placeholder mock ID
    students: ["Tharun Sanjay"],
    description: "✈️ Travel Planner AI is an intelligent travel planning system that leverages Artificial Intelligence to help users create personalized travel itineraries, discover destinations, estimate budgets, and optimize travel schedules with ease.\nTravel Planner AI simplifies travel planning by providing intelligent recommendations, optimized schedules, and personalized itineraries, making every journey more convenient, efficient, and enjoyable.\n#TravelPlannerAI #ArtificialIntelligence #TravelTech #SmartTravel #AIProject #StudentProject #Innovation #MachineLearning #WebDevelopment #FinalYearProject #EngineeringProjects #ProjectShowcase",
  },
  {
    id: "proj-4",
    title: "CareNet AI | Intelligent Healthcare Support Using Artificial Intelligence",
    videoId: "https://youtu.be/kj0LIQ6iFCo", // Placeholder mock ID
    students: ["Raghul","Vishva","Ranjith"],
    description: "CareNet AI is an innovative AI-powered healthcare support platform developed to provide intelligent medical assistance, symptom analysis, and healthcare guidance. The system leverages Artificial Intelligence to help users access preliminary health information, connect with healthcare resources, and improve the overall patient support experience.\n#CareNetAI #ArtificialIntelligence #HealthcareAI #MedicalSupport #StudentProject #Innovation #AI #HealthcareTechnology #MachineLearning #FinalYearProject #EngineeringStudents #ProjectShowcase",
  },
  {
    id: "proj-5",
    title: "Trade Finance Blockchain Explorer | Student Innovation Project",
    videoId: "https://youtu.be/AecZyRESy8U", // Placeholder mock ID
    students: ["Vijaya Nirmala", "Puli Likitha","Shaik Parveen"],
    description: "🌐 Trade Finance Blockchain Explorer is an innovative blockchain-powered platform designed to modernize trade finance by providing secure, transparent, and tamper-proof management of trade transactions. The system leverages blockchain technology to streamline documentation, improve trust between stakeholders, and enhance the efficiency of international trade processes.\n#TradeFinance #Blockchain #BlockchainExplorer #SmartContracts #FinTech #TradeTechnology #StudentProject #Innovation #FinalYearProject #WebDevelopment #EmergingTechnology #EngineeringStudents",
},
  {
    id: "proj-6",
    title: "Serverless E-Commerce Microservices",
    videoId: "#", // Reusing a valid placeholder
    students: ["Sneha R.", "Ananya J."],
    description: "A highly scalable e-commerce backend built entirely using serverless components to reduce cold starts and optimize cost.",
  }
];
