import { useEffect,  useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Qcategories, Tietokentta } from '.'
import { Typography } from '@mui/material'
import test from '../test.json'


const Content = () => {
  const [valittu, setValittu] = useState()
  
  return (
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

      <Tietokentta />

      <Box p={2} sx=
      {{
        overflowY: 'auto', 
        height: '90vh',
        flex: 2
      }}>
        <Typography variant="h5" align="center" fontWeight='bold' width='300px' paddingBottom='50px'>
        {test.aiheotsikko}
        </Typography>
        <Qcategories justifyContent="center" alignItems="center"
        valittu = {valittu}
        setValittu = {setValittu}
        />
      </Box>
      <Box> 
        <img src={'src/assets/logo.jpg'} alt="logo" /> 
      </Box>
    </Stack>

  )
}

export default Content