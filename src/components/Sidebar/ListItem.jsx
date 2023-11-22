import { Link } from "react-router-dom";
import { formatDate } from "../formatDate";

const ListItem = ({ _id: id, title, category, createdAt, blogImg, slug }) => (
  <ul className="posts">
    <li>
      <article>
        <header>
          <h3>
            <Link to={`/${category}/${id}`}>{title}</Link>
          </h3>
          <time className="published">{formatDate(createdAt)}</time>
        </header>
        <div className="image">
          <img src={blogImg} alt={title} />
        </div>
      </article>
    </li>
  </ul>
);

export default ListItem;
