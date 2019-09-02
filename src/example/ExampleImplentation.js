import React, {Component} from 'react';
//Import package InputDatePicker
import Phone from 'chalo-phone-format';
//Import style example
import './style.css';

// Implementation example
class ExampleImplentation extends Component {
    //It's a method to change the value in Phone
    handleChange(value) {
        console.log(value);
    }

    render () {
        return (<div className="container">
          <Phone
            //(Optional) It's the value by default
            value={"2151234455"}
            handleChange={this.handleChange}
            //(Optional) It wil add a field more in respuest
            //formatOK:true --> meets the format
            //formatOK:false --> not meets the format
            isFormatOK={true}
            //(Optional) you can define your own format.
            //** It's mandatory to use the # character to represent the numbers.
            //format="(###) ###-####"
            //(Optional) You can define your own mask
            //mask="-"
           />
        </div>)
    }
}
export default ExampleImplentation;