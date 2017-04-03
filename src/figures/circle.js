import React from 'react';

class Circle extends React.Component {
  componentDidMount() {
    this.draw();
  }

  draw() {
    const contextFill = this.refs.canvasFill.getContext('2d');
    const contextStroke = this.refs.canvasStroke.getContext('2d');
    const contextStrokeOdd = this.refs.canvasStrokeOdd.getContext('2d');

    contextFill.fillStyle = 'green';
    contextFill.arc(44, 44, 43, 0, 2*Math.PI);
    contextFill.fill();

    contextStroke.strokeStyle = 'green';
    contextStroke.lineWidth = 4;
    contextStroke.beginPath();
    contextStroke.arc(44, 44, 40, 0, 2*Math.PI);
    contextStroke.stroke();

    contextStrokeOdd.strokeStyle = 'green';
    contextStrokeOdd.lineWidth = 3;
    contextStrokeOdd.beginPath();
    contextStrokeOdd.arc(44, 44, 41, 0, 2*Math.PI);
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

export default Circle;