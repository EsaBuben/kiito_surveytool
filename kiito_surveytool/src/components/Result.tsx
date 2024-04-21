import React,{useRef, useState} from 'react';
import {createPortal} from 'react-dom';
// import html2canvas from 'html2canvas'
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
      tulosPalaa:string,
      tulosKaavioTab:string,
      tulosTaulukkoTab:string}
  };
  answers:number[][][];
  yname:string;
  date:string;
}

export function Result({sivu, data, ...props}:TulosProbs){

  let otsikko:string = data[sivu].tulosotsikko;
  let alaotsikko:string = data[sivu].sivu;

  let PaluuButtonTeksti:string = props.localData.napit.tulosPalaa;
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

    // refs for getting img with  html-to-image toPng function
    console.log(ResultRefs[0][0].current)
    console.log(ResultRefs[0][1].current)
    console.log(ResultRefs[1][0].current)
    console.log(ResultRefs[1][1].current)

    let resultgraph:any;
    let resulttable:any;

    if(value == 0) {
      resultgraph = ResultRefs[0][0].current
      resulttable = ResultRefs[0][1].current
    }else{
      resultgraph = ResultRefs[1][0].current
      resulttable = ResultRefs[1][1].current
    }

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
        setPDFContent(createPortal(
          <BasicDocument
            sivu = {sivu}
            data = {data}
            answers={props.answers[sivu]}
            yname={props.yname}
            kuvat= {values}
            date={props.date}
          />,
          root
        )
          )
        //test for getting rigth images
        // values.map((value:any)=>{
        //   const link = document.createElement("a");
        //   link.download = "my-image-name.png";
        //   link.href = value;
        //   link.click();
        // })
      })
    }

  }


  return(
  <div style={{width:"100%", marginTop:'30px', zIndex:1}}>
    <ResultReturnButton teksti={PaluuButtonTeksti} setValittu={props.setValittu}/>
    <ResultTitle otsikko={otsikko} alaOtsikko={alaotsikko} PDFbutton={PDFbutton} createPDF={createPDF}/>
    <ResultTabs
    setValue={setValue} value={value}
    tabTekstit={tabTekstit} data={data[sivu]}
    answers={props.answers[sivu]} sivu={sivu}
    setValittu={props.setValittu}
    ResultRefs={ResultRefs} />
    {PDFContent}
  </div>);

}
