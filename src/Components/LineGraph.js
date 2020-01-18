
import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios'



/*const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'purple',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const styles = {
  graphContainer: {
    border: '1px solid purple',
    padding: '15px'
  }
}*/

class LineChartExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.chartData();
  }

  chartData=()=> {
  
    axios.get(this.props.get).then(
      success=>{

        let data=success.data;
        let months=[]
        let counts=[]
        data.forEach(d=>{

          /*switch(d['month']){

            case 1: 
            months.push('January');
            break;

            default:
              break;

          }*/
          months.push(d['label'])
          counts.push(d['count'])

        })
        let obj = {
          labels: months,
          datasets: [
            {
              label: this.props.title+' Enrollment',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: counts
            }
          ]
        };
        console.log(obj)
        this.setState({
          data:obj
        })
      }    
  )
}


  render() {
    return (
      <div>
        <h2>{this.props.title} Enrollment</h2>
        <Line ref="chart" data={this.state.data} />
      </div>
    );
  }
}

export default LineChartExample;
/*
const data = 

export default class LineDemo extends Component {
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}*/