import React, { useEffect, useState } from "react";
import "./post.css";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import axios from "axios";
import SinglePost from "../SinglePost/SinglePost";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container>
        <div className="d-flex mt-5 mb-5 flex-wrap">
          {posts.map((post) => (
            <SinglePost key={post.id} post={post}></SinglePost>
          ))}
        </div>
      </Container>
      ;
    </>
  );
};

export default Post;
