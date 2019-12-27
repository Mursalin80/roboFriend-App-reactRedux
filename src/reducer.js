// search reducer
const initStateSearch = {
  searchField: ""
};

export const searchFieldReducer = (state = initStateSearch, action = {}) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return Object.assign({}, state, { searchField: action.payload });
      break;
    default:
      return state;
      break;
  }
};

// Robots load reducer
const initStateRobots = { isPending: false, robots: [], error: "" };

export const requestRobots = (state = initStateRobots, action = {}) => {
  switch (action.type) {
    case "REQUEST_ROBOTS_SUCCESS":
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });
      break;
    case "REQUEST_ROBOTS_PENDING":
      return Object.assign({}, state, { isPending: true });
      break;
    case "REQUEST_ROBOTS_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
      break;
    default:
      return state;
      break;
  }
};
