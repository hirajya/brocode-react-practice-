import React, { useState } from "react";

function ObjState() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Toyota",
    model: "Corolla Altis"
  });

  const handleCarYear = (event) => {
    setCar(c => ({...car, year: event.target.value}));
  };

  const handleCarMake = (event) => {
    setCar(c => ({...car, make: event.target.value}));
  };

  const handleCarModel = (event) => {
    setCar(c=> ({...car, model: event.target.value}));
  };

  return (<>
    <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

    <input type="number" placeholder="Car Year" value={car.year} onChange={handleCarYear}/>
    <br/>
    <input type="text" placeholder="Car Make" value={car.make} onChange={handleCarMake}/>
    <br/>
    <input type="text" placeholder="Car Model" value={car.model} onChange={handleCarModel}/>
  </>);
}

export default ObjState;
