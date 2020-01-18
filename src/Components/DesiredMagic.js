import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {getDesired} from '../api/api'


const DesiredMagic = ({ magic, id }) => {
  const [desiredMagics, setDesiredMagics] = useState(magic)
  useEffect(()=>{
    // getDesired().then(res=>(
    //   console.log(res)
    // ))
   
    
  },[])

  const addMagic = (e) => {

    let desiredId = e.target.value;
    let skill = document.getElementById('d'+desiredId).value;
    let magic = { 'id': desiredId, 'skill': skill }
    axios.post('http://localhost:5000/editdesired/' + id, magic);

  }

  const deleteDesired = (e) => {
    let id = e.target.value
    let magic = { 'id': id }
    axios.post('http://localhost:5000/deletedesired/' + id, magic)
    

  }

  return (

    <>
      <ul style={{ backgroundColor: '#282c34', alignItems: 'center' }} className="col-4 list-group w-50"> Desired Magic Skillz
          {magic.map(res => (
            
            
        <li style={{ fontSize: 16 }} className="list-group-item text-dark w-75 " > Magic: {res.name} <br />
          {res.skill !== 0 && <input type="checkbox" checked='true' className="" />}
          <span> Skill Level :
            <select defaultValue={res.skill} id={'d'+res.id} /*onChange={this.handleSkill}*/ >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </span>
          <br />
          <button value={res.id} onClick={addMagic} className="btn btn-primary">add</button>
          {res.skill !== 0 && <button value={res.id} className="btn btn-primary m-1" onClick={deleteDesired} >delete</button>}
        </li>

      ))}

      </ul>
    </>

  )
}

export default DesiredMagic