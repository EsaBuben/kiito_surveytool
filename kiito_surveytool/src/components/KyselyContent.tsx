
import { Stack } from '@mui/material'
import { Instruction, Questions, } from '.'
import { TitleButton } from './TitleButton';
import { TitleBar } from './TitleBar';
import { LowerButtons } from './LowerButtons';


const KyselyContent = () => {
  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,1)',
      borderRadius: '100px 100px 0px 0px',
      color: 'black',
    }}>
        <TitleButton />
        <TitleBar />
        <Instruction />
        <Questions />
        <LowerButtons />
    </Stack>

  )
}

export default KyselyContent