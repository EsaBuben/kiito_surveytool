
import {TabChoiceBar} from './TabChoiceBar';
import {TitleBar} from './TitleBar';
import {PaluuButton} from './PaluuButton';


export function Tulokset(props:any){

  let otsikko:string = props.localData.tulosotsikko;
  let alaotsikko:string = props.data[props.sivu].sivu;
  let PaluuButtonTeksti:string = props.localData.napit.tulosPalaa;
  let tabTekstit:string[] = [props.localData.napit.tulosKaavioTab, props.localData.napit.tulosTaulukkoTab]

  const createPDF = () => {
    //something something imported functions open new tab something something
  }


  return(
  <div style={{width:"100%", marginTop:'30px'}}>
    <PaluuButton teksti={PaluuButtonTeksti} setValittu={props.setValittu}/>
    <TitleBar otsikko={otsikko} alaOtsikko={alaotsikko} createPDF={createPDF}/>
    <TabChoiceBar tabTekstit={tabTekstit} sivuData={props.data[props.sivu]} answers={props.answers[props.sivu]} sivu={props.sivu} setValittu={props.setValittu}/>
  </div>);

}
