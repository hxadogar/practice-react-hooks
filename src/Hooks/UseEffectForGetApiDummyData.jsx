import React, { useState, useEffect } from "react";

const UseEffectForGetApiDummyData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts");
        const data = await res.json();
        setPosts(data.posts)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>UseEffect For Get Api Dummy Data</h1>

      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};

export default UseEffectForGetApiDummyData;
