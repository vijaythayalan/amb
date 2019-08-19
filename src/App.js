import React from 'react';
import DatePicker from "react-datepicker";
import logo from './logo.svg';
import './App.css';
import DateSelector from './DateSelector.js';
import TitleHeader from './TitleHeader.js';

function App() {

  return (
    <div className="App">
      <h2 className="header">Average Minimum Balance - Status</h2>
		<TitleHeader />
		<div className="DetailsDiv">
			<DateSelector isHeader="true"/>
			<DateSelector isFirst="true"/>
			<DateSelector isFirst="false"/>
		</div>
    </div>
  );
}

export default App;
