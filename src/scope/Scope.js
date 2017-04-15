import React from 'react';

const radius = 120, height = 208;
const shift = (3*height - 5*radius) / 2;

class Scope extends React.Component {
  componentDidMount() {
    this.drawCells();
    this.drawLens();
  }

  componentDidUpdate() {
      this.drawCells();
  }

  drawCells() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = document.createElement('img');
    img.src = this.props.pattern;

    img.onload = () => {

      ctx.save();

      ctx.drawImage(img, .5*radius + shift, 0);
      ctx.drawImage(img, .5*radius + shift, height);
      ctx.drawImage(img, .5*radius + shift, 2*height);
      ctx.drawImage(img, 2*radius + shift, .5*height);
      ctx.drawImage(img, 2*radius + shift, 1.5*height);
      ctx.drawImage(img, 2*radius + shift, 2.5*height);
      ctx.drawImage(img, 3.5*radius + shift, 0);
      ctx.drawImage(img, 3.5*radius + shift, height);
      ctx.drawImage(img, 3.5*radius + shift, 2*height);

      ctx.translate(radius + shift, height);
      ctx.rotate(Math.PI/1.5);
      ctx.drawImage(img, -3.5*radius, -2*height);
      ctx.drawImage(img, -2*radius, -2.5*height);
      ctx.drawImage(img, -2*radius, -1.5*height);
      ctx.drawImage(img, -2*radius, -.5*height);
      ctx.drawImage(img, -.5*radius, -3*height);
      ctx.drawImage(img, -.5*radius, -2*height);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, radius, -2.5*height);
      ctx.drawImage(img, radius, -1.5*height);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, 2.5*radius, -height);

      ctx.rotate(Math.PI/1.5);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, -.5*radius, height);
      ctx.drawImage(img, -2*radius, -1.5*height);
      ctx.drawImage(img, -2*radius, -.5*height);
      ctx.drawImage(img, -2*radius, .5*height);
      ctx.drawImage(img, -2*radius, 1.5*height);
      ctx.drawImage(img, -3.5*radius, -height);
      ctx.drawImage(img, -3.5*radius, 0);
      ctx.drawImage(img, -3.5*radius, height);
      ctx.drawImage(img, -5*radius, .5*height);

      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -3.5*radius, height);
      ctx.drawImage(img, -2*radius, -.5*height);
      ctx.drawImage(img, -2*radius, .5*height);
      ctx.drawImage(img, -2*radius, 1.5*height);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, -.5*radius, height);
      ctx.drawImage(img, -.5*radius, 2*height);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, radius, .5*height);
      ctx.drawImage(img, radius, 1.5*height);
      ctx.drawImage(img, 2.5*radius, 0);
      ctx.restore();

      ctx.rotate(Math.PI/1.5);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, -.5*radius, -2*height);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, -2*radius, -2.5*height);
      ctx.drawImage(img, -2*radius, -1.5*height);
      ctx.drawImage(img, -2*radius, -.5*height);
      ctx.drawImage(img, -2*radius, .5*height);
      ctx.drawImage(img, -3.5*radius, -2*height);
      ctx.drawImage(img, -3.5*radius, -height);
      ctx.drawImage(img, -3.5*radius, 0);
      ctx.drawImage(img, -5*radius, -1.5*height);
      ctx.restore();

      ctx.rotate(Math.PI/1.5);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -.5*radius, -2*height);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, radius, -1.5*height);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, radius, .5*height);
      ctx.drawImage(img, 2.5*radius, -2*height);
      ctx.drawImage(img, 2.5*radius, -height);
      ctx.drawImage(img, 2.5*radius, 0);
      ctx.restore();

      ctx.restore();
    };
  }

  drawLens() {
    const context = document.getElementById('canvasG').getContext('2d');

    context.fillStyle = '#404040';
    context.fillRect(0, 0, 5.2*radius, 3*height);
    context.globalCompositeOperation = "destination-out";
    context.arc(1.5*height, 1.5*height, 1.5*height, 0, 2*Math.PI);
    context.fill();
  }

  render() {
    return (
      <div className="scope-container">
        <canvas id="canvas" width={5.2*radius} height={3*height} className="canvas" />
        <canvas id="canvasG" width={5.2*radius} height={3*height} className="canvas" />
      </div>
    );
  }
}

export default Scope;
