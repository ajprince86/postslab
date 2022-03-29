import { useState, useEffect } from "react";
import data from "../FakeData.json";
import PostCard from "../components/PostCard";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  //Its a sideEffect when you render data.
  //We are rendering the data when we first open the Posts page.
  useEffect(() => {
    setPosts(data);
  }, []);

  const renderPosts = () => {
    return posts.map((post, index) => {
      return (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
        />
      );
    });
  };

  return <div className="posts">{renderPosts()}</div>;
}
