import React from "react";
import ChevronLeftIcon from "../../../../public/icon/ChevronLeftIcon";
import ChevronRightIcon from "../../../../public/icon/ChevronRightIcon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="pagination flex items-center justify-center">
      <span></span>
      <span className="mx-4">
        Showing {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="p-1 bg-white border border-grey-5 rounded cursor-pointer"
      >
        <ChevronLeftIcon classname="w-6" />
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="p-1 bg-white border border-grey-5 rounded cursor-pointer"
      >
        <ChevronRightIcon classname="w-6" />
      </button>
    </div>
  );
};

export default Pagination;
