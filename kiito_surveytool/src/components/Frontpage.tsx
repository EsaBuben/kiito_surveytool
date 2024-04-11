import { Stack } from '@mui/material'
import { Header, Content } from '.'

const Frontpage = (props : any) => {
  const { data, setupArr } = props;
  return (
    <Stack
    spacing={5}
    sx={{
      height: { xs: 'auto', md: '100vh'},
      position: 'relative',
    }}
    >
      <Header data = {props.localData}/>
      <Content data = {data} localData={props.localData} setupArr={setupArr}/>
      
    </Stack>
  )
}

export default Frontpage
