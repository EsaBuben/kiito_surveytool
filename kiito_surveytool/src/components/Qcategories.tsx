import React from 'react';
import { Box, Stack, Button, ButtonGroup, Grid } from '@mui/material';
import { categories } from '../utils/constants';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



const Qcategories = (props : any) => (
  

  <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
  <ButtonGroup orientation="vertical" sx={{gap:3, display:'flex'}}>
    {categories.map((category) =>(
      <Button variant="contained"
      className="category-btn"
      sx={{boxShadow:15, borderRadius:2}}
      onClick={() => props.setValittu
      (category.name)}
  
      key={category.name}
      >

      {category.name}
      </Button>
    ))}
    </ButtonGroup>
    <ButtonGroup orientation="vertical" sx={{gap:3}}>
    {categories.map((category) =>(
      <Button variant="text"
      className="tulokset-btn"
      sx={{textDecoration:'underline',fontSize: 14, color: 'red', fontWeight: 'bold', textTransform: 'none', '&:hover': {backgroundColor: 'lightgrey'}}}
      onClick={() => props.setValittu
      (category.name)}
      key={category.name}>

      Tulokset <ArrowRightAltIcon />
      </Button>
    ))}
    </ButtonGroup>
    
  </Box>
  
)

export default Qcategories