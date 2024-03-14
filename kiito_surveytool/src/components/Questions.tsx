import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import json from '../test.json';
import { useState } from 'react';



export default function Questions() {
  let [select, setSelect] = useState("")
  function handleChange(event: any) {
    setSelect(event.target.value);
 }

  let ques : string[] = []

  for(let i = 0; i < json.sivut[0].kategoriat.length; i++)
  {
    for(let j = 0; j < json.sivut[0].kategoriat[i].tasot.length; j++)
    {
      for(let k = 0; k < json.sivut[0].kategoriat[i].tasot[j].kysymykset.length; k++)
      {
        ques.push(json.sivut[0].kategoriat[i].tasot[j].kysymykset[k])
      }
    }
  }

  return (
    <>
    <div style={{display: "flex", width: "80%",  fontFamily: "arial", marginBottom: '30px'}}>
    <FormControl sx={{flexDirection: 'row'}}>
      <FormLabel id="Q1" sx={{width:'50%'}} >{ques[0]}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={select}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom' />
        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom' />
        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom' />
        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom' />
        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom' />
      </RadioGroup>
    </FormControl>
    </div>


    <div style={{display: "flex", width: "80%",  fontFamily: "arial", marginBottom: '30px'}}>
    <FormControl sx={{flexDirection: 'row'}}>
      <FormLabel id="Q2" sx={{width:'50%'}} >{ques[1]}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom' />
        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom' />
        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom' />
        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom' />
        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom' />
      </RadioGroup>
    </FormControl>
    </div>


    <div style={{display: "flex", width: "80%",  fontFamily: "arial", marginBottom: '30px'}}>
    <FormControl sx={{flexDirection: 'row'}}>
      <FormLabel id="Q3" sx={{width:'50%'}} >{ques[2]}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom' />
        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom' />
        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom' />
        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom' />
        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom' />
      </RadioGroup>
    </FormControl>
    </div>
    </>
  );
}
