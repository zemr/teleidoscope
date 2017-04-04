import React from 'react';

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
  }

  draw() {
    const context = this.refs.canvas.getContext('2d');
    const center = 200, radius = 200, pointPI = (2 * Math.PI / 6);

    /* filled hexagon */

    context.fillStyle = 'olivedrab';
    context.beginPath();
    context.moveTo(center + radius*Math.cos(0), center + radius*Math.sin(0));
    context.lineTo(
      ( (center + radius*Math.cos(0)) + (center + radius*Math.cos(pointPI)) ) / 2
        ,
      ( (center + radius*Math.sin(0)) + (center + radius*Math.sin(pointPI)) ) / 2
      );
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(center + radius*Math.cos(pointPI), center + radius*Math.sin(pointPI));
    context.lineTo(
      ( (center + radius*Math.cos(pointPI)) + (center + radius*Math.cos(2*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(pointPI)) + (center + radius*Math.sin(2*pointPI)) ) / 2
    );
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(center + radius*Math.cos(2*pointPI), center + radius*Math.sin(2*pointPI));
    context.lineTo(
      ( (center + radius*Math.cos(2*pointPI)) + (center + radius*Math.cos(3*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(2*pointPI)) + (center + radius*Math.sin(3*pointPI)) ) / 2
    );
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(center + radius*Math.cos(3*pointPI), center + radius*Math.sin(3*pointPI));
    context.lineTo(
      ( (center + radius*Math.cos(3*pointPI)) + (center + radius*Math.cos(4*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(3*pointPI)) + (center + radius*Math.sin(4*pointPI)) ) / 2
    );
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(center + radius*Math.cos(4*pointPI), center + radius*Math.sin(4*pointPI));
    context.lineTo(
      ( (center + radius*Math.cos(4*pointPI)) + (center + radius*Math.cos(5*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(4*pointPI)) + (center + radius*Math.sin(5*pointPI)) ) / 2
    );
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(center + radius*Math.cos(5*pointPI), center + radius*Math.sin(5*pointPI));
    context.lineTo(
      ( (center + radius*Math.cos(5*pointPI)) + (center + radius*Math.cos(6*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(5*pointPI)) + (center + radius*Math.sin(6*pointPI)) ) / 2
    );
    context.lineTo(center, center);
    context.fill();


    context.fillStyle = 'orange';
    context.beginPath();
    context.moveTo(
      ( (center + radius*Math.cos(0)) + (center + radius*Math.cos(pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(0)) + (center + radius*Math.sin(pointPI)) ) / 2
    );
    context.lineTo(center + radius*Math.cos(pointPI), center + radius*Math.sin(pointPI));
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(
      ( (center + radius*Math.cos(pointPI)) + (center + radius*Math.cos(2*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(pointPI)) + (center + radius*Math.sin(2*pointPI)) ) / 2
    );
    context.lineTo(center + radius*Math.cos(2*pointPI), center + radius*Math.sin(2*pointPI));
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(
      ( (center + radius*Math.cos(2*pointPI)) + (center + radius*Math.cos(3*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(2*pointPI)) + (center + radius*Math.sin(3*pointPI)) ) / 2
    );
    context.lineTo(center + radius*Math.cos(3*pointPI), center + radius*Math.sin(3*pointPI));
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(
      ( (center + radius*Math.cos(3*pointPI)) + (center + radius*Math.cos(4*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(3*pointPI)) + (center + radius*Math.sin(4*pointPI)) ) / 2
    );
    context.lineTo(center + radius*Math.cos(4*pointPI), center + radius*Math.sin(4*pointPI));
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(
      ( (center + radius*Math.cos(4*pointPI)) + (center + radius*Math.cos(5*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(4*pointPI)) + (center + radius*Math.sin(5*pointPI)) ) / 2
    );
    context.lineTo(center + radius*Math.cos(5*pointPI), center + radius*Math.sin(5*pointPI));
    context.lineTo(center, center);
    context.fill();

    context.beginPath();
    context.moveTo(
      ( (center + radius*Math.cos(5*pointPI)) + (center + radius*Math.cos(6*pointPI)) ) / 2
      ,
      ( (center + radius*Math.sin(5*pointPI)) + (center + radius*Math.sin(6*pointPI)) ) / 2
    );
    context.lineTo(center + radius*Math.cos(6*pointPI), center + radius*Math.sin(6*pointPI));
    context.lineTo(center, center);
    context.fill();
  }

  render() {
    return (
        <canvas ref="canvas" width={400} height={400} />
    )
  }
}

export default Hexagon;