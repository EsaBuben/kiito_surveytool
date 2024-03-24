import {useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Taulukko} from './taulukko';
import {Kaavio} from './Kaavio';

interface TabProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPage(props: TabProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box>
      {value === index && (
        <Box>{children}</Box>
      )}
    </Box>

  );
}


export function TabChoiceBar(props:any){
  const [value, setValue] = useState<number>(0)

//possibly do one more step above for less rerunning
  let data_array: string[] = props.sivuData.kategoriat.flatMap(
        (kategoria) => {
        return  kategoria.tasot.map(
            (taso) => {
              return taso.alaotsikko;
            }
          )
  })


console.log(data_array)
  return (<Box>
    <Tabs
      centered
      value={value}
      onChange={(event: React.SyntheticEvent, newValue :number) => setValue(newValue)}>
        <Tab label="Kaavio" />
        <Tab label="Taulukko" />
      </Tabs>
      <TabPage value={value} index={0}>
        <Kaavio data_array={data_array}/>
      </TabPage>
      <TabPage value={value} index={1}>
        <Taulukko data_array={data_array} />
      </TabPage>
  </Box>)
}
