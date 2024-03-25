import { Box, Paper, Popper, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useState } from 'react';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  fontWeight: "bold",
    textAlign: "center"
}));

export default function TypographyTheme(props : any) {
    const {data} = props
    const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event : any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box justifyContent='center' alignItems='center' textAlign='center' sx={{ display: 'flex', alignItems: 'center' }}>
      <h3>Kuinka arvioisit seuraavien toimintojen/kyvykkyyksien kypsyystason?</h3>
      <HelpRoundedIcon 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer", color: '#039BE5' }}
      />
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <Box sx={{
            width: 800,
            height: 300,
            overflow: 'auto',
            padding: 2,
            marginLeft:2,
            background:'white',
            border: '1px solid #000',
            }}>
          {['Text 1', 'Text 2', 'Text 3'].map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Box>
      </Popper>
    </Box>
  );
}
