"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SingleDetailStats = () => {
  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 mt-5 lg:p-6">
        <span className="font-bold text-lg ps-1">Farm Statistics</span>
        <div className="grid gap-4 md:grid-cols-2 pt- md:gap-8 lg:grid-cols-4">
          <Card className="bg-[#FFFFFF]">
            <CardHeader className="items-center text-left space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-left w-full">
                Total Batch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">99.98%</div>
            </CardContent>
          </Card>
          <Card className="bg-[#FFFFFF]">
            <CardHeader className="items-center text-left space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-left w-full">
                Total Harvests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">300ms</div>
            </CardContent>
          </Card>
          <Card className="bg-[#FFFFFF]">
            <CardHeader className="items-center text-left space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-left w-full">
                No. of Ponds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">0.01%</div>
            </CardContent>
          </Card>
          <Card className="bg-[#FFFFFF]">
            <CardHeader className="items-center text-left space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-left w-full">
                Throughput
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">100RPS</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SingleDetailStats;
