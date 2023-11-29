import { formatDate } from "../formatDate";
import Markdown from "react-markdown";

const SinglePost = ({
  title,
  subTitle,
  createdAt,
  author,
  authorImg,
  authorAlt,
  blogImg,
  blogAlt,
  blogDesc,
  category,
}) => {
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className="meta">
          <time className="published">{formatDate(createdAt)}</time>
          <p className="author">
            <span className="name">{author}</span>
            <img src={authorImg} alt={authorAlt} />
          </p>
        </div>
      </header>
      <span className="image featured">
        <img src={blogImg} alt={blogAlt} />
      </span>
      <Markdown>{blogDesc}</Markdown>
      <footer>
        <ul className="stats">
          <li>
            <p>{category}</p>
          </li>
        </ul>
      </footer>
    </article>
  );
};

export default SinglePost;
