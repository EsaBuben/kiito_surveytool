
//import { useState } from 'react'
//import { Etusivu } from './components';
import './App.css';
import FetchJSON from './utils/FetchJSON';
import test from './test.json'
import { Etusivu } from './components';


function App() {
  FetchJSON(test)
  return (
    <Etusivu data = {test}/>
  )
}

export default App
