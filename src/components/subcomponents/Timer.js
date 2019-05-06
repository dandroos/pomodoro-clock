import React, { Component } from 'react';
import {connect} from 'react-redux';
import beep from '../../assets/audio/beep.mp3';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      minutes : this.props.session_time,
      seconds : 0,
      current : 'Session',
      is_running : false
    }
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);

    this.interval = null;
  }

  start(){
    if(!this.state.is_running){
      this.setState({ is_running: true })
      this.interval = setInterval(()=>{
        if(this.state.seconds > 0){
          this.setState({seconds: this.state.seconds - 1})
        }else{
          if(this.state.minutes > 0){
            this.setState({ minutes: this.state.minutes - 1, seconds: 59 })
          }else{
            var audio = new Audio(beep);
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
    }
  }

  pause(){
    if(this.state.is_running){
      window.clearInterval(this.interval);
      this.setState({
        is_running: false
      });
    }else{
      this.start();
    }
  }

  reset(){
    window.clearInterval(this.interval);
    this.setState({
      is_running: false,
      minutes: this.props.session_time,
      seconds: 0,
      current: 'Session'
    });
  }

  alert

  componentDidUpdate(prevProps){
    if(!this.state.is_running){
      if(this.props.session_time != prevProps.session_time){
        this.setState({ minutes: this.props.session_time})
      }
    }
  }

  render() {
    var seconds = this.state.seconds;
    if(seconds < 10){
      console.log('here')
      seconds = "0" + seconds.toString();
    }
    return (
      <div>
        {/* <audio id="beep" src="../../assets/audio/beep.mp3" /> */}
        <div>
          <span>{this.state.current}</span>
          <span>{this.state.minutes}:{seconds}</span>
        </div>
        <div>
          <button onClick={this.start}>Start</button>
          <button onClick={this.pause}>Pause</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  session_time: state.timer.session_time,
  break_time: state.timer.break_time
})

export default connect(mapStateToProps, null)(Timer);