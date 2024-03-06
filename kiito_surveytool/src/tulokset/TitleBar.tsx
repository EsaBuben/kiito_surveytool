import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BigArrow from './BigArrow.svg';
export function TitleBar(props:any){
  const Title : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  const subTitle : string = "Lorem ipsum dolor sit amet."

  return(<Paper
    sx={{
      background:"rgb(11, 101, 205)",
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
        <img style={{width:"50px", height:"50px",paddingRight:"30px"}} src={BigArrow} />
      </Grid>
    </Grid>
  </Paper>)
}
