import { Link } from "react-router-dom";
import { formatDate } from "../formatDate";

const MiniPost = ({
  _id: id,
  title,
  category,
  createdAt,
  authorImg,
  author,
  blogImg,
}) => {
  return (
    <article className="mini-post">
      <header>
        <h3>
          <Link to={`../${category}/${id}`}>{title}</Link>
        </h3>
        <time className="published">{formatDate(createdAt)}</time>
        <span className="author">
          <img src={authorImg} alt={author} />
        </span>
      </header>
      <span className="image">
        <img src={blogImg} alt={title} />
      </span>
    </article>
  );
};

export default MiniPost;
