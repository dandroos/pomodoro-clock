import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incTime, decTime } from '../../redux/actions/timerActions';

class Settings extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const category = e.target.getAttribute('category');
    const action = e.target.getAttribute('action');
    
    switch(action){
      case 'increment':
        this.props.incTime(category);
        break;
      case 'decrement':
        this.props.decTime(category);
        break;
      default:
        break;
    }
    document.activeElement.blur();
  }

  render() {
    return (
      <div id="settings">
        <div className="setting">
          <h2 id="session-label">Session</h2>
          <div className="setting-controls">
            <button className="btn btn-settings" id="session-decrement" category="work_time" action="decrement" onClick={this.handleClick}>-</button>
            <span className="settings-display" id="session-length">{this.props.session_time}</span>
            <button className="btn btn-settings" id="session-increment" category="work_time" action="increment" onClick={this.handleClick}>+</button>
          </div>
        </div>
        <div className="setting">
          <h2 id="break-label">Break</h2>
          <div className="setting-controls">
            <button className="btn btn-settings" id="break-decrement" category="break_time" action="decrement" onClick={this.handleClick}>-</button>
            <span className="settings-display" id="break-length">{this.props.break_time}</span>
            <button className="btn btn-settings" id="break-increment" category="break_time" action="increment" onClick={this.handleClick}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  session_time: state.timer.session_time,
  break_time: state.timer.break_time
})

const mapDispatchToProps = {
  incTime, decTime
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
