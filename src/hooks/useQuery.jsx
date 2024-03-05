import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/ProductAction";
import { useHistory } from "react-router-dom";
const useQuery = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState();
  const [filterText, setFilterText] = useState();
  const [filterSort, setFilterSort] = useState();
  const myObject = {
    category: category || null,
    filter: filterText || null,
    sort: filterSort || null,
  };
  useEffect(() => {
    getQueryData();
  }, [category]);
  const getQueryData = () => {
    dispatch(fetchProducts(myObject));
    const queryParams = new URLSearchParams();
    if (filterText) queryParams.append("filter", filterText);
    if (filterSort) queryParams.append("sort", filterSort);
    if (category) queryParams.append("category", category);
    const queryString = queryParams.toString();
    const fullUrl = queryString && `/shopping/products?${queryString}`;
    if (fullUrl) {
      history.push(fullUrl);
    }
  };
  return {
    data,
    loading,
    error,
    getQueryData,
    setFilterText,
    setFilterSort,
    setCategory,
  };
};

export default useQuery;
