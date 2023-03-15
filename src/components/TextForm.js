import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Button was clicked");
        setText("You have clicked on Button")
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter Text here');

    return ( 
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Click check</button>
        </>
    )
}
