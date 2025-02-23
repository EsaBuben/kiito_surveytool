import React,{useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import { toPng } from 'html-to-image';

import {ResultTabs} from './ResultTabs';
import {ResultTitle} from './ResultTitle';
import {ResultReturnButton} from './ResultReturnButton';

import BasicDocument from './BasicDocument';

type TulosProbs = {
  sivu:number;
  setValittu:React.Dispatch<React.SetStateAction<number>>;
  data:{
    sivu:string,
    tulosotsikko:string,
    kategoriat:[]}[];
  localData:{
    tulosotsikko:string
    napit:{
      paluuEtusivulle:string,
      tulosKaavioTab:string,
      tulosTaulukkoTab:string,
      tulosPDF:string,
      keskiarvo:string
    }
  };
  answers:number[][][];
  yname:string;
  date:string;
}

export function Result({sivu, data, ...props}:TulosProbs){

  let otsikko:string = data[sivu].tulosotsikko;
  let alaotsikko:string = data[sivu].sivu;

  let PaluuButtonTeksti:string = props.localData.napit.paluuEtusivulle;
  let tabTekstit:string[] = [props.localData.napit.tulosKaavioTab, props.localData.napit.tulosTaulukkoTab]
  let PDFbutton:string = props.localData.napit.tulosPDF;

  const resultTableRef = useRef()
  const resultGraphRef = useRef()
  const resultHiddenTableRef = useRef()
  const resultHiddenGraphRef = useRef()

  const ResultRefs:React.MutableRefObject<any>[][] = [
    [resultGraphRef,resultTableRef],
    [resultHiddenGraphRef,resultHiddenTableRef]
  ]

  const [value, setValue] = useState<number>(0)
  const [PDFContent,setPDFContent] = useState(<span></span>)


  const createPDF = () => {
    //example of closing PDF
    if(PDFContent.type !== "span"){
      setPDFContent(<span></span>)
      return;
    }
    const root = document.getElementById('root');
    // refs for getting img with  html-to-image toPng function
    let resultgraph:any = ResultRefs[value][0].current
    let resulttable:any = ResultRefs[value][1].current

    let imagePromises:Promise<string | void>[] = []
    if(resultgraph  != null && resulttable != null){

      imagePromises[0] = toPng(resultgraph["canvas"], { cacheBust: false })
      .catch((err) => {
        console.log(err);
      });

      imagePromises[1] = toPng(resulttable, { cacheBust: false })
      .catch((err) => {
          console.log(err);
      });

      //trying to make sure that previous promises execute
      Promise.all(imagePromises).then((values:any) => {

        //add PDF document creation here
        if(root != null){
        setPDFContent(createPortal(
          <BasicDocument
            sivu = {sivu}
            data = {data}
            answers={props.answers[sivu]}
            yname={props.yname}
            kuvat= {values}
            date={props.date}
            localData={props.localData}
            setValittu={props.setValittu}
            setPDFContent={setPDFContent}
          />,
          root
        ))
        }
      })
    }

  }


  return(
  <div style={{width:"100%", marginTop:'30px', zIndex:1}}>
    <ResultReturnButton innerText={PaluuButtonTeksti} setValittu={props.setValittu}
    style={{ marginLeft: "10%",
     marginBottom: "10px",}}
    />
    <ResultTitle otsikko={otsikko} alaOtsikko={alaotsikko} PDFbutton={PDFbutton} createPDF={createPDF}/>

    <ResultTabs
    setValue={setValue} value={value}
    graphLabelText={props.localData.napit.keskiarvo}
    tabTekstit={tabTekstit} data={data[sivu]}
    answers={props.answers[sivu]} sivu={sivu}
    setValittu={props.setValittu}
    ResultRefs={ResultRefs} />
    {PDFContent}
  </div>);

}
