import React, { lazy, Suspense } from "react";
import MainWrapper from "../components/wrappers/MainWrapper";
import SidebarWrapper from "../components/wrappers/SidebarWrapper";
import PostsWrapper from "../components/wrappers/PostsWrapper";
import FeaturedPostWrapper from "../components/wrappers/FeaturedPostWrapper";
import Intro from "../components/Intro";
import Menu from "../components/Navbar/Menu";
import About from "../components/Sidebar/About";
import Pagination from "../components/PostContainer/Pagination";
import Loader from "../components/loader";
import { useGlobalContext } from "../Context";
import { useFetch } from "../hooks/useFetch";

const Post = lazy(() => import("../components/PostContainer/Post"));
const MiniPost = lazy(() => import("../components/Sidebar/MiniPost"));

const HomePage = () => {
  const { width, pageNumber } = useGlobalContext();

  const url = `http://localhost:3300/api/v1/blogs?page=${pageNumber}`;

  const { data, loading, error } = useFetch(url);

  const blogData = data?.blogs;

  const limit = data?.totalPages;

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
            <Suspense key={blog._id} fallback={<Loader />}>
              <Post {...blog} />
            </Suspense>
          );
        })}

        <Pagination limit={limit} />
      </PostsWrapper>

      <SidebarWrapper>
        {width > 1280 ? <Intro /> : null}
        <FeaturedPostWrapper>
          {blogData?.map((blog) =>
            blog.featured ? (
              <Suspense key={blog._id} fallback={<Loader />}>
                <MiniPost {...blog} />
              </Suspense>
            ) : null
          )}
        </FeaturedPostWrapper>

        <About />
      </SidebarWrapper>
    </MainWrapper>
  );
};

export default HomePage;
