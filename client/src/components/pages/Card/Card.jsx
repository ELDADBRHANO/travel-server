import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Card.css'
// "id": 2,
// "flightNum": 4565,
// "departFrom": "TLV",
// "landOn": "NY",
// "numOfSits": 50,
// "ETAtime": "12:00",
// "arrivalTime": "2300",
// "isFirstClass": true,
// "sitsAvailable": 8
const Cardf = ({ flight }) => {
  return (
<div className="col-4 mt-5">


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
