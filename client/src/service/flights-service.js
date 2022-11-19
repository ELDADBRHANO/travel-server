const getFlights =async ()=>{
  try {
   const res =   await fetch('http://localhost:5000/flights')
  console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export default getFlights;
