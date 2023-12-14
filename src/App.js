import "./App.css";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<><Header/> <Home /></>}/>
          <Route path="/checkout" element={<><Header/><CheckOut/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
