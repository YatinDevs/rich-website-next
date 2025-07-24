import { Suspense } from "react";
import Breadcrumb from "@/includes/Breadscrumb";
import CaseStudies from "@/includes/CaseStudies";
import Enquiry from "@/includes/Enquiry";
import EnquiryFlex from "@/includes/EnquiryFlex";
import FlexBanner from "@/includes/FlexBanner";
import FlexBenefits from "@/includes/FlexBenefit";

export async function generateStaticParams() {
  const base_url = process.env.NEXT_PUBLIC_API_URL + "industry";
  const res = await fetch(base_url);
  const industries = await res.json();

  if (!industries) {
    return {
      notFound: true,
    };
  }

  return industries.data.map((industry) => ({
    industry: industry.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, ""),
  }));
}

const Industry = async ({ params }) => {
  const result = await getData();
  const filteredData = result.filter(
    (item) => item.title.toLowerCase() == params.industry.toLowerCase()
  );

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Breadcrumb page={"Industry"} subpage={params} />
      </Suspense>

      <FlexBenefits subpage={params} />
      <FlexBanner />
      <Enquiry />
      <EnquiryFlex />
    </>
  );
};

export default Industry;

async function getData() {
  try {
    const base_url = process.env.NEXT_PUBLIC_API_URL + "industry";
    const res = await fetch(base_url);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}
