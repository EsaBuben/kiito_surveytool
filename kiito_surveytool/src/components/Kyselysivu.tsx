import { Stack } from '@mui/material'
import KyselyContent from './KyselyContent'

const Kyselysivu = (props : any) => {
  const { data } = props;

  return (
    
      <KyselyContent sivu = {props.sivu} setValittu = {props.setValittu} data = {data}/>
    
  )
}

export default Kyselysivu