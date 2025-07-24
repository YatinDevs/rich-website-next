import { useState, useEffect } from "react";
import Image from "next/image";

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

  return (
    <Image
      src={
        process.env.NEXT_PUBLIC_IMAGE_PATH + result[activeNav]?.image ||
        "No Description"
      }
      width={400}
      height={400}
      alt="description"
      style={{ objectFit: 'cover',width: "auto", height: "auto" }} 
      priority={true}
   
    />
  );
};

export default ShowContent;
