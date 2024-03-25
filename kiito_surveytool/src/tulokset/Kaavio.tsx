import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale
} from 'chart.js/auto';

import {Radar} from 'react-chartjs-2';
import './kaavio.css'
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale
)

export function Kaavio(props:any){
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


  return(
    <div className="radar_canvas">
      <Radar
      data={data}
      options={options}

      >

      </Radar>
    </div>
  )
}
