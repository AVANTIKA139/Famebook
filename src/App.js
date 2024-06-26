import React from "react";
import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Loginn from "./components/Loginn";
import Profile from "./components/Profile";
import Signup from "./components/Signup";

import NotFound from "./components/NotFound";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Aboutus" Component={Aboutus} />
          <Route path="/Contactus" Component={Contactus} />

          <Route path="/loginn" Component={Loginn} />
          <Route path="/signup" Component={Signup} />
          <Route path="/profile" Component={Profile} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
