import React from 'react';
import pattern from '../patterns/test-pattern2.png';

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
  }

  draw() {
    const canvas = document.getElementById('canvas1');
    const context = canvas.getContext('2d');

    const canvas2 = document.getElementById('canvas2');
    const context2 = canvas2.getContext('2d');

    const imageObj = document.createElement('img');
    const file = {pattern};
    imageObj.src = file['pattern'];

    imageObj.onload = () => {
      context.drawImage(imageObj, 0, 0);
      context2.drawImage(canvas, 20, 20, 90, 90);
    };
  }

  render() {
    return (
      <div>
        <canvas id="canvas1" width="200" height="200" />
        <canvas id="canvas2" width="200" height="200" />
      </div>
    );
  }
}

export default Hexagon;