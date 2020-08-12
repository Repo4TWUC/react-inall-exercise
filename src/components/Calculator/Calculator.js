import React from 'react';
import OperateButton from './OperateButton'
import './Calculator.scss'
import {Link} from "react-router-dom";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: ""
    };
  }

  render() {
    const operates = [
      "+", "-", "*",
      "7", "8", "9",
      "4", "5", "6",
      "1", "2", "3",
      "0", "Clear", "="
    ]
    const operateButtons = operates.map(itm =>
        <OperateButton
          operate={itm}
          clickOperate={this.handleClick.bind(this, itm)}
          key={itm}
        />
    )
    return (
        <div className="calculator">
          <h2>在线计算器</h2>
          <div className="calc">
            <input type="text" readOnly={true} value={this.state.expression} className="screen" />
            <div className="btn-container">
              {operateButtons}
            </div>
          </div>
          <div className="return-con">
            <Link to="/">返回首页</Link>
          </div>
        </div>
    );
  }

  handleClick (operate) {
    if (operate === "Clear") {
      this.clear();
    }
    else if (operate === "=") {
      this.calc();
    }
    else {
      this.setState({
        expression: this.state.expression + operate
      })
    }
  }

  clear () {
    this.setState({
      expression: ""
    })
  }

  calc () {
    this.setState({
      expression: eval(this.state.expression)
    })
  }
}

Calculator.propTypes = {};

export default Calculator;
