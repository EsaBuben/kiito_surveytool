import {Button} from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
export function TitleButton(props:any){

return (
    <div style={{
        display: 'block',
        margin: "auto",
        width:"80%",
        }}>
    <Button style={{
    background:'#039BE5',
    opacity:.5,
    border:"none",
    padding: "10px",
    color: "white",
    borderRadius: 10,
    marginBottom: "10px",
    cursor: "pointer",
  }}>
    <Stack direction="row" spacing={1}>
      <Typography>
        Palaa etusivulle
      </Typography>
    </Stack>
  </Button>


  <Button disabled style={{
    background:'#039BE5',
    opacity:.5,
    border:"none",
    padding: "10px",
    color: "white",
    marginBottom: "10px",
    borderRadius: 10,
    marginLeft: "50%",
    transform: "translateX(-125%)"
  }}>
    <Stack direction="row" spacing={1}>
      <Typography>
        Kiertävät raaka-aineet
      </Typography>
    </Stack>
  </Button>

  </div>
);
}