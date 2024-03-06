import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export function TitleBar(props:any){
  const Title : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  const subTitle : string = "Lorem ipsum dolor sit amet."

  return(<Paper
    sx={{
      background:"rgb(11, 101, 205)",
      color:"white",
      padding: "10px 5px",
      borderRadius: 6
    }}
    >
    <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="h5">{Title}</Typography>
    <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="subtitle1">{subTitle}</Typography>
  </Paper>)
}
