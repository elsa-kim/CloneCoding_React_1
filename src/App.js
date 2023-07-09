import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/app" element={<Sidebar />} />
            <Route path="/app" element={<Chat />} /> */}
            <Route path="/" element={<h1>Home Screen</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
