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

  // useEffect(() => {
  //   getQueryData();
  // }, [category]);

  const getQueryDatawithCategory = (category, gender) => {
    getQueryData(category, gender);
  };

  const getQueryData = (category, gender) => {
    const myObject = {
      category: category || null,
      filter: filterText || null,
      sort: filterSort || null,
    };
    setLoading(true);

    dispatch(fetchProducts(myObject)).then(() => {
      setLoading(false);
    });
    const queryParams = new URLSearchParams();
    if (filterText) queryParams.append("filter", filterText);
    if (filterSort) queryParams.append("sort", filterSort);
    if (category) queryParams.append("category", category);
    const queryString = queryParams.toString();
    const fullUrl =
      queryString &&
      `/shopping${
        gender && gender === "k" ? "/women" : "/men"
      }/products?${queryString}`;
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
    getQueryDatawithCategory,
  };
};

export default useQuery;
