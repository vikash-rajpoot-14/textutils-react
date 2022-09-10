import React, { useState } from 'react'

export default function Textform(props) {
    const [text,setText] = useState("Enter text here");
    
    const handleUpClick1=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleUpClick2=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleUpChange=(event)=>{
        setText(event.target.value);
    }
   
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3 w-85">
                <textarea className="form-control" style={{backgroundColor:props.mode==="light"?"dark":"light",color:props.mode==="light"?"dark":"light"}} value={text} placeholder="enter text here" onChange={handleUpChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick1}>Convert to Uppercase</button>
            <button  className="btn btn-primary mx-2" onClick={handleUpClick2}>Convert to LowerCase</button>
            <button  className="btn btn-primary mx-2" onClick={()=>setText(" ")}>Clear</button>
        </div>
        <div className="container my-3 "><h3>Your Summary</h3></div>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <b>{0.0008*(text.split(" ").length)} minutes time taken</b>
        <h2>Preview</h2>
        <p>{text}</p>
        </>
    )
}
