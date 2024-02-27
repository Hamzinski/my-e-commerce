const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "NOT_FETCHED",
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
        fetchState: "FETCHED",
      };

    case "SET_TOTAL_PRODUCT_COUNT":
      return {
        ...state,
        totalProductCount: action.payload,
      };

    case "SET_PAGE_COUNT":
      return {
        ...state,
        pageCount: action.payload,
      };

    case "SET_ACTIVE_PAGE":
      return {
        ...state,
        activePage: action.payload,
      };

    case "SET_FETCH_STATE":
      return {
        ...state,
        fetchState: action.payload,
      };

    case "FETCH_PRODUCTS":
      return {
        ...state,
        fetchState: "FETCHING",
      };

    case "FETCH_PRODUCTS_FAILED":
      return {
        ...state,
        fetchState: "FAILED",
      };

    default:
      return state;
  }
};

export default ProductReducer;
