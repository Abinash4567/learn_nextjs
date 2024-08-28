'use client';

import {useEffect, useRef, useState} from "react";

export default function Dashboard(){
    console.log("Hello");
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    console.log(inputRef);

    return (
        <>
            <input ref={inputRef} className="bg-green-600 font-bold" value={value} onChange={(event)=>setValue(event.target.value)} type="password" />
            <div>{value}</div>
        </>
    )
}