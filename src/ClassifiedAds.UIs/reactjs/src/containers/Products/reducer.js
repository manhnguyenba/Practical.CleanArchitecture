import { updateObject } from "../../shared/utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  products: [],
  product: {
    name: "",
    code: "",
    description: ""
  },
  loading: false,
  saved: false,
  error: null
};

/// Products
const fetchProductsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchProductsSuccess = (state, action) => {
  return updateObject(state, {
    products: action.products,
    loading: false
  });
};

const fetchProductsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

/// Products

/// Product
const fetchProductStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchProductSuccess = (state, action) => {
  return updateObject(state, {
    product: action.product,
    loading: false
  });
};

const fetchProductFail = (state, action) => {
  return updateObject(state, { loading: false });
};

/// Product

const saveProductStart = (state, action) => {
  return updateObject(state, { loading: true, saved: false });
};

const saveProductSuccess = (state, action) => {
  return updateObject(state, {
    product: action.product,
    loading: false,
    saved: true
  });
};

const saveProductFail = (state, action) => {
  return updateObject(state, { loading: false, saved: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return fetchProductsStart(state, action);
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_FAIL:
    case actionTypes.FETCH_PRODUCT_START:
      return fetchProductStart(state, action);
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return fetchProductSuccess(state, action);
    case actionTypes.FETCH_PRODUCT_FAIL:
      return fetchProductFail(state, action);
    case actionTypes.UPDATE_PRODUCT:
      return updateObject(state, { product: action.product });
    case actionTypes.RESET_PRODUCT:
      return updateObject(state, initialState);
    case actionTypes.SAVE_PRODUCT_START:
      return saveProductStart(state, action);
    case actionTypes.SAVE_PRODUCT_SUCCESS:
      return saveProductSuccess(state, action);
    case actionTypes.SAVE_PRODUCT_FAIL:
      return saveProductFail(state, action);
    default:
      return state;
  }
};

export default reducer;