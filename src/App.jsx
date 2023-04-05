import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LayOut from "./LayOut/Layout";
import Map from "./Pages/Mab/Map";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" exact element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="locations" exact element={<Map />} />
            <Route path="*" element={<Error />} />
      
    </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
