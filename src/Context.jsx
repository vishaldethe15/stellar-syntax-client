import React, { useState, useEffect, useContext } from "react";
import { blogs } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(() => !isSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(() => !isMenuOpen);
  };

  const incrementPageNumber = () => {
    setPageNumber((prev) => (prev += 1));
  };

  const decrementPageNumber = () => {
    if (!pageNumber <= 0) {
      setPageNumber((prev) => (prev -= 1));
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSearchOpen,
        isMenuOpen,
        width,
        toggleSearch,
        toggleMenu,
        blogs,
        pageNumber,
        incrementPageNumber,
        decrementPageNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
