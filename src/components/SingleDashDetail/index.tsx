import React from "react";
import Sidebar from "../common/Nav/Sidebar";
import MobileNavbar from "../common/Nav/MobileNavbar";
import SingleDashboard from "./component/SingleDashboard";

const SingleDashDetail = () => {
  return (
    <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] text-[#121417]">
      <div className="hidden bg-muted/40 md:block ">
        <div className="sticky top-0 flex flex-col ">
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col">
        <header className="sticky z-20 bg-white top-0 flex h-16 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileNavbar />
        </header>
        <main className="flex flex-1 flex-col gap-4 bg-[#FCFCFC] py-4 lg:gap-6 border-l lg:py-6">
          <SingleDashboard />
        </main>
      </div>
    </div>
  );
};

export default SingleDashDetail;
