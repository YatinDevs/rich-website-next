"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [service, setService] = useState([]);
  const [industries, setIndustries] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts(getDetails) {
      const url = `https://richadmin.demovoting.com/api/${getDetails}`;
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (getDetails && getDetails == "products") {
          setService(data.data);
        }

        if (getDetails && getDetails == "industry") {
          setIndustries(data.data);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false); // Set loading to false after fetching images
      }
    }

    fetchProducts("products");
    fetchProducts("industry");
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [navbarBg, setNavbarBg] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg("shadow-md");
      } else {
        setNavbarBg("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getFirstPartAfterSlash(url) {
    const parts = url.split("/");

    // Check if there is a part after the initial '/'
    return parts[1] ? parts[1] : null;
  }

  function createSlug(text) {
    return text
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, "") // Remove all non-alphanumeric characters except spaces and hyphens
      .trim() // Trim leading/trailing spaces
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
  }

  return (
    <>
      <div
        className={`   sticky top-0 z-50 bg-white transition duration-300 ease-in-out ${navbarBg}`}
      >
        <div className="navbar bg-base-100 py-5 px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden mt-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-blue-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <details>
                    <summary>Products</summary>
                    <ul className="p-2 w-40">
                      {loading ? (
                        <div className="flex items-center space-x-4">
                          <Skeleton className="h-12 w-12 rounded-full" />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-4 w-[100px]" />
                          </div>
                        </div>
                      ) : (
                        service.map((component, index) => (
                          <li key={index}>
                            <Link
                              href={`/products/` + createSlug(component.title)}
                            >
                              {component.title}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Industry</summary>
                    <ul className="p-2 w-40">
                      {industries.map((component, index) => (
                        <li key={index}>
                          <Link
                            href={`/industries/` + createSlug(component.title)}
                          >
                            {component.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Resources</summary>
                    <ul className="p-2 w-40">
                      <li>
                        <Link href="/resources/career">Career</Link>
                      </li>
                      <li>
                        <Link href="/resources/blogs">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/resources/how-to-guide">How To Guide</Link>
                      </li>
                      {/* <li>
                        <Link href="/resources/faq/">FAQ</Link>
                      </li> */}
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
              </ul>
            </div>

            <div className="hidden sm:navbar sm:navbar-start  ">
              <Image
                src={"/rich.png"}
                width={100}
                height={100}
                loading={"lazy"}
                style={{ width: "120px", height: "auto" }}
                alt={"rich_logo"}
              />
            </div>
          </div>
          <div className="navbar-end hidden lg:flex lg:flex-row lg:items-end pt-10 ">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {loading ? (
                        <div className="flex items-center space-x-4">
                          <Skeleton className="h-12 w-12 rounded-full" />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                          </div>
                        </div>
                      ) : (
                        service.map((component) => (
                          <ListItem
                            key={component.id}
                            title={component.title}
                            href={`/products/` + createSlug(component.title)}
                            icon={component.icon}
                            subtitle={component.subtitle}
                          />
                        ))
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {industries.map((component, index) => (
                        <ListItem
                          key={index}
                          title={component.title}
                          href={`/industries/` + createSlug(component.title)}
                          icon={component.icon}
                          subtitle={component.subtitle}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      <NavigationMenuLink>
                        <a
                          href={"/resources/career"}
                          className=" select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-black focus:bg-blue-100 focus:text-black flex flex-row gap-2"
                        >
                          <div className="">
                            <Image
                              src={"/career.png"}
                              width={75}
                              height={50}
                              alt={"icon"}
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium leading-none">
                              Career
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              a profession or occupation that someone pursues as
                              their life's work, or a person's overall course of
                              action through life
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <a
                          href={"/resources/blogs"}
                          className=" select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-black focus:bg-blue-100 focus:text-black flex flex-row gap-2 "
                        >
                          <div className="">
                            <Image
                              src={"/communication.png"}
                              width={75}
                              height={50}
                              alt={"icon"}
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium leading-none">
                              Blog
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              a profession or occupation that someone pursues as
                              their life's work, or a person's overall course of
                              action through life
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <a
                          href={"/resources/how-to-guide"}
                          className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-black focus:bg-blue-100 focus:text-black flex flex-row gap-2"
                        >
                          <div className="">
                            <Image
                              src={"/guidebook.png"}
                              width={75}
                              height={50}
                              alt={"icon"}
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium leading-none">
                              How to guide
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              a profession or occupation that someone pursues as
                              their life's work, or a person's overall course of
                              action through life
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <a
                          href={"/resources/faq"}
                          className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-black focus:bg-blue-100 focus:text-black flex flex-row gap-2"
                        >
                          <div className="">
                            <Image
                              src={"/chats.png"}
                              width={75}
                              height={50}
                              alt={"icon"}
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium leading-none">
                              FAQ
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              a profession or occupation that someone pursues as
                              their life's work, or a person's overall course of
                              action through life
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/ai-automation-internship"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      AI Automation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/internship" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Internship
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/login" legacyBehavior passHref>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-10 py-2 rounded-full">
                      Login
                    </button>
                  </Link>
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                  <Link
                    href="/ai-automation-internship"
                    legacyBehavior
                    passHref
                  >
                    <button className="bg-sky-600 hover:bg-sky-700 text-white text-xs px-10 py-2 rounded-full">
                      <p className="">AI Automation</p>
                    </button>
                  </Link>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="navbar-end sm:hidden">
            <Image
              src={"/rich.png"}
              width={150}
              height={100}
              alt={"rich_logo"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const ListItem = ({ key, title, subtitle, icon, href }) => {
  const img = `https://richadmin.demovoting.com/storage/${icon}`;

  return (
    <li>
      <NavigationMenuLink>
        <a
          href={href}
          className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-black focus:bg-blue-100 focus:text-black flex flex-row gap-2 items-start"
        >
          <div className="mt-1">
            <Image src={img} width={75} height={50} alt={"icon"} />
          </div>
          <div>
            <div className={`text-sm font-medium leading-none `}>
              {title === "Ivr System"
                ? "IVR System"
                : title === "Bulk Sms"
                ? "Bulk SMS"
                : title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
