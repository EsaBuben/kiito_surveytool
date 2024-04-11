import React,{useRef} from 'react';
// import html2canvas from 'html2canvas'
import { toPng } from 'html-to-image';

import {ResultTabs} from './ResultTabs';
import {ResultTitle} from './ResultTitle';
import {ResultReturnButton} from './ResultReturnButton';
type TulosProbs = {
  sivu:number;
  setValittu:React.Dispatch<React.SetStateAction<number>>;
  data:{sivu:string, kategoriat:[]}[];
  localData:{
    tulosotsikko:string
    napit:{
      tulosPalaa:string,
      tulosKaavioTab:string,
      tulosTaulukkoTab:string}
  };
  answers:number[][][];
}

export function Result(props:TulosProbs){

  let otsikko:string = props.localData.tulosotsikko;
  let alaotsikko:string = props.data[props.sivu].sivu;
  let PaluuButtonTeksti:string = props.localData.napit.tulosPalaa;
  let tabTekstit:string[] = [props.localData.napit.tulosKaavioTab, props.localData.napit.tulosTaulukkoTab]

  const resultTableRef = useRef()
  const resultGraphRef = useRef()

  const createPDF = () => {
    //something something imported functions open new tab something something
    //<DummyPage vastaukset, kysymykset, kuva taulukosta, kuva graafista/>
    // const downloadImage = (blob:any, fileName:any) => {
    //   const fakeLink = window.document.createElement("a");
    //   fakeLink.download = fileName;
    //
    //   fakeLink.href = blob;
    //
    //   document.body.appendChild(fakeLink);
    //   fakeLink.click();
    //   document.body.removeChild(fakeLink);
    //
    //   fakeLink.remove();
    // };
    console.log(resultTableRef.current)
    console.log(resultGraphRef.current )
      if(resultGraphRef.current  != null){
        toPng(resultGraphRef.current["canvas"], { cacheBust: false })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "my-image-name.png";
          link.href = dataUrl;
          link.click();
        })
          .catch((err) => {
        console.log(err);
      });
        // html2canvas(primaryRef.current).then((canvas:any) =>{
        // const imgData = canvas.toDataURL('img/png');
        //
        // downloadImage(imgData, "test");
        // })
      }

  }



  return(
  <div style={{width:"100%", marginTop:'30px'}}>
    <ResultReturnButton teksti={PaluuButtonTeksti} setValittu={props.setValittu}/>
    <ResultTitle otsikko={otsikko} alaOtsikko={alaotsikko} createPDF={createPDF}/>
    <ResultTabs tabTekstit={tabTekstit} sivuData={props.data[props.sivu]} answers={props.answers[props.sivu]} sivu={props.sivu} tableRef={resultTableRef} graphRef={resultGraphRef} setValittu={props.setValittu}/>
  </div>);

}
