import React, { useState, useEffect } from "react";

function UseEfComponent2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    // window.addEventListener("resize", handleResize);
    // console.log("Event Listener Added");



    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;

        return () => {
            document.title = "React App";
        }
    }, [width, height])


    return (
    <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>
    )
}

export default UseEfComponent2;