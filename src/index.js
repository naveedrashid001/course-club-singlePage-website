import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
// import CourseClub from './CourseClub';
import MainPage from './MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <Header></Header>
  {/* <div className='row '> 
    <div className='col-6'>
      <span className='h1 text-warning text-center'>Class Component</span>
      <CourseClub />
    </div>
  </div> */}
  <MainPage/>
</div>

);


