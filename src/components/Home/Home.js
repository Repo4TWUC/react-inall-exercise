import React from 'react';
import calculatorImg from '../../images/calculator.png';
import timerImg from '../../images/timer.png';
import './home.less'
import {Link} from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
        <div className="home">
          <div className="title">
            <h2>在线实用工具</h2>
          </div>
          <div className="func">
            <Link to="/calculator" className="single-func">
              <img src={calculatorImg} alt="calculator"/>
              <span>计算器</span>
            </Link>
            <Link to="/timer" className="single-func">
              <img src={timerImg} alt="timer"/>
              <span>计时器</span>
            </Link>
          </div>
        </div>
    );
  }
}

Home.propTypes = {};

export default Home;
