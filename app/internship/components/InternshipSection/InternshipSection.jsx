import React, { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { ChevronDown, ChevronUp } from "lucide-react";

const internshipData = {
  "Full Stack Development using Python": {
    description:
      "Comprehensive program covering front-end, backend, and cloud deployment.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Front-end Development: HTML, CSS, JavaScript, Bootstrap",
      "JavaScript & React.js: Component-based architecture, Hooks, API calls",
      "Backend Development with Python: Flask/Django, REST API Development",
      "Database Management: PostgreSQL/MySQL, MongoDB",
      "Authentication & Security: OAuth, JWT, CSRF protection",
      "Version Control & CI/CD: Git, GitHub, Docker",
      "Cloud Deployment: AWS, DigitalOcean, or Heroku",
    ],
  },
  "Full Stack Development using Java": {
    description:
      "Hands-on training in Java, Spring Boot, and Microservices architecture.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Core Java & Object-Oriented Programming",
      "Spring Boot & REST API Development",
      "Database Management: MySQL, Hibernate ORM",
      "Frontend Technologies: HTML, CSS, JavaScript, React.js",
      "Microservices Architecture: Spring Cloud, Kubernetes",
      "Security & Authentication: OAuth 2.0, JWT, Role-based Access Control",
      "DevOps & Cloud Deployment: AWS, Jenkins, Docker",
    ],
  },
  "Data Science and Its Applications using Python": {
    description:
      "Advanced data analytics, machine learning, and cloud-based big data solutions.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Python Basics & Data Handling: Pandas, NumPy",
      "Data Visualization: Matplotlib, Seaborn",
      "Exploratory Data Analysis (EDA)",
      "Machine Learning: Regression, Classification, Clustering (Scikit-learn)",
      "Deep Learning & Neural Networks: TensorFlow, Keras",
      "Big Data & Cloud Analytics: Apache Spark, AWS Data Services",
      "Model Deployment: Flask API, Streamlit, FastAPI",
    ],
  },
  "Artificial Intelligence and Automation": {
    description: "NLP, computer vision, and AI-driven automation.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Introduction to AI & ML: Supervised & Unsupervised Learning",
      "Natural Language Processing (NLP): Text Preprocessing, Sentiment Analysis",
      "Computer Vision: OpenCV, Image Recognition",
      "AI Chatbot Development: Rasa, Dialogflow",
      "Robotic Process Automation (RPA): UiPath, Automation Anywhere",
      "AutoML & AI Cloud Services: Google AutoML, AWS Sagemaker",
      "Model Optimization & Deployment: ONNX, TensorFlow Lite",
    ],
  },
  "Web Development": {
    description:
      "Front-end and backend web technologies with DevOps and cloud deployment.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Frontend Technologies: HTML, CSS, JavaScript, Bootstrap",
      "React.js: Components, Props, State Management, API Integration",
      "Backend Development: Node.js, Express.js, MongoDB",
      "Authentication & Authorization: JWT, OAuth2",
      "Performance Optimization & Security: CORS, CSRF, WebSockets",
      "DevOps for Web Apps: CI/CD, Docker, Kubernetes",
      "Cloud & Serverless Deployment: AWS Lambda, Netlify, Firebase",
    ],
  },
  "Digital Marketing": {
    description: "SEO, social media marketing, and AI-driven analytics.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "SEO & SEM: On-page, Off-page, Google Ads",
      "Content Marketing & Copywriting: Blogging, Video Marketing",
      "Social Media Marketing: Facebook, LinkedIn, Instagram, Twitter Ads",
      "Email & Affiliate Marketing: Mailchimp, Drip Campaigns",
      "Google Analytics & Data-Driven Marketing",
      "Marketing Automation: HubSpot, Zapier",
      "AI in Digital Marketing: Chatbots, Predictive Analytics",
    ],
  },
  "UI/UX Design": {
    description:
      "Comprehensive UI/UX training covering research, prototyping, usability testing, and frontend collaboration.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Introduction to UI/UX Design",
      "User Research & Analysis",
      "Visual Design Principles",
      "Wireframing & Prototyping",
      "UI Design for Web & Mobile",
      "Usability Testing & Feedback",
      "Design Systems & UI Components",
      "UX Writing & Micro-interactions",
      "Frontend Collaboration & Handoff",
      "Portfolio & Career Guidance",
    ],
  },
  "Amazon Web Services": {
    description:
      "In-depth AWS training, covering cloud computing, DevOps, security, serverless computing, and machine learning.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Introduction to Cloud Computing & AWS",
      "AWS Storage Services",
      "AWS Compute Services",
      "Networking & Security",
      "Database Management in AWS",
      "AWS DevOps & Automation",
      "Monitoring & Logging",
      "AWS Machine Learning & AI Services",
      "Serverless & Microservices with AWS",
      "CI/CD & Deployment in AWS",
    ],
  },
  "Android App Development Internship": {
    description:
      "Comprehensive training in Android app development, covering UI/UX design, Kotlin & Java programming, database management, API integration, background services, app security, and deployment on the Google Play Store.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Introduction to Android Development",
      "Programming with Kotlin & Java",
      "Android UI/UX Design & Components",
      "User Interaction & Navigation",
      "Working with Data & Storage",
      "Networking & API Integration",
      "Background Services & Threading",
      "Android Sensors & Hardware Access",
      "App Security & Optimization",
      "Publishing & Deployment",
    ],
  },
};

export default function InternshipSection() {
  const [expandedInternships, setExpandedInternships] = useState([]);

  const toggleInternship = (key) => {
    setExpandedInternships((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  return (
    <ParallaxProvider>
      <div className="w-full relative mt-10 mx-auto bg-white shadow-even rounded-2xl p-4 flex flex-col md:w-[86%] md:p-8 text-center">
        <h1 className="text-3xl font-extrabold mb-6">Internship Programs</h1>

        <div className="space-y-4">
          {Object.keys(internshipData).map((key) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="p-4 shadow-lg rounded cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                onClick={() => toggleInternship(key)}
              >
                <span className="font-semibold">{key}</span>
                {expandedInternships.includes(key) ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>

              {expandedInternships.includes(key) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-4 rounded bg-gray-50 shadow-lg text-left"
                >
                  <h2 className="text-xl font-semibold">{key}</h2>
                  <p className="mt-2 text-gray-600">
                    {internshipData[key].description}
                  </p>
                  <p className="mt-2 text-gray-500">
                    <strong>Duration:</strong> {internshipData[key].duration}
                  </p>
                  <p className="mt-2 text-gray-500">
                    <strong>Fees:</strong> {internshipData[key].fees}
                  </p>
                  <p className="mt-2 text-gray-500 font-semibold">
                    Payment Options:
                  </p>
                  <ul className="mt-2 list-disc ml-5 text-gray-600">
                    {internshipData[key].paymentOptions.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-gray-500 font-semibold">
                    Module Details:
                  </p>
                  <ul className="mt-2 list-disc ml-5 text-gray-600">
                    {internshipData[key].modules.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxProvider>
  );
}
