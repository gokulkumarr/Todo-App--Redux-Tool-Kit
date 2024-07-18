import React, { useState } from "react";

const Dummy = () => {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const handleClick = () => {
        setList([...list, text]);
        setText('');
    }

    return(
        <>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleClick}>ADD</button>

        <div className="todo-list-creation">
            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
        </>
    )
}

export default Dummy;