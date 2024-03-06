import {useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Taulukko} from './taulukko';

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
  const [value, setValue] = useState<number>(1)


  return (<Box>
    <Tabs
      centered
      value={value}
      onChange={(event: React.SyntheticEvent, newValue :number) => setValue(newValue)}>
        <Tab label="Kaavio" />
        <Tab label="Taulukko" />
      </Tabs>
      <TabPage value={value} index={0}>
        <p> Empty </p>
      </TabPage>
      <TabPage value={value} index={1}>
        <Taulukko />
      </TabPage>
  </Box>)
}
