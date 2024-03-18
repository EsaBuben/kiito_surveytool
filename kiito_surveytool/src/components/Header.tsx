import { Box, Typography } from '@mui/material'

const Header = (props : any) => {
  const { data } = props;
  return (
    <Box 
  sx={{
      position: 'relative',
      display: 'flex',
      //width: '100%',
      padding: '30px 0px 30px 0px',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '0 0 100px 100px',
      color: 'black',
      textAlign: 'center',
  }}>
    <Typography variant="h5" color="black" padding='0px 30px 0px 30px' margin="auto" fontWeight="bold">
    {data.paaotsikko}
    </Typography>
  </Box>
  )
}

export default Header