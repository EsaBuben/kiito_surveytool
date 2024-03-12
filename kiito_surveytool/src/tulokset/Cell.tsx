import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'


export function Cell(props:any){

  const Text : string = props.Text
  const isCategory: boolean = props.isCategory;

  return(
    <Grid item
      xs={
        isCategory ? 10 : 1
      }>
        <Paper
          sx={{
            background: isCategory ? "black" : "blue",
            textAlign: isCategory ? "flex-start" : "center",
            padding: "10px",
            color: "white"
          }}>
            {Text}
        </Paper>
    </Grid>
  )
}
