import React from 'react';
import DatePicker from "react-datepicker";
import logo from './logo.svg';
import './App.css';
import DateSelector from './DateSelector.js';

class App extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  minimumBalance: '0',
	  selectedMonth: new Date()
	};
	this.onMinBalChange = this.onMinBalChange.bind(this);
	this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  handleMonthChange(date) {
    this.setState({
      selectedMonth: date
    });
  }
 
  onMinBalChange(e) {
    const re = /^[0-9\b]+$/;
    if ((e.target.value === '' || re.test(e.target.value)) && e.target.value.length <= 5) {
        this.setState({minimumBalance: e.target.value})
    }
  }
 
  render() {
    return (
    <div className="App">
      <h2 className="header">Average Minimum Balance - Status</h2>
		<div className="details-header">
	      <p className="titleLabel">Month & Year: </p> 
		  <p className="titleLabel">
		  <DatePicker 
			selected={this.state.selectedMonth}
			onChange={this.handleMonthChange}
			dateFormat="MMMMMMMMM - yyyy"
			showMonthYearPicker
          /> </p>
		  
		  <p className="titleLabel">Average Min Balance:  ₹ </p> 
		  <input className="titleText" type="text" pattern='[0-9]{0,5}' value={this.state.minimumBalance} onChange={this.onMinBalChange}/>
	  </div>

		<div className="DetailsDiv">
			<DateSelector isHeader="true"/>
			<DateSelector isFirst="true"/>
		</div>
    </div>
  );
}
}

export default App;
