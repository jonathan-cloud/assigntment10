import React from 'react'

class Student2Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      skill:this.props.skill
    }
    console.log('TEST '+this.props.skill)
  }

  handleSkill=(e)=>{

    this.setState({
      skill:e.target.value
    })
  }

  render(){

    return(
    <>
            

            <li style={{ fontSize: 16 }} className="list-group-item text-dark w-75 " > Magic: {this.props.name} <br />
            {this.props.skill !==0 &&  <input type="checkbox" checked='true' className=""/>  }

              <span> Skill Level :
            <select value={this.state.skill} id={this.props.id} onChange={this.handleSkill}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </span>
              <br />
              <button value={this.props.id} onClick={this.addMagic} className="btn btn-primary">add</button>
              {this.props.skill !== 0 && <button value={this.props.id} className="btn btn-primary m-1" onClick={this.deleteMagic} >delete</button>}
            </li>
            </>
    )

  }
}

export default Student2Edit;