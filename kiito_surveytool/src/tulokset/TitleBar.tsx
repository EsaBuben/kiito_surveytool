import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BigArrow from './BigArrow.svg';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function TitleBar(props:any){
  const Title : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  const subTitle : string = "Lorem ipsum dolor sit amet."

  const getPDF = () => {
    const capture = document.querySelector('.Kaavio')
    html2canvas(capture).then((canvas) =>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p','mm','a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      let size = componentWidth
      if(componentWidth > componentHeight){
        size = componentHeight
      }

      doc.addImage(imgData, 'PNG', 0 ,0, size, size );
      doc.save('test.pdf');
    }

    )
  }


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
        <button>
        <img
          style={{width:"50px", height:"50px",paddingRight:"30px"}}
          src={BigArrow}
          onClick={getPDF}
        />
        </button>
      </Grid>
    </Grid>
  </Paper>)
}
