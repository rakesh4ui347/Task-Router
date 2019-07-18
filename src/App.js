import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import { Redirect ,browserHistory } from 'react-router'; 
import Form from './Login';
import EmployeeListPage from './EmployeeListPage';
class App extends Component {
    constructor(props) {
        super(props)    
    }
    render() {
     
        return (
          <BrowserRouter>
          <div className="sans-serif">
            <Route path="/" component={Form} />
            <Route path="/EmployeeListPage" component={EmployeeListPage} />
          </div>
        </BrowserRouter> 
      
        )
    }
}

export default App
