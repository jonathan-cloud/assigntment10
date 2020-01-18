import React from 'react'
import {Pie} from 'react-chartjs-2'
import axios from 'axios'

class PieChart extends React.Component {
  constructor(props) {
    super(props)

    
    this.state = {
      get:this.props.get
    }
  }

  componentDidMount(){

    this.getMagicData().then(e=>{
    var ctx = document.getElementById('canvas').getContext("2d")
    var gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, 'purple')
    gradient.addColorStop(1, '#FFFFFF')

    this.setState({

      datasets:[{
        data:this.state.data,
        backgroundColor:gradient
      }]

    })
    })
  }

  getMagicData=()=>{

    return axios.get(this.state.get).then(
      success=>{

        let data=success.data;
        let names=[];
        let counts=[];
        data.forEach(d=>{
          names.push(d['name']);
          counts.push(d['count'])
        })


        this.setState({

          labels:names,
          data:counts

        })

      }
    );

  }

  render() {
    return (
      <div>
        <h1>{this.props.title} Student Magics</h1>
        <Pie
        data={{
          labels:this.state.labels,
          datasets:this.state.datasets
        }}
        />
        <canvas id="canvas"></canvas>
      </div>

    )
  }
}

export default PieChart


