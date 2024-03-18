import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import test from '../test.json';
import { Tietokentta } from './';



const Qcategories = (props : any) => (
  <Stack sx={{
    position: 'relevant',
    display: 'contents',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: '100px 100px 0px 0px',
    color: 'black'
  }}>
  <Tietokentta />
  <Typography variant="h5" align="center" fontWeight='bold' width='300px' paddingBottom='50px'>
  {test.aiheotsikko}
  </Typography>
  <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
  
  <ButtonGroup orientation="vertical" sx={{gap:3}}>
    {test.sivut.map((sivu) =>(
      <Button variant="contained"
      className="question-btn"
      sx={{
        boxShadow:15, 
        borderRadius:2,
        fontSize:14, 
        color:'white', 
        textTransform:'none', 
        fontWeight:'bold', 
        padding:1
        }}
        onClick={() => props.setValittu
          (test.sivut.indexOf(sivu))}
          key={test.sivut.indexOf(sivu)}
      >
      {sivu.sivu}
      </Button>
    ))}
    </ButtonGroup>

    <ButtonGroup orientation="vertical" sx={{gap:3}}>
    {test.sivut.map((sivu) =>(
      <Button variant="text"
      className="tulos-btn"
      sx={{
        fontSize:14, 
        color:'blue', 
        textTransform:'none', 
        fontWeight:'bold', 
        padding:1, 
        width:100, 
        height:40, 
        display:'flex', 
        justifyContent:'space-between'
      }}
      onClick={() => props.setValittu
      (-1, console.log("Tulokset"))}
      key={-1}
      >
      {"Tulokset" } <ArrowRightAltIcon />
      </Button>
    ))}
    </ButtonGroup>
    </Box>
      <Box sx={{marginTop:'100px', display:'flex'}} >
      <img src={'src/assets/logo.jpg'} alt="logo" />
      </Box>
  </Stack>
)

export default Qcategories