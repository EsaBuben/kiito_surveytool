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

  const resultTableRef = useRef()
  const resultGraphRef = useRef()

  const [PDFContent,setPDFContent] = useState(<span></span>)

  const createPDF = () => {

    // refs for getting img with  html-to-image toPng function
    console.log(resultTableRef.current)
    console.log(resultGraphRef.current)

    let imagePromises:Promise<string | void>[] = []
    if(resultGraphRef.current  != null && resultTableRef.current != null){

      imagePromises[0] = toPng(resultGraphRef.current["canvas"], { cacheBust: false })
      .catch((err) => {
        console.log(err);
      });

      imagePromises[1] = toPng(resultTableRef.current, { cacheBust: false })
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
    <ResultTitle otsikko={otsikko} alaOtsikko={alaotsikko} createPDF={createPDF}/>
    <ResultTabs tabTekstit={tabTekstit} data={data[sivu]} answers={props.answers[sivu]} sivu={sivu} tableRef={resultTableRef} graphRef={resultGraphRef} setValittu={props.setValittu}/>
    {PDFContent}
  </div>);

}
