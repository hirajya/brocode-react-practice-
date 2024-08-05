import React, { useState } from 'react';

function GabComponent() {
  const [count, setCount] = useState(0);
  const [imgSrc, setImgSrc] = useState('src/assets/gabgising.jpg'); // Initial image

  const handleClick = (e) => {
    if (count < 3) {
      setCount(count + 1);
      e.target.textContent = `Gatas lods😘 naka ${count + 1} kana`;
    } else if (count >= 3 && count < 5) {
      setCount(count + 1);
      setImgSrc('src/assets/gabgoods.png'); // Maintain the second image
      e.target.textContent = `Oops sobra nayan boss 🥱 ${count + 1} kana`;
    } else {
      setImgSrc('src/assets/gablogtu.jpg'); // Change to the third image
      e.target.textContent = `Natulog na si boss 🥱 tangina`;
    //   e.target.disabled = true;
    }
  };

  return (
    <>
      <img className="picgab" src={imgSrc} alt="Gab Image" />
      <h1></h1>
      <button onClick={(e) => handleClick(e)}>Pogi inom gatas 😘</button>
    </>
  );
}

export default GabComponent;
