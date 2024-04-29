import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { exportPage } from './QueryContent';
import { retAns, ansSetter } from './Content';

export default function QueryQuestions(props : any) {
  const {data, sivu} = props;
  
  let qsivut : any = new Array(data.length).fill(0).map(() => new Array(1).fill(0));
  for(var i = 0; i < qsivut.length; i++)
  {
    qsivut[i] = data[i].kategoriat
  }

  function handleChange(e: any, index: number) {
    const newVal = parseInt(e.target.value)
    const updatedAns = [...retAns]
    updatedAns[sivu][exportPage - 1][index] = newVal
    ansSetter(updatedAns)
 }


  var ques : any[][]
  ques = []
  qsivut[sivu].forEach((otsikko:any) => {
    otsikko.tasot.forEach((alaotsikko: any) => {
      ques.push(alaotsikko.kysymykset)
    })
    })



  return (
    <>
    {ques[exportPage-1].map((x, index) =>
    <div key={index} style={{display: "flex", width: "90%",  fontFamily: "arial"}}>
    <FormControl fullWidth sx={{flexDirection: 'row', margin: 7, marginBottom: 3, marginTop: 2}}>
      <FormLabel sx={{width:'60%', minWidth: 250}} >{x}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={retAns[sivu][exportPage-1][index]}
        onChange={(e) => handleChange(e, index)}
        sx={{marginLeft: 4, flex: 'none', gap: 0.1}}
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
