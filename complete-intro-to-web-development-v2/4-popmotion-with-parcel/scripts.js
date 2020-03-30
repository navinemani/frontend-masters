// Common JS Method of Importing Modules (Understood by Node.js)
const popmotion = require("popmotion");
// ES6 Method of Importing Modules
// Not Inherently Understood by Node.js (Needs to go through a Translation Layer)
import "./useless"

const { styler, spring, listen, pointer, value } = popmotion;

const ball = document.querySelector('.box');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart').start(function(e) {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, 'mouseup touchend').start(function() {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
  }).start(ballXY);
});
