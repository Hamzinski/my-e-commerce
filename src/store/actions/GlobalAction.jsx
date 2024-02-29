import axios from "axios";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export const setRoles = (roles) => {
  return {
    type: "SET_ROLES",
    payload: roles,
  };
};

export const setCategories = (categories) => {
  return {
    type: "SET_CATEGORIES",
    payload: categories,
  };
};

export const setTheme = (theme) => {
  return {
    type: "SET_THEME",
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: "SET_LANGUAGE",
    payload: language,
  };
};

export const fetchRoles = () => (dispatch) => {
  instance.get("/roles").then((res) => {
    dispatch(setRoles(res.data));
  });
};

export const fetchCategories = () => (dispatch) => {
  instance.get("/categories").then((res) => {
    const categories = res.data;
    dispatch(setCategories(categories));
    console.log(categories);
  });
};
