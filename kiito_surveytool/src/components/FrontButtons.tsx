import { Box, Button, ButtonGroup, Slide, Stack, Typography} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { FrontInput } from '.';
import { animation } from './QueryTitleButton';

export function handleClick(e:any, props : any, data : any, sivu : any)
{
  e.preventDefault();
  props.setValittu(data.indexOf(sivu))
}


function funktio(j:any, index:any){
  if(index === j){
    return true
  }
  else return false
}

function FrontButtons(props : any) {
  //get data from props
  const { data, localData } = props;

  return (
  <Stack sx={{
    position: 'relevant',
    display: 'contents',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: '100px 100px 0px 0px',
    color: 'black'
  }}>

  <FrontInput setName = {props.setName} name = {props.name} setDate={props.setDate} date={props.date} localData = {props.localData}/>

  <Typography variant="h5" align="center" fontWeight='bold' width='300px' paddingBottom='30px'>
  {localData.aiheotsikko}
  </Typography >
  <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
        marginLeft: '120px',
        marginBottom: 8
      }}
    >

  <ButtonGroup orientation="vertical" sx={{gap:3}}>
    {data.map((sivu : any) =>(

      <Slide in appear={funktio(animation, data.indexOf(sivu))} timeout={400} key={data.indexOf(sivu)}>
      <Button variant="contained"
      className="question-btn"
      sx={{
        boxShadow:15,
        borderRadius:2,
        fontSize:14,
        color:'white',
        textTransform:'none',
        fontWeight:'bold',
        padding:1,
        backgroundColor:'#40B7D7',

        }}
        onClick={(e) => handleClick(e, props, data, sivu)}
          key={data.indexOf(sivu)}

      >
      {sivu.sivu}
      </Button>
      </Slide>
    ))}
    </ButtonGroup>

    <ButtonGroup orientation="vertical" sx={{gap:3}}>
    {data.map((sivu : any, index: number) =>(
      <Button key={sivu} variant="text"
      className="tulos-btn"
      sx={{
        fontSize:14,
        color:'#40B7D7',
        textTransform:'none',
        fontWeight:'bold',
        padding:1,
        width:100,
        height:40,
        display:'flex',
        justifyContent:'space-between'
      }}
      onClick={() => props.setValittu
      (-1*(index + 2))}
      >
      {props.localData.napit.etusivuTulos} <ArrowRightAltIcon />
      </Button>
    ))}
    </ButtonGroup>
    </Box>
      
  </Stack>
)
      }

export default FrontButtons
