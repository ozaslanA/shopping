export const searchAction = (keyword) => async (dispatch) => {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  dispatch({
    type: "SEARCH",
    payload:
      data.filter((data) => data.title.includes(keyword)) ||
      data.description.includes(keyword) ||
      data.category.includes(keyword),
  });
};
