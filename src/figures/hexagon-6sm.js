import React from 'react';
import pattern1 from '../patterns/pattern1a.png';
import pattern2 from '../patterns/pattern1b.png';

const radius = 150, halfRadius = radius / 2;

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
  }

  drawImages(canvas, source, pattern) {
    const ctx = document.getElementById(canvas).getContext('2d');
    ctx.translate(radius, radius);

    const file = pattern;
    const img = new Image();
    img.src = file[source];

    img.onload = () => {
      ctx.rotate(Math.PI/-3);
      ctx.drawImage(img, -halfRadius, 0);
      for (let i = 0; i < 5; i++) {
        ctx.rotate(Math.PI/3);
        ctx.drawImage(img, -halfRadius, 0);
      }
    };
  }

  drawMirrorImages(canvas, source, pattern) {
    const ctx = document.getElementById(canvas).getContext('2d');
    ctx.translate(radius, radius);

    const file = pattern;
    const img = new Image();
    img.src = file[source];

    img.onload = () => {
      ctx.rotate(Math.PI/-3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.restore();
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.restore();
      ctx.rotate(Math.PI/3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.restore();
    };
  }

  draw() {
    this.drawImages('canvas1', 'pattern1', {pattern1});
    this.drawMirrorImages('canvas2', 'pattern1', {pattern1});
    this.drawImages('canvas3', 'pattern2', {pattern2});
    this.drawMirrorImages('canvas4', 'pattern2', {pattern2});
  }

  render() {
    return (
      <div>
        <canvas id="canvas1" width={2*radius+10} height={2*radius} />
        <canvas id="canvas2" width={2*radius} height={2*radius} />
        <br />
        <canvas id="canvas3" width={2*radius+10} height={2*radius} />
        <canvas id="canvas4" width={2*radius} height={2*radius} />
       </div>
    )
  }
}

export default Hexagon;