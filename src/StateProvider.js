import React, { createContext, useReducer, useContext } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer to every components in the App
// initialState: WHAT is the dataLayer look like at the beginning
// reducer: HOW do we manipulate the dataLayer. Just listens, it knows what to do when something happens.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);
