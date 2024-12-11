import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./style.css"


export default function SelectDays({ days, handleDaysChange, noPTag }) {
    
  return (
      <div className='select-days'>
        {!noPTag && <p>Price Change In</p>}
        <Select
            sx={{
            height: "2.5rem",
            fontSize: ".9rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
            "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
            "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
         }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
          
        >
          <MenuItem sx={{fontSize: ".9rem"}} value={7}>7 Days</MenuItem>
          <MenuItem sx={{fontSize: ".9rem"}} value={30}>30 Days</MenuItem>
          <MenuItem sx={{fontSize: ".9rem"}} value={60}>60 Days</MenuItem>
          <MenuItem sx={{fontSize: ".9rem"}} value={90}>90 Days</MenuItem>
          <MenuItem sx={{fontSize: ".9rem"}} value={120}>120 Days</MenuItem>
          <MenuItem sx={{fontSize: ".9rem"}} value={365}>1 Year</MenuItem>
        </Select>
    </div>
  );
}
