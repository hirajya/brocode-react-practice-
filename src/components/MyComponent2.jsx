import React, { useState } from "react";

function MyComponent2() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <p>Name: {name}</p>
      <input value={name} onChange={handleNameChange} />
      <p>Quantity: {quantity}</p>
      <input value={quantity} onChange={handleQuantityChange} type="number" />

      <p>Comment: {comment}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter Delivery Instruction"
      >
        {" "}
      </textarea>

      <p>Payment Method: {payment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Gift Card">Gift Card</option>
      </select>

      <p>Shipping Method: {shipping}</p>
      <label><input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>Pick Up</label>
      <br />
      <label><input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>Delivery</label>

    </>
  );
}

export default MyComponent2;
