import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center">
      {currentPage > 1 && (
        <button
          className="flex mx-3 my-12 justify-center items-center border-1 border-solid rounded-md w-32 h-12 bg-primary-bg text-white text-2xl font-mont font-bold"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
      )}
      {pages.map((page, index) => {
        return (
          <button
            className={`${
              page === currentPage
                ? "flex mx-3 my-12 justify-center items-center border-1 border-solid rounded-md w-12 h-12 bg-primary-bg text-white text-2xl font-mont font-bold"
                : "flex mx-3 my-12 justify-center items-center border-1 border-solid border-primary-border-color rounded-md w-12 h-12 text-primary-color text-2xl font-mont font-bold"
            }`}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      {currentPage < pages.length && (
        <button
          className="flex mx-3 my-12 justify-center items-center border-1 border-solid rounded-md w-32 h-12 bg-primary-bg text-white text-2xl font-mont font-bold"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
