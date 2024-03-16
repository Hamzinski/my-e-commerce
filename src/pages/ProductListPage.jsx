import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { TbCategoryFilled } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
import BrandsTab from "../layouts/BrandsTab";
import {
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import useQuery from "../hooks/useQuery";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

function ProductListPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 25;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const {
    getQueryData,
    setFilterText,
    setFilterSort,
    setPaginationOffSet,
    paginationOffSet,
    getQueryOffset,
  } = useQuery();
  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const handlePageClick = ({ nextSelectedPage }) => {
    setCurrentPage(nextSelectedPage);
    const offset = nextSelectedPage * itemsPerPage;
    getQueryOffset(25, offset);
  };

  const filterProduct = () => {
    getQueryData();
  };
  const allProducts = useSelector((store) => store.product.productList);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const paginationOffSetParam = urlSearchParams.get("offset");
  return (
    <div>
      <CategoryCard />
      <div className="custom-container p-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
          <h6 className="font-mont font-bold text-base text-second-text-color">
            Showing all {Array.isArray(allProducts) && allProducts.length}{" "}
            results.
          </h6>
          <div className="flex items-center gap-3">
            <h6 className="font-mont font-bold text-base text-second-text-color">
              Views:
            </h6>
            <div className="w-12 h-12 flex justify-center items-center border-solid border-1 rounded-xl">
              <TbCategoryFilled className="w-8 h-8" />
            </div>
            <div className="w-12 h-12 flex justify-center items-center border-solid border-1 rounded-xl">
              <MdChecklist className="w-8 h-8" />
            </div>
          </div>
          <div className="flex items-center gap-9">
            <div className="d-flex">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                  className="font-mont text-xl md:text-sm font-normal md:font-bold text-second-text-color"
                  caret
                >
                  Sort
                </DropdownToggle>
                <DropdownMenu className="font-mont">
                  <DropdownItem onClick={() => setFilterSort("price:asc")}>
                    Price:Asc
                  </DropdownItem>
                  <DropdownItem onClick={() => setFilterSort("price:desc")}>
                    Price:Desc
                  </DropdownItem>
                  <DropdownItem onClick={() => setFilterSort("rating:asc")}>
                    Rating:Asc
                  </DropdownItem>
                  <DropdownItem onClick={() => setFilterSort("rating:desc")}>
                    Rating:Desc
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div>
              <Input onChange={handleChange}></Input>
            </div>
            <button
              onClick={filterProduct}
              className="bg-primary-bg font-mont font-bold w-32 h-9 text-white rounded-md"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
      <ProductCard />
      <div className="custom-container font-mont font-semibold flex justify-center">
        <ReactPaginate
          nextLabel="next >"
          onClick={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          initialPage={paginationOffSetParam / 25}
          pageCount={allProducts.total / 25}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
      <BrandsTab />
    </div>
  );
}

export default ProductListPage;
