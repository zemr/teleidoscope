import React from 'react';

const radius = 200, pointPI = (2 * Math.PI / 6);
let i;

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
    this.cloneCanvas('canvasRB', 300, 173);
    this.cloneCanvas('canvasB', 0, 346);
    this.cloneCanvas('canvasRT', 300, -173);
    this.cloneCanvas('canvasRR', 600, 0);
    this.cloneCanvas('canvasBR', 600, 346);
    this.cloneCanvas('canvasBBR', 300, 519);
    this.cloneCanvas('canvasBBRR', 600, 692);
    this.cloneCanvas('canvasBB', 0, 692);
    this.cloneCanvas('canvasLT', -300, -173);
    this.cloneCanvas('canvasLB', -300, 173);
    this.cloneCanvas('canvasLBB', -300, 519);
    this.cloneCanvas('canvasT', 0, -346);
    this.cloneCanvas('canvasTRR', 600, -346);
  }

  drawNegative(context, color) {
    context.fillStyle = color;

    for (i = 0; i < 6; i += 2) {
      context.beginPath();
      context.moveTo(radius + radius*Math.cos(i * pointPI), radius + radius*Math.sin(i * pointPI));
      context.lineTo(radius + radius*Math.cos((i+1) * pointPI), radius + radius*Math.sin((i+1) * pointPI));
      context.lineTo(radius, radius);
      context.fill();
    }
  }

  drawPositive(context, color) {
    context.fillStyle = color;

    for (i = 1; i < 6; i += 2) {
      context.beginPath();
      context.moveTo(radius + radius*Math.cos(i * pointPI), radius + radius*Math.sin(i * pointPI));
      context.lineTo(radius + radius*Math.cos((i+1) * pointPI), radius + radius*Math.sin((i+1) * pointPI));
      context.lineTo(radius, radius);
      context.fill();
    }
  }

  draw() {
    const context = document.getElementById('canvas').getContext('2d');
    this.drawNegative(context, 'indianred');
    this.drawPositive(context, 'goldenrod');
  }

  cloneCanvas(canvasId, x, y) {
    const firstCanvas = document.getElementById('canvas');
    const newCanvas = document.getElementById(canvasId);
    const context = newCanvas.getContext('2d');

    context.drawImage(firstCanvas, x, y);
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvas" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasRB" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasB" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasRT" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasRR" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasBR" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasBBR" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasBBRR" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasBB" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasLT" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasLB" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasLBB" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasT" />
        <canvas width={4*radius} height={4*radius} style={{position: 'absolute'}} id="canvasTRR" />
      </div>
    )
  }
}

export default Hexagon;