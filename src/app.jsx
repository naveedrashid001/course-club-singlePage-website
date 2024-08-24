import React, { useState } from 'react';
import Header from './Header';
import MainPage from './MainPage';

const App = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <Header setContent={setContent} />
      <MainPage content={content} />
    </div>
  );
};

export default App;
