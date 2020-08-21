import React,{useState,useEffect} from "react";
import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  async function fatchData() {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/posts/")
    ).json();
    setPosts([...response]);
  }

  useEffect(() => {
    fatchData();
  }, []);
  console.log(posts);
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li className="containner" key={post.id}>
            {index + 1}
            <p className="title">Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;
