import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { testi } from './QueryContent';
import { retAns, ansSetter } from './Content';

export default function QueryQuestions(props : any) {
  const {data, sivu} = props;
  
  let [qsivut, setQsivut] = useState<any[][]>(() => {return Array.from({length: data.length}, () => Array.from({length: 1}, () => 0))})
  for(var i = 0; i < qsivut.length; i++)
  {
    qsivut[i] = data[i].kategoriat
  }

  function handleChange(e: any, index: number) {
    const newVal = parseInt(e.target.value)
    const updatedAns = [...retAns]
    updatedAns[sivu][testi - 1][index] = newVal
    ansSetter(updatedAns)
 }


  var ques : any[][]
  ques = []
  qsivut[sivu].forEach((otsikko) => {
    otsikko.tasot.forEach((alaotsikko: any) => {
      ques.push(alaotsikko.kysymykset)
    })
    })



  return (
    <>
    {ques[testi-1].map((x, index) =>
    <div key={index} style={{display: "flex", width: "80%",  fontFamily: "arial"}}>
    <FormControl sx={{flexDirection: 'row', margin: 7, marginBottom: 3, marginTop: 2, }}>
      <FormLabel sx={{width:'50%', minWidth: 250}} >{x}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={retAns[sivu][testi-1][index]}
        onChange={(e) => handleChange(e, index)}
        sx={{marginLeft: 4, flex: 'none'}}
      >
        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom' />
        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom' />
        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom' />
        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom' />
        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom' />
      </RadioGroup>
    </FormControl>
    </div>
    )}
    </>
  );
}
