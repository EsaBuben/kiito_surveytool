import {useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Taulukko} from './taulukko';
import {Kaavio} from './Kaavio';
import {COLORS} from './style_constants'
interface TabProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Kategoria {
  tasot: { alaotsikko: string }[];
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
  const radio_values:number[] = [2.5,3,4,1,5,3,4];
//possibly do one step above for less rerunning
  let data_array: string[] = props.sivuData.kategoriat.flatMap(
        (kategoria: Kategoria) => {
        return  kategoria.tasot.map(
            (taso: { alaotsikko: string }) => {
              return taso.alaotsikko;
            }
          )
  })


  return (<Box >
    <Tabs
      centered
      TabIndicatorProps={{
      style: {
        backgroundColor: COLORS.primary
        }
      }}
      value={value}
      onChange={(event: React.SyntheticEvent, newValue :number) => setValue(newValue)}>
        <Tab style={{color: value == 0 ? COLORS.primary : 'black'}} label="Kaavio" />
        <Tab style={{color: value == 1 ? COLORS.primary : 'black'}}label="Taulukko" />
      </Tabs>
      <TabPage value={value} index={0}>
        <Kaavio data_array={data_array} radio_values={radio_values}/>
      </TabPage>
      <TabPage value={value} index={1}>
        <Taulukko data_array={data_array} radio_values={radio_values}/>
      </TabPage>
  </Box>)
}
