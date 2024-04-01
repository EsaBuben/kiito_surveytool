import {   Dispatch, SetStateAction, useState } from 'react'
import {  Stack } from '@mui/material'
import { Qcategories, Kyselysivu } from '.'
import {Tulokset} from '../tulokset/Tulokset'
import qlist from './Qlist.json'


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
      height: { sx: 'auto', md: '100vh'}
    }}>
    {valittu === -1 && <Qcategories setValittu={ (data: SetStateAction<number>) => setValittu(data) }
     data = {data} setName={setName} name = {name}/>}
    {valittu > -1 && <Kyselysivu sivu = {valittu} setValittu = {setValittu} data = {data} />}
    {valittu < -1 && <Tulokset sivu={(valittu*-1) - 2} setValittu = {setValittu} data = {data} answers={ans}/>}

    </Stack>

  )
}

export default Content
export {retAns, ansSetter}
