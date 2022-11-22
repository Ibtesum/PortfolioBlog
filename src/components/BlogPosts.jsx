import React from "react";
import { Link } from "react-router-dom";

const BlogPosts = ({ blogs, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {blogs.map((blg) => (
          <li key={blg.id}>
            <Link to={`/blogs/${blg.id}`}>
              <h2>{blg.title}</h2>
            </Link>
            <p>Written by: {blg.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
