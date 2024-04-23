import {Button, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import {COLORS} from '../utils/style_constants';
import { setTesti } from './QueryContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Probs = {
  innerText:string,
  setValittu:React.Dispatch<React.SetStateAction<number>>,
}

export function ResultReturnButton(props:Probs){

return (
  <Button variant='contained' sx={{
    background: COLORS.primary,
    border:"none",
    padding: "10px",
    color: 'white',
    marginLeft: "10%",
    marginBottom: "10px",
    boxShadow:5,
    borderRadius:2
    }}
    onClick={() => {props.setValittu(-1); setTesti(1)}}
    >
    <Stack direction="row" spacing={1}>
      <ArrowBackIcon/>
      <Typography>
        {props.innerText}
      </Typography>
    </Stack>
  </Button>
);
}
