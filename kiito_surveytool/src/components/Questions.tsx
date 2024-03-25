import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import qlist from './Qlist.json'
import { testi } from './KyselyContent';
import { retAns, ansSetter } from './Content';




export default function Questions(props : any) {
  const {data} = props;
  //jiisonnista sisältö tännekki
  props.sivu

  let [qsivut, setQsivut] = useState<any[][]>(() => {return Array.from({length: data.sivut.length}, () => Array.from({length: 1}, () => 0))})
  for(var i = 0; i < qsivut.length; i++)
  {
    qsivut[i] = data.sivut[i].kategoriat
  }

  function handleChange(e: any, index: number) {
    const newVal = parseInt(e.target.value)
    const updatedAns = [...retAns]
    updatedAns[testi - 1][index] = newVal
    ansSetter(updatedAns)
 }


  var ques : any[][]
  
  ques = []
  /*
  for(var i = 0; i < qlist.alaotsikko.length; i++)
  {
    ques[i] = []
    for(var j = 0; j < qlist.alaotsikko[i].kysymykset.length; j++)
    {
      ques[i].push(qlist.alaotsikko[i].kysymykset[j])
    }
  }
*/
  
  qsivut[props.sivu].forEach((otsikko) => {
    otsikko.tasot.forEach((alaotsikko: any) => {
      ques.push(alaotsikko.kysymykset)
    })
    })
  
/*
  for(var i = 0; i < qsivut[props.sivu][i].tasot.length; i++)
  {
    ques[i] = []
    for(var j = 0; j < qsivut[props.sivu][i].tasot[i].kysymykset.length; j++)
    {
      ques[i].push(qsivut[props.sivu][i].tasot[i].kysymykset[j])
    }
  }
*/

  return (
    <>
    {ques[testi-1].map((x, index) => 
    <div key={index} style={{display: "flex", width: "80%",  fontFamily: "arial", marginBottom: '30px'}}>
    <FormControl sx={{flexDirection: 'row'}}>
      <FormLabel sx={{width:'50%'}} >{x}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={retAns[testi-1][index]}
        onChange={(e) => handleChange(e, index)}
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
