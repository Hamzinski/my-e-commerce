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
import useQuery from "../Hooks/useQuery";
import { useSelector } from "react-redux";

function ProductListPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const {
    data,
    loading,
    error,
    getQueryData,
    setFilterText,
    setFilterSort,
    getQueryFromUrl,
  } = useQuery();
  const handleChange = (e) => {
    setFilterText(e.target.value);
  };
  const filterProduct = () => {
    getQueryData();
  };
  const allProducts = useSelector(
    (store) => store.product.productList.products
  );

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
      <BrandsTab />
    </div>
  );
}

export default ProductListPage;
