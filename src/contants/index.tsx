import { LinkItem } from "@/types";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { FaUsersGear } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { GrUserAdmin } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

export const links: LinkItem[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: RxDashboard,
    link: "/portal",
  },
  {
    id: 2,
    title: "Reports",
    icon: TbReportSearch,
    link: "/dashboard",
    sublinks: [
      {
        id: 1,
        title: "Detailed report",
        icon: TbReportSearch,
        link: "/reports/detailed",
      },
      {
        id: 2,
        title: "Education report",
        icon: TbReportSearch,
        link: "/reports/education",
      },
      {
        id: 3,
        title: "Registration report",
        icon: TbReportSearch,
        link: "/reports/registration",
      },
      {
        id: 3,
        title: "Summary report",
        icon: TbReportSearch,
        link: "/reports/summary",
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    icon: SiAmazonsimpleemailservice,
    link: "/dashboard",
    sublinks: [
      {
        id: 1,
        title: "Beneficiary",
        icon: FaUserCheck,
        link: "/services/beneficiary",
      },
      {
        id: 1,
        title: "Dependant",
        icon: FaUsers,
        link: "/services/dependant",
      },
    ],
  },
  {
    id: 4,
    title: "Add Beneficiary",
    icon: FaUsersGear,
    link: "/beneficiary",
  },
  {
    id: 5,
    title: "Settings",
    icon: CiSettings,
    link: "/settings",
    sublinks: [
      {
        id: 1,
        title: "Job Title",
        icon: TbReportSearch,
        link: "/settings/job",
      },
      {
        id: 2,
        title: "New User",
        icon: TbReportSearch,
        link: "/settings/user",
      },
      {
        id: 3,
        title: "Account Roles",
        icon: TbReportSearch,
        link: "/settings/roles",
      },
      {
        id: 3,
        title: "Services",
        icon: TbReportSearch,
        link: "/settings/service",
      },
      {
        id: 3,
        title: "Department",
        icon: TbReportSearch,
        link: "/settings/department",
      },
    ],
  },
  {
    id: 6,
    title: "Admin",
    icon: GrUserAdmin,
    link: "/dashboard",
  },
];

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];
