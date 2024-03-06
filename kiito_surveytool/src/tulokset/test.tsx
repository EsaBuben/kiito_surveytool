/*
tasks:
- container body
- otsikko palkki / search mui
- tab choice bar / search mui
- taulukko / search mui
- latausnappi
*/
// import {Taulukko} from './taulukko';
import {TabChoiceBar} from './TabChoiceBar';
import {TitleBar} from './TitleBar';
import {Button} from '@mui/base/Button';
import Paper from '@mui/material/Paper';
import smallarrow from './smallarrow.svg'
export function Tulokset(props:any){

  return( <div>
    <Button style={{
      background:'blue',
      opacity:.5,
      border:"none",
      padding: "10px",
      color: "white",
      borderRadius: 10
    }}>
      <img src={smallarrow}/>
        Palaa etusivulle
    </Button>
    <TitleBar />
    <TabChoiceBar />



  </div>);

}
