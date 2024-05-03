"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardTable } from "./Table/Tables";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainDashboard = () => {
  const isMobile = useMediaQuery("(max-width:1300px)");
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div>
        <ul className="lg:mx-6 mx-4 flex gap-x-5 text-xs md:text-base mt-4 border-b-2 pb-5">
          <li>Today</li>
          <li>Yesterday</li>
          <li>Last 7 days</li>
          <li>Last 30 days</li>
        </ul>
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {isMobile ? (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="font-bold text-lg ps-1">New user signups</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2 pt-1 md:gap-8 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="items-center text-left space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-left w-full">
                        Total signups
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3,000</div>
                      <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                        +15%
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="items-center text-left space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-left w-full">
                        Paid Users
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2,500</div>
                      <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                        +10%
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="items-center text-left space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-left w-full">
                        Free Users
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">500</div>
                      <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                        +20%
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="items-center text-left space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-left w-full">
                        Users with no subscribers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">75</div>
                      <p className="text-xs pt-2 text-muted-foreground text-[#E83808]">
                        -5%
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="font-bold text-lg ps-1">User activities</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2 pt-1 md:gap-8 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="items-center text-left space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-left w-full">
                        Total page views
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">25,000</div>
                      <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                        +10%
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="items-center text-left space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-left w-full">
                        Active
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,000</div>
                      <p className="text-xs pt-2 text-muted-foreground">+5%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="items-center text-left space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-left w-full">
                        Inactive users
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2,000</div>
                      <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                        +15%
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="items-center text-left space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-left w-full">
                        Users with no activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">500</div>
                      <p className="text-xs pt-2 text-muted-foreground text-[#E83808]">
                        -20%
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <div>
            <div>
              <span className="font-bold text-lg ps-1">New user signups</span>
              <div className="grid gap-4 md:grid-cols-2 pt-1 md:gap-8 lg:grid-cols-4">
                <Card>
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-left w-full">
                      Total signups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3,000</div>
                    <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                      +15%
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-left w-full">
                      Paid Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,500</div>
                    <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                      +10%
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-left w-full">
                      Free Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">500</div>
                    <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                      +20%
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-left w-full">
                      Users with no subscribers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">75</div>
                    <p className="text-xs pt-2 text-muted-foreground text-[#E83808]">
                      -5%
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="mt-10">
              <span className="font-bold text-lg ps-1">User activities</span>
              <div className="grid gap-4 md:grid-cols-2 pt-1 md:gap-8 lg:grid-cols-4">
                <Card>
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-left w-full">
                      Total page views
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">25,000</div>
                    <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                      +10%
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-left w-full">
                      Active
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,000</div>
                    <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                      +5%
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-left w-full">
                      Inactive users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,000</div>
                    <p className="text-xs pt-2 text-muted-foreground text-[#088738]">
                      +15%
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-left w-full">
                      Users with no activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">500</div>
                    <p className="text-xs pt-2 text-muted-foreground text-[#E83808]">
                      -20%
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        <DashboardTable />
      </main>
    </div>
  );
};

export default MainDashboard;
