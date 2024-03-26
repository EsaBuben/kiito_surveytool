import {Button} from '@mui/base/Button';
import smallarrow from './smallarrow.svg';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {COLORS} from '../utils/style_constants';

export function PaluuButton(props:any){

return (
  <Button  style={{
    background: COLORS.primary,
    border:"none",
    padding: "10px",
    color: 'white',
    borderRadius: 10,
    marginLeft: "10%",
    marginBottom: "10px",
    cursor: "pointer",

    }}
    onClick={() => props.setValittu(-1)}
    >
    <Stack direction="row" spacing={1}>
      <img src={smallarrow}/>
      <Typography>
        Palaa etusivulle
      </Typography>
    </Stack>
  </Button>
);
}
