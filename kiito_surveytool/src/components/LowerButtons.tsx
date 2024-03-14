import {Button} from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import json from '../test.json';


export function LowerButtons(props:any){

let [page, setPage] = useState(1)
let max = 0

for(let i = 0; i < json.sivut[0].kategoriat.length; i++)
{
  for(let j = 0; j < json.sivut[0].kategoriat[i].tasot.length; j++)
  {
      max = max + 1   
  }
}

return (
    <div style={{
        display: 'flex',
        margin: "auto",
        width:"80%",
        justifyContent: "center",
        alignItems: "center",
        }}>
    <Button onClick={()=>setPage(page-1)} style={{
    visibility: page !== 1
    ? "visible"
    : "hidden",
    background:'#039BE5',
    opacity:.5,
    border:"none",
    padding: "10px",
    color: "white",
    borderRadius: 10,
    cursor: "pointer",
    margin: "0.5em"
  }}>
    <Stack direction="row" spacing={1}>
      <Typography>
        Palaa
      </Typography>
    </Stack>
  </Button>


  <Button onClick={()=>{if(page !== max)setPage(page+1)}} style={{
    background:'#039BE5',
    opacity:.5,
    border:"none",
    padding: "10px",
    color: "white",
    borderRadius: 10,
    cursor: "pointer",
    margin: "0.5em"
  }}>
    <Stack direction="row" spacing={1}>
      <Typography>
        Jatka
      </Typography>
    </Stack>
  </Button>

  </div>
);
}