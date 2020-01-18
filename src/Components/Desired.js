import React, {useState, useEffect} from 'react'
import {getCourses} from '../api/api'
import axios from 'axios'

const Desired = ({id}) => {
  const [desired, setDesired] = useState([])
  const [name, setName] = useState([])


  useEffect (() => {
    getCourses().then(res=>(
      setDesired(res.data)
    ))
  },[]);

  const addDesired = (e) => {

    let desiredId = e.target.value;
    let course = { 'id': desiredId}

    axios.post('http://localhost:5000/editcourse/' + id, course);

  }

  return (
          
        <ul style={{ backgroundColor: '#282c34', alignItems: 'center' }} className="col-4 list-group ">
          Courses
          {desired.map(res => (


            <li style={{ fontSize: 16 }} className="list-group-item text-dark w-75" id={res.id}> Magic: {res.name} <br/>

              <span> Skill Level :
              </span>
              <br />
              <button value={res.id} onClick={addDesired} className="btn btn-primary"> add </button>
            </li>

          ))}
        </ul>
         
  )
}

export default Desired