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

  compute() {
    /* hexagon width */
    console.log('width',
      Math.sqrt(
        Math.pow(
          (radius + radius * Math.cos(0)) - (radius + radius * Math.cos(3 * pointPI)),
          2
        )
        +
        Math.pow(
          (radius + radius * Math.sin(0)) - (radius + radius * Math.sin(3 * pointPI)),
          2
        )
      )
    );
    /* hexagon height */
    console.log('height',
      Math.sqrt(
        Math.pow(
          (radius + radius * Math.cos(2 * pointPI)) - (radius + radius * Math.cos(4 * pointPI)),
          2
        )
        +
        Math.pow(
          (radius + radius * Math.sin(2 * pointPI)) - (radius + radius * Math.sin(4 * pointPI)),
          2
        )
      )
    );
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