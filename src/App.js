import React from "react";
import "./styles.css";

class WebRTCSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { localStream: null };
  }

  componentDidMount() {}

  startWebCam = () => {
    const that = this;
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true
      })
      .then((stream) => {
        that.setState({ localStream: stream });
      });
  };

  stopWebCam = () => {
    this.state.localStream.getTracks().forEach((track) => {
      track.stop();
    });
    this.setState({ localStream: null });
  };

  render() {
    return (
      <div className="App">
        {this.state.localStream && (
          <video
            autoPlay
            ref={(video) => {
              if (video) {
                video.srcObject = this.state.localStream;
              }
            }}
          />
        )}
        <div className="startStopWebCam">
          <button
            className="WebCamButton"
            onClick={this.startWebCam.bind(this)}
          >
            Start
          </button>
          <button className="WebCamButton" onClick={this.stopWebCam.bind(this)}>
            Stop
          </button>
        </div>
      </div>
    );
  }
}

export default WebRTCSample;
