import React from 'react';

class Triangle extends React.Component {
  componentDidMount() {
    this.draw();
  }

  draw() {
    const contextFill = this.refs.canvasFill.getContext('2d');
    const contextStroke = this.refs.canvasStroke.getContext('2d');
    const contextStrokeOdd = this.refs.canvasStrokeOdd.getContext('2d');

    contextFill.fillStyle = 'green';
    contextFill.beginPath();
    contextFill.moveTo(0, 0);
    contextFill.lineTo(100, 0);
    contextFill.lineTo(50, 100);
    contextFill.fill();

    contextStroke.strokeStyle = 'green';
    contextStroke.lineWidth = 4;
    contextStroke.beginPath();
    contextStroke.moveTo(5, 120);
    contextStroke.lineTo(95, 120);
    contextStroke.lineTo(50, 20);
    contextStroke.closePath();
    contextStroke.stroke();

    contextStrokeOdd.strokeStyle = 'green';
    contextStrokeOdd.lineWidth = 3;
    contextStrokeOdd.beginPath();
    contextStrokeOdd.moveTo(80, 20);
    contextStrokeOdd.lineTo(50, 90);
    contextStrokeOdd.lineTo(10, 40);
    contextStrokeOdd.closePath();
    contextStrokeOdd.stroke();
  }

  render() {
    return (
      <div>
        <canvas ref="canvasFill" width={100} height={150}/>
        <canvas ref="canvasStroke" width={100} height={150}/>
        <canvas ref="canvasStrokeOdd" width={100} height={150}/>
      </div>
    );
  }
}


export default Triangle;