import React from 'react';
import './OperateButton.scss'

class OperateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {operate, clickOperate} = this.props;
    return (
        <div onClick={clickOperate} className="operateButton">
          {operate}
        </div>
    );
  }
}

OperateButton.propTypes = {};

export default OperateButton;
