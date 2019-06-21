//React
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "0",
      display: "0"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  //listen to click on any calculator buttons and react accordingly
  handleClick(event) {
    let operators = ["+", "-", "/", "*"];
    let length = this.state.currentInput.length;
    switch(event.target.firstChild.innerHTML) {
      case "0":
        if (this.state.currentInput == "0") {
          break;
        } else {
          this.setState({
            currentInput: this.state.currentInput.concat("0"),
            display: this.state.display.concat("0"),
          });
          break;
        }
      case "=":
        let copy = this.state.currentInput.slice(0);
        let indexE = eval(copy).toString().indexOf("e"); //check if currently displayed value has a scientific notation "e"
        this.setState({
          currentInput: eval(copy).toString(),
          display: (eval(copy).toString().indexOf("e") == -1 ? eval(copy).toString().slice(0, 10) : eval(copy).toString().slice(0, 7) + eval(copy).toString().slice(indexE)) //handle cases when current value has scientific notation "e"
        });
        break;
      case "÷":
        if (operators.indexOf(this.state.currentInput[length - 1]) != -1) {
          this.setState({
            currentInput: this.state.currentInput.slice(0, length - 1).concat("/"),
            display: this.state.display.slice(0, length - 1).concat("÷")
          });
          break;
        } else {
            this.setState({
            currentInput: this.state.currentInput.concat("/"),
            display: this.state.display.concat("÷")
          });
        break;
        }
      case "×":
        if (operators.indexOf(this.state.currentInput[length - 1]) != -1) {
          this.setState({
            currentInput: this.state.currentInput.slice(0, length - 1).concat("*"),
            display: this.state.display.slice(0, length - 1).concat("×")
          });
          break;
        } else {
            this.setState({
            currentInput: this.state.currentInput.concat("*"),
            display: this.state.display.concat("×")
          });
          break;
        }
      case "-":
        if (operators.indexOf(this.state.currentInput[length - 1]) != -1) {
          this.setState({
            currentInput: this.state.currentInput.slice(0, length - 1).concat("-"),
            display: this.state.display.slice(0, length - 1).concat("-")
          });
          break;
        } else {
          this.setState({
            currentInput: this.state.currentInput.concat("-"),
            display: this.state.display.concat("-")
          });
          break;
        }
      case ".":
        if (this.state.currentInput[length - 1] == ".") {
          break;
        } else if (this.state.currentInput.indexOf(".") != -1 && (this.state.currentInput.indexOf("+") == -1) && (this.state.currentInput.indexOf("-") == -1) && (this.state.currentInput.indexOf("/") == -1) && (this.state.currentInput.indexOf("*") == -1)) {
          break;
        } else if (this.state.currentInput.lastIndexOf(".") == -1) {
            this.setState({
            currentInput: this.state.currentInput.concat("."),
            display: this.state.display.concat(".")
          });
          break;
        } else {
          //check for decimal numbers, if number is decimal, block a new "." input, unless there is an operator between numbers seperating them
          //for example, block inputs like "1.5.5"
          if ((this.state.currentInput.lastIndexOf(".") > this.state.currentInput.lastIndexOf("+")) && (this.state.currentInput.lastIndexOf("+")) != -1 ||
             (this.state.currentInput.lastIndexOf(".") > this.state.currentInput.lastIndexOf("*") && (this.state.currentInput.lastIndexOf("*")) != -1) ||
             (this.state.currentInput.lastIndexOf(".") > this.state.currentInput.lastIndexOf("/") && (this.state.currentInput.lastIndexOf("/")) != -1) ||
             (this.state.currentInput.lastIndexOf(".") > this.state.currentInput.lastIndexOf("-")) && (this.state.currentInput.lastIndexOf("-")) != -1) {
            break;
          } else {
              this.setState({
              currentInput: this.state.currentInput.concat("."),
              display: this.state.display.concat(".")
            });
            break;
          }
        }
      case "+":
        if (operators.indexOf(this.state.currentInput[length - 1]) != -1) {
          this.setState({
            currentInput: this.state.currentInput.slice(0, length - 1).concat("+"),
            display: this.state.display.slice(0, length - 1).concat("+")
          });
          break;
        } else {
          this.setState({
            currentInput: this.state.currentInput.concat("+"),
            display: this.state.display.concat("+")
          });
          break;
        }
      case "AC":
        this.setState({
          currentInput: "0",
          display: "0"
        });
        break;
      default:
        if (this.state.currentInput == "0") {
          this.setState({
            currentInput: event.target.firstChild.innerHTML,
            display: event.target.firstChild.innerHTML
          });
          break;
        } else {
          this.setState({
            currentInput: this.state.currentInput.concat(event.target.firstChild.innerHTML),
            display: this.state.display.concat(event.target.firstChild.innerHTML)
          });
          break;
        }
        break;
    }
  }
  render() {
    let buttonArr = ["clear", "multiply", "seven", "eight", "nine", "four", "five", "six", "one", "two", "three", "zero", "decimal", "divide", "subtract", "add", "equals"];
    let symbolArr=["AC", "×", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "÷", "-", "+", "="];
    let elements = buttonArr.map((item, index) => { //map button names from buttonArr to their UI symbols from symbolsArr
      return <div className="button" onClick={this.handleClick} key={item + index} id={item}><h1>{symbolArr[index]}</h1></div>
    });
    return (
      <div id="calculator">
        <div id="display"><h1>{this.state.display}</h1></div>
        {elements}
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
