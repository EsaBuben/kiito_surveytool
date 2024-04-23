import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import {ResultReturnButton} from './ResultReturnButton';

type PDFTitleprobs = {
  title:string,
  return_button_text:string,
  setValittu:React.Dispatch<React.SetStateAction<number>>
  setPDFContent:React.Dispatch<React.SetStateAction<JSX.Element>>
}
/** props:
 *  - title:string,
 *  - return_button_text:string,
 *  - setValittu:React.Dispatch<React.SetStateAction<number>>
 *  - setPDFContent:React.Dispatch<React.SetStateAction<JSX.Element>>
 */
export function PDFTitle(props:PDFTitleprobs){

const container_style = {
  position: 'sticky',
  zIndex:2,
  fontSize:"100px",
  top:0,
  left:0,
  width:'100%',
  height:'2rem',
  backgroundColor:'rgb(56, 56, 61)'
}

// style={{position:"absolute", top:0}}
return (<Paper sx={container_style}>
  <Stack direction="row" justifyContent="space-between" style={{height:'100%'}}>
  <ResultReturnButton
    setValittu={props.setValittu}
    innerText={props.return_button_text}
    style={{margin:'5px'}}
  />
  <Typography style={{marginLeft:"-100px",marginTop:"0.2rem", color:"white"}}>
    {props.title}
  </Typography>
    <CloseIcon  sx={{color:'white',float:"right",marginRight:"10px", marginTop:"0.2rem"}}/>
  </Stack>
  </Paper>
)
}
