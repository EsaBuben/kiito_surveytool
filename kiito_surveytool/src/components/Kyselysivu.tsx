import { Stack } from '@mui/material'
import { Header,  } from '.'
import KyselyContent from './KyselyContent'

const Kyselysivu = () => {
  return (
    <Stack
    spacing={5}
    direction="column"
    alignItems='center'
    justifyContent="center"
    height='100vh'
    //textAlign='center'
    >
      <Header />
      <KyselyContent />
    </Stack>
  )
}

export default Kyselysivu