import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {ResultCell} from './ResultCell';

type TableProps ={
  resultRef:React.MutableRefObject<undefined>;
  data_array :string[];
  radio_values :number[];
  sivu:number;
  setValittu:React.Dispatch<React.SetStateAction<number>>;
}

export function ResultTable({data_array, radio_values, ...props} :TableProps){
  /*
   stack of rows ja row is 2-piece Stack
  */
  return(
    <Box sx={{flexGrow:1}} ref={props.resultRef}>
      <Grid container spacing={0.5}>
          {
            data_array.map((category, index) => {

              let categoryKey: string = "Category"+ index.toString();
              let averageKey: string = "Average" + index.toString();

              return<Grid spacing={0.5}
                sx={{ justifyContent: 'center'}}
                    key={index} container item>
                <ResultCell key={categoryKey}  Text={category} isCategory={true} isClickable={true} sivu={props.sivu} page={index} setValittu={props.setValittu}/>
                <ResultCell key={averageKey}  Text={radio_values[index]} isCategory={false} isClickable={false}/>
              </Grid>
            })
          }
      </Grid>
    </Box>
  )

}
