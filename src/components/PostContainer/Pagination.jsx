import { useGlobalContext } from "../../Context";

const Pagination = ({ limit }) => {
  const { pageNumber, incrementPageNumber, decrementPageNumber } =
    useGlobalContext();

  return (
    <ul className="actions pagination">
      <li>
        <button
          onClick={decrementPageNumber}
          className={
            pageNumber > 0
              ? `button large previous`
              : `disabled button large previous`
          }
        >
          Previous Page
        </button>
      </li>

      <li>
        <button
          onClick={incrementPageNumber}
          className={
            limit == 0 ? "disabled button large next" : "button large next"
          }
        >
          Next Page
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
