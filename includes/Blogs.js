import Blog from "./Blog";


export default function Blogs() {
  return (
    <>
    <div className="min-h-screen py-10">
    <h2 className="text-center text-5xl font-bold text-blue-900 mb-20">Knowledge Center</h2>
    <div className="flex flex-col sm:flex-row justify-between items-center px-10 sm:px-20 py-3 gap-3 ">
<Blog img="/bulk-sms-blog.jfif" title="Bulk Sms" />
<Blog img="/web-dev-blog.jpg" title="Web Developement" />
<Blog img="/digital-market-blog.jfif" title=" Digital Marketing" />

</div>
    </div>

    </>
  );
}
