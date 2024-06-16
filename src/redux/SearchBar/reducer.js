import { SEARCH_ITEM } from "./actionType";
import ecommData from "../../ProductData/ProductData";

const initialState = {
  product: ecommData,
};

export const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ITEM: {
      return {
        ...state,
        product: state.product.filter(
          (ele) =>
            ele.types
              .toLocaleLowerCase()
              .includes(payload.toLocaleLowerCase()) ||
            ele.brand.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
        ),
      };
    }
    default:
      return state;
  }
};
