// Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, prevPage, nextPage, changePage }) => (
  <div className="flex gap-2">
    <button onClick={prevPage} className="btn" disabled={currentPage === 1}>
      Prev
    </button>
    {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => changePage(index + 1)}
        className={`btn ${currentPage === index + 1 ? "btn-info text-white" : ""}`}
      >
        {index + 1}
      </button>
    ))}
    <button onClick={nextPage} className="btn" disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
);

export default Pagination;
