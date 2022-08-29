import React, { useState } from 'react';

export default function Button(props) {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + props.step);
    };
    return (
        <button className={`btn btn-${props.color ? props.color : 'primary'} w-100`} onClick={handleClick}>+{props.step} - {count}</button>
    )
}
