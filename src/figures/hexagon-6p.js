import React from 'react';

const radius = 200, pointPI = (2 * Math.PI / 6);
let i;

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
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
    this.drawNegative(context, 'olivedrab');
    this.drawPositive(context, 'orange');
  }

  render() {
    return (
      <div>
        <canvas id="canvas" width={2*radius} height={2*radius} />
      </div>
    )
  }
}

export default Hexagon;