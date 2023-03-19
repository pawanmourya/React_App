import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Button was clicked");
        setText("You have clicked on Button")
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    const handleCopy = () => {
        var text = document.getElementById("Textarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'#000':'#fff'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="Textarea1" rows="3" style={{borderColor: '#1c1c1c', borderRadius: '15px', color: props.mode==='light'?'#000':'#fff', backgroundColor: props.mode==='light'?'#fff':'#212529'}}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Click check</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container py-5">
                <h1  style={{color: props.mode==='light'?'#000':'#fff'}}>Your Text Summary</h1>
                <p  style={{color: props.mode==='light'?'#000':'#fff'}}>{text.split(" ").length} words and {text.length} characters</p>
                <p  style={{color: props.mode==='light'?'#000':'#fff'}}>{0.008 * text.split(" ").length} Minutes to read this sentence</p>
                <h2  style={{color: props.mode==='light'?'#000':'#fff'}}>Preview</h2>
                <p  style={{color: props.mode==='light'?'#000':'#fff'}}>{text.length>0?text: "Enter Sommething to Preview it here"}</p>
            </div>
        </>
    )
}
