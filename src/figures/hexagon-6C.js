import React from 'react';
import pattern from '../patterns/test-pattern2.png';

const radius = 200, height = 346, halfRadius = radius/2;

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
      context.rotate(0);
      context.drawImage(imageObj, -halfRadius, 0);
      for (let i = 0; i < 5; i++) {
        context.rotate(Math.PI/3);
        context.drawImage(imageObj, -halfRadius, 0);
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