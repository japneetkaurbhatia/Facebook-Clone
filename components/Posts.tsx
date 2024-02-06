import React from "react";
import Post from "./Post";

const Posts = () => {

  return (
    <div>
      {[1,2].map((post) => (
        <Post />
      ))}
    </div>
  );
};

export default Posts;