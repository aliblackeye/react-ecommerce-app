import { createContext, useReducer } from "react";
import themeReducer from "./themeReducer";

const values = {
  darkMode: false,
};

export const Context = createContext(values);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, values);

  return (
    <Context.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </Context.Provider>
  );
};
