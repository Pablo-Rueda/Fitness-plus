import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import TasksContextProvider from './contexts/TasksContext';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tasks from './components/Tasks'
import Clock from './components/Clock'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <TasksContextProvider>
          <div className="App" style={{width:"100%",height:"100vh"}}>
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/tasks' component={Tasks} />
            <Route path='/clock' component={Clock} />
          </div>
        </TasksContextProvider>
      </BrowserRouter>

    );
  }
}

export default App;
