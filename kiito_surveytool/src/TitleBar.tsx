import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function TitleBar(props:any){
  const Title : string = "1. Materiaalien kestävä käyttä"
  const subTitle : string = "Materiaalen valinta ja vähentäminen"

  return(<Paper
    sx={{
      background:"#40B7D7",
      color:"white",
      padding: "10px 5px",
      borderRadius: 6,
      width:"80%",
      margin:"auto"
    }}
    >
    <Grid container justifyContent="flex-end" >
      <Grid item sx={{margin:"auto"}} >
        <Grid item>
          <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="h5">{Title}</Typography>
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