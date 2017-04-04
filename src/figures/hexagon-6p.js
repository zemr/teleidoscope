import React from 'react';

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
    this.compute();
  }

  compute() {
    const center = 200, radius = 200, pointPI = (2 * Math.PI / 6);

    /* hexagon width */
    console.log('width',
      Math.sqrt(
        Math.pow(
          (center + radius * Math.cos(0)) - (center + radius * Math.cos(3 * pointPI)),
          2
        )
        +
        Math.pow(
          (center + radius * Math.sin(0)) - (center + radius * Math.sin(3 * pointPI)),
          2
        )
      )
    );
    /* hexagon height */
    console.log('height',
      Math.sqrt(
        Math.pow(
          (center + radius * Math.cos(2 * pointPI)) - (center + radius * Math.cos(4 * pointPI)),
          2
        )
        +
        Math.pow(
          (center + radius * Math.sin(2 * pointPI)) - (center + radius * Math.sin(4 * pointPI)),
          2
        )
      )
    );
  }

  draw() {
    const context = this.refs.canvas.getContext('2d');
    const center = 200, radius = 200, pointPI = (2 * Math.PI / 6);

    context.fillStyle = 'olivedrab';
    context.beginPath();
    context.moveTo(center + radius*Math.cos(0), center + radius*Math.sin(0));
    context.lineTo(center + radius*Math.cos(pointPI), center + radius*Math.sin(pointPI));
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(center + radius*Math.cos(2*pointPI), center + radius*Math.sin(2*pointPI));
    context.lineTo(center + radius*Math.cos(3*pointPI), center + radius*Math.sin(3*pointPI));
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(center + radius*Math.cos(4*pointPI), center + radius*Math.sin(4*pointPI));
    context.lineTo(center + radius*Math.cos(5*pointPI), center + radius*Math.sin(5*pointPI));
    context.lineTo(center, center);
    context.fill();


    context.fillStyle = 'orange';
    context.beginPath();
    context.moveTo(center + radius*Math.cos(pointPI), center + radius*Math.sin(pointPI));
    context.lineTo(center + radius*Math.cos(2*pointPI), center + radius*Math.sin(2*pointPI));
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(center + radius*Math.cos(3*pointPI), center + radius*Math.sin(3*pointPI));
    context.lineTo(center + radius*Math.cos(4*pointPI), center + radius*Math.sin(4*pointPI));
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(center + radius*Math.cos(5*pointPI), center + radius*Math.sin(5*pointPI));
    context.lineTo(center + radius*Math.cos(6*pointPI), center + radius*Math.sin(6*pointPI));
    context.lineTo(center, center);
    context.fill();

  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={400} height={400} />
      </div>
    )
  }
}

export default Hexagon;