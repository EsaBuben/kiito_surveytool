import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react';

const Header = (props : any) => {
  const { data } = props;
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <>
    <Box
  sx={{
      position: 'relative',
      display: 'flex',
      padding: '20px 0px 20px 0px',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '0 0 100px 100px',
      color: 'black',
      textAlign: 'center',
  }}>
    <Typography variant="h5" color="black" padding='0px 20px 0px 20px' margin="auto" fontWeight="bold">
    {data.paaotsikko}
    </Typography>
    <img style={{marginRight: 30}} hidden={width > 1500 ?true :false} src='/images/KiitoLogo.png' alt='kiitologo' height={50} width={150}></img>
  </Box>
  <div hidden={width < 1501 ?true :false} style={{position: 'absolute', right: -250,height: 200, width: 200}}>
  <img src='/images/KiitoLogoAlt.png' alt='kiitologoalt' height={75} width={175}></img>
  </div>
  </>
  )
}

export default Header
