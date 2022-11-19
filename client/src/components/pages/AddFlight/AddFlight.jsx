import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

function AddFlight() {
  const [FlightNum,setFlightNum] = useState("")
  const [land,setLandTime] = useState("")
  const [from,setFrom] = useState("")
  const [to,setTo] = useState("")
  const [takeOff,setTakeOffTime] = useState("")
  
  const sellUserFlight = (e)=>{
    e.preventDefault()
    try {
       fetch('http://localhost:5000/flights/createFlight',{
        method:'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body:JSON.stringify({flightNum:FlightNum,
          departFrom:from,
          landOn:to,
          ETAtime:takeOff,
          arrivalTime:land
        })
      })
    } catch (error) {
      console.log(error);
    }
  }
  // "id": 2,
  // "flightNum": 4565,
  // "departFrom": "TLV",
  // "landOn": "NY",
  // "numOfSits": 50,
  // "ETAtime": "12:00",
  // "arrivalTime": "2300",
  // "isFirstClass": true,
  // "sitsAvailable": 8
  const handleFlightNumber=(e)=>{
    console.log(FlightNum);
    setFlightNum(e.target.value);
  }

  const handleFrom =(e)=>{
    setFrom(e.target.value)
  }

  const handleTo =(e)=>{
    setTo(e.target.value)
  }

  const handleTakeOffTime = (e)=>{
    setTakeOffTime(e.target.value)
  }
  const handleLandTime= (e)=>{
    setLandTime(e.target.value)
  }
  return (
    <Container  className='m-5'>

    <Form onSubmit={sellUserFlight}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Flight Number</Form.Label>
        <Form.Control onChange={handleFlightNumber}  placeholder="Enter Flight Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>From</Form.Label>
        <Form.Control  onChange={handleFrom} placeholder="From?" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>To</Form.Label>
        <Form.Control  onChange={handleTo} placeholder="To?" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>TakeOff Time</Form.Label>
        <Form.Control onChange={handleTakeOffTime} type="time" placeholder="What time does the flight take off?" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ETA</Form.Label>
        <Form.Control onChange={handleLandTime} type="time" placeholder="What time does the flight land on?" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default AddFlight;
