import { Payment } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../../ui/button";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const columns: ColumnDef<Payment>[] = [
  //   checkbox
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  {
    accessorKey: "name",
    // header: ({ column }) => {
    header: ({}) => {
      return (
        <h1
          className=""
          //   variant="ghost"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </h1>
      );
    },
    cell: ({ row }) => (
      <div className="w-[120px]">
        <div>{row.getValue("name")}</div>
        <div className="text-xs text-gray-400 lg:hidden">
          {row.getValue("email")}
        </div>
      </div>
    ),
  },

  {
    accessorKey: "email",
    header: ({}) => {
      return <h1 className="hidden lg:block">Email</h1>;
    },
    cell: ({ row }) => (
      <div className="lowercase hidden lg:block">{row.getValue("email")}</div>
    ),
  },

  {
    accessorKey: "plan",
    header: ({}) => {
      return <h1 className="text-start">Plan</h1>;
    },
    cell: ({ row }) => (
      <div className="capitalize rounded py-1 w-10 text-center bg-[#F0F2F5] text-xs">
        {row.getValue("plan")}
      </div>
    ),
  },
  {
    accessorKey: "signUpDate",
    header: ({}) => {
      return <h1 className="hidden lg:block">Sign up date</h1>;
    },
    cell: ({ row }) => (
      <div className="capitalize hidden lg:block">
        {row.getValue("signUpDate")}
      </div>
    ),
  },
  {
    accessorKey: "lastSeen",
    header: ({}) => {
      return <h1 className="">Last seen</h1>;
    },
    cell: ({ row }) => (
      <div className="capitalize text-xs">{row.getValue("lastSeen")}</div>
    ),
  },

  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"));

  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount);

  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-3 md:w-5 lg:w-8 p-0 bg-white">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <Link href={`/${payment.id}`}>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                View Details
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Deactivate</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
