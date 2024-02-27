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
