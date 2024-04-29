import {useState, useEffect} from 'react';
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

type TabProbs = {
  tabTekstit:string[];
  graphLabelText:string;
  sivu:number;
  value:number;
  data:{
    sivu:string,
    tulosotsikko:string,
    kategoriat:[]
  };
  answers:number[][];
  ResultRefs:React.MutableRefObject<any>[][];
  setValittu:React.Dispatch<React.SetStateAction<number>>;
  setValue:React.Dispatch<React.SetStateAction<number>>;
}

export function ResultTabs({sivu, answers,graphLabelText, ...props}:TabProbs){
  let value = props.value
  let setValue = props.setValue
  const [hiddenContent, setHiddenContent] = useState(<span></span>)

  const ResultRefs = props.ResultRefs
  const radio_values:number[] = answers.map((values:any)=>{
      let sum:number = 0
      let amount:number = values.length
      values.forEach((num:number)=>{
        sum += num
      })
      return Math.round(sum/amount)
  });

  let data_array: string[] = props.data.kategoriat.flatMap(
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

function ResultGraph_element(ref:React.MutableRefObject<any>) {
  return<ResultGraph
  valueLabel={graphLabelText}
  resultRef={ref}
  data_array={data_array}
  radio_values={radio_values}
  sivu={sivu}
  setValittu={props.setValittu}/>}

function ResultTable_element(ref:React.MutableRefObject<any>){
return <ResultTable
    resultRef={ref}
    data_array={data_array}
    radio_values={radio_values}
    sivu={sivu}
    setValittu={props.setValittu}/>
}
useEffect(()=>{
  if(value == 0){
      setHiddenContent(ResultTable_element(ResultRefs[0][1]))
  }
  if(value == 1){
      setHiddenContent(ResultGraph_element(ResultRefs[1][0]))
  }
},[value])



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
        {ResultGraph_element(ResultRefs[0][0])}
      </TabPage>
      <TabPage value={value} index={1}>
        {ResultTable_element(ResultRefs[1][1])}
      </TabPage>
      <div style={{backgroundColor:"white", zIndex:2, display:'flex'}}>
        <div style={{zIndex:-10}}>
          {hiddenContent}
        </div>
      </div>
  </Box>)
}
