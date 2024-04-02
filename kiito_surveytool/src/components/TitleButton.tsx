import {Button} from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {setTesti} from './KyselyContent';
import smallarrow from '../tulokset/smallarrow.svg'

function handleClick(e:any, props : any) 
{
  e.preventDefault();
  setTesti(1);
  props.setValittu(-1)
}

export function TitleButton(props:any){

props.valittu
props.sivu
const { data } = props
return (
    <div style={{
        width:"80%",
        display: 'flex',
        flexWrap: "nowrap",
        textAlign: 'center'
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
    <img src={smallarrow}/>
      <Typography>
        Etusivulle
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
    borderRadius: 10,
    width: '190px',
    
  }}>
    
      <Typography>
        {data.sivut[props.sivu].sivu}
      </Typography>
    
  
  </div>

  <Button onClick={()=>{props.setValittu((props.sivu + 2)*-1)}} style={{
        backgroundColor:'#40B7D7',
        //opacity:.5,
        border:"none",
        padding: "10px",
        color: "white",
        borderRadius: 10,
        cursor: "pointer", 
        marginTop: '30px',
        marginBottom: '60px',
      }}>
        <Stack direction="row" spacing={1}>
          <Typography>
            Tuloksiin
          </Typography>
          <img style={{transform: 'rotate(180deg)'}} src={smallarrow}/>
        </Stack>
      </Button>

  </div>
);
}