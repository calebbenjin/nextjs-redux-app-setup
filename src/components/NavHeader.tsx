"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
// import logoutIcon from "@/public/icons/logout.png";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { links } from "@/contants";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import LogoutModal from "./LogoutModal";
import fetchToken from "@/lib/auth";
import { useRouter } from "next/navigation";
import SearchInput from "./SearchInput";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavHeader = ({ userdata }: any) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openLog, setOpenLog] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    isAuth();
  }, []);

  const isAuth = async () => {
    try {
      const token = await fetchToken();
      if (!token?.data?.token) {
        push("/");
      }
    } catch (error: any) {
      if (error?.response?.status == "401") {
        push("/");
      }
    }
  };


  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <nav className="bg-white shadow-lg w-full lg:h-[12vh] h-[8vh] flex items-center justify-center relative">
      <LogoutModal open={openLog} setOpen={setOpenLog} />
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <IoIosMenu
          className="text-[--primary] h-8 w-8 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-hidden="true"
        />
        {/* <div className="">
          {links?.map((data) => {
            if (pathname == data?.link) {
              return (
                <h1 key={data?.id} className="font-bold text-xl text-blue-500 ">
                  Hey
                </h1>
              );
            }
          })}
        </div> */}
        <SearchInput />
        <div className="flex items-center lg:space-x-6 space-x-4">
          <div className="relative inline-block text-left">
            {/* <div>
              {userdata ? (
                <button
                  type="button"
                  className="flex justify-between items-center space-x-3 w-full rounded-md border border-none p-0 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={() => setToggle(!toggle)}>
                  <Avatar>
                    <AvatarImage src={userdata?.attributes?.profile_photo} />
                    <AvatarFallback>
                      {userdata?.attributes?.first_name[0]}{" "}
                      {userdata?.attributes?.last_name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-[--primary] lg:flex hidden ">
                      {userdata?.attributes?.first_name}{" "}
                      {userdata?.attributes?.last_name}
                    </p>
                    <p className="text-sm font-semibold text-[--primary] lg:hidden flex">
                      {userdata?.attributes?.first_name}
                    </p>
                  </div>
                  <IoIosArrowDown className="text-[--primary] " />
                </button>
              ) : (
                <div className="flex items-center space-x-4">
                  <Skeleton className="lg:h-12 lg:w-12 h-8 w-8 rounded-full bg-gray-200" />
                  <div className="space-y-2">
                    <Skeleton className="lg:h-6 h-4 lg:w-[150px] w-[100px] bg-gray-200" />
                  </div>
                </div>
              )}
            </div> */}
            <button
              type="button"
              className="flex justify-between items-center space-x-3 w-full rounded-md border border-none p-0 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => setToggle(!toggle)}>
              <div>
                <p className="text-sm font-semibold text-[--primary] lg:flex hidden ">
                  Caleb Benjamin
                </p>
                {/* <p className="text-sm font-semibold text-[--primary] lg:hidden flex">
                  Caleb
                </p> */}
              </div>
              <Avatar>
                <AvatarImage src={userdata?.attributes?.profile_photo} />
                <AvatarFallback>CB</AvatarFallback>
              </Avatar>

              {/* <IoIosArrowDown className="text-[--primary] " /> */}
            </button>

            {toggle && (
              <div
                className="origin-top-right z-50 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none p-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                <div className="p-2" role="none">
                  <div className="px-2 pt-3 w-full space-y-2">
                    <label>
                      <Button
                        onClick={() => setOpenLog(true)}
                        variant="ghost"
                        className="flex w-full items-center justify-between font-bold space-x-2 text-red-500 hover:text-red-500 focus:bg-[#ea1c0115] focus:text-red-500  rounded-xl transition-all">
                        {/* <Image
                          src={logoutIcon}
                          alt="Logout"
                          layout="fixed"
                          width="20"
                          height="20"
                        /> */}
                        <p>Log Out</p>
                      </Button>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between w-11/12 py-6 h-[60px] rounded-2xl mx-auto">
            {/* <Image
              src={logoImg}
              alt="Aquatrack logo"
              width="150"
              height="150"
              layout="fixed"
            /> */}
            <button
              type="button"
              className="-m-2.5 rounded-md border border-[--primary] p-2.5 text-[--primary]"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <IoMdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
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
                          <feature.icon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                        </dt>
                        <p className="text-blue-800 font-semibold">
                          {feature.title}
                        </p>
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
                          <feature.icon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                        </dt>
                        <p className="text-blue-800 font-semibold">
                          {feature.title}
                        </p>
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
                              <sublink.icon
                                aria-hidden="true"
                                className="h-4 w-4"
                              />
                            </dt>
                            <p>{sublink.title}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
};

export default NavHeader;
