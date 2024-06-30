import React, { createContext } from "react";

export const dataContext = createContext();

const ContextProvider = (props) => {
  const name1 = "Usman";
  const mobile = "(708) 447-8529";
  const title="Meezan Bank"
  return (
    <dataContext.Provider value={{name1,mobile,title}}>{props.children}</dataContext.Provider>
  );
};
export default ContextProvider;
