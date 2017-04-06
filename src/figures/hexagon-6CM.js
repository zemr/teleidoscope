import React from 'react';
import pattern from '../patterns/pattern1a.png';

const radius = 150, height = 260, halfRadius = radius/2;
let i;

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
    this.drawParts();
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

  drawParts() {
    const canvas6 = document.getElementById('canvas6');
    const context6 = canvas6.getContext('2d');

    const img = document.createElement('img');
    const file = {pattern};
    img.src = file['pattern'];

    img.onload = () => {

      context6.drawImage(img, halfRadius, height/2); // 5
      context6.drawImage(img, 2*radius, 0);

      context6.translate(radius, height/2);
      context6.rotate(Math.PI/1.5);
      context6.drawImage(img, -halfRadius, 0); // 9
      context6.drawImage(img, -halfRadius, -height);

      context6.rotate(Math.PI/1.5);
      context6.drawImage(img, -halfRadius, 0); // 1
      context6.drawImage(img, -halfRadius, -height);
      context6.drawImage(img, -(2*radius), height/2);

      context6.rotate(Math.PI/3);
      context6.save();
      context6.scale(-1, 1);
      context6.drawImage(img, -halfRadius, 0); // 3
      context6.drawImage(img, -(2*radius), height/2);
      context6.drawImage(img, -halfRadius, -height);
      context6.restore();

      context6.rotate(Math.PI/1.5);
      context6.save();
      context6.scale(-1, 1);
      context6.drawImage(img, -halfRadius, 0); // 7
      context6.drawImage(img, -halfRadius, -height);
      context6.restore();

      context6.rotate(Math.PI/1.5);
      context6.save();
      context6.scale(-1, 1);
      context6.drawImage(img, -halfRadius, 0); // 11
      context6.drawImage(img, radius, -(height/2));
      context6.restore();

    };

  }

  render() {
    return (
      <div>
        <div style={{position: 'relative', height: 300}}>
          <canvas id="canvas1" width={3*radius} height={height} style={{position: 'absolute'}} />
          <canvas id="canvas2" width={3*radius} height={height} style={{position: 'absolute'}} />
          <canvas id="canvas3" width={3*radius} height={height} style={{position: 'absolute'}} />
          <canvas id="canvas4" width={3*radius} height={height} style={{position: 'absolute'}} />
          <canvas id="canvas5" width={3*radius} height={height} style={{position: 'absolute'}} />
        </div>
        <div>
          <canvas id="canvas6" width={3*radius} height={height} />
        </div>
      </div>
    );
  }
}

export default Hexagon;