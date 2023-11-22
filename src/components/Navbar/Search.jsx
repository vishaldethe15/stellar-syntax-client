import { useGlobalContext } from "../../Context";

const Searchbar = () => {
  const { isSearchOpen, toggleSearch } = useGlobalContext();

  return (
    <li className="search">
      <a className="fa-search" onClick={toggleSearch}>
        Search
      </a>

      <form
        id="search"
        method="get"
        action="#"
        className={isSearchOpen ? "visible" : null}
      >
        <input type="text" name="query" placeholder="Search by Title" />
      </form>
    </li>
  );
};

export default Searchbar;
