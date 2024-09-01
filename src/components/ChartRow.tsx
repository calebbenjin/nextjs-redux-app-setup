import React from "react";
import { BarChartComp } from "./BarChartComp";
import { RegChart } from "./RegChart";

const ChartRow = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-10 mt-20 mb-40">
      <div className="chart bg-white shadow-lg h-[20rem] w-full ">
        <BarChartComp />
      </div>
      <div className="chart bg-white shadow-lg h-[20rem] w-full ">
        <RegChart />
      </div>
    </section>
  );
};

export default ChartRow;
