import Image from "next/image";
import Link from "next/link";
import React from "react";

const BenfitsHome = () => {
  return (
    <>
      <section
        className="py-8  sm:py-8 lg:py-8"
        style={{ background: "#004ECC" }}
      >
        <div
          className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            <div>
              <Image
                src={"/ipads.png"}
                width={100}
                height={100}
                alt={"offer"}
                className="w-full max-w-xl mx-auto"
              />
              {/* <img className="w-full max-w-md mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png" alt="" /> */}
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl mb-3">
                Unlock 100,000 Bulk SMS for Just Rs. 12,000!
              </h2>
              <h4 className="text-xl font-bold leading-tight text-white sm:text-xl lg:text-2xl">
                MORE THAN 1000+ SATISFIED CUSTOMERS
              </h4>
              <p className="mt-6 text-base text-white text-justify">
                Rich System Solution is a leading provider of Bulk SMS services
                & Marketing SMS services in India. Rich System Solution has been
                providing SMS based services for over 6 years.Unlimited
                Validity, Data Support, Non DND, DND Filtration, Multi Language,
                9am to 9pm and mor
              </p>

              <Link
                href={"/contact"}
                title=""
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-blue-500 transition-all duration-200 bg-white rounded-md mt-9 hover:bg-slate-200 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Contact Us{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenfitsHome;
