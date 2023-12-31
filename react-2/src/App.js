import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input"
import Input2 from "./pages/Input2";
import UserList from "./pages/List";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | {" "}
        <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link> | {" "}
        <Link to="/list">List</Link>
        {/* <a href="/">Home</a> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/counter" element={<Counter></Counter>}/>
        <Route path="/input" element={<Input></Input>}/>
        <Route path="/input2" element={<Input2></Input2>}/>
        <Route path="/list" element={<UserList></UserList>}/>
      </Routes>
    </div>
  );
}


export default App;
