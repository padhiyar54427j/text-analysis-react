import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";   
// Above is for REACT ROUTER      

export default function Navbar(props) {
  return (
     <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}> {/*Observe backticks Template Literal*/}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> {props.title} </Link> 
        {/* Above is for FOR REACT ROUTER   OR BELOW    */}
        {/* <a className="navbar-brand" href="/"> {props.title} </a> */}
        {/* Above code is used when we are not using REACT ROUTER */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"> Home </Link> 
                {/* FOR REACT ROUTER   OR BELOW   */}
                {/* <a className="nav-link active" aria-current="page" href="/"> Home </a> */}
                {/* Above code is used when we are not using REACT ROUTER */}
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/about"> {props.aboutText} </Link> 
                {/* FOR REACT ROUTER   OR BELOW   */}
                {/* <a className="nav-link" href="/about"> {props.aboutText} </a> */}
                {/* Above code is used when we are not using REACT ROUTER */}
                </li>

            </ul>

            <div className='d-flex'>
                <div className='bg-primary rounded mx-2' onClick={() => { props.toggleMode('primary') } } style={ {height:'30px', width: '30px', cursor:'pointer'}}>  </div>
                <div className='bg-danger rounded mx-2' onClick={() => { props.toggleMode('danger') } } style={ {height:'30px', width: '30px', cursor:'pointer'}}>  </div>
                <div className='bg-success rounded mx-2' onClick={() => { props.toggleMode('success') } } style={ {height:'30px', width: '30px', cursor:'pointer'}}>  </div>
                <div className='bg-warning rounded mx-2' onClick={() => { props.toggleMode('warning') } } style={ {height:'30px', width: '30px', cursor:'pointer'}}>  </div>
                <div className='bg-light rounded mx-2' onClick={() => { props.toggleMode('light') } } style={ {height:'30px', width: '30px', cursor:'pointer'}}>  </div>
                <div className='bg-dark rounded mx-2' onClick={() => { props.toggleMode('dark') } } style={ {height:'30px', width: '30px', cursor:'pointer'}}>  </div>
            </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTextAnalysis: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About',
  }