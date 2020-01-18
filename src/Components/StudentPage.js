import React from 'react'
import axios from 'axios'
class StudentPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.studentId,
      courses: [],
      magics: [],
      desired: []
    }
  }

  componentDidMount() {

    axios.get(`http://localhost:5000/students/${this.state.id}`).then(

      success => {

        console.log(success.data);
        let info = success.data;

        this.setState({

          first: info[0].first,
          last: info[0].last,
          created: info[0].created,
          updated: info[0].updated,
          magics: info[0].magics,
          courses: info[0].courses,
          desired: info[0].desired,
        })

        console.log(this.state)

      }

    )

  }

  render() {

    return (

      <div className="container-fluid">
        <h3>Student Page of: {this.state.first} {this.state.last} (<a href={window.location.href + "/edit"}>edit</a>)</h3>
        <div className="row-fluid">
          <table className="table table-dark">
            <tbody>
              <tr>
                <th scope="row">Magic skills:</th>
                {this.state.magics.map(res => (
                  <td>{res.name}<br />{res.skill}</td>
                ))}

              </tr>
              <tr>
                <th scope="row">Desired Magic skills:</th>
                {this.state.desired.map(res => (
                  <td>{res.name}<br />{res.skill}</td>
                ))}

              </tr>
              <tr>
                <th scope="row">Courses:</th>
                {this.state.courses.map(res => (
                  <td>{res}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>




    )
  }
}

export default StudentPage