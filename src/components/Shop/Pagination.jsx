import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationItems = () => {
    const pages = [];

    // Displaying up to 5 pages: current - 2, current - 1, current, current + 1, current + 2
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    // Always show first page
    if (startPage > 1) {
      pages.push(renderPageItem(1));
      if (startPage > 2) {
        pages.push(<li key="startEllipsis">...</li>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(renderPageItem(i));
    }

    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<li key="endEllipsis">...</li>);
      }
      pages.push(renderPageItem(totalPages));
    }

    return pages;
  };

  const renderPageItem = (i) => (
    <li key={i}>
      <a
        href="#"
        className={`relative block border mx-2 rounded px-3 py-1.5 text-sm transition duration-300 ${
          currentPage === i
            ? "text-white"
            : "text-surface hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700"
        }`}
        style={currentPage === i ? { backgroundColor: "#F87171" } : {}}
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

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-none flex">
        <li>
          <a
            href="#"
            className={`relative block border rounded bg-transparent px-3 py-1.5 text-sm text-surface/50 transition duration-300 dark:text-neutral-400 ${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {renderPaginationItems()}
        <li>
          <a
            href="#"
            className={`relative block border rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500 ${
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
