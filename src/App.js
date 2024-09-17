import React from 'react';
import Header from './Header';
import InviteCard from './InviteCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='bg'></div>
      {/* <img src={process.env.PUBLIC_URL + "/pattern.svg"} className='bg' alt='background'></img> */}
      <InviteCard />
    </div>
  );
}

export default App;
