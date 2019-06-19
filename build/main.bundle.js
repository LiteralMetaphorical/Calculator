"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//React

var Calculator = function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

    _this.state = {
      currentInput: "0",
      display: "0"
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Calculator, [{
    key: "handleClick",
    value: function handleClick(event) {
      var operators = ["+", "-", "/", "*"];
      var length = this.state.currentInput.length;
      switch (event.target.firstChild.innerHTML) {
        case "0":
          if (this.state.currentInput == "0") {
            break;
          } else {
            this.setState({
              currentInput: this.state.currentInput.concat("0"),
              display: this.state.display.concat("0")
            });
            break;
          }
        case "=":
          var copy = this.state.currentInput.slice(0);
          var indexE = eval(copy).toString().indexOf("e");
          console.log(indexE);
          this.setState({
            currentInput: eval(copy).toString(),
            display: eval(copy).toString().indexOf("e") == -1 ? eval(copy).toString().slice(0, 10) : eval(copy).toString().slice(0, 7) + eval(copy).toString().slice(indexE)
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
          } else if (this.state.currentInput.indexOf(".") != -1 && this.state.currentInput.indexOf("+") == -1 && this.state.currentInput.indexOf("-") == -1 && this.state.currentInput.indexOf("/") == -1 && this.state.currentInput.indexOf("*") == -1) {
            break;
          } else if (this.state.currentInput.lastIndexOf(".") == -1) {
            this.setState({
              currentInput: this.state.currentInput.concat("."),
              display: this.state.display.concat(".")
            });
            break;
          } else {
            if (this.state.currentInput.lastIndexOf(".") > this.state.currentInput.lastIndexOf("+") && this.state.currentInput.lastIndexOf("+") != -1 || this.state.currentInput.lastIndexOf(".") > this.state.currentInput.lastIndexOf("*") && this.state.currentInput.lastIndexOf("*") != -1 || this.state.currentInput.lastIndexOf(".") > this.state.currentInput.lastIndexOf("/") && this.state.currentInput.lastIndexOf("/") != -1 || this.state.currentInput.lastIndexOf(".") > this.state.currentInput.lastIndexOf("-") && this.state.currentInput.lastIndexOf("-") != -1) {
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
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var buttonArr = ["clear", "multiply", "seven", "eight", "nine", "four", "five", "six", "one", "two", "three", "zero", "decimal", "divide", "subtract", "add", "equals"];
      var symbolArr = ["AC", "×", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "÷", "-", "+", "="];
      var elements = buttonArr.map(function (item, index) {
        return React.createElement(
          "div",
          { className: "button", onClick: _this2.handleClick, key: item + index, id: item },
          React.createElement(
            "h1",
            null,
            symbolArr[index]
          )
        );
      });
      return React.createElement(
        "div",
        { id: "calculator" },
        React.createElement(
          "div",
          { id: "display" },
          React.createElement(
            "h1",
            null,
            this.state.display
          )
        ),
        elements
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("root"));
