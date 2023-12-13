import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";   
// ABOVE IS FOR REACT ROUTER   

function App() {
    const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  
    const [alert, setAlert] = useState(null);
    
    const showAlert = (message, type) => {
      setAlert({
        msg : message,
        type : type,
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  
    const removeBodyClasses = () => {
      document.body.classList.remove( 'bg-light' )
      document.body.classList.remove( 'bg-dark' )
      document.body.classList.remove( 'bg-warning' )
      document.body.classList.remove( 'bg-danger' )
      document.body.classList.remove( 'bg-success' )
    }
  
    const toggleMode = (cls) => {
      removeBodyClasses();
      console.log(cls)
      document.body.classList.add( 'bg-' + cls )
      if( mode === 'light' ){
        setMode("dark");
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode has been enabled", "success");
        // document.title = 'TextAnalysis - DarkMode';
        // setInterval(() => {
        //   document.title = 'TextAnalysis is Amazing';
        // }, 3000);
        // setInterval(() => {
        //   document.title = 'Install TextAnalysis now ';
        // }, 2000);
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled", "success")
        // document.title = 'TextAnalysis - LightMode';
      }
    }

  return (
    // Code inside div is JSX
    <>
    {/* <Navbar title ="TextAnalysis" aboutText="About TextAnalysis" /> */}
    {/* <Navbar /> */}
    <Router>    
    <Navbar title ="TextAnalysis" mode={mode} toggleMode={toggleMode} />

    <Alert alert={alert} />
    <div className="container my-3">

    <Routes>
          {/* /users --> Component 1 WHY to USE EXACT PATH
              /users/home --> Component 2 */}
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading='Try TextAnalysis - Word Counter | Character Counter | Remove extra spaces' mode={mode} /> } /> 
          <Route exact path="/about" element={ <About heading='About Us'mode={mode} /> } />
    </Routes>
    {/* ABOVE IS FOR REACT ROUTER    */}
    {/* <TextForm showAlert={showAlert} heading='Try TextAnalysis - Word Counter | Character Counter | Remove extra spaces' mode={mode} />
    <About heading='About Us'mode={mode} /> */}
    {/* Above code is used when we are not using Router */}

    </div>
    </Router> 
    </>
  );
}

export default App;