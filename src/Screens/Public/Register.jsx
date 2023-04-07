import React from 'react'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";

//Icons
import AbcIcon from '@mui/icons-material/Abc';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ImageIcon from '@mui/icons-material/Image';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Person } from '@mui/icons-material';

export const Register = () => {

  //fields
  //Student Name, Father Name, Contact, CNIC, Email, Password, DOB, Address,
  //Dropdowns
  //Last Qualification, Course, Institute, Section, City, Country

  //Gender radio btn

  const fields = [
    {
      name: "Student Name",
      icon: <Person/>
    },
    {
      name: "Father Name",
      icon: <Person/>
    },
    {
      name: "Contact",
      icon: <PhoneIcon/>
    },
    {
      name: "Email",
      icon: <EmailIcon/>
    },
    {
      name: "Address",
      icon: <LocationOnIcon/>
    }
  ]

  const dd= [
    {
      name: "Last qualification",
      item: ["Matric", "Inter", "A-Levels", "O-Levels", "fsc", "Bachelors", "Graduate"] 
    },
    {
      name: "Course", 
      item: ["Web Dev", "Mobile Dev", "Flutter Dev", "Blockchain"] 
    },
    {
      name: "Section", 
      item: ["WB-1A", "MB-2A", "FD-1B", "BB-4A", "MM-5A", "Mz-2B"]
    },
    {
      name: "City", 
      item: ["Karachi", "Lahore", "Peshawar", "Hyderabad", "Quetta", "Sukker"]
    },
    {
      name: "Country", 
      item: ["Pakistan"] 
    },
  ];

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <>
    
    <div className="register-container">

        <h3 className='register-heading'>Register Yourself Now</h3>
      <form action="" className='register-form'>

      {
        fields.map((field, i) => {
          return (
            <>
            <div className="input-field">

          <FormControl key={i} sx={{ width: '100%' }} variant="outlined">
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
                label={field.name}
                />      
          </FormControl>
                
                </div>
            </>
          )
        })
      }

      <div className="input-field">
        
        <FormControl sx={{ width: '100%' }} variant="outlined">
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
  
        </div>

        <div className="input-field">
          <TextField
            id="filled-number" label="CNIC" type="number" sx={{ width: '100%' }} InputLabelProps={{
            shrink: true,
            }} variant="filled" />
        </div>

        <div className="input-field">
          <TextField
            id="filled-number" sx={{ width: '100%' }} label="Date Of Birth" type="date" InputLabelProps={{
            shrink: true,
            }} variant="filled" />
        </div>

        
        {
          dd.map((dropdown, index) => {
            return (
              <>
                <div className="input-field" key={index}>

                <FormControl sx={{ width: "30ch", m: 1 }}>
                    <InputLabel>{dropdown.name}</InputLabel>
                    <Select label={dropdown.name} value={dropdown.name}>
                      {
                        dropdown.item.map((items, idx) => {
                          return (
                            <>
                            <MenuItem key={idx} value={items}>{items}</MenuItem>
                            </>
                          )
                        })
                      }
                    </Select>
                </FormControl>            

                </div> 
              </>
            )
          })
        }

      </form>

    </div>

    </>
  )
}
