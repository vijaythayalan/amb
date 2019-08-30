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
            selectedMonth: new Date(),
            averageTermChange: 'Monthly'
        };
        this.onMinBalChange = this.onMinBalChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleAverageTermChange = this.handleAverageTermChange.bind(this);
    }

    handleAverageTermChange(e) {
        this.setState({
            averageTermChange: e.target.value
        });
        console.log(e.target.value);
    }

    handleMonthChange(date) {
        this.setState({
            selectedMonth: date
        });
        console.log(date);
    }

    onMinBalChange(e) {
        const re = /^[0-9\b]+$/;
        if ((e.target.value === '' || re.test(e.target.value)) && e.target.value.length <= 5) {
            this.setState({
                minimumBalance: e.target.value
            })
        }
        console.log(e.target.value);
    }

    render() {
        return ( 
			<div className = "App" >
				<h2 className = "header" > Average Minimum Balance - Status < /h2> <
				div className = "details-header" >
				<p className = "titleLabel" > Month & Year: < /p>  
				<p className = "titleLabel" >
					<DatePicker 
						selected = {this.state.selectedMonth}
						onChange = {this.handleMonthChange}
						dateFormat = "MMMMMMMMM - yyyy"
						showMonthYearPicker /> 
				</p>

				<p className = "titleLabel" > Average Min Balance: ₹ < /p>  
				<input className = "titleText" type = "text" pattern = '[0-9]{0,5}' value = {this.state.minimumBalance} onChange = {this.onMinBalChange}/>

				<p className = "titleLabel" > Average Term: < /p>  
				<select className = "titleText"
					name = "averageterm"
					onChange = {this.handleAverageTermChange}>
					<option selected = "selected" value = "Monthly" > Monthly < /option> 
					<option value = "Quarterly" > Quarterly < /option> 
					<option value = "halfyear" > Half - Yearly < /option> 
					<option value = "year" > Yearly < /option> 
				</select> 
				</div>

				<div className = "DetailsDiv" >
				<DateSelector minBalance = {this.state.minimumBalance} /> 
				</div>
            </div>
        );
    }
}

export default App;
