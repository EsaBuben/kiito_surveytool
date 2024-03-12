import React from 'react'
import { Stack } from '@mui/material'
import { Header, Footer, Content } from '.'

const Etusivu = () => {
  return (
    <Stack
    spacing={5}
    direction="column"
    alignItems='center'
    justifyContent="center"
    height='100vh'
    //textAlign='center'
    >
      <Header />
      <Content />
    </Stack>
  )
}

export default Etusivu
