import { Box, Grid, Paper, Popper, Typography } from '@mui/material';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useState } from 'react';

export default function Instruction(props : any) {
    const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event : any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };
  const {data} = props
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box justifyContent='center' alignItems='center' textAlign='center' sx={{ display: 'flex', alignItems: 'center' }}>
      <h3>Kuinka arvioisit seuraavien toimintojen/kyvykkyyksien kypsyysTason?</h3>
      <HelpRoundedIcon 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer", color: '#40B7D7' }}
      />
      <Popper
      sx={{
        display:'flex',
        width: '50%',
        height: 'auto',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        padding: '10px',
        flexWrap: 'wrap',
        borderRadius: '10px',
        alignItems:'baseline',
        boxShadow: '3px 3px 3px 3px rgba(0,0,0,0.3)',
      }}
      id={id}
      open={open}
      anchorEl={anchorEl}
      placement="right-start"
      >
      <Grid 
       sx={{
        display:'grid',
        width: '100%',
        height: '100%',
        gridTemplate: 'auto auto / auto auto',
        gridColumnGap: '10px',
        gridRowGap: '10px',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems:'stretch',
      }}>
      {['Taso 5',
       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'Taso 4',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'Taso 3',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'Taso 2',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'Taso 1',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      ].map((text, index) => (
      OddOneOut(index, text)
      ))}
      </Grid>
      </Popper>
    </Box>
  );
}

function OddOneOut(index : number, text : string){
  let ind = index;
  let txt = text;
  if(ind % 2 === 0){
return (
    <Paper
    elevation={6}
      sx={{
        display:'flex',
        backgroundColor:'#023544',
        flexWrap: 'wrap',
        flexDirection: 'column',
        textAlign: 'left',
        padding: '10px',
        }}
        key = {index}>
    <Typography variant="h5" fontWeight={'bold'} margin={'auto'} sx={{color:'white' }}>{txt}</Typography>
    </Paper>
    )
  }
  else {
    return (
      <Paper
      elevation={4}
      sx={{
        display:'flex',
        backgroundColor: '#8AD3E6',
        flexWrap: 'wrap',
        flexDirection: 'column',
        textAlign: 'left',
        padding: '10px',
        }}
        key = {index}>
        <Typography variant="body1">{txt}</Typography>
      </Paper>
      )
  }
}
