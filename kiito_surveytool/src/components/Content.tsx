import {   SetStateAction, useState } from 'react'
import {  Stack } from '@mui/material'
import { Qcategories, Kyselysivu } from '.'



const Content = (props:any) => {
  const { data } = props;
  const [valittu, setValittu] = useState(-1)
  console.log(valittu)
  return (
    <Stack sx={{
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '100px 100px 0px 0px',
      color: 'black',
      height: { sx: 'auto', md: '100vh'}
    }}>
    {valittu === -1 && <Qcategories setValittu={ (data: SetStateAction<number>) => setValittu(data) } data = {data}/>}
    {valittu > -1 && <Kyselysivu sivu = {valittu} setValittu = {setValittu} data = {data} />}


    </Stack>

  )
}

export default Content