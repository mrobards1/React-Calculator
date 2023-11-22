import React from 'react';
import './App.css';
import * as math from 'mathjs';





const Calculator = (props) => (
  <div className="container">
    <div className="calculator">

      <div class="gridContainer">
        <div className="display-container">
          <div className="display" id="expression-display">{props.expressionDisplay}</div>
          <div className="display" id="current-display">{props.currentDisplay}</div>
        </div>

        <button class="calcbutton" id="clear" onClick={props.clear}>AC</button>
        <button class="calcbutton" id="divide" onClick={props.handleClick}>/</button>
        <button class="calcbutton" id="multiply" onClick={props.handleClick}>x</button>
        <button class="calcbutton" id="seven" onClick={props.handleClick}>7</button>
        <button class="calcbutton" id="eight" onClick={props.handleClick}>8</button>
        <button class="calcbutton" id="nine" onClick={props.handleClick}>9</button>
        <button class="calcbutton" id="subtract" onClick={props.handleClick}>-</button>
        <button class="calcbutton" id="four" onClick={props.handleClick}>4</button>
        <button class="calcbutton" id="five" onClick={props.handleClick}>5</button>
        <button class="calcbutton" id="six" onClick={props.handleClick}>6</button>
        <button class="calcbutton" id="add" onClick={props.handleClick}>+</button>
        <button class="calcbutton" id="one" onClick={props.handleClick}>1</button>
        <button class="calcbutton" id="two" onClick={props.handleClick}>2</button>
        <button class="calcbutton" id="three" onClick={props.handleClick}>3</button>
        <button class="calcbutton" id="equals" onClick={(props.equals)}>=</button>
        <button class="calcbutton" id="zero" onClick={props.handleClick}>0</button>
        <button class="calcbutton" id="decimal" onClick={props.handleClick}>.</button>



      </div>

    </div>



  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expressionDisplay: 'Ans = 0',
      currentDisplay: '0',

    };
    this.expression = ''
    this.resultstr = '0'
    this.start = true;
  }

  handleClick = (event) => {
    let buttonId = event.target.innerText;
    //if user tries + - x / before typing in number initially, sets starting num to 0
    if(this.start === true) {
      if (event.target.id === 'add' || event.target.id === 'subtract' || event.target.id === 'divide' || event.target.id === 'multiply') {
        this.expression = '0'
      }
    }
    
    this.start = false;

     // Map 'x' to '*' for multiplication
    if (buttonId === 'x') {
      buttonId = '*';
    }

    this.expression = this.expression + " "+ buttonId;
    this.setState({
      expressionDisplay: "Ans = " + this.resultstr,
      currentDisplay: this.expression
    });

  }



  equals = () => {
    const result = math.evaluate(this.expression);
    this.setState({
      // expressionDisplay: result.toString(),
      expressionDisplay: this.expression + " = ",
      currentDisplay: result.toString(),
    });
    this.resultstr = result.toString();
    this.expression = this.resultstr;

  }



  clear = () => {
    this.setState({
      expressionDisplay: 'Ans = 0',
      currentDisplay: '0'
    });
    this.expression = ''
    this.resultstr = ''
    this.start = true;
  }
  render() {
    return (
      <Calculator
        handleClick={this.handleClick}
        expressionDisplay={this.state.expressionDisplay}
        currentDisplay={this.state.currentDisplay}
        calcClick={this.calcClick}
        equals={this.equals}
        clear={this.clear}
      />
    );
  }

}

export default App;
