import { Button, Stack, Typography } from '@mui/material'
import { QueryInstruction, QueryQuestions, } from '.'
import { QueryTitleButton } from './QueryTitleButton';
import { QueryTitle } from './QueryTitle';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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
      marginBottom: 10,
      width: {xs: '800px', sm: '800px', md: 'auto', lg: 'auto'},
      height: { xs: '700px', sm: '700px', md: '680px', lg: '600px'},
    }}>
        <QueryTitleButton valittu = {props.valittu} setValittu = {props.setValittu} sivu = {sivu} data={data} localData={props.localData}/>
        <QueryTitle data = {data} sivu = {sivu} />
        <QueryInstruction localData={props.localData} />
        <QueryQuestions sivu = {sivu} data = {data}/>
        </Stack>

        <Stack direction={'row'} style={{
          position: 'relative',
          bottom: '2%',
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
        borderRadius: 2,
        cursor: "pointer",
        margin: "0.5em",
        boxShadow: '0px 2px 10px grey',
      }}>
        <Stack direction="row" spacing={1}>
        <ArrowBackIcon/>
          <Typography>
            {props.localData.napit.kyselyTakas}
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
        borderRadius: 2,
        cursor: "pointer",
        margin: "0.5em",
        boxShadow: '0px 2px 10px grey'
      }}>
        <Stack direction="row" spacing={1}>
          <Typography>
          {props.localData.napit.kyselyJatka}
          </Typography>
          <ArrowForwardIcon/>
        </Stack>
      </Button>
      </Stack>
      </>
  )
}

export default QueryContent
export {testi}
