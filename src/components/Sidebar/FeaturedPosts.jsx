import React from "react";
import MiniPost from "./MiniPost";
import { useGlobalContext } from "../../Context";

const FeaturedPosts = () => {
  const { blogs } = useGlobalContext();

  return (
    <section>
      <div className="mini-posts">
        {blogs.map((blog) =>
          blog.featured ? (
            <MiniPost
              key={blog.id}
              title={blog.title}
              date={blog.date}
              authorImg={blog.authorImg}
              authorAlt={blog.authorAlt}
              blogImg={blog.blogImg}
              blogAlt={blog.blogAlt}
              slug={blog.slug}
            />
          ) : null
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;
