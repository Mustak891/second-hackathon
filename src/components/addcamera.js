import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { api_url } from './api_url';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function AddCamera(){
    const formvalidationSchema = yup.object({
        id: yup.string().required('No id provided ⚠️').min(2, 'No must be at least 2 characters long').max(20, 'No must be at most 20 characters long'),
        cameraname: yup.string().required('Name is required ⚠️').min(3, 'Name must be at least 3️⃣ characters long'),
        description: yup.string().required('description is required ⚠️').min(3, 'description must be at least 3️⃣ characters long'),
        price: yup.string().required('price is required ⚠️').max(9999999999, 'price must be at least 🔟 characters long'),
        image: yup.string().required('image is required ⚠️').min(3, 'image must be at least 3️⃣ characters long'),
      })
    
      const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues:{cameraname: "", description: "",  price: "", image: "", id: ""},
        validationSchema: formvalidationSchema,
        onSubmit: (values) => {postData(values)},
      });
    
      
    // post data to mock api
      const navigate = useNavigate();
    
      const postData = async () => {
      try{ await fetch(api_url,
          {method:"POST", 
          body: JSON.stringify(values),
          mode: 'cors',
          headers:{ 'Content-Type': 'application/json'}
        })}
      catch{console.log((error) => error)}navigate('/home')
    }
    return(
        <div className='cameraform'>
            <div className='totaladdnewuser'>
        <div className="adddatahead">
           <span>ADD NEW CAMERA➡️</span> 
        </div>
        <div className="addnewuser">
        <div className="addnew">
        <form onSubmit={handleSubmit} className="border">
        <Box sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" > 

      <TextField style={{width: "400px"}} id="id" label="Part No" name="id" value={values.id} onChange={handleChange} onBlur={handleBlur} error={errors.id && touched.id} helperText={errors.id && touched.id && errors.id} /><br />
       
      <TextField style={{width: "400px"}} name='cameraname' onChange={handleChange} onBlur={handleBlur}  value={values.cameraname}  label="Name" variant="outlined" error={errors.cameraname && touched.cameraname} helperText={errors.cameraname && touched.cameraname ? errors.cameraname : ""} /><br />
  
      <TextField style={{width: "400px"}} name='description' onChange={handleChange} onBlur={handleBlur}  value={values.description}  label="description" variant="outlined" error={errors.description && touched.description} helperText={errors.description && touched.description ? errors.description : ""} /><br />
       
      <TextField style={{width: "400px"}} name='price' onChange={handleChange} onBlur={handleBlur}  value={values.price}  label="price" variant="outlined" error={errors.price && touched.price}  helperText={errors.price && touched.price ? errors.price : ""} /><br />

      <TextField style={{width: "400px"}} name='image' onChange={handleChange} onBlur={handleBlur}  value={values.image}  label="image" variant="outlined" error={errors.image && touched.image}  helperText={errors.image && touched.image ? errors.image : ""} /><br />

      <Button variant="contained" type='submit' >Submit</Button><Button variant="contained" onClick={() => navigate('/home')}>Cancel</Button>
    </Box>
     </form>
     </div>
       </div>
        </div> 
        </div>
    )
}