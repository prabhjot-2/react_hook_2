import React, { useState } from "react";

const App= () =>{
    let newTime=new Date().toLocaleTimeString();

    const [ctime, setTime]=useState(newTime);

    const updateTime=()=>{
        let newCTime=new Date().toLocaleTimeString();
        setTime(newCTime);
    }
    return (
        <>
            <h1>
                {ctime}
            </h1>
            <button onClick={updateTime}>
                Get Time
            </button>
        </>
    );
};

export default App;