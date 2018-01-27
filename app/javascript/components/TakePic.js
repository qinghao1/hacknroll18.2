import React from 'react';
import Webcam from 'react-webcam';
import {withRouter} from 'react-router-dom'

class TakePic extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }


  render() {
    const {history} = this.props;
    const uploadPic = (url,img) => {
      fetch(url, {
        method: 'post',
        body: {
          name: sessionStorage.getItem("playerName"),
          img: img
        }
      })
        .then( (res) => {
          if (res.status == 200) {
            console.log("Image uploaded");
            history.push('/lobby');
          }
        })
      };

    const capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(history.location.pathname);
      uploadPic(history.location.pathname,imageSrc);
    };
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
export default withRouter(TakePic);
