// Adding toggle by Material-UI

import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import InputSlider from '../slider/slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 56, // Increased from 28
    height: 32, // Increased from 16
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 30, // Increased for the active state
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(18px)', // Adjusted for the larger size
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 4, // Increased from 2
      '&.Mui-checked': {
        transform: 'translateX(24px)', // Adjusted for the larger size
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#ff6000',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 4px 8px 0 rgb(0 35 11 / 20%)', // Adjusted for the larger thumb
      width: 24, // Increased from 12
      height: 24, // Increased from 12
      borderRadius: 12, // Increased to maintain the circular shape
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 32 / 2, // Adjusted for the larger track
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
const Toggle = () => {
    const [powerOn, setPowerOn] = useState(false);
    const [powerOn1, setPowerOn1] = useState(false);
    const [powerOn2, setPowerOn2] = useState(false);
    
    const handleToggle = () => {
        setPowerOn(!powerOn);
        console.log("3434")
    };

    const handleToggle1 = () => {
        setPowerOn1(!powerOn1);
        console.log("343423s34")
    };

    const handleToggle2 = () => {
        setPowerOn2(!powerOn2);
        console.log("3434342423")
    };

    return (
        <FormControl  component="fieldset">
                <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="top"
                    control={<AntSwitch
                        checked={powerOn}
                        color="primary"
                        name="powerToggle"
                        inputProps={{ 'aria-label': 'power toggle' }}
                        onChange={handleToggle}
                        ></AntSwitch>}
                        label={
                            <Typography sx={{ fontSize: '1.5rem', fontFamily: 'Nunito', padding:0, boxSizing: 'border-box' }} >
                              Đèn
                            </Typography>
                          }
                    
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="top"
                    control={<AntSwitch
                        checked={powerOn1}
                        color="primary"
                        name="powerToggle"
                        inputProps={{ 'aria-label': 'power toggle' }}
                        onChange={handleToggle1}
                        ></AntSwitch>}
                    label={
                        <Typography sx={{ fontSize: '1.5rem', fontFamily: 'Nunito', padding:0, boxSizing: 'border-box' }} >
                          Thiết bị chống trộm
                        </Typography>
                      }
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="top"
                    control={<AntSwitch
                        checked={powerOn2}
                        color="primary"
                        name="powerToggle"
                        inputProps={{ 'aria-label': 'power toggle' }}
                        onChange={handleToggle2}
                        ></AntSwitch>}
                    label={
                        <Typography sx={{ fontSize: '1.5rem', fontFamily: 'Nunito', padding:0, boxSizing: 'border-box' }} >
                          Cửa
                        </Typography>
                      }
                    labelPlacement="top"
                />
                
                </FormGroup>
            </FormControl>
            
    );
};

export default Toggle;
