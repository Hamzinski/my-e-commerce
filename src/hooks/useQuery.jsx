import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/ProductAction";
import { useHistory } from "react-router-dom";
const useQuery = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [category, setCategory] = useState();
  // const [gender, setGender] = useState();
  const [filterText, setFilterText] = useState();
  const [filterSort, setFilterSort] = useState();
  const [paginationLimit, setPaginationLimit] = useState(25);
  const [paginationOffSet, setPaginationOffSet] = useState(0);

  const getQueryDatawithCategory = (category, gender) => {
    getQueryData(category, gender);
  };

  const getQueryFromUrl = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const categoryParam = urlSearchParams.get("category");
    const filterTextParam = urlSearchParams.get("filter");
    const filterSortParam = urlSearchParams.get("sort");
    const paginationLimit = urlSearchParams.get("limit");
    const paginationOffSet = urlSearchParams.get("offset");
    const myObject = {
      category: categoryParam || null,
      filter: filterTextParam || null,
      sort: filterSortParam || null,
      limit: paginationLimit || null,
      offset: paginationOffSet || null,
    };
    dispatch(fetchProducts(myObject)).then(() => {
      setLoading(false);
    });
  };

  const getQueryData = (category, gender) => {
    const myObject = {
      category: category || null,
      filter: filterText || null,
      sort: filterSort || null,
      limit: paginationLimit || null,
      offset: paginationOffSet || null,
    };
    setLoading(true);

    dispatch(fetchProducts(myObject)).then(() => {
      setLoading(false);
    });
    const queryParams = new URLSearchParams();
    if (filterText) queryParams.append("filter", filterText);
    if (filterSort) queryParams.append("sort", filterSort);
    if (category) queryParams.append("category", category);
    if (paginationLimit) queryParams.append("limit", paginationLimit);
    if (paginationOffSet) queryParams.append("offset", paginationOffSet);
    const queryString = queryParams.toString();
    let fullUrl = "";
    if (queryString) {
      if (gender && gender === "k") {
        fullUrl = `/shopping/women/products?${queryString}`;
      } else if (gender && gender === "e") {
        fullUrl = `/shopping/men/products?${queryString}`;
      } else {
        fullUrl = `/shopping/products?${queryString}`;
      }
    }
    if (fullUrl) {
      history.push(fullUrl);
    }
  };

  const getQueryDataCategory = (category) => {
    const myObject = {
      category: category || null,
      filter: filterText || null,
      sort: filterSort || null,
    };
    setLoading(true);

    dispatch(fetchProducts(myObject)).then(() => {
      setLoading(false);
    });
  };

  return {
    data,
    loading,
    error,
    getQueryData,
    setFilterText,
    setFilterSort,
    getQueryDatawithCategory,
    getQueryFromUrl,
    getQueryDataCategory,
    setPaginationOffSet,
    paginationOffSet,
    paginationLimit,
  };
};

export default useQuery;
