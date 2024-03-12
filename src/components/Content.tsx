import { useEffect,  useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Footer, Qcategories, Tietokentta } from '.'
import { Typography } from '@mui/material'

const alaotsikko = 'Valitse kiertotalouden liiketoimintamalli';

const Content = (props : any) => {
let setValittu = props.setValittu;
let valittu = props.valittu;
  return (
      <Stack
      sx={{
        display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign:'center'
    
      }}
      >

      <Box>
        <Tietokentta />
      </Box>

      <Box p={2} sx=
      {{
        overflowY: 'auto', 
        height: '90vh',
        flex: 2
      }}>
        <Typography variant="h5" align="center" fontWeight='bold' width='300px' paddingBottom='50px'>
        {alaotsikko}
        </Typography>
        <Qcategories justifyContent="center" alignItems="center"
        valittu = {valittu}
        setValittu = {setValittu}
        />
      </Box>
      <Footer />
    </Stack>

  )
}

export default Content
