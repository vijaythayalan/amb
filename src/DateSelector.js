import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
	  this.props.isHeader ?
	  <div class="column">
	  <p>Date</p>
	  <p>End of Day Amount</p>
	  </div>
	  :
	  this.props.isFirst ?
	  <div class="column">
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
	  <p>+</p>
	  </div>
	  :
	  <div class="column">
	  <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
	  <p>-</p>
	  </div>
    );
  }
}

export default DateSelector;