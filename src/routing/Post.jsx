import React from "react";
import { useParams } from "react-router-dom"

const Post = () => {
    const params=useParams();
    console.log(params);
  return (
    <div className="container" style={{ backgroundColor: "grey" }}>
      <h2>Post ::: {params && params.key}</h2>
    </div>
  );
};

export default Post;
