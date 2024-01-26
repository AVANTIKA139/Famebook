import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";

import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/profile" Component={Profile} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
