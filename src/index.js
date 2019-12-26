import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import DelButton from "./components/DelButton";
class Calci extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "",
        previousNumber: "",
        currentNumber: "",
        operator: "",
      };
    }

    addtoInput = val => {
      this.setState({ input: this.state.input + val });
    };

    addZerotoInput = val => {
      //to avoid zero as a initial number
      if(this.state.input != "") {
        this.setState({ input: this.state.input + val });
      }
    };

    addDecimal = val => {
      //to allow only one decimal point
      if (this.state.input.indexOf(".") === -1 ) {
        this.setState({ input: this.state.input + val });
      }
    };

    clearInput = () => {
        this.setState({ input: "",
                        currentNumber: "",
                        previousNumber: "",
                        operator: ""
      });
    };

    delete = () => {

      this.setState({ input: "",
                      currentNumber: "" 
    });
    };

    add = () => {
      this.state.previousNumber=this.state.input;
      this.setState({input: ""});
      this.state.operator = "plus";
    };

    subtract = () => {
      this.state.previousNumber=this.state.input;
      this.setState({input: ""});
      this.state.operator = "minus";
    };

    multiply = () => {
      this.state.previousNumber=this.state.input;
      this.setState({input: ""});
      this.state.operator = "star";
    }
    divide = () => {
      this.state.previousNumber=this.state.input;
      this.setState({input: ""});
      this.state.operator = "slash";
    }
    mod = () => {
      this.state.previousNumber=this.state.input;
      this.setState({input: ""});
      this.state.operator = "percent";
    }

    evaluate = () => {
      this.state.currentNumber=this.state.input;
      if(this.state.operator === "plus") {
        this.setState({
          input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
        });
      }
      else if(this.state.operator === "minus") {
        this.setState({
          input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
        });
      }
      else if(this.state.operator === "star") {
        this.setState({
          input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
        });
      }
      else if(this.state.operator === "slash") {
        this.setState({
          input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
        });
      }
      else if(this.state.operator === "percent") {
        this.setState({
          input: parseInt(this.state.previousNumber) % parseInt(this.state.currentNumber)
        });
      }
    };

    render() {
      return(
        <div className="App">
          <div className="calc-wrapper">
            <div className="row">
              <Input>{this.state.input}</Input>
            </div>
            <div className="row">
              <ClearButton handleClear={this.clearInput}>clear</ClearButton>
              <div className="row1">
              <DelButton handleDel={this.delete}>Delete</DelButton>
              <Button handleClick={this.mod}>%</Button>
            </div>
            </div>
            <div className="row">
              <Button handleClick={this.addtoInput} >7</Button>
              <Button handleClick={this.addtoInput} >8</Button>
              <Button handleClick={this.addtoInput} >9</Button>
              <Button handleClick={this.divide}>/</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addtoInput} >4</Button>
              <Button handleClick={this.addtoInput} >5</Button>
              <Button handleClick={this.addtoInput} >6</Button>
              <Button handleClick={this.multiply}>X</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addtoInput} >1</Button>
              <Button handleClick={this.addtoInput} >2</Button>
              <Button handleClick={this.addtoInput} >3</Button>
              <Button handleClick={this.subtract}>-</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addDecimal}>.</Button>
              <Button handleClick={this.addZerotoInput}>0</Button>
              <Button handleClick={this.evaluate}>=</Button>
              <Button handleClick={this.add}>+</Button>
            </div>
          </div>
        </div>
      );

    }
  }
  
  ReactDOM.render(<Calci />, document.getElementById('root'));