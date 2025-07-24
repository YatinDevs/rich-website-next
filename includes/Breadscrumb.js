'use client'
import Link from "next/link";

export default function Breadcrumb({page,subpage="",subsec=""}){

    return(
        <>
        <div className=" bg-sky-50">
<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full breadcrumbs text-sm ">
  <ul>
    <li><Link href={'/'}>Home</Link></li>
    <li><a href="javascript:void(0)">{page}</a></li>

{subpage.details?<li className="capitalize">{subpage.details?subpage.details:subpage.industry}</li>:''}
{subpage.industry?<li className="capitalize">{subpage.industry?subpage.industry:''}</li>:''}
{subpage.blog?<li className="capitalize">{subpage.blog?subpage.blog:''}</li>:''}
{subsec?<li className="capitalize">{subsec}</li>:''}
 
  </ul>
</div>

        </div>
        </>
    )
}