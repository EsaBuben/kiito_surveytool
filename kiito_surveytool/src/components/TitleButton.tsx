import {Button} from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {setTesti} from './KyselyContent';

function handleClick(e:any, props : any) 
{
  e.preventDefault();
  setTesti(1);
  props.setValittu(-1)
}

export function TitleButton(props:any){

return (
    <div style={{
        width:"80%",
        }}>
    <Button
      style={{
        backgroundColor:'#40B7D7',
        //opacity:.5,
        border:"none",
        padding: "10px",
        color: "white",
        borderRadius: 10,
        marginBottom: "60px",
        cursor: "pointer",
        marginTop: '30px'
      }}
      onClick={(e) => handleClick(e, props)}
        key={-1}
      >
    <Stack direction="row" spacing={1}>
      <Typography>
        Palaa etusivulle
      </Typography>
    </Stack>
  </Button>


  <Button disabled style={{
    backgroundColor:'#40B7D7',
    //opacity:.5,
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