export const setSearchField = text => ({
  type: "CHANGE_SEARCH_FIELD",
  payload: text
});

export const requestRobots = dispatch => {
  dispatch({ type: "REQUEST_ROBOTS_PENDING" });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json();
    })
    .then(roboData => {
      dispatch({ type: "REQUEST_ROBOTS_SUCCESS", payload: roboData });
    })
    .catch(err => {
      dispatch({ type: "REQUEST_ROBOTS_FAILED", payload: err });
    });
};
