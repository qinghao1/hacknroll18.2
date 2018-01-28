import React from 'react';
import Webcam from 'react-webcam';

export default class TakePic extends React.Component {
   setRef = (webcam) => {
    this.webcam = webcam;
  }

    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc);
  };

  render() {
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}
