import Breadcrumb from "@/includes/Breadscrumb";
import ContactForm from "@/includes/ContactForm";
import Link from "next/link";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClockCircle,
  AiOutlineCalendar,
} from "react-icons/ai";
import { RiWhatsappFill, RiFacebookCircleFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import EnquiryFlex from "@/includes/EnquiryFlex";

const fetchContactData = async () => {
  try {
    const base_url = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(base_url + "contacts");
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const Contact = async () => {
  const contact_data = await fetchContactData();

  return (
    <>
      <div className="w-full h-48 contact_head">
        <div className="h-full w-full flex flex-col items-center py-10">
          <h2 className="text-white text-4xl mb-5">Contact Us</h2>
          <p className="text-white mb-2">
            We love questions and feedback - and we&apos;re always happy to
            help!
          </p>
          <p className="text-white mb-2">Here are some ways to contact us.</p>
        </div>
      </div>

      <Breadcrumb page="Contact" />

      <div className="">
        <div className="hero bg-base-100 min-h-screen py-20">
          <div className="hero-content flex-col sm:flex-row items-center">
            <div className="text-center lg:text-left w-full max-w-xl">
              <h1 className="text-4xl font-bold">
                Rich System Solution Pvt.Ltd
              </h1>
              <p className="py-6">
                4th Floor, Akravi Disha, 401, opposite Hotel City Pride,
                Tilakwadi, Nashik, Maharashtra 422002.
              </p>

              <div className="flex flex-row sm:justify-start justify-center mb-5">
                <Link href={contact_data[0].social_links[0].value}>
                  <RiFacebookCircleFill className="text-4xl me-3" />
                </Link>
                <Link href={contact_data[0].social_links[1].value}>
                  <AiFillLinkedin className="text-4xl mx-3" />
                </Link>
                <Link href={"https://www.youtube.com/@RICHSystemSolutions"}>
                  <AiFillYoutube className="text-4xl mx-3" />
                </Link>
                <Link href={contact_data[0].social_links[1].value}>
                  <AiFillInstagram className="text-4xl mx-3" />
                </Link>
              </div>
              <hr />

              <div className="flex flex-row sm:justify-between justify-around">
                <div>
                  <h2 className="text-lg font-bold my-3">Working Hours</h2>
                  <ul>
                    {/* 
              {contact_data[0].sales_enquiry.map((sales,index)=>(
              <li className="mb-2" key={index}>+91 {sales.sales_enquiry}</li>
              ))} */}
                    <li className="mb-2 flex flex-row items-center">
                      {" "}
                      <AiOutlineCalendar className="me-2" /> Monday - Saturday
                    </li>
                    <li className="mb-2 flex flex-row items-center">
                      {" "}
                      <AiOutlineClockCircle className="me-2" />
                      9:30am - 6:30pm
                    </li>
                  </ul>
                </div>

                <div className="sm:me-10">
                  <h2 className="text-lg font-bold my-3">
                    For Support Assistance
                  </h2>
                  <ul>
                    {/* {contact_data[0].support_enquiry.map((sales, index) => (
                      <li
                        className="mb-2 flex flex-row items-center"
                        key={index}
                      >
                        {" "}
                        <MdOutlineSupportAgent className="me-2" /> +91{" "}
                        {sales.support_enquiry}
                      </li>
                    ))} */}
                    <li className="mb-2 flex flex-row items-center">
                      {" "}
                      <MdOutlineSupportAgent className="me-2" /> +91 9595902003
                    </li>{" "}
                    <li className="mb-2 flex flex-row items-center">
                      {" "}
                      <MdOutlineSupportAgent className="me-2" /> +91 9595902006
                    </li>
                  </ul>
                </div>
              </div>

              <hr />

              <div className="sm:pe-5 my-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.7780184705291!2d73.77633332511172!3d19.99849611426295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb084d22ff73%3A0xe3e70a169bf7cb1b!2sRICH%20System%20Solutions%20Pvt.%20Ltd.%20%7C%20Digital%20Marketing%20%7C%20Bulk%20SMS%20%7C%20Website%20Development!5e0!3m2!1sen!2sin!4v1742538842983!5m2!1sen!2sin"
                  width={500}
                  height={250}
                  loading={"lazy"}
                  referrerPolicy={"no-referrer-when-downgrade"}
                  className="rounded-md px-10"
                ></iframe>
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
              <h2 className="font-bold card-title text-2xl px-10 pt-10 capitalize">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <EnquiryFlex />
    </>
  );
};

export default Contact;
