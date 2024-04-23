import { Box, Grid, Paper, Popper, Typography } from '@mui/material';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useState } from 'react';

export default function QueryInstruction(props : any) {
  const [anchorEl, setAnchorEl] = useState(null);
    let kysymysotsikko = props.localData.kysymysotsikko;

  const handleMouseEnter = (event : any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };


  const handleClick = (event : any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    
    <Box justifyContent='center'
     alignItems='center' 
     textAlign='center' 
     
     sx={{
       display: 'flex', 
       alignItems: 'center',
       width: '60%' 
       }}
       >
      <h3>{kysymysotsikko}</h3>
      <HelpRoundedIcon
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ cursor: "pointer", color: '#40B7D7', paddingLeft: '30px'}}
      />
<Popper 
  sx={{
    display:'flex',
    width: {sx:'100%', md: '90%', lg: '70%', xl: '60%'},
    height: 'auto',
    backgroundColor: 'white',
    padding: '15px',
    flexWrap: 'wrap',
    flexDirection: 'column',
    borderRadius: '10px',
    alignItems:'baseline',
    boxShadow: '3px 3px 3px 3px rgba(0,0,0,0.3)',
  }}
  id={id}
  open={open}
  anchorEl={anchorEl}
  placement="bottom-end"
  modifiers={[
    {
      name: 'offset',
      options: {
        offset: [165, 5],
      },
      enabled: true,
    },
  ]}
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
      {props.localData.tasot.map((text:string, index:number) => (
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
