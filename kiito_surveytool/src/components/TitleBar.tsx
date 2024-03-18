import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function TitleBar(props : any){
  const {data} = props;
  console.log(props.sivu)
  //sit vaa kattelee jiisonnista mikä on tää title ja subtitteli
  const Title : string = "1. Materiaalien kestävä käyttä"
  const subTitle : string = "Materiaalen valinta ja vähentäminen"
  return(<Paper
    sx={{
      background:"#039BE5",
      color:"white",
      padding: "10px 5px",
      borderRadius: 6,
      width:"80%",
    }}
    >
    <Grid container justifyContent="flex-end" >
      <Grid item sx={{margin:"auto"}} >
        <Grid item>
          <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="h5">{Title}{props.sivu}</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="subtitle1">{subTitle}</Typography>
        </Grid>
      </Grid>
      <Grid item >
        <img style={{width:"50px", height:"50px",paddingRight:"30px"}} />
      </Grid>
    </Grid>
  </Paper>)
}