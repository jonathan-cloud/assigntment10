import React from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StudentPage from './StudentPage'

class StudentTable extends React.Component {
  
  constructor(props){
    super(props)


    this.state = {
      students:[],
      time:""
    } 

  }

  componentDidMount(){
    this.updateTime()
    
    axios.get(`http://localhost:5000/students`).then(
      success=>{

        console.log(success.data);

        let students=success.data;
        
        this.setState({students:students})

      }
    )
  }

  updateTime = () => {
    this.state.students.map(res=>(
      console.log(res.created),
      this.setState({time: res.created})
      
    ))
    
    
  }

  render(){
    console.log(this.state.students)
    console.log(this.state.time)
    return (
      <div className="container-fluid">
      <table className="table table-dark">

        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>

        <tbody>
          {this.state.students.map((student,index)=>(
                         
            <tr key={student.id}>
              <th><a href={"/students/"+student.id}>{student.id}</a></th>
              <td>{student.first}</td>
              <td>{student.last}</td>
              <td>{student.created}</td>
              <td>{student.updated}</td>
            </tr>
          ))}
        </tbody>

      </table>
      </div>

    )
  }
}

export default StudentTable