import axios from "axios";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});
export const setProductList = (products) => {
  return {
    type: "SET_PRODUCT_LIST",
    payload: products,
  };
};

export const setTotalProductCount = (count) => {
  return {
    type: "SET_TOTAL_PRODUCT_COUNT",
    payload: count,
  };
};

export const setPageCount = (count) => {
  return {
    type: "SET_PAGE_COUNT",
    payload: count,
  };
};

export const setActivePage = (page) => {
  return {
    type: "SET_ACTIVE_PAGE",
    payload: page,
  };
};

export const setFetchState = (fetchState) => {
  return {
    type: "SET_FETCH_STATE",
    payload: fetchState,
  };
};

export const fetchProducts = (queryParams) => (dispatch) => {
  dispatch(setFetchState("FETCH_PRODUCTS"));
  return new Promise((resolve, reject) => {
    instance
      .get("/products", { params: queryParams })
      .then((res) => {
        const products = res.data;
        dispatch(setProductList(products));
        dispatch(setFetchState("FETCHED"));
        resolve();
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch(setFetchState("FAILED"));
        reject(error);
      });
  });
};
