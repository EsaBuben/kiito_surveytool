import {Button} from '@mui/base/Button';
import smallarrow from './smallarrow.svg';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
export function PaluuButton(props:any){

return (
  <Button style={{
    background:'blue',
    opacity:.5,
    border:"none",
    padding: "10px",
    color: "white",
    borderRadius: 10,
    marginLeft: "10%",
    marginBottom: "10px"

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
