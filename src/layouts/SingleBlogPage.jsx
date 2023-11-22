import React, { lazy, Suspense } from "react";

import Loader from "../components/loader";
//import ListItem from "../components/Sidebar/ListItem";
//import SinglePost from "../components/SinglePost";
import MainWrapper from "../components/wrappers/MainWrapper";
import PostsWrapper from "../components/wrappers/PostsWrapper";
import RelatedPostWrapper from "../components/wrappers/RelatedPostWrapper";
import SidebarWrapper from "../components/wrappers/SidebarWrapper";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const SinglePost = lazy(() => import("../components/SinglePost"));
const ListItem = lazy(() => import("../components/Sidebar/ListItem"));

const SingleBlogPage = () => {
  const { categories, id } = useParams();

  const url = `http://localhost:3300/api/v1/blogs/${categories}/${id}`;

  const { data, loading, error } = useFetch(url);

  const singleBlogData = data?.blog;

  const tags = singleBlogData?.tags.join(",");

  const relPostsUrl = `http://localhost:3300/api/v1/related-blogs?tags=${tags}`;

  const {
    data: relData,
    loading: relLoading,
    error: relError,
  } = useFetch(relPostsUrl);

  const relatedBlogData = relData?.relatedBlogs;

  if (loading) {
    return <Loader />;
  }
  if (relLoading) {
    return <Loader />;
  }

  if (error && relError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <MainWrapper>
      <PostsWrapper>
        <Suspense fallback={<Loader />}>
          <SinglePost key={singleBlogData} {...singleBlogData} />{" "}
        </Suspense>
      </PostsWrapper>
      <SidebarWrapper>
        <RelatedPostWrapper>
          {relatedBlogData?.map((blog) => {
            return (
              <Suspense fallback={<Loader />}>
                <ListItem key={blog._id} {...blog} />
              </Suspense>
            );
          })}
        </RelatedPostWrapper>
      </SidebarWrapper>
    </MainWrapper>
  );
};

export default SingleBlogPage;
