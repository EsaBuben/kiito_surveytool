import { Box, Typography } from '@mui/material'

const Header = () => {
  const otsikko = "Nykytilakartoitus kiertotalouden potentiaalista ja kyvykkyyden kypsyystasosta osana uusien liiketoimintamallien suunnittelua"
  return (
    <Box 
  sx={{
    position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '20vh',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '0 0 100px 100px',
      color: 'black'
  }}>
    <Typography variant="h5" color="black" padding='0px 30px 0px 30px' margin="auto" fontWeight="bold">
    {otsikko}
    </Typography>
  </Box>
  )
}

export default Header