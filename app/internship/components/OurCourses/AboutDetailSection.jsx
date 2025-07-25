"use client";

import React, { useState, useEffect } from "react";
import TabSwitcher from "@/components/ui/TabSwitcher";
import CarouselAbout from "@/app/internship/components/OurCourses/CarouselABout";
import servicesData from "../../constants/details.json";

function AboutDetailSection() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("ALL");
  console.log(details);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDetails(servicesData);
      setLoading(false);
    }, 1000);
  }, []);

  function onTabChange(tab) {
    setType(tab.toUpperCase());
  }

  // Filter services based on selected tab
  const filteredDetails =
    type === "ALL"
      ? details
      : details?.filter((item) => item.lobDisplayText.toUpperCase() === type);

  return (
    <section
      id="offerSection"
      className="w-full relative mt-10 mx-auto bg-white shadow-even rounded-2xl p-2 flex flex-col md:w-[86%] md:p-8 text-center"
    >
      <p className="font-bold md:text-2xl text-[rgb(20, 24, 35)]">
        Our Internship Modules
      </p>

      <TabSwitcher onTabChange={onTabChange} tabs={["All"]} />

      <CarouselAbout details={filteredDetails} loading={loading} />
    </section>
  );
}

export default AboutDetailSection;
