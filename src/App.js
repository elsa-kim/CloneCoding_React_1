import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
