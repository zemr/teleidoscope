import React from 'react';
import pattern from '../patterns/test-pattern2.png';

const radius = 200, height = 346, halfRadius = radius/2;
let i;

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
  }

  draw() {
    const canvas = document.getElementById('canvas1');
    const context = canvas.getContext('2d');

    const canvas2 = document.getElementById('canvas2');
    const context2 = canvas2.getContext('2d');

    context.translate(radius, height/2);

    const imageObj = document.createElement('img');
    const file = {pattern};
    imageObj.src = file['pattern'];

    imageObj.onload = () => {
      for (i = 0; i < 3; i++) {
        context.rotate(Math.PI/1.5);
        context.drawImage(imageObj, -halfRadius, 0);
      }
      context.rotate(Math.PI/3);
      context.save();
      context.scale(-1, 1);
      context.drawImage(imageObj, -halfRadius, 0);
      context.restore();
      for (i = 0; i < 2; i++) {
        context.rotate(Math.PI/1.5);
        context.save();
        context.scale(-1, 1);
        context.drawImage(imageObj, -halfRadius, 0);
        context.restore();
      }
      context2.drawImage(canvas, 50, 50, 150, 130);
    };
  }

  render() {
    return (
      <div>
        <canvas id="canvas1" width={2*radius} height={height} />
        <canvas id="canvas2" width={2*radius} height={height} />
      </div>
    );
  }
}

export default Hexagon;