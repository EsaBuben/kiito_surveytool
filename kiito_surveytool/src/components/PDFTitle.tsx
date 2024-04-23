import Paper from '@mui/material/Paper';
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
  zIndex:2,
  fontSize:"100px",
  position:'absolute',
  top:0,
  left:0,
  width:'100%',
  height:'2rem',
  backgroundColor:'gray'
}

return (<Paper sx={container_style}>
  <ResultReturnButton
    setValittu={props.setValittu}
    innerText={props.return_button_text}
  />
    {props.title}
    <CloseIcon  sx={{position:"relative",color:'white',float:"right", paddingRight:"10%", margin:'auto' }}/>
  </Paper>
)
}
