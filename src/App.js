import './App.css';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState("light");
  const [textMode, settextMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light' && textMode === 'dark') {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor = 'grey';
      settextMode('light');
      document.title = "Textutils - Dark Mode";
    }
    else {
      setMode('light');
      showAlert("Light mode has been enabled", "success")
      document.body.style.backgroundColor = 'white';
      settextMode('dark');
      document.title = "Textutils - Light Mode";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} textMode={textMode} />

<Alert alert={alert} />
      {/* <Router>
        
        <div className="container">
          <Switch>
            <Route  exact path="/about">
              <About />
            </Route>
            
           
            <Route exactl path="/">
              
            </Route>
          </Switch>


        </div>
      </Router> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />


    </>
  );
}

export default App;
