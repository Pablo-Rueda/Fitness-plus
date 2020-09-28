import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tasks from './components/Tasks'
import TasksContextProvider from './contexts/TasksContext';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{width:"100%",height:"100vh"}}>
          <Navbar />
          <TasksContextProvider>
            <Tasks />
          </TasksContextProvider> 
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
