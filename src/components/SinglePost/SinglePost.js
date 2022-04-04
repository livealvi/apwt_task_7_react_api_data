import React from "react";
import "./SinglePost.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const SinglePost = (props) => {
  const { name, id } = props.post;
  const history = useHistory();

  const handelClick = (userId) => {
    history.push(`/user-details/${userId}`);
  };

  return (
    <>
      <div className="p-2">
        <Card className="post__card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>ID: {id}</Card.Title>
            <Card.Title>Name: {name}</Card.Title>
            <div className="mt-3">
              <Button
                onClick={() => handelClick(id)}
                className="post__card__details"
                variant="primary"
              >
                More details
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SinglePost;
