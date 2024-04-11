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


export function ResultGraph(props:any){
  let data_array = props.data_array;
  const data = {
    labels: data_array, //tasot alaotsikkot
    datasets:[{
      label:"keskiarvo",  //keskiarvo
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

  const chartRef = props.graphRef
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
