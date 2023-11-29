import { Link } from "react-router-dom";
import { formatDate } from "../formatDate";
import Markdown from "react-markdown";

const Post = ({
  _id: id,
  title,
  subTitle,
  createdAt,
  author,
  authorImg,
  blogImg,
  blogDesc,
  category,
}) => {
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <Link to={`../${category}/${id}`}>{title}</Link>
          </h2>
          <p>{subTitle}</p>
        </div>
        <div className="meta">
          <time className="published">{formatDate(createdAt)}</time>
          <p className="author">
            <span className="name">{author}</span>
            <img src={authorImg} alt={author} loading="lazy" />
          </p>
        </div>
      </header>

      <img className="image featured" src={blogImg} alt={title} />

      <Markdown className="mini-desc">{blogDesc}</Markdown>

      <footer>
        <ul className="actions">
          <li>
            <Link to={`/${category}/${id}`} className="button large">
              Continue Reading
            </Link>
          </li>
        </ul>
        <ul className="stats">
          <li>
            <p>{category}</p>
          </li>
        </ul>
      </footer>
    </article>
  );
};

export default Post;
