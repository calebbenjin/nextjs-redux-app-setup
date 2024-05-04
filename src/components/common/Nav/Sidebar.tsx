"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";
import Logo from "../../../../public/images/Logo";
import Image from "next/image";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = React.useState("Dashboard");
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <div className="flex h-16 items-center border-b border-r-0 px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Logo classname="mx-auto sm:mx-0 w-36 min-h-8 h-10" />
          </Link>
        </div>

        <div className="flex-1  ">
          <nav className="flex flex-col gap-y-3 pt-3 items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className={`${
                selectedItem === "Dashboard"
                  ? " bg-[#F0F2F5] rounded-[12px]"
                  : ""
              } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}
              onClick={() => setSelectedItem("Dashboard")}
            >
              <Image
                src={"/icon/homeIcon.svg"}
                height={16}
                width={16}
                alt={""}
              />
              Dashboard
            </Link>
            <Link
              href="#"
              className={`${
                selectedItem === "Users" ? "bg-[#F0F2F5] rounded-[12px]" : ""
              } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}
              onClick={() => setSelectedItem("Users")}
            >
              <Image
                src={"/icon/userIcon.svg"}
                height={16}
                width={16}
                alt={""}
              />
              Users
            </Link>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-xs lg:text-sm text-primary transition-all hover:text-primary">
                    <Image
                      src={"/icon/contentIcon.svg"}
                      height={16}
                      width={16}
                      alt={""}
                    />
                    Content Management
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ms-10 flex flex-col gap-y-5 mt-3">
                    <Link
                      href={""}
                      className={`${
                        selectedItem === "Articles"
                          ? "bg-[#F0F2F5] rounded-[12px]"
                          : ""
                      } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}
                      onClick={() => setSelectedItem("Articles")}
                    >
                      <li>News/Blog Articles</li>
                    </Link>
                    <Link
                      href={""}
                      className={`${
                        selectedItem === "Announcements"
                          ? "bg-[#F0F2F5] rounded-[12px]"
                          : ""
                      } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}
                      onClick={() => setSelectedItem("Announcements")}
                    >
                      <li>Announcements</li>
                    </Link>
                    <Link
                      href={""}
                      className={`${
                        selectedItem === "Newsletters"
                          ? "bg-[#F0F2F5] rounded-[12px]"
                          : ""
                      } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}
                      onClick={() => setSelectedItem("Newsletters")}
                    >
                      <li>Newsletter</li>
                    </Link>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              href="#"
              className={`${
                selectedItem === "Messages" ? "bg-[#F0F2F5] rounded-[12px]" : ""
              } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}
              onClick={() => setSelectedItem("Messages")}
            >
              <Image
                src={"/icon/messageIcon.svg"}
                height={16}
                width={16}
                alt={""}
              />
              Messages
            </Link>
            <Link
              href="#"
              className={`${
                selectedItem === "Settings" ? "bg-[#F0F2F5] rounded-[12px]" : ""
              } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}
              onClick={() => setSelectedItem("Settings")}
            >
              <Image
                src={"/icon/settingsIcon.svg"}
                height={16}
                width={16}
                alt={""}
              />
              Settings
            </Link>
          </nav>
        </div>
      </div>

      <div className="mt-auto p-4 flex flex-col gap-y-5">
        <Link href={""}>
          <button className="w-full h-[40px] bg-[#02579E] text-white rounded-[10px]">
            New report
          </button>
        </Link>
        <ul className="ms-3 gap-y-3 flex flex-col">
          <Link href={""}>
            <li className="flex gap-x-2 items-center">
              <Image src={"/icon/que.svg"} alt={""} width={24} height={24} />
              <span>Help and feedback</span>
            </li>
          </Link>

          <Link href={""}>
            <li className="flex gap-x-2 items-center">
              <Image
                src={"/icon/reference.svg"}
                alt={""}
                width={24}
                height={24}
              />
              <span>API reference</span>
            </li>
          </Link>

          <Link href={""}>
            <li className="flex gap-x-2 items-center">
              <Image src={"/icon/heart.svg"} alt={""} width={24} height={24} />
              <span>Status</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
