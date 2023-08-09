export const cardReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
