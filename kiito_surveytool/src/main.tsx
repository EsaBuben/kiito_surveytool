import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import { TitleBar } from './TitleBar.tsx'
import { TitleButton } from './TitleButton.tsx'
import TypographyTheme from './Instruction.tsx'
import Questions from './Questions.tsx'
import { LowerButtons } from './LowerButtons.tsx'


//Palaa etusivulle-nappi
//Kyselyn aihe
//Jatka, Palaa, Tuloksiin
//Kysymys ja pallurat
//Kysymysmerkki-hoverin sisältö
//Ohjeet käyttäjälle ja kysymysmerkki-hover

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TitleButton />
    <TitleBar />
    <TypographyTheme />
    <Questions />
    <LowerButtons />
  </React.StrictMode>,
)
