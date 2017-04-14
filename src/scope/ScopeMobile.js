import React from 'react';

const radius = 120, height = 208;
let i;

class ScopeMobile extends React.Component {
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
      ctx.translate(radius, .5*height);
      for (i = 0; i < 3; i++) {
        ctx.rotate(Math.PI/1.5);
        ctx.drawImage(img, -.5*radius, 0);
      }
      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.restore();
      for (i = 0; i < 2; i++) {
        ctx.rotate(Math.PI/1.5);
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(img, -.5*radius, 0);
        ctx.restore();
      }
      ctx.restore();
    };
  }

  drawLens() {
    const context = document.getElementById('canvasG').getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0, 0, 2*radius, height);
    context.globalCompositeOperation = "destination-out";
    context.arc(radius, .5*height, .5*height, 0, 2*Math.PI);
    context.fill();
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <canvas id="canvas" width={2*radius} height={height} style={{position: 'absolute'}}/>
        <canvas id="canvasG" width={2*radius} height={height} style={{position: 'absolute'}}/>
      </div>
    );
  }
}

export default ScopeMobile;
