import Image from "next/image";
import Link from "next/link";

const footerData = async () => {
  try {
    const res = await fetch("https://richadmin.demovoting.com/api/contacts");
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const Footer = async () => {
  const footer = await footerData();

  return (
    <>
      <div>
        <section
          className="py-10 bg-gradient-to-b  sm:pt-16 lg:pt-24"
          style={{ background: "#181744" }}
        >
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
              <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <Image
                  src={"/footer_logo.png"}
                  width={100}
                  height={100}
                  loading={"lazy"}
                  style={{
                    width: "125px",
                    height: "auto",
                    filter: "brightness(0) invert(1)",
                  }}
                  alt={"rich_logo"}
                />

                <p className="text-base leading-relaxed text-white mt-2 text-justify">
                  {footer[0].about}
                </p>

                <ul className="flex items-center space-x-3 mt-3">
                  <li>
                    <a
                      href={footer[0].social_links[1].value}
                      title=""
                      className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.125 20.452H3.556V9.017h3.569v11.435zM5.34 7.513c-1.139 0-2.063-.937-2.063-2.093 0-1.156.924-2.094 2.063-2.094 1.138 0 2.063.938 2.063 2.094 0 1.156-.925 2.093-2.063 2.093zM20.452 20.452h-3.568v-5.828c0-1.39-.025-3.176-1.938-3.176-1.94 0-2.237 1.515-2.237 3.073v5.931h-3.569V9.017h3.427v1.561h.048c.478-.902 1.64-1.848 3.374-1.848 3.606 0 4.272 2.373 4.272 5.459v6.263z"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href={footer[0].social_links[0].value}
                      title=""
                      className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href={footer[0].social_links[2].value}
                      title=""
                      className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.youtube.com/@RICHSystemSolutions/videos"
                      title=""
                      className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M23.498 6.186a2.967 2.967 0 0 0-2.084-2.09C19.672 3.5 12 3.5 12 3.5s-7.671 0-9.414.596A2.967 2.967 0 0 0 .502 6.186 31.276 31.276 0 0 0 0 12a31.276 31.276 0 0 0 .502 5.814 2.967 2.967 0 0 0 2.084 2.09c1.743.596 9.414.596 9.414.596s7.671 0 9.414-.596a2.967 2.967 0 0 0 2.084-2.09A31.276 31.276 0 0 0 24 12a31.276 31.276 0 0 0-.502-5.814zM9.75 15.568V8.432l6.818 3.568-6.818 3.568z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-md font-semibold tracking-widest text-white uppercase">
                  Company
                </p>

                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      title=""
                      className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/resources/career"
                      title=""
                      className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {" "}
                      Career{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/blogs"
                      title=""
                      className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {" "}
                      Blogs{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      title=""
                      className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-md font-semibold tracking-widest text-white uppercase">
                  Help
                </p>

                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      title=""
                      className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {" "}
                      Customer Support{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/resources/how-to-guide"
                      title=""
                      className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {" "}
                      How to guide{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/terms-conditions"}
                      title=""
                      className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/privacy-policy"}
                      title=""
                      className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-md font-semibold tracking-widest text-white uppercase">
                  Contact us
                </p>
                <ul className="mt-6 space-y-4">
                  <li>
                    <div className="">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.7780184705291!2d73.77633332511172!3d19.99849611426295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb084d22ff73%3A0xe3e70a169bf7cb1b!2sRICH%20System%20Solutions%20Pvt.%20Ltd.%20%7C%20Digital%20Marketing%20%7C%20Bulk%20SMS%20%7C%20Website%20Development!5e0!3m2!1sen!2sin!4v1742538842983!5m2!1sen!2sin"
                        width={350}
                        height={150}
                        className="rounded-lg border-2 shadow-md"
                        loading={"lazy"}
                      ></iframe>
                      <p className=" text-base leading-relaxed text-white mt-2">
                        4th Floor, Akravi Disha, 401, opposite Hotel City Pride,
                        Tilakwadi, Nashik, Maharashtra 422002
                      </p>

                      <p className=" text-base leading-relaxed text-white mt-2">
                        <strong>Email:</strong>

                        <span className="mx-2">support@richsol.com</span>
                      </p>
                      <p className=" text-base leading-relaxed text-white mt-2">
                        <strong>Contact:</strong> 9595902003 / 9595902006
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="mt-16 mb-10 border-gray-200" />

            <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
              <p className="text-sm text-center text-white">
                © Copyright 2024, All Rights Reserved by Rich System Solution
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="text-sm text-white hover:text-blue-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
