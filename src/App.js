import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componnents/Footer";
import Header from "./componnents/Header";
import Home from "./componnents/Home";
import Login from "./componnents/Login";
import Signup from "./componnents/Signup";
import Upload from "./componnents/Upload";
import Videos from "./componnents/Videos";


function App() {
 return(
 <Router>

    <Header/>
    
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/videos" element={<Videos/>}/>
    <Route path="/upload" element={<Upload/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
  </Routes>
  <Footer/>

 </Router>
 );

} 

export default App;
