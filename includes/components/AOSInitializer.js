// components/AOSInitializer.js
"use client"; // This component will be client-side

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize the animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return null; // This component doesn't render anything visually
}
