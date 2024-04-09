import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import {COLORS} from '../utils/style_constants'
import { setTesti } from './QueryContent'

export function ResultCell(props:any){

  const Text : string = props.Text
  const isCategory: boolean = props.isCategory;
  const isClickable: boolean = props.isClickable;
  const setValittu = props.setValittu

  return(
    <Grid item
      xs={
        isCategory ? 10 : 1
      }>
        <Paper onClick={()=>{if(isClickable) setValittu(props.sivu); setTesti(props.page+1) }}
          sx={{
            background: isCategory ? COLORS.secondary : COLORS.primary,
            textAlign: isCategory ? "flex-start" : "center",
            padding: "10px",
            color: "white",
            cursor: isClickable? 'pointer' : 'default'
          }}>
            {Text}
        </Paper>
    </Grid>
  )
}
