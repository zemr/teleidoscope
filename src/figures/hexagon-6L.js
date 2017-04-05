import React from 'react';
import image1 from '../patterns/test-pattern1.png';
import image2 from '../patterns/test-pattern2.png';
import image3 from '../patterns/test-pattern3.png';

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

    const file = {image1};
    const img = new Image();
    img.src = file['image1'];

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
  }

  drawMultipleImages() {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");

    ctx.translate(canvas.width / 2, canvas.height / 2);

    const file1 = {image1};
    const file2 = {image2};
    const img1 = new Image();
    const img2 = new Image();
    img1.src = file1['image1'];
    img2.src = file2['image2'];

    img2.onload = () => {
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
  }

  drawMirrorImages() {
    const canvas = document.getElementById("canvas3");
    const ctx = canvas.getContext("2d");

    ctx.translate(canvas.width / 2, canvas.height / 2);

    const file = {image3};
    const img = new Image();
    img.src = file['image3'];

    img.onload = () => {
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