import { Button, Stack, Typography } from '@mui/material'
import { Instruction, Questions, } from '.'
import { TitleButton } from './TitleButton';
import { TitleBar } from './TitleBar';
import { useState } from 'react';

let testi : number = 1
const KyselyContent = (props : any) => {

  let [page, setPage] = useState(testi)
  let max = 0

  for(let i = 0; i < props.data.sivut[0].kategoriat.length; i++)
  {
    for(let j = 0; j < props.data.sivut[0].kategoriat[i].tasot.length; j++)
    {
        max = max + 1   
    }
  }
  function handleChangePlus()  {
    setPage(page+1)
    testi = page+1
  }
  function handleChangeMinus()  {
    setPage(page-1)
    testi = page-1
  }
  props.valittu
  const { data } = props;
  return (
    <Stack sx={{
      alignItems: 'center',
    }}>
        <TitleButton setValittu = {props.setValittu}/>
        <TitleBar data = {data} sivu = {props.sivu} />
        <Instruction data = {data} />
        <Questions sivu = {props.sivu} data = {data}/>
        <Stack direction={'row'}>
        <Button onClick={()=>handleChangeMinus()} style={{
        visibility: testi !== 1
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
      <Button onClick={()=>{if(page !== max)handleChangePlus()}} style={{
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
      </Stack>
      </Stack>
  )
}

export default KyselyContent
export {testi}
