import React from 'react';
import {Link} from "react-router-dom";
import './Timer.scss'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      running: false,
      timeInterval: null
    };
    this.timeInputRef = React.createRef();
  }

  render() {
    return (
        <div className="timer-con">
          <h2>在线倒计时器</h2>
          <div className="timer">
            <div className="left">
              <div>
                <label htmlFor="time">设置时间</label>
                <input
                    type="number"
                    min="0" max="100"
                    ref={this.timeInputRef} name="time" id="time"/>
              </div>
                <button id="start" onClick={this.handleBtnClick.bind(this)}>{this.state.running ? 'Stop' : 'Start'}</button>
            </div>
            <div className="time-screen">
              {this.state.time} Seconds
            </div>
          </div>
          <div className="return-con">
            <Link to="/">返回首页</Link>
          </div>
        </div>
    );
  }

  handleBtnClick () {
    const value = this.timeInputRef.current.value;
    if (!this.state.running) {
      this.timerStart(value);
    } else {
      this.timerStop();
    }
  }

  timerStart (value) {
    if (!value || value <= 0) {
      this.timeInputRef.current.focus();
      return false;
    }

    this.setState({
      time: Number(value),
      running: true
    })

    const intervalId = setInterval(() => {
      const nextTime = this.state.time - 1;
      if (nextTime === 0) {
        this.timerStop();
      }
      this.setState({
        time: nextTime,
      });
    }, 1000);

    this.setState({
      timeInterval: intervalId
    })
  }

  timerStop () {
    clearInterval(this.state.timeInterval);
    this.setState({
      time: 0,
      running: false
    });
  }
}

Timer.propTypes = {};

export default Timer;
