import React, { Component } from 'react';
import {connect} from 'react-redux';
import { resetTimes } from '../../redux/actions/timerActions';
import beep from '../../assets/audio/beep.mp3';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      minutes : this.props.session_time,
      seconds : 0,
      current : 'Session',
      is_running : false,
      btn_text: 'Start'
    }
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
    
    this.interval = null;
  }

  startStop(){
    const audio = document.getElementById('beep');
    if(!this.state.is_running){
      document.getElementById('app').classList.add('go');
      this.setState({ is_running: true, btn_text: 'Pause' })
      this.interval = setInterval(()=>{
        if(this.state.seconds > 0){
          this.setState({seconds: this.state.seconds - 1})
        }else{
          if(this.state.minutes > 0){
            this.setState({ minutes: this.state.minutes - 1, seconds: 59 })
          }else{
            audio.currentTime = 0;
            audio.play();
            if(this.state.current === 'Session'){
              this.setState({
               current: 'Break',
               minutes: this.props.break_time,
               seconds: 0 
              })
            }else{
              this.setState({
                current: 'Session',
                minutes: this.props.session_time,
                seconds: 0
              })
            }
          }
        }
      }, 1000)
    }else{
      document.getElementById('app').classList.remove('go');
      window.clearInterval(this.interval);
      this.setState({
        is_running: false,
        btn_text: 'Start'
      });
    }
    document.activeElement.blur();
  }

  reset(){
    document.getElementById('app').classList.remove('go');
    window.clearInterval(this.interval);
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
    this.props.resetTimes()
    this.setState({
      is_running: false,
      minutes: this.props.session_time,
      seconds: 0,
      current: 'Session',
      btn_text: 'Start'
    });
    document.activeElement.blur();
  }

  componentDidUpdate(prevProps){
    if(!this.state.is_running){
      if(this.props.session_time !== prevProps.session_time){
        this.setState({ minutes: this.props.session_time})
      }
    }
  }

  render() {
    let minutes = this.state.minutes;
    var seconds = this.state.seconds;
    if(seconds < 10){
      seconds = "0" + seconds.toString();
    }

    if(this.state.minutes < 10){
      minutes = "0" + minutes.toString();
    }
    return (
      <div>
        <div id="timer">
          <div id="timer-label">{this.state.current}</div>
          <div id="time-left">{minutes}:{seconds}</div>
        </div>
        <div>
          <button className="btn btn-controls" id="start_stop" onClick={this.startStop}>{this.state.btn_text}</button>
          <button className="btn btn-controls" id="reset" onClick={this.reset}>Reset</button>
        </div>
        <audio id="beep"><source src={beep} /></audio>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  session_time: state.timer.session_time,
  break_time: state.timer.break_time
})

export default connect(mapStateToProps, { resetTimes })(Timer);