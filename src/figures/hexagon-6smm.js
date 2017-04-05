import React from 'react';
import pattern from '../patterns/pattern1a.png';

const radius = 150, height = 260, halfRadius = radius/2;
let i;

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
  }

  drawMirrorImages(canvas, source, pattern, posX, posY) {
    const ctx = document.getElementById(canvas).getContext('2d');
    ctx.translate(posX, posY);

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
    this.drawMirrorImages('canvas-5-5', 'pattern', {pattern}, -(radius/2), 0);
    this.drawMirrorImages('canvas-15-5', 'pattern', {pattern}, 2.5*radius, 0);
    this.drawMirrorImages('canvas-25-5', 'pattern', {pattern}, 5.5*radius, 0);
    this.drawMirrorImages('canvas-10-10', 'pattern', {pattern}, radius, height/2); // 150, 130
    this.drawMirrorImages('canvas-20-10', 'pattern', {pattern}, 4*radius, height/2);
    this.drawMirrorImages('canvas-5-15', 'pattern', {pattern}, -(radius/2), height); // -75, 260
    this.drawMirrorImages('canvas-15-15', 'pattern', {pattern}, 2.5*radius, height); // 375, 260
    this.drawMirrorImages('canvas-25-15', 'pattern', {pattern}, 5.5*radius, height); // 700, 260
    this.drawMirrorImages('canvas-10-20', 'pattern', {pattern}, radius, 1.5*height);
    this.drawMirrorImages('canvas-20-20', 'pattern', {pattern}, 4*radius, 1.5*height);
    this.drawMirrorImages('canvas-5-25', 'pattern', {pattern}, -(radius/2), 2*height);
    this.drawMirrorImages('canvas-15-25', 'pattern', {pattern}, 2.5*radius, 2*height);
    this.drawMirrorImages('canvas-25-25', 'pattern', {pattern}, 5.5*radius, 2*height);
    this.drawMirrorImages('canvas-10-30', 'pattern', {pattern}, radius, 2.5*height);
    this.drawMirrorImages('canvas-20-30', 'pattern', {pattern}, 4*radius, 2.5*height);
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-5-5" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-15-5" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-25-5" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-10-10" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-20-10" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-5-15" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-15-15" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-25-15" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-10-20" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-20-20" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-5-25" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-15-25" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-25-25" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-10-30" />
        <canvas width={5*radius} height={2.5*height} style={{position: 'absolute'}} id="canvas-20-30" />
      </div>
    );
  }
}

export default Hexagon;