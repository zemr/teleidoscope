import React from 'react';
import image from '../patterns/pattern1.png';
import image2 from '../patterns/pattern2.png';
import image3 from '../patterns/pattern3.png';

class Hexagon extends React.Component {
  componentDidMount() {
    this.drawImages();
    this.drawMultipleImages();
    this.drawMirrorImages();
  }

  drawLines() {
    const contextStrokes = document.getElementById('canvas2').getContext('2d');
    contextStrokes.beginPath();
    contextStrokes.moveTo(400, 200);
    contextStrokes.lineTo(0, 200);
    contextStrokes.stroke();

    contextStrokes.beginPath();
    contextStrokes.moveTo(200, 0);
    contextStrokes.lineTo(200, 400);
    contextStrokes.stroke();
  }

  drawImages() {
    // this.drawLines();
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");

    ctx.translate(canvas.width / 2, canvas.height / 2);

    const img = new Image();
    img.src = "/static/media/pattern1.22a9dacc.png";

    img.onload = () => {
      // start at three o'clock
      ctx.rotate(Math.PI/-3);
      ctx.drawImage(img, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img, -100, 0);
    };

    console.log('image', {image});
  }

  drawMultipleImages() {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");

    ctx.translate(canvas.width / 2, canvas.height / 2);

    const img1 = new Image();
    const img2 = new Image();
    img1.src = "/static/media/pattern1.22a9dacc.png";
    img2.src = "/static/media/pattern2.ec1e5c29.png";

    img2.onload = () => {
      // start at three o'clock
      ctx.rotate(Math.PI/-3);
      ctx.drawImage(img1, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img2, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img1, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img2, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img1, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img2, -100, 0);
    };

    console.log('image2', {image2});
  }

  drawMirrorImages() {
    const canvas = document.getElementById("canvas3");
    const ctx = canvas.getContext("2d");

    ctx.translate(canvas.width / 2, canvas.height / 2);

    const img = new Image();
    img.src = "/static/media/pattern3.d3a312ad.png";

    img.onload = () => {
      // start at three o'clock
      ctx.rotate(Math.PI/-3);
      ctx.drawImage(img, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -100, 0);
      ctx.restore();
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -100, 0);
      ctx.restore();
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img, -100, 0);
      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -100, 0);
      ctx.restore();
    };

    console.log('image3', {image3});
  }


  render() {
    return (
      <div>
        <canvas id="canvas1" width={400} height={400} />
        <canvas id="canvas2" width={400} height={400} />
        <canvas id="canvas3" width={400} height={400} />
      </div>
    )
  }
}

export default Hexagon;