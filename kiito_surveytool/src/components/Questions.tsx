import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import qlist from './Qlist.json'
import { testi } from './KyselyContent';






export default function Questions(props : any) {
  const {data} = props;
  //jiisonnista sisältö tännekki
  props.sivu


  function handleChange(e: any, index: number) {
    const newVal = parseInt(e.target.value)
    const updatedAns = [...ans]
    updatedAns[testi - 1][index] = newVal
    setAns(updatedAns)
 }


  var ques : any[][]
  let [ans, setAns] = useState<number[][]>(() => {return Array.from({length: qlist.alaotsikko.length}, () => Array.from({length: 3}, () => 0))})
  ques = []
  for(var i = 0; i < qlist.alaotsikko.length; i++)
  {
    ques[i] = []
    for(var j = 0; j < qlist.alaotsikko[i].kysymykset.length; j++)
    {
      ques[i].push(qlist.alaotsikko[i].kysymykset[j])
    }
  }
console.log(ans)
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
        value={ans[testi-1][index]}
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
