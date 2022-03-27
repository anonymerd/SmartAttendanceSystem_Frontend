import React, { useEffect, useState, useRef } from 'react';
import * as FaceApi from 'face-api.js';
import WebCam from 'react-webcam';
import './Camera.css';

const Camera = () => {
  const [video, setVideo] = useState(null);
  const height = 650;
  const width = 800;
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const containerRef = useRef(null);

  // Load models on page load
  useEffect(() => {
    // Loading the Tiny Face Detector Model.
    FaceApi.nets.tinyFaceDetector.loadFromUri('/models').then(async () => {
      if (navigator.mediaDevices.getUserMedia) {
        // Setting Video Reference
        await setVideo(document.getElementById('cameraElement'));
        navigator.mediaDevices
          .getUserMedia({ audio: false, video: true })
          .then((stream) => {
            //Display the video stream in the video object.
            video.srcObject = stream;

            //Play the video stream
            video.play();
            // video.webkitRequestFullScreen();

            addEvent();
          })
          .catch((err) => {
            console.log(err.name + ': ' + err.message);
          });
      }

      const addEvent = () => {
        video.addEventListener('play', () => {
          // Creating canvas.
          const canvas = FaceApi.createCanvas(video);
          canvas.id = 'canvas';
          // Adding the canvas to the dom.
          containerRef.current.append(canvas);

          const displaySize = {
            width: width,
            height: height,
          };
          FaceApi.matchDimensions(canvas, displaySize);

          const interval = setInterval(async () => {
            const detections = await FaceApi.detectAllFaces(
              video,
              new FaceApi.TinyFaceDetectorOptions()
            );
            const resizedDetections = FaceApi.resizeResults(
              detections,
              displaySize
            );
            canvas
              .getContext('2d')
              .clearRect(0, 0, canvas.width, canvas.height);
            FaceApi.draw.drawDetections(canvas, resizedDetections);

            if (detections.length > 0) {
              clearInterval(interval);
              takePhoto();
            }
          }, 100);
        });

        const takePhoto = () => {
          const width = 414;
          const height = width / (16 / 9);

          // let video = videoRef.current;
          let photo = photoRef.current;

          photo.width = width;
          photo.height = height;

          let ctx = photo.getContext('2d');
          ctx.drawImage(video, 0, 0, width, height);

          savePhoto(photo);
        };

        const savePhoto = (ctx) => {
          let downloadLink = document.createElement('a');
          downloadLink.setAttribute('download', 'CanvasAsImage.png');
          // let canvas = document.getElementById('myCanvas');
          let dataURL = ctx.toDataURL('image/png');
          let url = dataURL.replace(
            /^data:image\/png/,
            'data:application/octet-stream'
          );
          downloadLink.setAttribute('href', url);
          downloadLink.click();
        };
      };
    });
  }, [video]);

  return (
    <div className='camera-container'>
      <div className='camera-capture-container' ref={containerRef}>
        <WebCam
          id='cameraElement'
          ref={videoRef}
          autoPlay={true}
          width={width}
          height={height}
          playsInline
          muted
        />
        <canvas ref={photoRef}></canvas>
        {/* <button onClick={takePhoto}>Capture</button> */}
      </div>
    </div>
  );
};

export default Camera;
