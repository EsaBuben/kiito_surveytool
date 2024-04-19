import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import {COLORS} from '../utils/style_constants'

export function ResultTitle(props:any){

  const Title : string = props.otsikko
  const subTitle : string = props.alaOtsikko

  return(<Paper
    sx={{
      background:COLORS.primary,
      color:"white",
      padding: "10px 5px",
      borderRadius: 6,
      width:"80%",
      margin:"auto"
    }}
    >
    <Grid container justifyContent="flex-end" >
      <Grid item sx={{margin:"auto", marginRight: 22}} >
        <Grid item>
          <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="h5">{Title}</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="subtitle1">{subTitle}</Typography>
        </Grid>
      </Grid>
      <Grid item onClick={props.createPDF}>
        <DownloadIcon sx={{width:"50px", height:"50px",paddingRight:"30px"}}/>
      </Grid>
    </Grid>
  </Paper>)
}
