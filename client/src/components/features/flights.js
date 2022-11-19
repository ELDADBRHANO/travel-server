import {useEffect, useState} from 'react'
import Cardf from '../pages/Card/Card';

const Flights = ()=>{
  const [flights,setFlights] = useState([]);
  useEffect(() => {
    const fetchFlights = async () => {
      const data = await fetch(
        'http://localhost:5000/flights'
        );
        
        const jsonData = await data.json();
        setFlights(jsonData);
        console.log("xdd");
      };
      
      fetchFlights();
    }, []);
    if(!flights) return null;
    console.log(flights);
    
  return(
    
    <div className='container d-flex justify-content-center  '>
      <div className='row '>

      {
      flights?.map((flight)=>{
        return <Cardf flight={flight}/>
      }
      )
      }
              
              </div>
    </div>
  )
}
export default Flights;

// ETAtime
// : 
// "18:40"
// arrivalTime
// : 
// "23:00"
// departFrom
// : 
// "Israel"
// flightNum
// : 
// 34534
// id
// : 
// 1
// isFirstClass
// : 
// false
// landOn
// : 
// "USA"
// numOfSits
// : 
// 45
// sitsAvailable
// : 
// 20