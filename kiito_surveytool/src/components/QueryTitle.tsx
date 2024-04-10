import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { testi } from './QueryContent';
import Typography from '@mui/material/Typography';

export function QueryTitle(props : any){
  const {data, sivu} = props;
  //sit vaa kattelee jiisonnista mikä on tää title ja subtitteli

  let title : string[] = ['sivu0']
  let sub : string[] = ['sub0']

  for(let i = 0; i < data[sivu].kategoriat.length; i++)
  {
    for(let j = 0; j < data[sivu].kategoriat[i].tasot.length; j++)
    {
      title.push(i+1 + ". " + data[sivu].kategoriat[i].otsikko)
      sub.push(data[sivu].kategoriat[i].tasot[j].alaotsikko)
    }
  }


  const Title : string = title[testi]
  const subTitle : string = sub[testi]


  return(<Paper
    sx={{
      background:"#40B7D7",
      color:"white",
      padding: "10px 5px",
      borderRadius: 6,
      width:"80%",
      boxShadow:5
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
    </Grid>
  </Paper>)
}
