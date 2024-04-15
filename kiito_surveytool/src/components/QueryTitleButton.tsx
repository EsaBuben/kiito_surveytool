import {Button, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import {setTesti} from './QueryContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

let anime = -1
function handleClick(e:any, props : any)
{
  e.preventDefault();
  setTesti(1);
  props.setValittu(-1)
}

export function QueryTitleButton(props:any){

const { data } = props
anime = props.valittu
return (
    <div style={{
        width:"80%",
        display: 'flex',
        flexWrap: "nowrap",
        textAlign: 'center'
        }}>
    <Button variant='contained'
      sx={{
        backgroundColor:'#40B7D7',
        //opacity:.5,
        border:"none",
        padding: "10px",
        color: "white",
        marginBottom: "60px",
        cursor: "pointer",
        marginTop: '30px',
        boxShadow:5,
        borderRadius:2
      }}
      onClick={(e) => handleClick(e, props)}
        key={-1}
      >
    <Stack direction="row" spacing={1}>
    <ArrowBackIcon/>
      <Typography>
        {props.localData.napit.kyselyEtusivu}
      </Typography>
    </Stack>
  </Button>

  <div style={{margin: 'auto',
    backgroundColor:'#40B7D7',
    //opacity:.5,
    border:"none",
    padding: "10px",
    color: "white",
    marginBottom: "60px",
    marginTop: '30px',
    borderRadius: 2,
    width: '190px',
    boxShadow: '0px 2px 10px grey'
    
  }} className='asd'>
    
      <Typography>
        {data[props.sivu].sivu}
      </Typography>
    
  
  </div>

  <Button variant='contained' onClick={()=>{props.setValittu((props.sivu + 2)*-1)}} sx={{
        backgroundColor:'#40B7D7',
        //opacity:.5,
        border:"none",
        padding: "10px",
        color: "white",
        cursor: "pointer",
        marginTop: '30px',
        marginBottom: '60px',
        boxShadow:5,
        borderRadius:2
      }}>
        <Stack direction="row" spacing={1}>
          <Typography>
            {props.localData.napit.kyselyTulos}
          </Typography>
          <ArrowForwardIcon/>
        </Stack>
      </Button>

  </div>
);
}
export {anime}
