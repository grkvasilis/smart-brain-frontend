import React from "react";
import "./FaceRecognition.css";

function FaceRecognition({ imageUrl, box }) {
  return (
    <div className="face-recognition">
      <div className="face-recognition-box">
      <img id="inputimage" src={imageUrl} alt="" />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>

      </div>
    </div>
  );
}

export default FaceRecognition;
