import React from "react";

const FeaturedPostWrapper = ({ children }) => {
  return (
    <section>
      <h2>Featured Posts</h2>
      <div className="mini-posts">{children}</div>
    </section>
  );
};

export default FeaturedPostWrapper;
