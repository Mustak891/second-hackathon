import { useEffect } from "react";
import { useState } from "react";
import { api_url } from "./api_url";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


export function Camera(){

    const navigate = useNavigate();

    const handleEdit = ({id, cameraname, description, price, image}) => {
        localStorage.setItem('id', id);
        localStorage.setItem('cameraname', cameraname);
        localStorage.setItem('description', description);
        localStorage.setItem('price', price);
        localStorage.setItem('image', image);
        navigate('/updatecamera');
      }

      const handleBuy = ({id, cameraname, description, price, image}) => {
        localStorage.setItem('id', id);
        localStorage.setItem('cameraname', cameraname);
        localStorage.setItem('description', description);
        localStorage.setItem('price', price);
        localStorage.setItem('image', image);
        navigate('/cart');
      }

    const [camera, setCamera] = useState([]);

    useEffect(()=>{
        fetch(api_url)
        .then(res => res.json()).then(data => {setCamera(data)})
    },[])

    
    const handleDelete = async (id) => {
        await fetch(api_url + id , {method: 'DELETE'})
        setCamera(camera.filter(data => data.id !== id))
        } 

    return(
        <div className='camera'>
          {camera.map(cameras => (
            <div className="inside_camera">
                <Card sx={{ maxWidth: 400, height: 400 }} key={cameras.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cameras.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cameras.cameraname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>Description:</b>  {cameras.description}
          </Typography>
          <Typography variant="body3" color="text.secondary">
           <b>Price:</b> {cameras.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleBuy(cameras)} >
          Rent
        </Button>
          <Button style={{marginLeft: "auto"}} onClick={() => handleDelete(cameras.id)}><DeleteIcon /></Button>
          <Button onClick={() => handleEdit(cameras)}><EditIcon /></Button>
      </CardActions>
    </Card>
            </div>
          ))}
        </div>
    )
}