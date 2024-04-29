import {   Dispatch, SetStateAction, useState } from 'react'
import {  Box, Stack } from '@mui/material'
import { FrontButtons, Querypage } from '.'
import {Result} from './Result'
import {dateCalc} from './FrontInput'


let retAns :number[][][]
let ansSetter : Dispatch<SetStateAction<any>>;


const Content = (props:any) => {
  const { data, setupArr } = props;
  const [valittu, setValittu] = useState(-1)
  const [name, setName] = useState('');
  const [date, setDate] = useState(dateCalc());

  let [ans, setAns] = useState<number[][][]>(setupArr)
  ansSetter = setAns

  retAns = ans



  return (
    <Stack sx={{
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '100px 100px 100px 100px',
      color: 'black',
    }}>
    {valittu === -1 && <FrontButtons setValittu={ (data: SetStateAction<number>) => setValittu(data) }
     data = {data} setName={setName} setDate={setDate} date={date} name = {name} localData={props.localData}/>}
    {valittu > -1 && <Querypage valittu = {valittu} sivu = {valittu} setValittu = {setValittu} data = {data} localData={props.localData} />}
    {valittu < -1 && <Result sivu={(valittu*-1) - 2} setValittu = {setValittu} data = {data}
     localData={props.localData} answers={ans} yname = {name} date = {date} />}
     <Box sx={{display: valittu === -1 ?'flex' :'none', alignSelf: 'center', margin: '0 !important'}} >
      <img src={'/images/logo.jpg'} alt="logo" />
      </Box>
    </Stack>

  )
}

export default Content
export {retAns, ansSetter}
