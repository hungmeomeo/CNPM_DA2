import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';

export default function InputSlider() {
  const [value, setValue] = useState(false);
  const [lastValue, setLastValue] = useState(null); // State to store the last value

  function handleSlide(event, newValue) {
    setValue(newValue);
  }

  function handleSlideCommitted(event, newValue) {
    setLastValue(newValue); // Update last value when sliding is completed
    console.log(newValue); // Print the last value
  }

  return (
    <Box sx={{ width: 390 , marginTop: '15px'}}>
        <Typography sx={{ fontSize: '1.6rem', fontFamily: 'Nunito', padding:0, boxSizing: 'border-box' }} Typography align="center" id="non-linear-slider" gutterBottom>Quạt</Typography>
        <Slider
            aria-label="Temperature"
            defaultValue={0}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={10}
            marks
            min={0}
            max={100}
            value={value}
            onChange={handleSlide}
            onChangeCommitted={handleSlideCommitted} // Use onChangeCommitted event handler
            color={orange[500]}
        />
    </Box>
  );
}