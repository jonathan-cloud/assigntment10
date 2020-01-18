import React from 'react';
import './App.css';
import StudentTable from './Components/StudentTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentPage from './Components/StudentPage'
import StudentEdit from './Components/StudentEdit'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navlist from './Components/Navlist'
import Addstudent from './Components/AddStudent'
import PieChart from './Components/PieChart';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <Navlist />
      <header className="App-header">

        
          <Route exact path="/" component={StudentTable} />
          <Route exact path="/students/:studentId" component={StudentPage} />
          <Route exact path="/students/:studentId/edit" component={StudentEdit}/>
          <Route exact path="/add" component={Addstudent} />
          
          <Route exact path='/dashboard' component={Dashboard}></Route>
      </header>
      </Router>
    </div>
  );
}

export default App;
