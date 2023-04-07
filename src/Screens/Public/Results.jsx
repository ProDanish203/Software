import React from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export const Results = () => {

  //Roll Number Field
  //course dd
  //search btn

  const courses = ["WebDev", "MobileDev", "FlutterDev", "Blockchain"]

  return (
    <>
    
    <div className="form-container">
      <form action="" className='login-form'>

      <h3 className='form-heading'>Results</h3>

        <div className="input-field">
          <TextField
            id="filled-number" label="Roll No." type="number" InputLabelProps={{
            shrink: true,
            }} variant="filled" />
        </div>

        <div className="input-field">

        <FormControl sx={{ width: "25ch" }}>
        <InputLabel>Course</InputLabel>

        <Select label="Course">
            {/* {
              courses.map((course, index) => {
                return (
                  <>
                  <MenuItem key={index} value={course}>{course}</MenuItem>
                  </>
                )
              })
            } */}

            <MenuItem value="Web Dev">Web Dev</MenuItem>
            <MenuItem value="Mobile Dev">Mobile Dev</MenuItem>
            <MenuItem value="Flutter Dev">Flutter Dev</MenuItem>
            <MenuItem value="Blockchain">BlockChain</MenuItem>

        </Select>

    </FormControl>

        </div>

        <div className="input-field">
          <Button variant="contained" sx={{ display: "block", width: "100%", height: "45px", bgcolor: "#bc6c25", ":hover": { bgcolor: "#bc6c25"}}}>Search</Button>
        </div>


      </form>

    </div>


    </>
  )
}
