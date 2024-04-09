import { Button, Stack, Typography } from '@mui/material'
import { QueryInstruction, QueryQuestions, } from '.'
import { QueryTitleButton } from './QueryTitleButton';
import { QueryTitle } from './QueryTitle';
import { useState } from 'react';
import smallarrow from './smallarrow.svg'


let testi : number = 1;

export function setTesti(value : number) {
  testi = value
}

const QueryContent = (props : any) => {

  const { data, sivu } = props;
  let [page, setPage] = useState(testi)
  let max = 0



  for(let i = 0; i < data[sivu].kategoriat.length; i++)
  {
    for(let j = 0; j < data[sivu].kategoriat[i].tasot.length; j++)
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
    <>
    <Stack sx={{
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '100px 100px 0px 0px',
      color: 'black',
      height: '100%'
    }}>
        <QueryTitleButton setValittu = {props.setValittu} sivu = {sivu} data={data}/>
        <QueryTitle data = {data} sivu = {sivu} />
        <QueryInstruction data = {data} />
        <QueryQuestions sivu = {sivu} data = {data}/>
        </Stack>

        <Stack direction={'row'} style={{
          position: 'relative',
          bottom: '5%'
        }}>
        <Button onClick={()=>handleChangeMinus()} style={{
        visibility: testi !== 1
        ? "visible"
        : "hidden",
        backgroundColor:'#40B7D7',
        //opacity:.5,
        border:"none",
        padding: "10px",
        color: "white",
        borderRadius: 10,
        cursor: "pointer",
        margin: "0.5em"
      }}>
        <Stack direction="row" spacing={1}>
        <img src={smallarrow}/>
          <Typography>
            Palaa
          </Typography>
        </Stack>
      </Button>
      <Button onClick={()=>{if(page !== max)handleChangePlus()}} style={{
        visibility: testi !== max
        ? "visible"
        : "hidden",
        backgroundColor:'#40B7D7',
        //opacity:.5,
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
          <img style={{transform: 'rotate(180deg)'}} src={smallarrow}/>
        </Stack>
      </Button>
      </Stack>
      </>
  )
}

export default QueryContent
export {testi}
