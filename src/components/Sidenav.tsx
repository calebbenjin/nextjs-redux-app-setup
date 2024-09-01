"use client";
import Link from "next/link";
import Logo from "@/public/JRS_Logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { links } from "@/contants";
// import logoutIcon from "@/public/icons/logout.png";
import { useState } from "react";
// import logoutImg from "@/public/logout.png";
import { FaCloudArrowDown } from "react-icons/fa6";
import LogoutModal from "./LogoutModal";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export function Sidenav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div
      className={`h-screen overflow-y-auto lg:w-[18rem] bg-white  shadow-lg transform translate-x-[-100%] lg:translate-x-0 lg:relative absolute left-0 transition ease-in-out duration-100`}>
      <div className="p-6">
        <Image src={Logo} width="120" alt="Logo" className="" />
      </div>
      <LogoutModal open={open} setOpen={setOpen} />

      <nav className="mt-10 space-y-1 pb-10 pl-4">
        {links.map((feature) => (
          <div key={feature.id}>
            {/* Check if the link has sublinks */}
            {feature.sublinks ? (
              <div
                className={`flex text-base cursor-pointer items-center hover:font-semibold space-x-2 text-[--secondary] hover:bg-[#0181ea15] py-3 pl-4 transition-all ${
                  pathname === feature.link
                    ? `bg-[#0181ea15] font-semibold border-[--secondary] border-l-8`
                    : ``
                }`}
                onClick={() => toggleMenu(feature.id)}>
                <dt className="inline text-blue-800">
                  <feature.icon aria-hidden="true" className="h-6 w-6" />
                </dt>
                <p className="text-blue-800 font-semibold ">{feature.title}</p>
                <span className="ml-auto">
                  {openMenu === feature.id ? (
                    <FaChevronUp className="h-3 w-3 text-gray-600" />
                  ) : (
                    <FaChevronDown className="h-3 w-3 text-gray-600" />
                  )}
                </span>
              </div>
            ) : (
              // Render as a clickable Link if there are no sublinks
              <Link
                href={feature.link}
                className={`flex text-base items-center hover:font-semibold space-x-2 text-[--secondary] hover:bg-[#0181ea15] py-3 pl-4 transition-all ${
                  pathname === feature.link
                    ? `bg-[#0181ea15] font-semibold border-[--secondary] border-l-8`
                    : ``
                }`}>
                <dt className="inline text-blue-800">
                  <feature.icon aria-hidden="true" className="h-6 w-6" />
                </dt>
                <p className="text-blue-800 font-semibold">{feature.title}</p>
              </Link>
            )}

            {openMenu === feature.id && feature.sublinks && (
              <div className="pl-10 space-y-1">
                {feature.sublinks.map((sublink) => (
                  <Link
                    key={sublink.id}
                    href={sublink.link}
                    className={`flex items-center space-x-2 py-2 text-blue-600 hover:text-blue-800 transition-all ${
                      pathname === sublink.link ? "font-semibold" : ""
                    }`}>
                    <dt className="inline">
                      <sublink.icon aria-hidden="true" className="h-4 w-4" />
                    </dt>
                    <p className="text-sm">{sublink.title}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
