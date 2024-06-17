import About from "./Components/About";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {  Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextTwister- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextTwister- Light Mode";
    }
  };
  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("purple");
      document.body.style.backgroundColor = "#AD88C6";
      showAlert("Purple mode has been enabled", "success");
      document.title = "TextTwister- Purple Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextTwister- Light Mode";
    }
  };
  const toggleMode3 = () => {
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "#C7DCA7";
      showAlert("Green mode has been enabled", "success");
      document.title = "TextTwister- Green Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextTwister- Light Mode";
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode1={toggleMode1}
          toggleMode2={toggleMode2}
          toggleMode3={toggleMode3}
          key={new Date()}
        />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextTwister - word counter, character counter, remove extra spaces"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
