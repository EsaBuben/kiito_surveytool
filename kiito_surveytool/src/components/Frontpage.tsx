import { Stack } from '@mui/material'
import { Header, Content } from '.'

const Frontpage = (props : any) => {
  const { data, setupArr } = props;
  return (
    <Stack
    spacing={5}
    sx={{
      height: { xs: '100vh', sm: '100vh', md: '100vh', lg: '70dvh'},
      position: 'relative',
    }}
    >
      <Header data = {props.localData}/>
      <Content data = {data} localData={props.localData} setupArr={setupArr}/>
      
    </Stack>
  )
}

export default Frontpage
