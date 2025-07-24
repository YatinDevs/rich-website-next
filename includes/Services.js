"use client";
import { React, useState, useEffect } from "react";
import { FcApproval } from "react-icons/fc";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import ShowContent from "./ShowContent";
import ShowImg from "./ShowImg";

const tabContent = {
  Tab1: {
    name: "Bulk SMS",
    image: "/hero.png",
    description: "BulK SMS Desc",
    benefits: ["one", "two", "three"],
  },
  Tab2: {
    name: "SMS Api",
    image: "/hero_img.png",
    description: "BulK SMS Desc",
    benefits: ["one", "two", "three"],
  },
  Tab3: {
    name: "Promotional SMS",
    image: "/hero.png",
    description: "BulK SMS Desc",
    benefits: ["one", "two", "three"],
  },
  Tab4: {
    name: "SIM Base SMS",
    image: "/hero.png",
    description: "BulK SMS Desc",
    benefits: ["one", "two", "three"],
  },
};

export default function Services({ reverse }) {
  const [explore, setExplore] = useState({});

  useEffect(() => {
    try {
      const fetchData = async () => {
        const base_url = process.env.NEXT_PUBLIC_API_URL + "explores";
        const res = await fetch(base_url);
        const data = await res.json();
        // console.log(data.data);
        setExplore(data.data);
      };

      fetchData();
      function deleteCookie(name) {
        document.cookie = `${name}=; path='/get-quote'; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
      }
      deleteCookie("userFormSubmitted");
      deleteCookie("otpValidated");
  


    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const [content, setContent] = useState([]);

  useEffect(() => {
    if (explore.length > 0) {
      const tempTabContent = {};

      explore.forEach((item, index) => {
        // Create dynamic keys like Tab1, Tab2, etc.
        const tabKey = `Tab${index + 1}`;

        // Assign the values based on fetched data (adapt this to match your actual API structure)
        tempTabContent[tabKey] = {
          name: item.title || "Default Name",
          image:
            process.env.NEXT_PUBLIC_IMAGE_PATH + item.image ||
            "/default_image.png",
          description: item.description || "Default Description",
          benefits: item.benefits || ["Default benefit 1", "Default benefit 2"],
        };
      });

      // console.log(tempTabContent);

      const arrayOfObjects = Object.entries(tempTabContent).map(
        ([key, value]) => ({
          id: key, // or any key name you prefer
          ...value,
        })
      );

      setContent(arrayOfObjects);

      //  console.log(content);
      //  console.log(explore);
    }
  }, [explore]);

  const [activeTab, setActiveTab] = useState("Tab1");
  const [clicked, setClicked] = useState(false);
  const controls = useAnimation();
  const [activeNav, setActivenNav] = useState(0);

  useEffect(() => {
    setClicked(true);

    controls
      .start({
        opacity: [0, 1], // Animate opacity from 0 to 1
        y: [20, 0], // Animate Y position from 20px down to 0px
        transition: { duration: 0.5 }, // Transition duration
      })
      .then(() => {
        // Reset state after animation completes
        setClicked(false);
        controls.start({ opacity: 1, y: 0 }); // Optional: Reset to default state
      });
  }, [controls]);

  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    setClicked(true);
    setActivenNav(index);
    controls
      .start({
        opacity: [0, 1], // Animate opacity from 0 to 1
        y: [20, 0], // Animate Y position from 20px down to 0px
        transition: { duration: 0.5 }, // Transition duration
      })
      .then(() => {
        // Reset state after animation completes
        setClicked(false);
        controls.start({ opacity: 1, y: 0 }); // Optional: Reset to default state
      });
  };
  return (
    <>
      <div className="py-10  sm:py-16 lg:py-24 bg-gradient-to-r from-sky-100 from-10% via-sky-200 via-30% to-sky-100 to-90% ">
        <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:flex flex-col items-center justify-center  hidden ">
          <h2 className="text-5xl text-blue-900 text-center py-10 font-bold">
            Explore Our Services
          </h2>

          <div className="flex flex-row  justify-between w-full ">
            <div
              className={
                reverse
                  ? "flex flex-row-reverse items-center py-5 px-20"
                  : "flex flex-row  items-center py-5"
              }
            >
              <motion.div
                animate={controls}
                initial={{ opacity: 0, y: 20 }} // Initial state of the animation
                transition={{ duration: 0.5 }}
              >
                {/* show image  */}
                <ShowImg activeNav={activeNav} />
              </motion.div>
              <motion.div
                animate={controls}
                initial={{ opacity: 0, y: 20 }} // Initial state of the animation
                transition={{ duration: 0.5 }}
              >
                {/* show content */}
                {/* <ShowContent activeTab={activeTab} content={content} activeNav={activeNav}/> */}
                <ShowContent activeNav={activeNav} />
              </motion.div>

              <div className="divider lg:divider-horizontal text-slate-950"></div>
              <div className="">
                <ul className="">
                  {content.map((tab, index) => (
                    <li className="text-md mb-10  " key={index}>
                      <a
                        className={activeNav == index ? "text-blue-500" : ""}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleTabClick(tab.id, index)}
                      >
                        {tab.name}
                      </a>{" "}
                    </li>
                  ))}

                  {/* <li className="text-md mb-10 "> <a className={activeNav == 1 ? 'text-blue-500' : ''} style={{"cursor":"pointer"}} onClick={()=>handleTabClick("Tab2",1)}>SMS API</a> </li>
            <li className="text-md mb-10 "><a className={activeNav == 2 ? 'text-blue-500' : ''} style={{"cursor":"pointer"}} onClick={()=>handleTabClick("Tab3",2)}>Promotional SMS</a> </li>
            <li className="text-md mb-10 "> <a className={activeNav == 3 ? 'text-blue-500' : ''} style={{"cursor":"pointer"}} onClick={()=>handleTabClick("Tab4",3)}>Sim Base</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile responsive  */}

      <div className="sm:hidden px-10 ser-bg py-10 my-10">
        <h2 className="text-4xl font-bold mb-2">Bulk SMS</h2>
        <Image
          src={"/hero.png"}
          width={500}
          height={100}
          alt={"bulk service"}
        />
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="my-3 ps-5  ">
          <li className="mb-3 flex flex-row items-center jus">
            <FcApproval className="me-3" />
            Benefits
          </li>
          <li className="mb-3 flex flex-row items-center jus">
            <FcApproval className="me-3" />
            Benefits
          </li>
          <li className="mb-3 flex flex-row items-center jus">
            <FcApproval className="me-3" />
            Benefits
          </li>
          <li className="mb-3 flex flex-row items-center jus">
            <FcApproval className="me-3" />
            Benefits
          </li>
        </ul>
      </div>
    </>
  );
}

export function Explore() {
  return (
    <>
      <Link
        href="/products/bulk-sms"
        className="  bg-blue-900 text-slate-50 py-3 px-10 rounded-full "
      >
        Explore
      </Link>
    </>
  );
}
export function Advantages() {
  return (
    <>
      <ul className="my-3 ps-5  ">
        <li className="mb-3 flex flex-row items-center jus">
          <FcApproval className="me-3" />
          Benefits
        </li>
        <li className="mb-3 flex flex-row items-center jus">
          <FcApproval className="me-3" />
          Benefits
        </li>
        <li className="mb-3 flex flex-row items-center jus">
          <FcApproval className="me-3" />
          Benefits
        </li>
        <li className="mb-3 flex flex-row items-center jus">
          <FcApproval className="me-3" />
          Benefits
        </li>
      </ul>
    </>
  );
}
