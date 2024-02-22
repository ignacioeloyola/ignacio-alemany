import React from 'react';
import logo from './logo.svg';
import './App.css'
import MyCalendar from './components/MyCalendar/MyCalendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyCalendar />
      </header>
    </div>
  );
}

export default App;
