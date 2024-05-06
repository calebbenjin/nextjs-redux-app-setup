"use client";

import React from "react";
import SingleDashboardMetrics from "./Metrics";
import SingleDetailStats from "./Stats";
import Form from "./Form";
import Link from "next/link";
import Image from "next/image";

const SingleDashboard = () => {
  return (
    <div className="lg:mx-5">
      <div className="flex justify-between items-center mx-6 mb-10">
        <Link href={"/"}>
          <div className="flex gap-x-2 items-center">
            <Image src={"/icon/Back.svg"} width={7.7} height={13.4} alt={""} />
            <p className="font-medium text-base">Back</p>
          </div>
        </Link>
        <button className="bg-[#E44E4E] text-white w-[130px] lg:w-[200px] h-[45px] lg:h-[50px] rounded-[10px]">
          Deactivate
        </button>
      </div>
      <div className="w-full mb-3">
        <p className="text-[#02579E] ms-6 text-xl font-bold leading-8 mb-4">
          Overview
        </p>
        <div className="grid grid-cols-2 mx-5 lg:grid-rows-1 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:gap-[6%] ">
          <SingleDashboardMetrics
            icon={"/icon/Capital.svg"}
            progress="increasing"
            amount={9000}
            title="Capital"
            percentage={9}
          />
          <SingleDashboardMetrics
            icon={"/icon/NetProfit.svg"}
            progress="decreasing"
            amount={8000}
            title="Net Profit"
            percentage={80}
          />
          <SingleDashboardMetrics
            icon={"/icon/Expenses.svg"}
            progress="increasing"
            amount={180000}
            title="Total Expenses"
            percentage={87}
          />
        </div>
      </div>
      <SingleDetailStats />
      <Form />
    </div>
  );
};

export default SingleDashboard;
