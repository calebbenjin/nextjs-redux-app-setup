import React from "react";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="h-5 w-5 md:hidden" />
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="flex flex-col gap-y-3 pt-3 items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg lg:px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
                className="flex items-center gap-3 rounded-lg lg:px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
                    <ul className="ms-10 flex flex-col gap-y-5 mt-3">
                      <Link href={""}>
                        <li>News/Blog Articles</li>
                      </Link>
                      <Link href={""}>
                        <li>Announcements</li>
                      </Link>
                      <Link href={""}>
                        <li>Newsletter</li>
                      </Link>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg lg:px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
                className="flex items-center gap-3 rounded-lg lg:px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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

            <div className="mt-auto flex flex-col gap-y-3 ">
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
