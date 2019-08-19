import React from "react";
import './App.css';

class TitleHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
  }
 
  onChange(e) {
    const re = /^[0-9\b]+$/;
    if ((e.target.value === '' || re.test(e.target.value)) && e.target.value.length <= 5) {
        this.setState({value: e.target.value})
    }
  }
 
  render() {
    return (
      <div className="details-header">
		  <p className="titleLabel">Average Min Balance: </p> 
		  <input className="titleText" type="text" pattern='[0-9]{0,5}' value={this.state.value} onChange={this.onChange}/>

		  <p className="titleLabel">Amount type: </p> 
		  <input className="titleText" type="text" value="  ₹" disabled={true} />
	  </div>
    );
  }
}

export default TitleHeader;