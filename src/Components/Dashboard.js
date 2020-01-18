import React from 'react'
import PieChart from './PieChart'
import LineChartExample from './LineGraph'

const Dashboard = () => {
  return (
    <div className="container-fluid charts">
      <div className="row justify-content-center">
        <div className="col-4">
      <LineChartExample title="Daily" get="http://localhost:5000/dailyenroll"/>
      <LineChartExample title="Monthly" get="http://localhost:5000/monthlyenroll"/>
      </div>
      <div className="col-4">
    <PieChart title= "Existing" get="http://localhost:5000/magicchart"/>
    </div>
    <div className="col-4">
    <PieChart title="Desired" get="http://localhost:5000/desiredchart"/>
    </div>
    </div>
    </div>
  )
}

export default Dashboard