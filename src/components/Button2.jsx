function Button2() {
  let count = 0;
  let msg = "Damn shawty😘";
  const handleClick = () => {
    console.log("Damn shawty😘");
  };

  const handleClick2 = () => {
    console.log(`${name} stop clicking me! TANGINA😡`);
  };

  const handleClick3 = () => {
    if (count < 3) {
      count++;
      msg = `QUOTA KANA TANGINA KA😘 naka ${count} kana`;
      console.log(`QUOTA KANA TANGINA KA😘 naka ${count} kana`);
    } else {
      count++;
      msg = `TANGINA ANG KULET TIGIL NA NGA NAKA ${count} KANA!🤬`;
      console.log(`TANGINA ANG KULET TIGIL NA NGA NAKA ${count} KANA!🤬`);
    }
  };

  const handleClick4 = (e) => {
    if (count < 3) {
      count++;
      msg = `QUOTA KANA TANGINA KA😘 naka ${count} kana`;
      e.target.textContent = msg;
    } else {
      count++;
      msg = `TANGINA ANG KULET TIGIL NA NGA NAKA ${count} KANA!🤬`;
      e.target.textContent = msg;
    }
  };

  
  return <button onClick={(e) => handleClick4(e)}>{msg}</button>;
}

export default Button2;
