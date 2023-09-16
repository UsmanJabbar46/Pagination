import React from 'react';
import classes from "./Post.module.css"
function Post({ posts, loading }) {
  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
           <h2>My data </h2>
             <ul className={classes.list}>
                  {posts.map((post) => (
                     <li key={post.id} className={classes.listItem}>
                       {post.title} {/* Corrected 'posts.title' to 'post.title' */}
                      </li>
      ))}
              </ul>
    </>
   
  );
}

export default Post;

