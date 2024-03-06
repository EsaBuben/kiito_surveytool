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

export function Tulokset(props:any){

  return( <div>
    <TitleBar />
    <TabChoiceBar />
    {/* <Taulukko /> */}


  </div>);

}
