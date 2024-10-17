import { useState, useEffect } from "react";

const UseEffectForGetApiDummyData = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://dummyjson.com/posts");
        /// basic validate
        if (!res.ok === 200) return;
        const data = await res.json();
        setIsLoading(false);
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (load) fetchPosts();
  }, [load]);

  return (
    <div>
      <h1>UseEffect For Get Api Dummy Data</h1>

      {isLoading & load
        ? "Loading..."
        : posts.map((post) => <li key={post.id}>{post.title}</li>)}

      <input
        type="checkbox"
        checked={load}
        onChange={(e) => {
          setLoad(e.target.checked);
        }}
      />
    </div>
  );
};

export default UseEffectForGetApiDummyData;
