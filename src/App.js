import './App.css';
import React from 'react';
import ResponsiveAppBar  from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import { Search } from './components/search';
import { Camera } from './components/camera';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
import AddCamera from './components/addcamera';
import UpdateCamera from './components/updatecamera';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={[<ResponsiveAppBar />, <Search />, <Home />, <Camera />]} /> 
       <Route path='/addcamera' element={[<ResponsiveAppBar />, <AddCamera />]} />
       <Route path='/updatecamera' element={[<ResponsiveAppBar />, <UpdateCamera />]} />
       <Route path='/cart' element={[<ResponsiveAppBar />, <Cart />]} />
      </Routes>
    </div> 
  );
}

function Home() {
  return (
    <div className="Home">
    <div className='categories'>
      <h1>categories</h1>
    </div>
    <div className='categories_list'>
      <h3>Camera</h3>
      <div>
        <Link to="/addcamera" style={{ textDecoration: 'none'}}><Button variant="contained"><AddCircleIcon />&nbsp;Add camera</Button></Link>
      </div>
      </div>
    </div>
  );
}

export default App;
