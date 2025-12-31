import React from "react";
import "./App.css";
import ServiceReportLibraryComponent from "./ServiceReportLibraryComponent";
import ServiceReportComponent from "./ServiceReportComponent";
import Header from "./Header";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<ServiceReportLibraryComponent />}
          ></Route>
          <Route path="/create" element={<ServiceReportComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
