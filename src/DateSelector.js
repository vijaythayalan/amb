import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
	  amount: ""
    };
	this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  onChange(e) {
    const re = /^[0-9\b]+$/;
    if ((e.target.value === '' || re.test(e.target.value)) && e.target.value.length <= 5) {
        this.setState({amount: e.target.value})
    }
  }
 
  getMonthFromString = function (monthName){
    var date = new Date(Date.parse(monthName + 1, new Date().getFullYear()));
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var month = new Date(Date.parse(monthName + 1, new Date().getFullYear())).getMonth()+1;
    var year = new Date().getFullYear();

       return firstDay + "-" + month + "-" + year + " - " + lastDay + "-" + month + "-" + year;
	}

  render() {
    return (
	  this.props.isHeader ?
	  <div class="DetailsDiv">
		  <label>Date</label>
		  <label>End of Day Amount ₹ </label>
		  <label>Add/Remove</label>
	  </div>
	  :
	  this.props.isFirst === "true" ?
	  <div class="DetailsDiv">
      <DatePicker className="datepick"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
	  <input type="text" pattern='[0-9]{0,5}' value={this.state.amount} onChange={this.onChange}/>
	  <button type="button">+</button>
	  </div>
	  :
	  <div class="DetailsDiv">
	  <DatePicker className="datepick"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
	  <input type="text" pattern='[0-9]{0,5}' value={this.state.amount} onChange={this.onChange}/>
	  <button type="button">-</button>
	  </div>
    );
  }
}

export default DateSelector;
