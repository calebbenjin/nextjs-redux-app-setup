"use client";

import React from "react";
import Link from "next/link";
import { Bell, CircleUser, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../../../../public/images/Logo";

const MobileNavbar = () => {
  const [selectedItem, setSelectedItem] = React.useState("Dashboard");
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex  items-center gap-x-5">
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="h-5 w-5 md:hidden" />
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="flex flex-col gap-y-3 pt-3 items-start text-sm font-medium lg:px-4">
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
                    selectedItem === "Users"
                      ? " bg-[#F0F2F5] rounded-[12px]"
                      : ""
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

                <Accordion type="single" collapsible className="w-full px-3">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className="flex items-center gap-3 rounded-lg bg-muted lg:px-3 py-2 text-sm text-primary transition-all hover:text-primary">
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
                      <ul className="lg:ms-10 ms-7 flex flex-col gap-y-5 mt-3">
                        <Link
                          href={""}
                          className={`${
                            selectedItem === "Articles"
                              ? " bg-[#F0F2F5] rounded-[12px]"
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
                              ? " bg-[#F0F2F5] rounded-[12px]"
                              : ""
                          } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}
                          onClick={() => setSelectedItem("Announcements")}
                        >
                          <li>Announcements</li>
                        </Link>
                        <Link
                          href={""}
                          className={`${
                            selectedItem === "Newsletter"
                              ? " bg-[#F0F2F5] rounded-[12px]"
                              : ""
                          } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}
                          onClick={() => setSelectedItem("Newsletter")}
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
                    selectedItem === "Messages"
                      ? " bg-[#F0F2F5] rounded-[12px]"
                      : ""
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
                    selectedItem === "Settings"
                      ? " bg-[#F0F2F5] rounded-[12px]"
                      : ""
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

              <div className="mt-auto flex flex-col gap-y-5 ">
                <Link href={""}>
                  <button className="w-full h-[38px] bg-[#02579E] text-white rounded-[10px]">
                    New report
                  </button>
                </Link>
                <ul className="ms-3 gap-y-3 flex flex-col">
                  <Link href={""}>
                    {" "}
                    <li className="flex gap-x-2 items-center">
                      <Image
                        src={"/icon/que.svg"}
                        alt={""}
                        width={20}
                        height={20}
                      />
                      <span className="text-sm">Help and feedback</span>
                    </li>
                  </Link>

                  <Link href={""}>
                    <li className="flex gap-x-2 items-center">
                      <Image
                        src={"/icon/reference.svg"}
                        alt={""}
                        width={20}
                        height={20}
                      />
                      <span className="text-sm">API reference</span>
                    </li>
                  </Link>

                  <Link href={""}>
                    {" "}
                    <li className="flex gap-x-2 items-center">
                      <Image
                        src={"/icon/heart.svg"}
                        alt={""}
                        width={20}
                        height={20}
                      />
                      <span className="text-sm">Status</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Logo classname="sm:mx-0 mt-1 w-32 min-h-8 h-10 md:hidden" />
      </div>

      <div className="flex gap-x-5 items-center">
        <Button size="icon" className="h-7 w-7 rounded bg-[#F0F2F5]">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MobileNavbar;
