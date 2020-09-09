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

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((sum, item) => sum + parseFloat(item.price), 0);
