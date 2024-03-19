import React from 'react'
import { Stack } from '@mui/material'
import { Header, Content } from '.'

const Etusivu = (props : any) => {
  const { data } = props;
  return (
    <Stack
    spacing={5}
    //direction="column"
    // alignItems='center'
    // justifyContent="center"
    sx={{
      height: { sx: 'auto', md: '100vh'},
      position: 'relative',
    }}
    >
      <Header data = {data}/>
      <Content data = {data}/>
    </Stack>
  )
}

export default Etusivu
