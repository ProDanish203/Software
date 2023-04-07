import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";


export const Login = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
  <div className="form-container">

    <form action="" className='login-form'>

      <h3 className='form-heading'>Login </h3>

      <div className="input-field">
        <TextField id="outlined-basic" sx={{ width: '100%'}}  label="Email Address" variant="outlined"/>
      </div>

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
        
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Role</InputLabel>

        <Select label="Role">
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="institute">Institute</MenuItem>
            <MenuItem value="student">Student</MenuItem>

        </Select>

    </FormControl>

      </div>

      <div className="input-field">
          <Button variant="contained" sx={{ display: "block", width: "100%", height: "45px", bgcolor: "#bc6c25", ":hover": { bgcolor: "#bc6c25"}}}>Login</Button>
        </div>

    </form>
    
            </div>
    </>
  )
}
