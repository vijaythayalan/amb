import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelector.css";

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBalance: false,
      tableHeader: ["Date", "End of Day Amount ₹"],
      tableData: [
        {
          key: "0",
          selectionDate: new Date(),
          selectionAmount: "0"
        }
      ]
    };
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.checkBalance = this.checkBalance.bind(this);
  }

  editEachRow(eachRow, keyIndex, newDate) {
    return eachRow.map(item => {
      var temp = Object.assign({}, item);
      if (temp.key == keyIndex) {
        temp.selectionDate = newDate;
      }
      return temp;
    });
  }

  editEachRowAmount(eachRow, keyIndex, amount) {
    return eachRow.map(item => {
      var temp = Object.assign({}, item);
      if (temp.key == keyIndex) {
        temp.selectionAmount = amount;
      }
      return temp;
    });
  }

  onChange(e, valE) {
    const val = valE.target.value;
    const re = /^[0-9\b]+$/;
    if ((val === "" || re.test(val)) && val.length <= 5) {
      let tableDa = this.editEachRowAmount(this.state.tableData, e.index, val);
      this.setState({
		  showBalance: false,
		  tableData: tableDa
      });
    }
  }

  handleChange(event, date) {
    let tableDa = this.editEachRow(this.state.tableData, event.index, date);
    this.setState({
	  showBalance: false,
      tableData: tableDa
    });
  }

  minus() {
    let tableDa = this.state.tableData;
    tableDa.pop();
    this.setState({
	  showBalance: false,
      tableData: tableDa
    });
  }

  plus() {
    let tableDa = this.state.tableData;

    tableDa.push({
      key: this.state.tableData.length,
      selectionDate: new Date(),
      selectionAmount: "0"
    });
    this.setState({
	  showBalance: false,
      tableData: tableDa
    });
  }

  checkBalance() {
    console.log("MinBalance: " + this.props.minBalance);
	const currentDate = new Date();
	let currentDay = currentDate.getDay();
    let tableDa = this.state.tableData;
	let keyValue = [];

	Object.entries(tableDa).forEach(function([key, value]) 
	{
		var newValues = {};
		newValues.keyVal = value["selectionDate"].getDate();
		newValues.valueVal = value["selectionAmount"];
		
		keyValue.push(newValues);
	});
	keyValue = this.sortObject(keyValue);
	var i = 8;
  }
  
  sortObject(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
  }

  getMonthFromString = function(monthName) {
    var date = new Date(Date.parse(monthName + 1, new Date().getFullYear()));
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
    var lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    var month =
      new Date(Date.parse(monthName + 1, new Date().getFullYear())).getMonth() +
      1;
    var year = new Date().getFullYear();

    return (
      firstDay +
      "-" +
      month +
      "-" +
      year +
      " - " +
      lastDay +
      "-" +
      month +
      "-" +
      year
    );
  };

  renderTableData() {
    return this.state.tableData.map((eachRow, index) => {
      const { selectionDate, selectionAmount } = eachRow;
      return (
        <tr key={index}>
          <td>
            <DatePicker
              id={index}
              className="datepick"
              selected={selectionDate}
              onChange={this.handleChange.bind(this, {
                index
              })}
            />
          </td>
          <td>
            
            <input
              key={index}
              id={index}
              type="text"
              pattern="[0-9]{0,5}"
              value={selectionAmount}
              onChange={this.onChange.bind(this, {
                index
              })}
            />
          </td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.tableHeader);

    return header.map(key => {
      return (
        <th key={key} align="left">
          
          {this.state.tableHeader[key]}
        </th>
      );
    });
  }

  render() {
    const isOnlyOneRow = this.state.tableData.length === 1;
	const isShowBalance = this.state.showBalance;
	
    return (
      <div>
        <table>
          <tbody>
            <tr> {this.renderTableHeader()} </tr> {this.renderTableData()}
          </tbody>
        </table>
        <div align="center">
          <button disabled={isOnlyOneRow} type="button" onClick={this.minus}>
            Remove
          </button>
          <button type="button" onClick={this.plus}>
            Add
          </button>
        </div>
        <div align="center">
          <button
            className="checkBalance"
            onClick={this.checkBalance}
            type="button"
          >
            Check
          </button>
		  
		  {isShowBalance} ?
		  <label>Your Account has </label>
		  :
		  null
        </div>
      </div>
    );
  }
}

export default DateSelector;
