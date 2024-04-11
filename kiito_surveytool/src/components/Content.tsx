import {   Dispatch, SetStateAction, useState } from 'react'
import {  Stack } from '@mui/material'
import { FrontButtons, Querypage } from '.'
import {Result} from './Result'


let retAns :number[][][]
let ansSetter : Dispatch<SetStateAction<any>>;


const Content = (props:any) => {
  const { data, setupArr } = props;
  const [valittu, setValittu] = useState(-1)
  const [name, setName] = useState('');

  let [ans, setAns] = useState<number[][][]>(setupArr)
  ansSetter = setAns

  retAns = ans



  return (
    <Stack sx={{
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '100px 100px 0px 0px',
      color: 'black',
      height: { xs: '100vh', sm: '100vh', md: '150vh'}
    }}

  >
    {valittu === -1 && <FrontButtons setValittu={ (data: SetStateAction<number>) => setValittu(data) }
     data = {data} setName={setName} name = {name} localData={props.localData}/>}
    {valittu > -1 && <Querypage valittu = {valittu} sivu = {valittu} setValittu = {setValittu} data = {data} />}
    {valittu < -1 && <Result sivu={(valittu*-1) - 2} setValittu = {setValittu} data = {data} localData={props.localData} answers={ans}/>}
  <div id="hidden_content"></div>
    </Stack>

  )
}

export default Content
export {retAns, ansSetter}
