"use client";
import React from "react";
import { RiLineChartLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Dashboard = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full">
      <CarouselContent className="-ml-2 md:-ml-4">
        <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
          <div className="card bg-cyan-600 p-6 rounded-lg shadow-lg text-white flex items-center justify-between ">
            <div className="space-y-4">
              <p className="font-semibold">Total Beneficiary Registered</p>
              <h2 className="font-bold lg:text-3xl text-2xl">3456</h2>
            </div>
            <div className="">
              <RiLineChartLine className="h-16 w-16" />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
          <div className="card bg-blue-800 p-6 rounded-lg shadow-lg text-white flex gap-4 items-center justify-between ">
            <div className="space-y-4 w-full">
              <p className="font-semibold">Male Beneficiary Registered</p>
              <div className="flex items-center w-full space-x-4">
                <h2 className="font-bold lg:text-3xl text-2xl">34%</h2>
                <Progress value={33} className="w-full bg-zinc-800 " />
              </div>
            </div>
            <div className="">
              <FaUsers className="h-16 w-16" />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
          {" "}
          <div className="card bg-lime-800 p-6 rounded-lg shadow-lg text-white flex gap-4 items-center justify-between ">
            <div className="space-y-4 w-full">
              <p className="font-semibold">Female Beneficiary Registered</p>
              <div className="flex items-center w-full space-x-4">
                <h2 className="font-bold lg:text-3xl text-2xl">34%</h2>
                <Progress value={33} className="w-full bg-zinc-800 " />
              </div>
            </div>
            <div className="">
              <HiUserGroup className="h-16 w-16" />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
          <div className="card bg-pink-600 p-6 rounded-lg shadow-lg text-white flex items-center justify-between ">
            <div className="space-y-4">
              <p className="font-semibold">My Regeneration For 2024</p>
              <h2 className="font-bold lg:text-3xl text-2xl">3456</h2>
            </div>
            <div className="">
              <FaUsersBetweenLines className="h-16 w-16" />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="h-20 w-10 text-8xl" />
      <CarouselNext className="h-20 w-10 text-8xl " />
    </Carousel>
  );
};

export default Dashboard;
