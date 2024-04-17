import {useState} from 'react';
import {createPortal} from 'react-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {ResultTable} from './ResultTable';
import {ResultGraph} from './ResultGraph';
import {COLORS} from '../utils/style_constants'

interface TabProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Kategoria {
  tasot: { alaotsikko: string }[];
}


function TabPage(props: TabProps) {
  const { children, value, index} = props;

  return (
    <Box>
      {value === index && (
        <Box>{children}</Box>
      )}
    </Box>

  );
}


export function ResultTabs(props:any){
  const [value, setValue] = useState<number>(0)

  const radio_values:number[] = props.answers.map((values:any)=>{
      let sum:number = 0
      values.forEach((num:number)=>{
        sum += num
      })
      return sum
  });
//possibly do one step above for less rerunning
  let data_array: string[] = props.sivuData.kategoriat.flatMap(
        (kategoria: Kategoria) => {
        return  kategoria.tasot.map(
            (taso: { alaotsikko: string }) => {
              return taso.alaotsikko;
            }
          )
  })
 const handleChange = (event: React.SyntheticEvent, newValue:number) =>{
   if(event != null){
     setValue(newValue)
   }
 }

const ResultGraph_element = <ResultGraph
  graphRef={props.graphRef}
  data_array={data_array}
  radio_values={radio_values}
  sivu={props.sivu}
  setValittu={props.setValittu}/>

const ResultTable_element = <ResultTable
    tableRef={props.tableRef}
    data_array={data_array}
    radio_values={radio_values}
    sivu={props.sivu}
    setValittu={props.setValittu}/>


const makePortal = (jsxelement:JSX.Element) =>{
  let content:React.ReactPortal | null = null;
  let parent = document.getElementById('hidden_content')
  if(parent != null){
  content= createPortal(
    jsxelement,parent
  )}

  return content
}


  return (<Box >
    <Tabs
      centered
      TabIndicatorProps={{
      style: {
        backgroundColor: COLORS.primary
        }
      }}
      value={value}
      onChange={handleChange}>
        <Tab style={{color: value == 0 ? COLORS.primary : 'black'}} label={props.tabTekstit[0]} />
        <Tab style={{color: value == 1 ? COLORS.primary : 'black'}} label={props.tabTekstit[1]} />
      </Tabs>
      <TabPage value={value} index={0}>
        {ResultGraph_element}
      </TabPage>
      <TabPage value={value} index={1}>
        {ResultTable_element}
      </TabPage>
      {value== 0 ? makePortal(ResultTable_element):makePortal(ResultGraph_element)}
  </Box>)
}
