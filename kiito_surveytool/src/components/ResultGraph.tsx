import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale
} from 'chart.js/auto';

import {Radar, getElementsAtEvent} from 'react-chartjs-2';
import './ResultGraph.css'
import { setTesti } from './QueryContent';
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale
)

type GraphProps ={
  valueLabel:string;
  resultRef:React.MutableRefObject<undefined>;
  data_array :string[];
  radio_values :number[];
  sivu:number;
  setValittu:React.Dispatch<React.SetStateAction<number>>;
}

export function ResultGraph({data_array , valueLabel, ...props}:GraphProps){

  let labels:string[][] = data_array.map(
    (text:string) => {
    const arr = text.split(" ")
    const output = []
    let chunkSize = 3;

    if(arr.length == 3){
      if(arr[arr.length - 1].length > 7){
        chunkSize = 2
      }
    }

    for (let i = 0, length = arr.length; i < length; i += chunkSize) {
      output.push(arr.slice(i, i + chunkSize).join(" "))

    }

    return output
  })

  const data = {
    labels: labels, //tasot alaotsikkot
    datasets:[{
      label:valueLabel,  //keskiarvo
      data: props.radio_values, //arvot
    }]
  };

  const options : any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
       legend: {
         display: false,
       },
     },
     scales: {
        r: {
            angleLines: { //lines from center to the borders
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 5,
            ticks:{ //numbering from the center for each line
              display: false,
              stepSize: 1,
              showLabelBackdrop: false,
            },
            grid: { //lines in the radar
              color: "rgba(0, 0, 0, 0.6)",
              lineWidth: 1,
            },
            pointLabels: { //text outside of the radar
             padding: 20,
             font: {
               //family
               size: 15,
               weight: 'bold',
             },
           }
          },
        },
     elements:{
        line:{ //data area line options
          borderWidth:3,
          }
        }

  }

  const chartRef = props.resultRef
  const setValittu = props.setValittu
  const onClick = (event:any) => {
    if(chartRef.current)
    {
      if(getElementsAtEvent(chartRef.current, event).length > 0)
      {
        setValittu(props.sivu); setTesti(getElementsAtEvent(chartRef.current, event)[0].index+1)
      }
  }
  }

  return(
    <div className="radar_canvas">
      <Radar
      data={data}
      options={options}
      ref={chartRef}
      onClick={onClick}
      >
      </Radar>
    </div>
  )
}
