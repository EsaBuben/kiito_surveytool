import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import {COLORS} from './style_constants'

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
            background: isCategory ? COLORS.secondary : COLORS.primary,
            textAlign: isCategory ? "flex-start" : "center",
            padding: "10px",
            color: "white"
          }}>
            {Text}
        </Paper>
    </Grid>
  )
}
