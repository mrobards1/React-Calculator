import React from 'react';
import './App.css';
import * as math from 'mathjs';



var expression = ''

const Calculator = (props) => (
  <div className="container">
    <div className="calculator">

    <div class="gridContainer">
      
      <div className="calcbutton" id="display">{props.display}</div>
      <button className="calcbutton" id="clear" onClick={props.clear}>AC</button>
      <button className="calcbutton" id="divide" onClick={props.handleClick}>/</button>
      <button className="calcbutton" id="multiply" onClick={props.handleClick}>X</button>
      <button className="calcbutton" id="seven" onClick={props.handleClick}>7</button>
      <button className="calcbutton" id="eight" onClick={props.handleClick}>8</button>
      <button className="calcbutton" id="nine" onClick={props.handleClick}>9</button>
      <button className="calcbutton" id="subtract" onClick={props.handleClick}>-</button>
      <button className="calcbutton" id="four" onClick={props.handleClick}>4</button>
      <button className="calcbutton" id="five" onClick={props.handleClick}>5</button>
      <button className="calcbutton" id="six" onClick={props.handleClick}>6</button>
      <button className="calcbutton" id="add" onClick={props.handleClick}>+</button>
      <button className="calcbutton" id="one" onClick={props.handleClick}>1</button>
      <button className="calcbutton" id="two" onClick={props.handleClick}>2</button>
      <button className="calcbutton" id="three" onClick={props.handleClick}>3</button>
      <button id="equals" onClick={(props.equals)}></button>
      <button className="calcbutton" id="zero" onClick={props.handleClick}>0</button>
      <button className="calcbutton" id="decimal" onClick={props.handleClick}>.</button>
      
      

    </div>
    
    </div>
   


  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }
  handleClick = (event) => {
    const buttonId = event.target.innerText;
    expression = expression + buttonId
    this.setState({
      display: expression
    })
     
  }

  equals = () => {
    const result = math.evaluate(expression);
    this.setState({
      display: result.toString()
    });
  }
    
  

  clear = () => {
    this.setState({
      display: ''
    });
    expression = ''
  }
  render() {
    return (
      <Calculator 
        handleClick={this.handleClick} display={this.state.display} equals={this.equals} clear={this.clear}
      />
    );
  }

}

export default App;
