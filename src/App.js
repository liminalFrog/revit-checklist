import React from 'react';
import Checklist from './components/Checklist';
import './styles/App.scss';
import StopwatchComponent from './components/Stopwatch';
import ProjectInfo from './components/ProjectInfo';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-4 col-md-6 pt-3 col-sm-12'>
          <ProjectInfo />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 my-0'>
          <div className='overflow-y-auto vh-100'>
            <h1 className="text-center my-4 fw-bold">Checklist</h1>
            <Checklist />
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <h1 id='stopwatch-title' className="text-center my-4 fw-bold">Stopwatch</h1>
          <StopwatchComponent />
        </div>
      </div>
    </div>
  );
}

export default App;