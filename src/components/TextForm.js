import React, { useState } from 'react';


const TextForm = (props) => {
    const handleUpClick = () => {
        console.log("Clicked" + text.toUpperCase());
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLoClick = () => {
        console.log("Clicked" + text.toLowerCase());
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case","success");
    }
    const handleCcClick = () => {
       let newText=text.replace(/(?:^\w|[A-Z]|\b\w)/g,function(word,index){
           return index=0?word.toLowerCase():word.toUpperCase()
       }).replace(/\s+/g, '');
        setText(newText);
        props.showAlert("Converted to Camel Case","success");
    }
    

    const handleOnChange = (event) => {
        setText(event.target.value);


    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>


                <h1>{props.heading} - </h1>
                <div className="my-3">

                    <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCcClick} >Convert to CamelCase</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>
                    Your Text Summary 
                </h2>
                <p>{text.split(" ").length} Words {text.length} Characters</p>
                <p>{0.008*text.split(" ").length} minutes take to read word</p>

                <p>Preview</p>
                <h3>{text.length>0?text:"Enter your text to preview it here"}</h3>
            </div>


        </>


    );
}

export default TextForm;