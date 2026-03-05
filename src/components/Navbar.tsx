"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import CallIcon from "../icons/svg/CallIcon";
import PlowIcon from "../icons/svg/PlowIcon";
import SearchIcon from "../icons/svg/SearchIcon";
import CornerShape from "../icons/svg/CornerShape";
import Button from "./Button";
import BarIcon from "../icons/svg/BarIcon";
// import { CiMenuBurger } from "react-icons/ci";

const Navbar: React.FC = () => {
  const navProperty = [
    { text: "Home", to: "/" },
    { text: "Pages", to: "/pages" },
    { text: "Services", to: "/services" },
    { text: "Portfolio", to: "/portfolio" },
    { text: "Blog", to: "/blog" },
    { text: "Contact Us", to: "/contact" },
  ];

  const contact = {
    phone: "+1(212)255-511",
    phoneTo: "tel:+1212255511",
    cta: "Get In Touch ",
    ctaTo: "/contact",
  };

  const [navbarBg, setNavbarBg] = useState(false);
  const [open, setOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all ease-in-out duration-500 font-signika font-semibold ${
        navbarBg ? "bg-primary fixed top-0" : "bg-transparent absolute top-5"
      }`}
    >
      <div className="flex justify-between items-center pl-5 relative ">
        <span className={`absolute top-0 left-5 text-background -rotate-90 ${navbarBg ? "hidden" : "block"} `}>
          <CornerShape />
        </span>
        <span className={`absolute top-0 right-5 text-background ${navbarBg ? "hidden" : "block"} `}>
          <CornerShape />
        </span>

        <div className="flex items-center gap-10 2xl:gap-15 pl-10 xl:py-0 py-1 ">
          <span>
            <Image src={logo} alt="logo-agrimo" />
          </span>
          <nav>
            <ul
              className={`hidden xl:flex font-signika font-semibold text-sm  text-white uppercase `}
            >
              {navProperty.map((item) => (
                <li className="flex items-center " key={item.text}>
                  <Link
                    className="hover:text-secondary leading-25 "
                    href={item.to}
                  >
                    {item.text}
                  </Link>
                  <div
                    className={`size-1.5 mx-4 2xl:mx-6.5 bg-secondary rounded-full ${item.text === navProperty[navProperty.length - 1].text ? "hidden" : "block"}  `}
                  ></div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden xl:block">
          <div className="flex items-center gap-6 2xl:gap-12 ">
            <div className="flex items-center gap-8 ">
              <div className="flex items-center gap-3.5 ">
                <div className="text-secondary ">
                  <CallIcon />
                </div>
                <div className="text-white ">
                  <a className="font-normal" href={contact.phoneTo}>
                    Call us Now
                  </a>
                  <p className="font-medium">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center rounded-full bg-background p-4 ">
                <SearchIcon />
              </div>
            </div>

            <div className="py-5 px-5 rounded-bl-4xl bg-background relative ">
              <Button
                text={contact.cta}
                href={contact.ctaTo}
                pos={<PlowIcon />}
              />
              <span className="absolute top-0 -left-7.5 text-background ">
                <CornerShape />
              </span>
              <span className="absolute -bottom-7.5 right-5 text-background ">
                <CornerShape />
              </span>
            </div>
          </div>
        </div>
        <div className="xl:hidden *:cursor-pointer p-5  ">
          <div className="pr-5 text-background " onClick={() => setOpen(!open)}>
            <BarIcon className="size-8" />
          </div>
          <nav
            className={`absolute top-20 right-0 w-2/3 h-screen rounded-l-2xl bg-primary z-50 p-6 md:p-10 transition-all duration-700 ease-in ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center rounded-full bg-background p-4 mb-6 text-text-color ">
              <span className="">
                <SearchIcon />
              </span>
              <input
                className="pl-2 size-full focus:outline-0  "
                type="text"
                placeholder="Search anything!"
              />
            </div>

            <ul
              className={` flex flex-col font-signika font-semibold text-sm  text-white uppercase `}
            >
              {navProperty.map((item) => (
                <li
                  className="flex items-center border-b border-secondary/20 sm:py-6 py-3.5 "
                  key={item.text}
                >
                  <Link
                    className="hover:text-secondary leading-normal block w-full "
                    href={item.to}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <div className="flex flex-wrap gap-6 justify-between 2xl:gap-12 mt-6 sm:mt-10 ">
                <div className="flex items-center gap-8 ">
                  <div className="flex items-center gap-3.5 ">
                    <div className="text-secondary ">
                      <CallIcon />
                    </div>
                    <div className="text-white ">
                      <a className="font-normal" href={contact.phoneTo}>
                        Call us Now
                      </a>
                      <p className="font-medium">{contact.phone}</p>
                    </div>
                  </div>
                </div>

                <div className=" ">
                  <Button
                    text={contact.cta}
                    href={contact.ctaTo}
                    pos={<PlowIcon />}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
