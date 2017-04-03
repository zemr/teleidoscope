import React from 'react';

class Rectangle extends React.Component {
  componentDidMount() {
    this.draw();
  }

  draw() {
    const contextFill = this.refs.canvasFill.getContext('2d');
    const contextStroke = this.refs.canvasStroke.getContext('2d');
    const contextStrokeOdd = this.refs.canvasStrokeOdd.getContext('2d');

    contextFill.fillStyle = 'green';
    contextFill.fillRect(0, 0, 60, 100);

    contextStroke.strokeStyle = 'green';
    contextStroke.lineWidth = 4;
    contextStroke.strokeRect(2, 2, 56, 96);

    contextStrokeOdd.strokeStyle = 'green';
    contextStrokeOdd.lineWidth = 3;
    contextStrokeOdd.strokeRect(2, 2, 57, 97);
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

export default Rectangle;
