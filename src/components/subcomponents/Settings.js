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
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>Session</h2>
          <button category="work_time" action="decrement" onClick={this.handleClick}>-</button>
          <span>{this.props.session_time}</span>
          <button category="work_time" action="increment" onClick={this.handleClick}>+</button>
        </div>
        <div>
          <h2>Break</h2>
          <button category="break_time" action="decrement" onClick={this.handleClick}>-</button>
          <span>{this.props.break_time}</span>
          <button category="break_time" action="increment" onClick={this.handleClick}>+</button>
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
