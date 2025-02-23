
import { Button, TextField, Typography } from '@mui/material'
import { Field,Formik,Form } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { registerUser } from './../State/Authentication/Action';
import { useDispatch } from 'react-redux';
const initialValues={
  fullName:"",
  email:"",
  password:"",
  role:""

}
const Register = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit=(values)=>{
    dispatch(registerUser({userData:values,navigate}))
        console.log(values)
  }
  return (
    <div>
      <Typography variant='h5' className='text-center'>
           Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
              <Form>

              <Field
                      as={TextField}
                      name="fullname"
                      label="fullname"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                 />
                 
                 <Field
                      as={TextField}
                      name="email"
                      label="email"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                 />
                 

                 <Field
                      as={TextField}
                      name="password"
                      label="password"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      type="password"
                 />
                <FormControl fullWidth margin="normal">
  <InputLabel id="role-simple-select-label">Role</InputLabel>
  <Field
  as={Select}
    labelId="role-simple-select-label"
    id="role-simple-select"
    name="role"
    // value={age}
    label="Role"
    // onChange={handleChange}
  >
    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
   
  </Field>
</FormControl>
                 <Button sx={{mt:2,padding:"1rem"}}  fullWidth type='submit' variant='contained'>Register</Button>

                
              </Form>
      </Formik>

      <Typography variant='body2' align='center' sx={{mt:3}}>
        if have an account already?
        <Button size='small' onClick={()=>navigate("/account/login")}>
          Login
        </Button>
      </Typography>

    </div>
  )
}

export default Register