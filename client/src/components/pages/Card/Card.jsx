import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Card.css'
const Cardf = ({ flight }) => {
  return (
<div className="d-flex justify-content-center col-md-4 col-sm-12 mt-5">
    <Card id="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={flight.image}/>
      <Card.Body>
        <Card.Title> {flight?.flightNum}</Card.Title>
        <Card.Text>
        <Card.Subtitle>From</Card.Subtitle>
          {flight.departFrom}
          </Card.Text>
        <Card.Text>
        <Card.Subtitle>To</Card.Subtitle>
          {flight.landOn}
          </Card.Text>
        <Card.Text>
        <Card.Subtitle>Take Off</Card.Subtitle>
          {flight.ETAtime}
          </Card.Text>
        <Card.Text>
        <Card.Subtitle>ETA</Card.Subtitle>
          {flight.arrivalTime}</Card.Text>
        <Card.Text></Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Cardf;
