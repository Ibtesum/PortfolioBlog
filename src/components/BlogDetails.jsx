import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = ({ blog }) => {
  const {id} = useParams()


  const handleDelete = () => {};
  return (
    <article>
      <h4>this is the parm id : {id}</h4>
      {/* <h2>{blog.title}</h2>
      <p>Written by: {blog.author}</p>
      <div>{blog.body}</div>
      <button onClick={handleDelete}>Delete</button> */}
    </article>
  );
};

export default BlogDetails;
