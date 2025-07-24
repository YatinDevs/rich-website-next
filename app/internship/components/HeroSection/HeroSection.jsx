import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// const internshipContent = [
const internshipContent = [
  {
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Full Stack Development - Python",
    description:
      "Master Flask/Django, React.js, REST APIs, and Cloud Deployment with 12 weeks of hands-on learning.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVsbCUyMHN0YWNrJTIwamF2YSUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Full Stack Development - Java",
    description:
      "Learn Spring Boot, React.js, Microservices, and CI/CD pipelines with real-world projects.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop",
    title: "Data Science & Applications",
    description:
      "Gain expertise in Machine Learning, Deep Learning, and Big Data Analytics using Python.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Artificial Intelligence & Automation",
    description:
      "Develop AI models, build chatbots, and work on RPA solutions with cutting-edge tools.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    title: "Web Development",
    description:
      "Become proficient in React.js, Node.js, MongoDB, and Cloud Deployment for scalable web apps.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
    title: "Digital Marketing",
    description:
      "Master SEO, Social Media Marketing, Google Ads, and Analytics-driven strategies.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVsbCUyMHN0YWNrJTIwamF2YSUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Android App Development",
    description:
      "Comprehensive training in Android app development, covering UI/UX design, Kotlin & Java programming, database management, API integration, background services, app security, and deployment on the Google Play Store.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { image, title, description } = internshipContent[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % internshipContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + internshipContent.length) % internshipContent.length
    );
  };
  const handleApplyNow = () => {
    const formSection = document.getElementById("internship-form");
    if (formSection) {
      const yOffset = -300; // Adjust this value as needed to stop slightly above
      const y =
        formSection.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative shadow-2xl w-full h-[550px] md:h-[650px] flex items-center justify-center text-white overflow-hidden rounded-bl-[40%] md:rounded-bl-[20%] rounded-tr-[40%] md:rounded-tr-[20%]">
      {/* Background Image with Overlay */}
      <motion.div
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        style={{ backgroundImage: `url(${image})` }}
      ></motion.div>

      {/* Left Arrow Button */}
      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-10 md:right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Text Content with Transitions */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="md:mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleApplyNow}
            download="RichSystemSolution_Internship_Brochure.pdf"
            className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            APPLY FOR INTERNSHIP
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
