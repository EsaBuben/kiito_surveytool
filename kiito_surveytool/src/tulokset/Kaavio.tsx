import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale
} from 'chart.js/auto';
//Tooltip, Legend
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
      label:"weekdays",  //keskiarvo
      data: [2,3,4,1,5,3,4], //arvot
    }]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
       legend: {
         display: false,
       },
     },
     scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 5,
            ticks:{
              display: false,
              stepSize: 1,
              showLabelBackdrop: false,
            },
            grid: {
              color: "rgba(0, 0, 0, 0.6)",
              lineWidth: 1,
            },
          },
        },
     elements:{
        line:{
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
