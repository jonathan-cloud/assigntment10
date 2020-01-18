import React from 'react'
import axios from 'axios'
import { Card, CardGroup } from 'react-bootstrap'
// import Skillz1 from './Skillz1'
import Desired from './Desired'
import DesiredMagic from './DesiredMagic'
import Student2Edit from './Student2Edit'

class StudentEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.studentId,
      courses: [],
      magics: [],
      desired: [],
      exits: false
    }
  }

  componentDidMount() {

    let magics = null;

    axios.get('http://localhost:5000/magics').then(
      success => {

        magics = success.data

        magics.forEach(magic => {

          magic['skill'] = 0

        })

        this.setState({ magics: [...magics], desired: [...magics] })


      }
    ).then(
      axios.get(`http://localhost:5000/students/${this.state.id}`).then(

        success => {

          let info = success.data;

          let statemagic = [...magics];
          info[0].magics.forEach(info => {

            statemagic.forEach(statemagic => {

              if (statemagic.name === info.name)
                statemagic.skill = info.skill

            })

          })

          this.setState({ magics: statemagic })

          let desired = [...magics];

          this.setState({ desired: desired })

          this.setState({

            first: info[0].first,
            last: info[0].last,
            created: info[0].created,
            updated: info[0].updated,
            courses: info[0].courses,
          })
          
          
        }

      )
    )

  }

  addMagic = (e) => {

    let id = e.target.value;
    let skill = document.getElementById(id).value;
    let magic = { 'id': id, 'skill': skill }
    console.dir(skill)
    console.log(magic);
    console.log(e.target)

    axios.post('http://localhost:5000/edit/' + this.state.id, magic);

  }

  deleteMagic = (e) => {
    let id = e.target.value
    let magic= {'id': id}
    console.log(id)
    axios.post('http://localhost:5000/deletemagic/' + this.state.id, magic)
  }

  render() {
    console.log(this.state.exits)
    return (
      <div className="container-fluid">
        {this.state.first} {this.state.last}
        <div className="row justify-content-center m-1">
          
          <ul style={{ backgroundColor: '#282c34', alignItems: 'center' }} className="col-4 list-group w-50"> Existing Magic Skillz
          {this.state.magics.map(res => (
            // <Student2Edit name={res.name} skill={res.skill} id={res.id}/>
            <>
            

            <li style={{ fontSize: 16 }} className="list-group-item text-dark w-75 " > Magic: {res.name} <br />
            {res.skill !==0 &&  <input type="checkbox" checked='true' className=""/>  }

              <span> Skill Level :
            <select defaultValue={res.skill} id={res.id} /*onChange={this.handleSkill}*/ >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </span>
              <br />
              <button value={res.id} onClick={this.addMagic} className="btn btn-primary">add</button>
              {res.skill !== 0 && <button value={res.id} className="btn btn-primary m-1" onClick={this.deleteMagic} >delete</button>}
            </li>
            </>
          ))}

          </ul>

          <DesiredMagic magic={this.state.magics} id={this.state.id}/>

          <Desired id={this.state.id} />


        </div>

      </div>



    )
  }
}

export default StudentEdit