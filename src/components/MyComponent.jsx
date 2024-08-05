import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [employed, setEmployed] = useState(false);

  const updateName = () => {
    setName("John");
  };

  const decrement = () => {
    setAge(age - 1);
  };

  const increment = () => {
    setAge(age + 1);
  };

  const to0 = () => {
    setAge(0);
  };

  const updateEmployed = () => {
    setEmployed(!employed);
  }

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={decrement}>-</button>
      <button onClick={to0}>0</button>
      <button onClick={increment}>+</button>
      <p>Employed: {employed ? "Yes" : "No"}</p>
      <button onClick={updateEmployed}>Toggle Status</button>
    </>
  );
}

export default MyComponent;
