export const initialState = {
  basket: [],
  user: null,
};

// Reducer is always jsut listening to dispatch
// state: state of the application
// action: what to do? Add to basket, remmove from basket, etc?
const reducer = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
