import React from 'react'
//Icons
import AbcIcon from '@mui/icons-material/Abc';
import ImageIcon from '@mui/icons-material/Image';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Person } from '@mui/icons-material';

import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";


export const InstituteForm = () => {

  const fields = [
    {
      name: "Institute Name",
      icon: <Person/>
    },
    {
      name: "Institute Short Name",
      icon: <AbcIcon/>
    }
    ,{
      name: "Logo Image Link",
      icon: <ImageIcon/>
    }
    ,{
      name: "No Of Campus",
      icon: <FormatListNumberedRtlIcon/>
    },
    {
      name: "Campuses Detail",
      icon: <FormatListNumberedRtlIcon/>
    },
    {
      name: "Location",
      icon: <LocationOnIcon/>
    },
    {
      name: "Address",
      icon: <LocationOnIcon/>
    },
    {
      name: "Owner Contact",
      icon: <PhoneIcon/>
    },
    {
      name: "Owner Email",
      icon: <EmailIcon/>
    },
    {
      name: "User Type",
      icon: <Person/>
    }
  ]

  const dd = ["School", "College", "University", "Institute"];

  return (
    <>
    
    <h3 className='heading'>Institute Registration Form</h3>


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
                    <IconButton edge="end">
                      {field.icon}
                    </IconButton>
                  </InputAdornment>
                }
                label={field.name}
            />      
      </FormControl>
            </>
          )
        })
      }

      <FormControl sx={{ width: "30ch", m: 1 }}>
        <InputLabel>Institute Type</InputLabel>
        <Select label="Institute Type">
            {dd.map((x,i)=>{
                return(
                    <MenuItem key={i} value={x}>{x}</MenuItem>
                )
            })}
        </Select>
    </FormControl>

    <Button variant="contained" sx={{display: "block", width: "250px", height: "50px", marginLeft: "10px", marginTop: "10px"}}>Submit</Button>


    </>
  )
}
