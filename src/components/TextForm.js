import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");

    }
     const handleClearClick =()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared", "success");

    }
    const handleSentenceCaseClick = () => {
        let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
        setText(newText);
        props.showAlert("Converted to sentence case!", "success");

    };
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied to clipboard!", "success");

    };

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces has been removed!", "success");

    };
    
   

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className= "container" style={{color: props.mode==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleSentenceCaseClick}>Sentence Case</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>RemoveExtra Spaces</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words, {text.length} characters </p>
    <p>{0.008*text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
  </div>
  </>
  )
}
