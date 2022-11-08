import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import AddUser from './components/user/AddUser';
import Navbar from './components/layout/Navbar';
import EditUser from './components/user/EditUser';
import User from './components/user/User';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';




function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Routes>

          <Route path='/' element={<Home/>} />
          
          <Route path='/about' element={<About/>} />
          
          <Route path='/contact' element={<Contact/>} />

          <Route path='/users/add' element={<AddUser/>} />

          <Route path='/user/edit/:id' element={<EditUser/>} />

          <Route path='/user/:id' element={<User/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
