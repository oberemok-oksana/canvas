let fruits = {
  apple: 20,
  bananas: 30,
  oranges: 50,
};

const COLORS = [
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

function allFruits(fruits) {
  let sum = 0;
  for (let f in fruits) {
    sum = sum + fruits[f];
  }
  return sum;
}

function fruitAngle(sum, fruit) {
  return (fruit / sum) * 360;
}

document.addEventListener("DOMContentLoaded", () => {
  let cvs = document.querySelector(".pie-chart");
  let context = cvs.getContext("2d");

  function createPieChart(fruits) {
    let sum = allFruits(fruits);
    let startAngle = 0;
    let colorIndex = 0;
    context.translate(250, 250);

    for (let fruit in fruits) {
      context.beginPath();
      context.moveTo(0, 0);
      let endAngle =
        startAngle + (Math.PI / 180) * fruitAngle(sum, fruits[fruit]);
      context.arc(0, 0, 100, startAngle, endAngle, false);

      context.closePath();

      context.fillStyle = COLORS[colorIndex];
      colorIndex += 1;
      context.fill();
      context.fillStyle = "black";
      context.font = "14px san-serif";

      context.rotate(startAngle + (endAngle - startAngle) / 2);
      context.font = "14px Arial";
      context.fillText(fruit, 30, 0);
      context.rotate(-(startAngle + (endAngle - startAngle) / 2));

      startAngle = endAngle;
    }
  }

  createPieChart(fruits);
});
