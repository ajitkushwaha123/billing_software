import React, { useState } from "react";
import Icon from "../helper/Icon";
import { motion } from "motion/react";
export default function Pagination({length}) {
  const totalResults = length; // Total number of results
  const resultsPerPage = 10; // Results shown per page
  const totalPages = Math.ceil(totalResults / resultsPerPage); // Total pages
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the range of results being displayed
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  // Generate page numbers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      {/* Mobile View: Previous and Next */}
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 bg-white hover:bg-gray-50"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 bg-white hover:bg-gray-50"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startResult}</span> to{" "}
            <span className="font-medium">{endResult}</span> of{" "}
            <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {/* Previous Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              <Icon name={"ChevronLeft"} className="h-5 w-5" />
            </motion.button>

            {/* Page Numbers */}
            {pages.map((page) => (
              <motion.button
                whileTap={{ scale: 0.9 }}
                key={page}
                onClick={() => handlePageChange(page)}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  page === currentPage
                    ? "z-10 bg-indigo-50 rounded-md border-indigo-500 text-indigo-600"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                }`}
              >
                {page}
              </motion.button>
            ))}

            {/* Next Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <Icon
                name={"ChevronRight"}
                className="h-5 w-5"
                aria-hidden="true"
              />
            </motion.button>
          </nav>
        </div>
      </div>
    </div>
  );
}
