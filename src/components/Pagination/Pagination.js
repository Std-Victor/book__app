import React from "react";
import style from "./pagination.module.css";

export default function Pagination({
  totalPages,
  moviePerPage,
  setCurrentPage,
  currentPage,
}) {
  const pages =
    currentPage === totalPages
      ? [currentPage - 1, currentPage]
      : +currentPage === 1
      ? [currentPage, currentPage + 1]
      : [currentPage - 1, currentPage, currentPage + 1];

  return (
    <div className={style.pagination}>
      <button
        key={0}
        onClick={() => setCurrentPage(1)}
        className={1 === +currentPage ? style.active : ""}
        disabled={1 === +currentPage ? "disabled" : ""}
      >
        First
      </button>
      {+currentPage >= 3 && <span className={style.dot}>...</span>}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={page === +currentPage ? style.active : ""}
        >
          {page}
        </button>
      ))}
      {+currentPage <= +totalPages-2 && <span className={style.dot}>...</span>}
      <button
        key={totalPages}
        onClick={() => setCurrentPage(totalPages)}
        className={totalPages === currentPage ? style.active : ""}
        disabled={totalPages === currentPage ? "disabled" : ""}
      >
        Last
      </button>
    </div>
  );
}
