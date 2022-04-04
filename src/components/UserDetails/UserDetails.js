import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UserDetails = (props) => {
  const { userID } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const history = useHistory();

  const handelClick = () => {
    history.push(`/post/`);
  };

  return (
    <>
      <div className="p-2 d-flex justify-content-center mt-5">
        <Card className="user_details__card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>User Details</Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {" "}
              <span className="fw-bold">ID: </span>
              {user.id}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="fw-bold">username: </span>
              {user.username}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="fw-bold">Name: </span>
              {user.name}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="fw-bold">Email: </span>
              {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="fw-bold">Phone: </span>
              {user.phone}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="fw-bold">Website: </span>
              {user.website}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <div className="d-flex justify-content-end ">
              <Button
                onClick={() => handelClick()}
                className="post__card__details "
                variant="primary"
              >
                Back
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default UserDetails;
