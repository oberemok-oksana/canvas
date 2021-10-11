document.addEventListener("DOMContentLoaded", () => {
  let cvs = document.querySelector(".clock");
  let context = cvs.getContext("2d");
  context.translate(250, 250);

  function drawClockHand(value, config) {
    context.rotate((Math.PI / 180) * config.angle * value);
    context.lineCap = "round";
    context.moveTo(0, 0);
    context.lineTo(0, -config.length);
    context.lineWidth = config.lineWidth;
    context.strokeStyle = config.color;
    context.stroke();
    context.rotate((-Math.PI / 180) * config.angle * value);
  }

  function drawHourClockHand(hour) {
    drawClockHand(hour, {
      angle: 30,
      length: 40,
      lineWidth: 5,
      color: "black",
    });
  }

  function drawMinuteClockHand(minute) {
    drawClockHand(minute, {
      angle: 6,
      length: 60,
      lineWidth: 3,
      color: "black",
    });
  }

  function drawSecondClockHand(second) {
    drawClockHand(second, {
      angle: 6,
      length: 75,
      lineWidth: 1.5,
      color: "#00B3E6",
    });
  }

  function drawCircle() {
    let endAngle = (Math.PI / 180) * 360;
    context.fillStyle = "white";
    context.lineWidth = 1;
    context.arc(0, 0, 100, 0, endAngle);
    context.fill();

    context.beginPath();
    context.strokeStyle = "#00B3E6";
    context.lineWidth = 15;
    context.arc(0, 0, 100, 0, endAngle);
    context.stroke();
    context.closePath();
  }

  function drawClockCenter() {
    context.beginPath();
    context.arc(0, 0, 7, 0, 2 * Math.PI);
    context.fillStyle = "#000000";
    context.fill();
    context.closePath();
  }

  function drawClock() {
    let date = new Date();

    drawCircle();
    for (let i = 12; i > 0; i--) {
      drawNumber(i);
    }

    drawHourClockHand(date.getHours());
    drawMinuteClockHand(date.getMinutes());
    drawSecondClockHand(date.getSeconds());
    drawClockCenter();
  }

  function drawNumber(hour) {
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.rotate((Math.PI / 180) * 30 * hour);
    context.translate(0, -80);
    context.rotate((-Math.PI / 180) * 30 * hour);

    context.font = "bold 18px Arial";
    context.fillStyle = "black";
    context.fillText(hour, 0, 0);

    context.rotate((Math.PI / 180) * 30 * hour);
    context.translate(0, 80);
    context.rotate((-Math.PI / 180) * 30 * hour);
  }

  setInterval(() => drawClock(), 1000);
});
