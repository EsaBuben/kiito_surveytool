import { Stack } from '@mui/material'
import KyselyContent from './KyselyContent'

const Kyselysivu = (props : any) => {
  console.log(props.sivu)
  const { data } = props;

  return (
    <Stack>
      <KyselyContent sivu = {props.sivu} setValittu = {props.setValittu} data = {data}/>
    </Stack>
  )
}

export default Kyselysivu