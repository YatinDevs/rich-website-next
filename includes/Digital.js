import Image from "next/image";

const fetchSubtypes = async (id) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "subtypes");
    const data = await res.json();
    const filterData = data.data.filter((item) => item.product_name === id);
    return filterData;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function Digital({ subpage }) {
  const SubtypeData = await fetchSubtypes(subpage.details);

  return (
    <>
      <section
        style={{
          display:
            Array.isArray(SubtypeData) && SubtypeData.length !== 0
              ? "block"
              : "none",
        }}
      >
        {/* Container */}
        <div
          className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16  md:py-20"
          style={{
            display:
              Array.isArray(SubtypeData) && SubtypeData.length !== 0
                ? "block"
                : "none",
          }}
        >
          {/* Title */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold md:text-5xl capitalize">
              {subpage.details} Services That We Provide
            </h2>
            <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
              We are one of the best Digital Marketing Agency and can take care
              of all your Digital Marketing Needs
            </p>
          </div>
          {/* Features Content */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {SubtypeData.map((subtype, index) => (
              <DigitalCard
                key={subtype.id}
                product={subtype.product}
                title={subtype.title}
                subtitle={subtype.subtitle}
                image={process.env.NEXT_PUBLIC_IMAGE_PATH + subtype.image}
                description={subtype.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function DigitalCard({ title, subtitle, image, description }) {
  return (
    <div className="grid gap-6 rounded-md  p-8 md:p-10 bg-sky-100 shadow-md">
      <Image
        src={image}
        width={100}
        height={100}
        alt="image"
        className="rounded-full"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 text-justify">{description}</p>
    </div>
  );
}
