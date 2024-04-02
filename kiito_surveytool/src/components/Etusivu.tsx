import { Stack } from '@mui/material'
import { Header, Content } from '.'

const Etusivu = (props : any) => {
  const { data, setupArr } = props;
  return (
    <Stack
    spacing={5}
    sx={{
      height: { sx: 'auto', md: '100vh'},
      position: 'relative',
    }}
    >
      <Header data = {props.localData}/>
      <Content data = {data} localData={props.localData} setupArr={setupArr}/>
    </Stack>
  )
}

export default Etusivu
