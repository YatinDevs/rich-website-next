"use client";
import React, { Suspense } from "react";
import AboutDetailSection from "./components/OurCourses/AboutDetailSection";
import HeroSection from "./components/HeroSection/HeroSection";
import FormInternship from "./components/FormInternship/FormInternship";
import InternshipSection from "./components/InternshipSection/InternshipSection";

const Internship = () => {
  return (
    <div>
      <div className="">
        <Suspense fallback={<div>Loading hero...</div>}>
          <HeroSection />
        </Suspense>
      </div>
      <div>
        <InternshipSection />
      </div>
      <div>
        <h1 className="text-center font-extrabold uppercase my-4 p-2 text-2xl">
          Apply Now for Internship
        </h1>
        <Suspense fallback={<div>Loading form...</div>}>
          <FormInternship />
        </Suspense>
      </div>
      <div className="">
        <AboutDetailSection />
      </div>
    </div>
  );
};

export default Internship;
