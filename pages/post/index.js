import React from "react";

const PostList = ({ posts }) => {
  return <div>{posts.map(post)}</div>;
};

export default PostList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
