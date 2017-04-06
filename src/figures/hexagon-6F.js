import React from 'react';
import pattern from '../patterns/pattern1a.png';

const radius = 150, height = 260;

class Hexagon extends React.Component {
  componentDidMount() {
    this.drawParts();
  }

  drawParts() {
    const ctx = document.getElementById('canvas').getContext('2d');

    const img = document.createElement('img');
    const file = {pattern};
    img.src = file['pattern'];

    img.onload = () => {

      ctx.drawImage(img, .5*radius, .5*height); // 5
      ctx.drawImage(img, .5*radius, 1.5*height);
      ctx.drawImage(img, 2*radius, 0*height);
      ctx.drawImage(img, 2*radius, 1*height);
      ctx.drawImage(img, 2*radius, 2*height);
      ctx.drawImage(img, 3.5*radius, .5*height);
      ctx.drawImage(img, 3.5*radius, 1.5*height);

      ctx.translate(radius, height/2);
      ctx.rotate(Math.PI/1.5);
      ctx.drawImage(img, -(.5*radius), 0*height); // 9
      ctx.drawImage(img, -(.5*radius), -(1*height));
      ctx.drawImage(img, -(.5*radius), -(2*height));
      ctx.drawImage(img, -(.5*radius), -(3*height));
      ctx.drawImage(img, -(2*radius), -(1.5*height));
      ctx.drawImage(img, -(2*radius), -(2.5*height));
      ctx.drawImage(img, 1*radius, -(.5*height));
      ctx.drawImage(img, 1*radius, -(1.5*height));
      ctx.drawImage(img, 1*radius, -(2.5*height));
      ctx.drawImage(img, 2.5*radius, -(1*height));

      ctx.rotate(Math.PI/1.5);
      ctx.drawImage(img, -(.5*radius), 0*height); // 1
      ctx.drawImage(img, -(.5*radius), -(1*height));
      ctx.drawImage(img, -(2*radius), .5*height);
      ctx.drawImage(img, -(2*radius), 1.5*height);
      ctx.drawImage(img, -(2*radius), -(.5*height));
      ctx.drawImage(img, -(2*radius), -(1.5*height));
      ctx.drawImage(img, -(3.5*radius), 1*height);
      ctx.drawImage(img, -(3.5*radius), 0*height);
      ctx.drawImage(img, -(3.5*radius), -(1*height));
      ctx.drawImage(img, -(5*radius), .5*height);


      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -(.5*radius), 0*height); // 3
      ctx.drawImage(img, -(.5*radius), -(1*height));
      ctx.drawImage(img, -(.5*radius), 1*height);
      ctx.drawImage(img, -(.5*radius), 2*height);
      ctx.drawImage(img, -(2*radius), .5*height);
      ctx.drawImage(img, -(2*radius), 1.5*height);
      ctx.drawImage(img, 1*radius, -(.5*height));
      ctx.drawImage(img, 1*radius, .5*height);
      ctx.drawImage(img, 1*radius, 1.5*height);
      ctx.drawImage(img, 2.5*radius, 0*height);
      ctx.restore();


      ctx.rotate(Math.PI/1.5);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -(.5*radius), 0*height); // 7
      ctx.drawImage(img, -(.5*radius), -(1*height));
      ctx.drawImage(img, -(2*radius), .5*height);
      ctx.drawImage(img, -(2*radius), -(.5*height));
      ctx.drawImage(img, -(2*radius), -(1.5*height));
      ctx.drawImage(img, -(2*radius), -(2.5*height));
      ctx.drawImage(img, -(3.5*radius), 0*height);
      ctx.drawImage(img, -(3.5*radius), -(1*height));
      ctx.drawImage(img, -(3.5*radius), -(2*height));
      ctx.drawImage(img, -(5*radius), -(1.5*height));
      ctx.restore();

      ctx.rotate(Math.PI/1.5);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -(.5*radius), 0*height); // 11
      ctx.drawImage(img, -(.5*radius), -(1*height));
      ctx.drawImage(img, -(.5*radius), -(2*height));
      ctx.drawImage(img, 1*radius, -(.5*height));
      ctx.drawImage(img, 1*radius, -(1.5*height));
      ctx.drawImage(img, 2.5*radius, 0*height);
      ctx.drawImage(img, 2.5*radius, -(1*height));
      ctx.drawImage(img, 2.5*radius, -(2*height));
      ctx.restore();

    };
  }

  render() {
    return (
        <canvas id="canvas" width={5*radius} height={2.5*height} />
    );
  }
}

export default Hexagon;