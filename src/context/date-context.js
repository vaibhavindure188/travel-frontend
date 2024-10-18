import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducer";

const initialState = {
  destination: "",
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  isSearchResultOpen: true,
};

const DateContext = createContext(initialState);

const DateProvider = ({ children }) => {
  const [
    {
      destination,
      guests,
      checkInDate,
      checkOutDate,
      isSearchModalOpen,
      isSearchResultOpen,
    },
    dateDispatch,  // this is user given function name , we can give anyname to it
  ] = useReducer(dateReducer, initialState);

  return (
    <DateContext.Provider
      value={{
        destination,
        guests,
        checkInDate,
        checkOutDate,
        isSearchModalOpen,
        isSearchResultOpen,
        dateDispatch,   // here also
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };
