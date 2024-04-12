import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationItems = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <a
            href="#"
            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 ${
              currentPage === i
                ? "text-primary-700"
                : "text-surface/50 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
            {currentPage === i && (
              <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0">
                (current)
              </span>
            )}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          <a
            href="#"
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface/50 transition duration-300 dark:text-neutral-400"
            onClick={() => onPageChange(currentPage - 1)} // Add onClick handler
            disabled={currentPage === 1} // Optionally disable the button if on the first page
          >
            Previous
          </a>
        </li>
        {renderPaginationItems()}
        <li>
          <a
            href="#"
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
