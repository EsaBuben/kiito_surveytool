import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import {COLORS} from '../utils/style_constants'
import { IconButton } from '@mui/material';

export function ResultTitle(props:any){

  const Title : string = props.otsikko
  const subTitle : string = props.alaOtsikko
  const hoverText :string = props.PDFbutton

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
    <Grid container justifyContent="center" spacing={1} columns={3} p={1} ml={3}>
      <Grid item xs={2} >
        <Grid item xs={'auto'}>
          <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="h5">{Title}</Typography>
        </Grid>
        <Grid item xs={'auto'}>
          <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="subtitle1">{subTitle}</Typography>
        </Grid>
      </Grid>
      <Grid item onClick={props.createPDF} style={{cursor:"pointer"}} xs={'auto'}>
        <Tooltip title={hoverText} placement="top" arrow>
        <IconButton >
        <DownloadIcon sx={{ fontSize: 65, color:"white"}}/>
        </IconButton>
      </Tooltip>
      </Grid>
    </Grid>
  </Paper>)
}
