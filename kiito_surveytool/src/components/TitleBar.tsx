import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { testi } from './KyselyContent';
import Typography from '@mui/material/Typography';

export function TitleBar(props : any){
  const {data} = props;
  //sit vaa kattelee jiisonnista mikä on tää title ja subtitteli

  let title : string[] = ['sivu0']
  let sub : string[] = ['sub0']

  for(let i = 0; i < data.sivut[0].kategoriat.length; i++)
  {
    title.push(i+1 + ". " + data.sivut[0].kategoriat[i].otsikko)
    title.push(i+1 + ". " + data.sivut[0].kategoriat[i].otsikko)
  }

  for(let i = 0; i < data.sivut[0].kategoriat.length; i++)
  {
    for(let j = 0; j < data.sivut[0].kategoriat[i].tasot.length; j++)
    {
      sub.push(data.sivut[0].kategoriat[i].tasot[j].alaotsikko) 
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