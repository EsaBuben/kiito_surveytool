
import { Stack } from '@mui/material'
import { Instruction, Questions, } from '.'
import { TitleButton } from './TitleButton';
import { TitleBar } from './TitleBar';
import { LowerButtons } from './LowerButtons';


const KyselyContent = (props : any) => {
  props.valittu
  console.log(props.sivu)
  const { data } = props;
  return (
    <Stack sx={{
      // display: 'flex',
      // flexDirection: 'column',
      alignItems: 'center',
      // width: '100%',
      // height: '100%',
      // backgroundColor: 'rgba(255,255,255,1)',
      // borderRadius: '100px 100px 0px 0px',
      // color: 'black',
    }}>
        <TitleButton setValittu = {props.setValittu}/>
        <TitleBar data = {data} sivu = {props.sivu} />
        <Instruction data = {data} />
        <Questions sivu = {props.sivu} data = {data}/>
        <LowerButtons />
    </Stack>

  )
}

export default KyselyContent