const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
let refForStop;

document.querySelector('#start').addEventListener('click', function () {
  if (!refForStop) {
    refForStop = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 2000);
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(refForStop);
  refForStop = null;
});
