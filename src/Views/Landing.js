import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../scss/Landing.scss";

const Landing = ({ modifyUsername, username }) => {
  const [roomCode, setRoomCode] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);

  const redirect = () => {
    if (roomCode === "FV12" && username) {
      setIsRedirect(true);
    }
  };

  if (isRedirect) {
    return <Redirect to="/chat" />;
  }

  return (
    <div className="landing">
      <Form>
        <Form.Group
          controlId="username"
          onChange={(e) => modifyUsername(e.target.value)}
        >
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Enter your username" />
        </Form.Group>

        <Form.Group
          controlId="room"
          onChange={(e) => setRoomCode(e.target.value)}
        >
          <Form.Label>Room Code</Form.Label>
          <Form.Control placeholder="Enter a room code" />
        </Form.Group>
      </Form>

      <Button variant="primary" type="submit" onClick={() => redirect()}>
        Submit
      </Button>
    </div>
  );
};

export default Landing;
