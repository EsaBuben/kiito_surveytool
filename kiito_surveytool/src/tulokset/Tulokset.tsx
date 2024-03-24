
import {TabChoiceBar} from './TabChoiceBar';
import {TitleBar} from './TitleBar';
import {PaluuButton} from './PaluuButton';


export function Tulokset(props:any){

  let otsikko:string = "Nykytilakartoitus kiertotalouden potentiaalista";
  let alaotsikko:string = props.data.sivut[props.sivu].sivu;

  const createPDF = () => {
    //something something imported functions open new tab something something
  }

  return(
  <div style={{width:"100%"}}>
    <PaluuButton setValittu={props.setValittu}/>
    <TitleBar otsikko={otsikko} alaOtsikko={alaotsikko} createPDF={createPDF}/>
    <TabChoiceBar sivuData={props.data.sivut[props.sivu]} />
  </div>);

}
