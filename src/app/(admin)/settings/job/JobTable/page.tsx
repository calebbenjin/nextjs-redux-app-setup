"use client";
import React, { useState } from "react";

interface TableData {
  date: string;
  department: string;
  title: string;
  update?: string;
}

const initialData: TableData[] = [
  {
    date: "2024-08-20",
    department: "Engineering",
    title: "Smith",
    update: "John",
  },
  {
    date: "2024-08-20",
    department: "Engineering",
    title: "Smith",
    update: "John",
  },
  {
    date: "2024-08-20",
    department: "Engineering",
    title: "Smith",
    update: "John",
  },
  {
    date: "2024-08-20",
    department: "Engineering",
    title: "Smith",
    update: "John",
  },
  {
    date: "2024-08-20",
    department: "Engineering",
    title: "Smith",
    update: "John",
  },
];

const JobTable: React.FC = () => {
  const [data, setData] = useState<TableData[]>(initialData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
  };

  const filteredData = data.filter(
    (row) =>
      row.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="p-5 bg-white shadow-md rounded-md mt-10 w-full">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
        />
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="p-2 border border-gray-300 rounded-md">
          {[5, 10, 20, 50, 100].map((value) => (
            <option key={value} value={value}>
              Show {value} entities
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {[
                "Date",
                "Department",
                "Title",
                "Update",
              ].map((header) => (
                <th
                  key={header}
                  className="border border-gray-300 p-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{row.date}</td>
                <td className="border border-gray-300 p-2">{row.department}</td>
                <td className="border border-gray-300 p-2">{row.title}</td>
                <td className="border border-gray-300 p-2">{row.update}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <span className="text-sm mb-2 md:mb-0">
          Showing {1 + (currentPage - 1) * rowsPerPage} to{" "}
          {Math.min(currentPage * rowsPerPage, filteredData.length)} of{" "}
          {filteredData.length} entities
        </span>
        <div className="flex items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border border-gray-300 rounded-md mr-2 disabled:opacity-50">
            Previous
          </button>
          <span className="mx-3">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 border border-gray-300 rounded-md disabled:opacity-50">
            Next
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default JobTable;
