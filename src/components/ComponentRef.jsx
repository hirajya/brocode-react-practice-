import React, {useState, useEffect, useRef} from "react";

function ComponentRef() {
    // let [number, setNumber] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    // console.log(ref)

    useEffect(() => {
        console.log("Component Rendered");

    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return (<>
    <div>
        <button onClick={handleClick1}>CLick me1!</button><br />
        <input ref={inputRef1} />

        <br />

        <button onClick={handleClick2}>CLick me2!</button><br />
        <input ref={inputRef2} />

        <br />

        <button onClick={handleClick3}>CLick me3!</button><br />
        <input ref={inputRef3} />

        <br />
    </div>
    </>);
}

export default ComponentRef;