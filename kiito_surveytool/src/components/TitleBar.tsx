import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { LowerButtons } from './LowerButtons';
import json from '../test.json'
import { useState } from 'react';

export function TitleBar(){

  let title : string[] = ['sivu0']
  let sub : string[] = ['sub0']

  for(let i = 0; i < json.sivut[0].kategoriat.length; i++)
  {
    title.push(json.sivut[0].kategoriat[i].otsikko) 
  }

  for(let i = 0; i < json.sivut[0].kategoriat.length; i++)
  {
    for(let j = 0; j < json.sivut[0].kategoriat[i].tasot.length; j++)
    {
      sub.push(json.sivut[0].kategoriat[i].tasot[j].alaotsikko) 
    }
  }

  const Title : string = "1. " + title[1]
  const subTitle : string = sub[1]

  return(<Paper
    sx={{
      background:"#039BE5",
      color:"white",
      padding: "10px 5px",
      borderRadius: 6,
      width:"80%",
    }}
    >
    <Grid container justifyContent="flex-end" >
      <Grid item sx={{margin:"auto"}} >
        <Grid item>
          <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="h5">{Title}</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="subtitle1">{subTitle}</Typography>
        </Grid>
      </Grid>
      <Grid item >
        <img style={{width:"50px", height:"50px",paddingRight:"30px"}} />
      </Grid>
    </Grid>
  </Paper>)
}