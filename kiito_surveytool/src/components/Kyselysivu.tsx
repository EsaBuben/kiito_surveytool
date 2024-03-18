import { Stack } from '@mui/material'
import KyselyContent from './KyselyContent'

const Kyselysivu = (props : any) => {
  props.sivu

  return (
    <Stack>
      <KyselyContent sivu = {props.sivu} setValittu = {props.setValittu}/>
    </Stack>
  )
}

export default Kyselysivu