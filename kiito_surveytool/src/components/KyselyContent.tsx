
import { Button, Stack, Typography } from '@mui/material'
import { Instruction, Questions, } from '.'
import { TitleButton } from './TitleButton';
import { TitleBar } from './TitleBar';
//import { LowerButtons } from './LowerButtons';
import json from '../test.json'
import { useState } from 'react';

let testi : number = 1

const KyselyContent = () => {

  let [page, setPage] = useState(1)
  let max = 0

  for(let i = 0; i < json.sivut[0].kategoriat.length; i++)
  {
    for(let j = 0; j < json.sivut[0].kategoriat[i].tasot.length; j++)
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

  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '100px 100px 0px 0px',
      color: 'black',
    }}>
        <TitleButton />
        <TitleBar  />
        <Instruction />
        <Questions />
        <Button onClick={()=>handleChangeMinus()} style={{
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

  )
}

export default KyselyContent
export {testi}
