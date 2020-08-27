import React from "react";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
