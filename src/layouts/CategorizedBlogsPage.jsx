import React, { lazy, Suspense } from "react";

import MainWrapper from "../components/wrappers/MainWrapper";
import SidebarWrapper from "../components/wrappers/SidebarWrapper";
import PostsWrapper from "../components/wrappers/PostsWrapper";
import FeaturedPostWrapper from "../components/wrappers/FeaturedPostWrapper";
import Intro from "../components/Intro";
import Menu from "../components/Navbar/Menu";
import About from "../components/Sidebar/About";
//import Post from "../components/PostContainer/Post";
import Pagination from "../components/PostContainer/Pagination";
//import MiniPost from "../components/Sidebar/MiniPost";
import Loader from "../components/loader";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { useFetch } from "../hooks/useFetch";

const Post = lazy(() => import("../components/PostContainer/Post"));
const MiniPost = lazy(() => import("../components/Sidebar/MiniPost"));

const CategorizedBlogsPage = () => {
  const { categories } = useParams();

  const { width } = useGlobalContext();

  const url = `http://localhost:3300/api/v1/blogs/${categories}`;

  const { data, loading, error } = useFetch(url);

  const blogData = data?.blogs;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <MainWrapper>
      <Menu />

      <PostsWrapper>
        {width <= 1280 ? <Intro /> : null}

        {blogData?.map((blog) => {
          return (
            <Suspense fallback={<Loader />}>
              <Post key={blog._id} {...blog} />
            </Suspense>
          );
        })}

        <Pagination />
      </PostsWrapper>

      <SidebarWrapper>
        {width > 1280 ? <Intro /> : null}
        <FeaturedPostWrapper>
          {blogData?.map((blog) =>
            blog.featured ? (
              <Suspense fallback={<Loader />}>
                <MiniPost key={blog._id} {...blog} />
              </Suspense>
            ) : null
          )}
        </FeaturedPostWrapper>

        <About />
      </SidebarWrapper>
    </MainWrapper>
  );
};

export default CategorizedBlogsPage;
