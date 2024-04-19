import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {ResultCell} from './ResultCell';

export function ResultTable(props :any){
  /*
   stack of rows ja row is 2-piece Stack
  */
  const subCategories : string[] = props.data_array;
  const answerAverages : number[] = props.radio_values;

  return(
    <Box sx={{flexGrow:1}} ref={props.tableRef}>
      <Grid container spacing={0.5}>
          {
            subCategories.map((category, index) => {

              let categoryKey: string = "Category"+ index.toString();
              let averageKey: string = "Average" + index.toString();

              return<Grid spacing={0.5}
                sx={{ justifyContent: 'center'}}
                    key={index} container item>
                <ResultCell key={categoryKey}  Text={category} isCategory={true} isClickable={true} sivu={props.sivu} page={index} setValittu={props.setValittu}/>
                <ResultCell key={averageKey}  Text={answerAverages[index]} isCategory={false} isClickable={false}/>
              </Grid>
            })
          }
      </Grid>
    </Box>
  )

}
