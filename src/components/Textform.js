import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick =()=>{
        console.log("UpperCase is clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowClick =()=>{
        console.log("LowerCase is clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearclick =()=>{
        console.log("Clear text is clicked"+text);
        let newText='';
        setText(newText)
    }
    const handleOnChange =(event)=>{
        console.log("Handle On change")
        setText(event.target.value)
    }
    
    const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        {/* <div class="mb-3">
    <label for="myBox" class="form-label">Email address</label>
    <input type="email" class="form-control" id="myBox" placeholder="name@example.com"/>
  </div> */}
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Example textarea</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' ,color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="3"></textarea>
  </div>
  <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2"  onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary"  onClick={handleClearclick}>Clear Text</button>
  </div>
  <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>your text summary</h2>
   <p>{text.split(" ").length} words and {text.length} characters </p>
   <p>{0.008*text.split(" ").length} minutes to read </p>
   <h3>preview</h3>
   <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
  </>
  )
}
