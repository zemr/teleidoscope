import React from 'react';
import pattern from '../patterns/pattern1a.png';

const radius = 150, height = 260, halfRadius = radius/2;
let i;

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
  }

  draw() {
    const canvas1 = document.getElementById('canvas1');
    const context1 = canvas1.getContext('2d');

    const canvas2 = document.getElementById('canvas2');
    const context2 = canvas2.getContext('2d');

    const canvas3 = document.getElementById('canvas3');
    const context3 = canvas3.getContext('2d');

    const canvas4 = document.getElementById('canvas4');
    const context4 = canvas4.getContext('2d');

    const canvas5 = document.getElementById('canvas5');
    const context5 = canvas5.getContext('2d');

    context1.translate(radius, height/2);

    const imageObj = document.createElement('img');
    const file = {pattern};
    imageObj.src = file['pattern'];

    imageObj.onload = () => {
      for (i = 0; i < 3; i++) {
        context1.rotate(Math.PI/1.5);
        context1.drawImage(imageObj, -halfRadius, 0);
      }
      context1.rotate(Math.PI/3);
      context1.save();
      context1.scale(-1, 1);
      context1.drawImage(imageObj, -halfRadius, 0);
      context1.restore();
      for (i = 0; i < 2; i++) {
        context1.rotate(Math.PI/1.5);
        context1.save();
        context1.scale(-1, 1);
        context1.drawImage(imageObj, -halfRadius, 0);
        context1.restore();
      }
      context2.drawImage(canvas1, 1.5*radius, height/2);
      context3.drawImage(canvas1, 1.5*radius, -(height/2));
      context4.drawImage(canvas1, -(1.5*radius), -(height/2));
      context5.drawImage(canvas1, -(1.5*radius), height/2);
    };
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <canvas id="canvas1" width={3*radius} height={height} style={{position: 'absolute'}} />
        <canvas id="canvas2" width={3*radius} height={height} style={{position: 'absolute'}} />
        <canvas id="canvas3" width={3*radius} height={height} style={{position: 'absolute'}} />
        <canvas id="canvas4" width={3*radius} height={height} style={{position: 'absolute'}} />
        <canvas id="canvas5" width={3*radius} height={height} style={{position: 'absolute'}} />
      </div>
    );
  }
}

export default Hexagon;