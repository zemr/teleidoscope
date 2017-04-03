import React from 'react';

class Hexagon extends React.Component {
  componentDidMount() {
    this.draw();
  }

  draw() {
    const context = this.refs.canvas.getContext('2d');
    const contextStrokes = this.refs.canvasStrokes.getContext('2d');
    const triangles = this.refs.umbrella.getContext('2d');
    const halfTriangles = this.refs.filled.getContext('2d');

    // context.moveTo(centerX + radius * Math.cos(0), centerY + radius * Math.sin(0));
    // for (let i = 1; i <= sides; i++) {
    //   context.lineTo(centerX + radius * Math.cos(i * 2 * Math.PI / sides), centerY + radius * Math.sin(i * 2 * Math.PI / sides));
    // }

    context.beginPath();
    context.moveTo(201 + 200*Math.cos(0), 201 + 200*Math.sin(0));
    for (let i = 1; i <= 6; i++) {
      context.lineTo(201 + 200*Math.cos(i*2*Math.PI / 6), 201 + 200*Math.sin(i*2*Math.PI / 6));
    }
    context.stroke();


    contextStrokes.beginPath();
    contextStrokes.moveTo(201 + 200*Math.cos(0), 201 + 200*Math.sin(0));
    for (let i = 1; i <= 6; i++) {
      contextStrokes.lineTo(201 + 200*Math.cos(i*2*Math.PI / 6), 201 + 200*Math.sin(i*2*Math.PI / 6));
    }
    contextStrokes.stroke();

    contextStrokes.beginPath();
    contextStrokes.moveTo(201 + 200*Math.cos(0), 201 + 200*Math.sin(0));
    contextStrokes.lineTo(0, 201);
    contextStrokes.stroke();

    contextStrokes.beginPath();
    contextStrokes.moveTo(201 + 200*Math.cos(2*Math.PI / 6), 201 + 200*Math.sin(2*Math.PI / 6));
    contextStrokes.lineTo(201 + 200*Math.cos(4*2*Math.PI / 6), 201 + 200*Math.sin(4*2*Math.PI / 6));
    contextStrokes.stroke();

    contextStrokes.beginPath();
    contextStrokes.moveTo(201 + 200*Math.cos(2*2*Math.PI / 6), 201 + 200*Math.sin(2*2*Math.PI / 6));
    contextStrokes.lineTo(201 + 200*Math.cos(5*2*Math.PI / 6), 201 + 200*Math.sin(5*2*Math.PI / 6));
    contextStrokes.stroke();

    contextStrokes.strokeStyle = 'violet';
    contextStrokes.beginPath();
    contextStrokes.moveTo(201, 0);
    contextStrokes.lineTo(201, 402);
    contextStrokes.stroke();

    contextStrokes.beginPath();
    contextStrokes.moveTo(201 + 200*Math.cos(0.5*2*Math.PI / 6), 201 + 200*Math.sin(0.5*2*Math.PI / 6));
    contextStrokes.lineTo(201 + 200*Math.cos(3.5*2*Math.PI / 6), 201 + 200*Math.sin(3.5*2*Math.PI / 6));
    contextStrokes.stroke();

    contextStrokes.beginPath();
    contextStrokes.moveTo(201 + 200*Math.cos(2.5*2*Math.PI / 6), 201 + 200*Math.sin(2.5*2*Math.PI / 6));
    contextStrokes.lineTo(201 + 200*Math.cos(5.5*2*Math.PI / 6), 201 + 200*Math.sin(5.5*2*Math.PI / 6));
    contextStrokes.stroke();

    /* umbrella */

    triangles.fillStyle = 'darkorange';
    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(0), 201 + 200*Math.sin(0));
    triangles.lineTo(201 + 200*Math.cos(0.5*2*Math.PI / 6), 201 + 200*Math.sin(0.5*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(1*2*Math.PI / 6), 201 + 200*Math.sin(1*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(1.5*2*Math.PI / 6), 201 + 200*Math.sin(1.5*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(2*2*Math.PI / 6), 201 + 200*Math.sin(2*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(2.5*2*Math.PI / 6), 201 + 200*Math.sin(2.5*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(3*2*Math.PI / 6), 201 + 200*Math.sin(3*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(3.5*2*Math.PI / 6), 201 + 200*Math.sin(3.5*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(4*2*Math.PI / 6), 201 + 200*Math.sin(4*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(4.5*2*Math.PI / 6), 201 + 200*Math.sin(4.5*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(5*2*Math.PI / 6), 201 + 200*Math.sin(5*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(5.5*2*Math.PI / 6), 201 + 200*Math.sin(5.5*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.fillStyle = 'firebrick';
    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(0.5*2*Math.PI / 6), 201 + 200*Math.sin(0.5*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(1*2*Math.PI / 6), 201 + 200*Math.sin(1*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(1.5*2*Math.PI / 6), 201 + 200*Math.sin(1.5*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(2*2*Math.PI / 6), 201 + 200*Math.sin(2*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(2.5*2*Math.PI / 6), 201 + 200*Math.sin(2.5*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(3*2*Math.PI / 6), 201 + 200*Math.sin(3*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(3.5*2*Math.PI / 6), 201 + 200*Math.sin(3.5*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(4*2*Math.PI / 6), 201 + 200*Math.sin(4*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(4.5*2*Math.PI / 6), 201 + 200*Math.sin(4.5*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(5*2*Math.PI / 6), 201 + 200*Math.sin(5*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    triangles.beginPath();
    triangles.moveTo(201 + 200*Math.cos(5.5*2*Math.PI / 6), 201 + 200*Math.sin(5.5*2*Math.PI / 6));
    triangles.lineTo(201 + 200*Math.cos(6*2*Math.PI / 6), 201 + 200*Math.sin(6*2*Math.PI / 6));
    triangles.lineTo(201, 201);
    triangles.fill();

    /* filled hexagon */

    halfTriangles.fillStyle = 'olivedrab';
    halfTriangles.beginPath();
    halfTriangles.moveTo(201 + 200*Math.cos(0), 201 + 200*Math.sin(0));
    halfTriangles.lineTo(
      ( (201 + 200*Math.cos(0)) + (201 + 200*Math.cos(1*2*Math.PI / 6)) ) / 2
        ,
      ( (201 + 200*Math.sin(0)) + (201 + 200*Math.sin(1*2*Math.PI / 6)) ) / 2
      );
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(201 + 200*Math.cos(1*2*Math.PI / 6), 201 + 200*Math.sin(1*2*Math.PI / 6));
    halfTriangles.lineTo(
      ( (201 + 200*Math.cos(1*2*Math.PI / 6)) + (201 + 200*Math.cos(2*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(1*2*Math.PI / 6)) + (201 + 200*Math.sin(2*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(201 + 200*Math.cos(2*2*Math.PI / 6), 201 + 200*Math.sin(2*2*Math.PI / 6));
    halfTriangles.lineTo(
      ( (201 + 200*Math.cos(2*2*Math.PI / 6)) + (201 + 200*Math.cos(3*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(2*2*Math.PI / 6)) + (201 + 200*Math.sin(3*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(201 + 200*Math.cos(3*2*Math.PI / 6), 201 + 200*Math.sin(3*2*Math.PI / 6));
    halfTriangles.lineTo(
      ( (201 + 200*Math.cos(3*2*Math.PI / 6)) + (201 + 200*Math.cos(4*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(3*2*Math.PI / 6)) + (201 + 200*Math.sin(4*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(201 + 200*Math.cos(4*2*Math.PI / 6), 201 + 200*Math.sin(4*2*Math.PI / 6));
    halfTriangles.lineTo(
      ( (201 + 200*Math.cos(4*2*Math.PI / 6)) + (201 + 200*Math.cos(5*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(4*2*Math.PI / 6)) + (201 + 200*Math.sin(5*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(201 + 200*Math.cos(5*2*Math.PI / 6), 201 + 200*Math.sin(5*2*Math.PI / 6));
    halfTriangles.lineTo(
      ( (201 + 200*Math.cos(5*2*Math.PI / 6)) + (201 + 200*Math.cos(6*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(5*2*Math.PI / 6)) + (201 + 200*Math.sin(6*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();


    halfTriangles.fillStyle = 'orange';
    halfTriangles.beginPath();
    halfTriangles.moveTo(
      ( (201 + 200*Math.cos(0)) + (201 + 200*Math.cos(1*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(0)) + (201 + 200*Math.sin(1*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201 + 200*Math.cos(1*2*Math.PI / 6), 201 + 200*Math.sin(1*2*Math.PI / 6));
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(
      ( (201 + 200*Math.cos(1*2*Math.PI / 6)) + (201 + 200*Math.cos(2*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(1*2*Math.PI / 6)) + (201 + 200*Math.sin(2*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201 + 200*Math.cos(2*2*Math.PI / 6), 201 + 200*Math.sin(2*2*Math.PI / 6));
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(
      ( (201 + 200*Math.cos(2*2*Math.PI / 6)) + (201 + 200*Math.cos(3*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(2*2*Math.PI / 6)) + (201 + 200*Math.sin(3*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201 + 200*Math.cos(3*2*Math.PI / 6), 201 + 200*Math.sin(3*2*Math.PI / 6));
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(
      ( (201 + 200*Math.cos(3*2*Math.PI / 6)) + (201 + 200*Math.cos(4*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(3*2*Math.PI / 6)) + (201 + 200*Math.sin(4*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201 + 200*Math.cos(4*2*Math.PI / 6), 201 + 200*Math.sin(4*2*Math.PI / 6));
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(
      ( (201 + 200*Math.cos(4*2*Math.PI / 6)) + (201 + 200*Math.cos(5*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(4*2*Math.PI / 6)) + (201 + 200*Math.sin(5*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201 + 200*Math.cos(5*2*Math.PI / 6), 201 + 200*Math.sin(5*2*Math.PI / 6));
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();

    halfTriangles.beginPath();
    halfTriangles.moveTo(
      ( (201 + 200*Math.cos(5*2*Math.PI / 6)) + (201 + 200*Math.cos(6*2*Math.PI / 6)) ) / 2
      ,
      ( (201 + 200*Math.sin(5*2*Math.PI / 6)) + (201 + 200*Math.sin(6*2*Math.PI / 6)) ) / 2
    );
    halfTriangles.lineTo(201 + 200*Math.cos(6*2*Math.PI / 6), 201 + 200*Math.sin(6*2*Math.PI / 6));
    halfTriangles.lineTo(201, 201);
    halfTriangles.fill();
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={412} height={402} />
        <canvas ref="canvasStrokes" width={402} height={402} />
        <br />
        <canvas ref="umbrella" width={412} height={402} />
        <canvas ref="filled" width={402} height={402} />
      </div>
    )
  }
}

export default Hexagon;