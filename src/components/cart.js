import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Cart(){

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(localStorage.getItem('price'));
    const total = price * quantity;

    const navigate = useNavigate();

    const cameraname = localStorage.getItem('cameraname');
    const description = localStorage.getItem('description');
    const image = localStorage.getItem('image');


    if (localStorage.getItem('id') === null){
        return(
            <div className='cart'>
                <h1>No Camera Selected</h1>
            </div>
        )
    }

    function removeitem(){
        return(
        localStorage.clear('id'),
        navigate('/home')
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(total === ""){
        alert("please enter amount");
        }else{
          var options = {
            key: "rzp_test_QnLDWaA7vOt7FJ",
            key_secret:"sD2Opg2yi6kajAPr52o2Zk9W",
            amount: total *100,
            currency:"INR",
            name:"Ready to rent",
            description:"for testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"mustak",
              email:"mustak3rc@gmail.com",
              contact:"790489553"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          const pay = new window.Razorpay(options);
          pay.open();
        }
      }

    return(
        <div style={{margin: '10px', padding: "10px"}}>
            <h1>Cart</h1>
            <Card sx={{ display: 'flex' }}>
        <CardMedia component="img" sx={{ height: 200,  width: 600, padding: "5px" }} image={image} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', width: 1000 }}>
          <Typography component="div" variant="h5">
            {cameraname}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
          <Typography onChange={() =>total} variant="subtitle1" color="text.secondary" component="div">
            {price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {quantity}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', width: 800 }}>
        <Button variant="contained" onClick={() => removeitem('id')} endIcon={<DeleteIcon />}>
        Remove item
      </Button>
      <Button onClick={() => setQuantity(quantity + 1) || setPrice(total)} style={{marginLeft:'10px'}} variant="contained">
     +
      </Button>
      <Button onClick={() => setQuantity(quantity - 1 < 0 ? 1 : 1) || setPrice(localStorage.getItem('price'))}style={{marginLeft:'10px'}} variant="contained">
      -
      </Button>
      <Button onClick={handleSubmit} style={{marginLeft:'10px', width: 'max-content'}} variant="contained">
       Buy Now: {total}
      </Button>
      </CardContent>
      </Box>
      </Box>
      </Card>
        </div>
    )
}

export default Cart;