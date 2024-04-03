import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Cell} from './Cell';

export function Taulukko(props :any){
  /*
   stack of rows ja row is 2-piece Stack
  */
  const subCategories : string[] = props.data_array;
  const answerAverages : number[] = props.radio_values;

  return(
    <Box sx={{flexGrow:1}}>
      <Grid container spacing={0.5}>
          {
            subCategories.map((category, index) => {

              let categoryKey: string = "Category"+ index.toString();
              let averageKey: string = "Average" + index.toString();

              return<Grid spacing={0.5}
                sx={{ justifyContent: 'center'}}
                    key={index} container item>
                <Cell key={categoryKey}  Text={category} isCategory={true} isClickable={true} sivu={props.sivu} page={index} setValittu={props.setValittu}/>
                <Cell key={averageKey}  Text={answerAverages[index]} isCategory={false} isClickable={false}/>
              </Grid>
            })
          }
      </Grid>
    </Box>
  )

}
