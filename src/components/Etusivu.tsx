import React, {useState} from 'react'
import { Stack } from '@mui/material'
import { Header, Footer, Content } from '.'
import {Tulokset} from '../tulokset/Tulokset';
const Etusivu = () => {
  
  const [valittu, setValittu] = useState<number>(-1)
  let content;
  if(valittu < 0){
  if(valittu == -1) content = <Content setValittu={setValittu} valittu={valittu} />
  //if(valittu == -2) tulokset
  }else{
    content = <Tulokset />
  }
  return (
    <Stack
    spacing={5}
    direction="column"
    alignItems='center'
    justifyContent="center"
    height='100vh'
    >
      <Header />
      <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '100px 100px 0px 0px',
      color: 'black'
    }}>
        {content}
    </Stack>
    </Stack>
  )
}

export default Etusivu
