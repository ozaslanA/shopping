export const productsActionDetail = (id) => async (dispatch) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );
  dispatch({ type: "ADD_CARD", payload: data });
};
