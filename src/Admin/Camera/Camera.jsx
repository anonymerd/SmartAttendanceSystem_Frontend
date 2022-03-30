import React, { useEffect, useState, useRef } from 'react';
import * as FaceApi from 'face-api.js';
import WebCam from 'react-webcam';
import axios from 'axios';
import './Camera.css';
import Popup from './Popup/Popup';

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Camera = () => {
  const [video, setVideo] = useState(null);
  const [open, setOpen] = useState(false);
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
              new FaceApi.TinyFaceDetectorOptions({ scoreThreshold: 0.8 })
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
              video.pause();
              clearInterval(interval);
              takePhoto();
            }
          }, 100);
        });

        const takePhoto = () => {
          const width = 414;
          const height = width / (16 / 9);

          // let video = videoRef.current;
          // let photo = photoRef.current;
          let photo = document.createElement('canvas');

          photo.width = width;
          photo.height = height;

          let ctx = photo.getContext('2d');
          ctx.drawImage(video, 0, 0, width, height);
          // savePhoto(photo);
          sendPhotoToServer(photo);
        };

        const sendPhotoToServer = (photo) => {
          const formData = new FormData();
          formData.append('empId', '351351321');
          formData.append('name', 'amkhil');
          formData.append('image', photo.toDataURL('image/png'));

          const apiAddress = 'http://127.0.0.1:8000/api/image/';
          // const apiAddress = 'http://127.0.0.1:8000/api/employee/';

          axios
            .post(apiAddress, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.error(err);
            });
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const employee = {
    name: 'Rohit Bisht',
    empId: 'EMPH2856',
    image:
      'https://www.seekpng.com/png/detail/895-8958633_okhand22-dank-memes-meme-mouth.png',
  };

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
        <Popup
          employee={employee}
          openDialog={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
        {/* <button onClick={takePhoto}>Capture</button> */}
      </div>
    </div>
  );
};

export default Camera;
