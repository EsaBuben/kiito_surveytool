import './App.css';
import FetchJSON from './utils/FetchJSON';
// import { PDFViewer } from '@react-pdf/renderer';
// import ReactDOM from 'react-dom';
// import BasicDocument from './components/BasicDocument';

function App() {

  return (
    <div className="App">
      <FetchJSON />
      <div id="hidden_content"></div>
    </div>
  )
}

export default App
