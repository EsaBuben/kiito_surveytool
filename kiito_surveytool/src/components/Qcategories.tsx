import React, { useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import test from '../test.json';



const Qcategories = (props : any) => (
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
      (test.sivut.indexOf(sivu))}
      key={test.sivut.indexOf(sivu)}
      >
      {"Tulokset" } <ArrowRightAltIcon />
      </Button>
    ))}
    </ButtonGroup>
    
  </Box>
)

export default Qcategories