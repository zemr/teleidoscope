import React from 'react';
import image from '../patterns/pattern1.png';

class Hexagon extends React.Component {
  componentDidMount() {
    this.drawImages();
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


  render() {
    return (
      <div>
        <canvas id="canvas1" width={400} height={400} />
      </div>
    )
  }
}

export default Hexagon;