import React from 'react'
import { useState } from 'react'
import Alert from './Alert';
export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(" Converted to upper case!!","success");
  }
    const handleLowerClick = ()=>{ 
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert(" Converted to Lower case!!","success");
      ;
  }
  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText)
    props.showAlert(" BOOM!!!The textbox is clear now","success");
    ;
}

const handleinverseClick = () => {
  let newtext = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newtext += text[i];
  }
  setText(newtext);
  props.showAlert(" Converted to inverse case","success");
}; 

const handleCopy = () => {
  navigator.clipboard.writeText(text); 
  props.showAlert(" Copied to clipboard!!!1","success");
}


const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert(" The extra spaces has been removed","success");
  
}
  const handleOnChange = (event)=>{
    setText(event.target.value) 
    
}
const [mode, setMode] = useState('light')
const toggleMode1= () => {
  setMode(prevMode => {
    if (prevMode === 'light') return 'dark';
    if (prevMode === 'dark') return 'light';
  });
};
const toggleMode2 = () => {
  setMode(prevMode => {
    if (prevMode === 'light') return 'purple';
    if (prevMode === 'purple') return 'light';
  });
};
const buttonStyle = {
  light: {
    backgroundColor: '#d3d3d3',
    color: '#000',
    border:'2px solid black' ,
  },
  purple: {
    backgroundColor: '#4b0082', // Dark purple
    color: '#fff',
    border:'2px solid black'
  },
  green: {
    backgroundColor: '#386641', // Dark green
    color: '#fff',
    border:'2px solid black'
  },
};

const toggleMode3 = () => {
  setMode(prevMode => {
    if (prevMode === 'light') return 'brown';
    if (prevMode === 'brown') return 'light';
  });
};

  const [text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{"Enter the text to analyze"}</h1>
         <div className="mb-3 ">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea><br></br>
            </div>
            <button disabled={text.length===0} className={`button btn btn-primary mx-2`} onClick={handleUpClick} toggleMode1={toggleMode1}toggleMode2={toggleMode2} toggleMode3={toggleMode3} style={buttonStyle[props.mode]} >Convert to UpperCase</button>
            <button disabled={text.length===0} className="button btn btn-primary mx-2" onClick={handleLowerClick} toggleMode2={toggleMode2} toggleMode3={toggleMode3} style={buttonStyle[props.mode]}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="button btn btn-primary mx-2" onClick={handleClearClick} toggleMode2={toggleMode2}style={buttonStyle[props.mode]}>Clear Text</button>
            <button disabled={text.length===0} className="button btn btn-primary mx-2" onClick={handleinverseClick} toggleMode2={toggleMode2}style={buttonStyle[props.mode]}>Inverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} toggleMode2={toggleMode2}style={buttonStyle[props.mode]}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} toggleMode2={toggleMode2}style={buttonStyle[props.mode]}>Remove Extra Spaces</button>
        
    </div>
    <div className='container my-5' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length}<b> words</b>  and {text.length} <b>characters</b></p>
      <p>{text.replace(/\n/g, " ").split('.').filter(value => value !== "").length} Number of sentences</p>
      <p>{0.008 * text.split("").length}minutes reading </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:" Write some thing to get preview!!"}</p>
    </div>
    </>
  )
}
