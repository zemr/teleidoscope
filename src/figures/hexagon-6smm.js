import React from 'react';
import pattern from '../patterns/pattern1a.png';

const radius = 150, height = 260, halfRadius = radius/2;
let i;

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
  }

  drawMirrorImages(canvas, source, pattern) {
    const ctx = document.getElementById(canvas).getContext('2d');
    ctx.translate(radius, height/2);

    const file = pattern;
    const img = new Image();
    img.src = file[source];

    img.onload = () => {
      // positive, start at nine o'clock
      for (i = 0; i < 3; i++) {
        ctx.rotate(Math.PI/1.5);
        ctx.drawImage(img, -halfRadius, 0);
      }
      // negative, start at seven o'clock
      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.restore();
      for (i = 0; i < 2; i++) {
        ctx.rotate(Math.PI/1.5);
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(img, -halfRadius, 0);
        ctx.restore();
      }
    };
  }

  draw() {
    this.drawMirrorImages('canvas', 'pattern', {pattern});
  }

  render() {
    return (
      <div>
        <canvas id="canvas" width={2*radius} height={height} />
       </div>
    );
  }
}

export default Hexagon;