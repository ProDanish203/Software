import React from 'react'

//Icons
import AbcIcon from '@mui/icons-material/Abc';
import ImageIcon from '@mui/icons-material/Image';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Person } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";

export const UserRegister = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const fields = [
    {
      name: "Name",
      icon: <Person/>
    },
    {
      name: "Email",
      icon: <EmailIcon/>
    }
  ]

  const dd = ["Admin", "Student", "Teacher", "Institute"];

  return (
    <>
    <h3 className='heading'>User Registration Form</h3>
    <form className='form'>

    {
    fields.map((field, index) => {
      return (
        <>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
        <InputLabel>{field.name}</InputLabel>
          <OutlinedInput
            type='text'
            endAdornment={
              <InputAdornment position="start">
                <IconButton edge="start">
                  {field.icon}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
        />      
      </FormControl>
            </>
          )
        })
      } 

      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
        <InputLabel>CNIC</InputLabel>
          <OutlinedInput
            type='number'
            endAdornment={
              <InputAdornment position="start">
              </InputAdornment>
            }
            label="CNIC"
        />      
      </FormControl>

    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl> 

    <FormControl sx={{ width: "30ch", m: 1 }}>
        <InputLabel>User Role</InputLabel>
        <Select
            label="User Role"
        >
            {dd.map((x,i)=>{
                return(
                    <MenuItem key={i} value={x}>{x}</MenuItem>
                )
            })}
        </Select>
    </FormControl>

    <Button variant="contained" sx={{display: "block", width: "90%", height: "50px", marginLeft: "10px", marginTop: "10px"}}>Submit</Button>

    </form>

    </>
  )
}
