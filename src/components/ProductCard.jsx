import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { fetchProducts } from "../store/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";

function ProductCard() {
  const dispatch = useDispatch();
  const allProducts = useSelector(
    (store) => store.product.productList.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="custom-container flex flex-col md:flex-row justify-between flex-wrap gap-9 px-12 md:px-36 py-12">
      {Array.isArray(allProducts) &&
        allProducts.map((product, index) => (
          <div
            id={product.id}
            key={index}
            className="flex flex-col items-center w-1/5 shadow-md"
          >
            <img
              className="w-80 md:w-60 h-[427px] object-cover"
              src={product.images?.[0]?.url}
              alt=""
            />
            <div className="flex flex-col gap-3 items-center px-2 text-center pt-6 pb-9">
              <h5 className="font-mont font-bold text-base text-dark-text-color">
                {product.name}
              </h5>
              <p className="font-mont font-bold text-sm text-second-text-color">
                {product.description}
              </p>
              <div className="flex gap-3">
                <h5 className="font-mont font-bold text-base text-secondary-color">
                  ${product.price}
                </h5>
              </div>
              <div className="flex gap-2">
                <button>
                  <FontAwesomeIcon
                    className="w-fit text-primary-color"
                    icon={faCircle}
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    className="w-fit text-secondary-color"
                    icon={faCircle}
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    className="w-fit text-alert-color"
                    icon={faCircle}
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    className="w-fit text-dark-text-color"
                    icon={faCircle}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
