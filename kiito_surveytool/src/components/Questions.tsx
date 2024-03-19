import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Kyssarit from '../test.json';
import { useState } from 'react';



export default function Questions() {
  
  return (
    <>
    <div style={{display: "flex", width: "80%",  fontFamily: "arial", marginBottom: '30px'}}>
    <FormControl sx={{flexDirection: 'row'}}>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{width:'50%'}} >Ympäristöystävällisten ja paikallisesti tuotettujen materiaalien ja raaka-aineiden käyttö  kestävien, 
      korjattavien ja kierrätettävien tuotteiden ja pakkauksien suunnittelussa.</FormLabel>
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
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{width:'50%'}} >Selvitykset materiaalien ja raaka-aineiden alkuperästä ja ympäristövaikutuksista 
      sekä niihin kohdistuvista virall isista vaatimuksista jo tuotteiden ja palveluiden suunnitteluvaiheessa.</FormLabel>
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
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{width:'50%'}} >Neitseellisten raaka-aineiden ja muiden materiaalien käytön
       vähentäminen vastuullisella ja ympäristöä huomioivalla tuote- ja palvelusuunnittelulla</FormLabel>
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
