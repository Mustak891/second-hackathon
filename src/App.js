import './App.css';
import React from 'react';
import ResponsiveAppBar  from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import { Search } from './components/search';
import { Camera } from './components/camera';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, useNavigate } from "react-router-dom";
import AddCamera from './components/addcamera';
import UpdateCamera from './components/updatecamera';
import Cart from './components/cart';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
       <Route path='/home' element={[<ResponsiveAppBar />, <Search />, <Home />, <Camera />]} /> 
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

function Login() {
  const navigate = useNavigate();
  const routerChange = () => {
    navigate('/home');
  }
  return (
    <div className="Login">
      <Card sx={{ minWidth: 275 }}>
      <h1 style={{ fontFamily: 'Lato', display: 'flex', justifyContent: 'center', color: 'rgb(40, 40, 146)' }}>Login</h1>
      <CardContent>
        <Typography sx={{ fontSize: 14, margin: '10px', marginBottom: '10px' }} color="text.secondary" gutterBottom>
        Login to your account
        </Typography>
        <Typography variant="body1" style={{margin: '10px'}}>
        <TextField
          required
          id="outlined-required"
          label="username"
          defaultValue="Admin User"
        />
        </Typography>
        <Typography variant="body2" style={{margin: '10px'}}>
        <TextField
          type="password"
          required
          id="outlined-required"
          label="password"
          defaultValue="Hello World"
        />
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'center'}}>
      <Fab variant="extended" style={{marginBottom: '10px'}} onClick={routerChange}>
        <LoginIcon sx={{ mr: 1 }} />
        Login
      </Fab>
      </CardActions>
    </Card>
    </div>
  );
}

export default App;
