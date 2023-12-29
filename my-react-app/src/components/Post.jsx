// AnotherComponent.js
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";


const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-10 w-1/2 pl-8 pr-8">
      {posts.map((posts, index) => (
        <ProfileCard key={index} {...posts} />
      ))}
    </div>
  );
};

export default Post;
