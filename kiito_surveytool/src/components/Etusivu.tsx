import React from 'react'
import { Stack } from '@mui/material'
import { Header, Content } from '.'

const Etusivu = () => {
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
      <Header />
      <Content />
    </Stack>
  )
}

export default Etusivu
