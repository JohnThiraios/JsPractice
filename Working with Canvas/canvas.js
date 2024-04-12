let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// // DRAWING LINES ON CANVAS
// context.strokeStyle = "purple";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();

// // DRAWING A TRINAGLE
// context.strokeStyle = "grey"; //border color
// context.fillStyle = "purple"; //content color
// context.lineWidth = 10; //border width
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.stroke(); //border
// context.fill(); //content

// // DRAW A RECTANGLE
// context.lineWidth = 2;
// context.fillStyle = "red";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "purple";
// context.strokeRect(0, 0, 250, 250);

// context.lineWidth = 2;
// context.fillStyle = "black";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "purple";
// context.strokeRect(0, 250, 250, 250);

// context.lineWidth = 2;
// context.fillStyle = "red";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "purple";
// context.strokeRect(250, 250, 250, 250);

// context.lineWidth = 2;
// context.fillStyle = "black";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "purple";
// context.strokeRect(250, 0, 250, 250);

// // // DRAW AN CIRCLE
// // (x, y , r, sAngle, eAngle, CounterClockwise)
// context.fillStyle = "lightblue";
// context.strokeStyle = "blue";
// context.lineWidth = 10;
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();

// DRAW TEXT
context.font = "100px MV Boli";
context.fillStyle = "Green";
context.textAlign = "center";
context.fillText("You Win!", canvas.clientWidth / 2, canvas.clientHeight / 2);
