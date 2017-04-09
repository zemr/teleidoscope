import React from 'react';

const radius = 150, height = 260;

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
    const file = this.props.pattern;
    img.src = file['pattern'];

    img.onload = () => {

      ctx.save();

      ctx.drawImage(img, .5*radius, .5*height);
      ctx.drawImage(img, .5*radius, 1.5*height);
      ctx.drawImage(img, 2*radius, 0);
      ctx.drawImage(img, 2*radius, height);
      ctx.drawImage(img, 2*radius, 2*height);
      ctx.drawImage(img, 3.5*radius, .5*height);
      ctx.drawImage(img, 3.5*radius, 1.5*height);

      ctx.translate(radius, .5*height);
      ctx.rotate(Math.PI/1.5);
      ctx.drawImage(img, -2*radius, -1.5*height);
      ctx.drawImage(img, -.5*radius, -2*height);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, radius, -2.5*height);
      ctx.drawImage(img, radius, -1.5*height);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, 2.5*radius, -height);

      ctx.rotate(Math.PI/1.5);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, -2*radius, -1.5*height);
      ctx.drawImage(img, -2*radius, -.5*height);
      ctx.drawImage(img, -2*radius, .5*height);
      ctx.drawImage(img, -3.5*radius, -height);
      ctx.drawImage(img, -3.5*radius, 0);
      ctx.drawImage(img, -3.5*radius, height);

      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -2*radius, .5*height);
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
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, -2*radius, -1.5*height);
      ctx.drawImage(img, -2*radius, -.5*height);
      ctx.drawImage(img, -2*radius, .5*height);
      ctx.drawImage(img, -3.5*radius, -height);
      ctx.drawImage(img, -3.5*radius, 0);
      ctx.restore();

      ctx.rotate(Math.PI/1.5);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -.5*radius, -2*height);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, radius, -1.5*height);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, 2.5*radius, -2*height);
      ctx.drawImage(img, 2.5*radius, -height);
      ctx.restore();

      ctx.restore();
    };
  }

  drawLens() {
    const context = document.getElementById('canvasG').getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0, 0, 4.4*radius, 2.5*height);
    context.globalCompositeOperation = "destination-out";
    context.arc(1.25*height, 1.25*height, 1.25*height, 0, 2*Math.PI);
    context.fill();
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <canvas id="canvas" width={4.4*radius} height={2.5*height} style={{position: 'absolute'}}/>
        <canvas id="canvasG" width={4.4*radius} height={2.5*height} style={{position: 'absolute'}}/>
      </div>
    );
  }
}

export default Scope;
