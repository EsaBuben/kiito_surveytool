import React from 'react';
import {ResultTabs} from './ResultTabs';
import {ResultTitle} from './ResultTitle';
import {ResultReturnButton} from './ResultReturnButton';
import BasicDocument from './BasicDocument';
import { createPortal } from 'react-dom';

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
  yname:string;
  date:string;
}

export function Result(props:TulosProbs){

  let otsikko:string = props.localData.tulosotsikko;
  let alaotsikko:string = props.data[props.sivu].sivu;
  let PaluuButtonTeksti:string = props.localData.napit.tulosPalaa;
  let tabTekstit:string[] = [props.localData.napit.tulosKaavioTab, props.localData.napit.tulosTaulukkoTab]


  const createPDF = () => {
    <BasicDocument sivu = {props.sivu} data = {props.data} localData={props.localData}
    answers={props.answers[props.sivu]} yname={props.yname} date={props.date}/>
  }


  return(
  <div style={{width:"100%", marginTop:'30px'}}>
    <ResultReturnButton teksti={PaluuButtonTeksti} setValittu={props.setValittu}/>
    <ResultTitle otsikko={otsikko} alaOtsikko={alaotsikko} createPDF={createPDF}/>
    <ResultTabs tabTekstit={tabTekstit} sivuData={props.data[props.sivu]} answers={props.answers[props.sivu]} sivu={props.sivu} setValittu={props.setValittu}/>
    <BasicDocument sivu = {props.sivu} data = {props.data} localData={props.localData}
    answers={props.answers[props.sivu]} yname={props.yname} date={props.date}/>
  </div>);

}
