import { useState, useEffect } from "react";

const getData = async () => {
  try {
    const base_url = process.env.NEXT_PUBLIC_API_URL + "explores";
    const res = await fetch(base_url);
    const data = await res.json();

    // Return the data to be used in the component
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const ShowContent = ({ activeNav }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setResult(data); // Save the data in the state
    };

    fetchData();
  }, []);

  if (!result) {
    return <p>Loading...</p>; // Display loading message while data is being fetched
  }

  if (!result[activeNav]) {
    return <p>No content available for this selection.</p>; // Handle invalid activeNav
  }
let redirect_url = `products/${result[activeNav].product_name}`;
  return (
    <div className="w-[500px]">
      <h2 className="text-4xl mb-3">
        {result[activeNav]?.title || "No Title"}
      </h2>
      <p className="text-justify">
        {result[activeNav]?.description}
        {/* {result[activeNav]?.description.slice(0, 150) + '...' || "No Description"} */}
      </p>
      <a href={redirect_url} title="" className="inline-flex items-center justify-center px-6 py-2 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md mt-9 hover:bg-blue-700 focus:bg-blue-700" role="button"> View More </a>
    </div>
  );
};

export default ShowContent;
