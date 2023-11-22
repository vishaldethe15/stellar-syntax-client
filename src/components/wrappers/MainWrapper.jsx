import { useGlobalContext } from "../../Context";

const MainWrapper = ({ children }) => {
  const { isMenuOpen } = useGlobalContext();
  return (
    <div id="wrapper" className={`${isMenuOpen ? "is-menu-visible" : " "}`}>
      {children}
    </div>
  );
};

export default MainWrapper;
