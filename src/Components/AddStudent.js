import React from 'react'
import { Dropdown } from 'react-bootstrap'
import axios from 'axios'


class AddStudent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first: "",
      last: "",
      magic: [],
      course: [],
      date: ""
    }
  }

  handleFirstChange = (e) => {
    this.setState({ first: e.target.value })

  }

  handleLastChange = (e) => {
    this.setState({ last: e.target.value })
  }

  handleMagic = (e) => {
    this.setState({
      magic: [...this.state.magic,
      { [e.target.text]: 1 }]
    })
  }
  handleCourse = (e) => {
    this.setState({ course: [...this.state.course, e.target.text] })
  }

  onSubmit = (e) => {
    this.setState({ first: e.target.value })
    this.setState({ last: e.target.value })
    let obj = { 'first': this.state.first, 'last': this.state.last }
    axios.post('http://localhost:5000/addstudent', obj)
    

  }

  render() {
    return (
      <div className="container-fluid">

        Add Student
          <div className="row justify-content-center">
          <div className="col-4">
            <input placeholder="first name" className="form-control" value={this.state.first} onChange={this.handleFirstChange} />

          </div>
          <div className="col-4">
            <input className="form-control" value={this.state.last} placeholder="last name" onChange={this.handleLastChange} />
          </div>
          <div className='col-1'>
            <button className="btn btn-primary" onClick={this.onSubmit}> Submit </button>
          </div>
        </div>

      </div>
    )
  }
}

export default AddStudent