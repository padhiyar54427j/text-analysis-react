import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was Clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLoClick = ()=>{
    // console.log("UpperCase was Clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }

  const handleClClick = ()=>{
    // console.log("UpperCase was Clicked: " + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text has been Clear", "success");
  }

  const handleFirstCapitalClick = ()=>{
    // console.log("UpperCase was Clicked: " + text);
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("Only First word first letter become capital", "success");
  }

  const handleCapitalClick = ()=>{
    // console.log("UpperCase was Clicked: " + text);
    const newText = text.toLowerCase().split(' ').map(word=>{
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    setText( newText);
    props.showAlert("First letter of every word become capital", "success");
  }
  
  const handleCopyClick = () => {
    // var text = document.getElementById("myBox"); 
    // text.select();
    navigator.clipboard.writeText(text); // text.value if comment enabled 
    // document.getSelection().removeAllRanges();
    props.showAlert("Senetence has been copied to clipbpoard", "success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(' '));
    props.showAlert(" ExtraSpaces has been removed from in between the Senetence ", "success");
  }
  
  const handleOnChange = (event)=>{
    // console.log("On Changed");
    setText( event.target.value);
  }

  const [text, setText] = useState("");
  // text = "new text" // wrong way to change state
  // setText("new text"); // Correct way to change state
  
  return (
    <>
      <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#042743'}} >
      <h2 className='mb-2'>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} 
                  style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white', 
                          color:props.mode === 'dark' ? 'white' : '#042743'}} 
                  id="myBox" rows="5" >
        </textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}  > Convert to Uppercase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}  > Convert to LowerCase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClClick}  > Clear Text </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFirstCapitalClick}  > Only First CapitalizedCase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalClick}  > Every First CapitalizedCase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}  > Copy Text </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}  > Remove Extra Spaces </button>
    </div> 
    
      <div className="container my-2" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
      
      <h2> Your text Summary</h2>
      <p> {text.split(/\s+/).filter((element) => {return element.length!==0;}).length} words and {text.length} Charactors </p>
      <p> {0.008 * text.split(" ").filter((element)=> {return element.length!==0;}).length} Minutes read </p>
      
      <h2> Preview </h2>
      <p> {text.length>0?text:'Nothing to preview'} </p>
    </div>
    </>
  );
}