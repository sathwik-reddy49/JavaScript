// Select the element by ID
const ele = document.getElementById('div');

// click event
ele.onclick = function () {
  ele.style.color = 'white';
  ele.style.backgroundColor = 'blue';
  ele.style.padding = '20px';
  ele.style.borderRadius = '15px';
  ele.style.boxShadow = '5px 5px 10px black';
};

// double-click event
ele.ondblclick = function () {
  ele.style.color = 'black';
  ele.style.backgroundColor = 'yellow';
  ele.style.padding = '30px';
  ele.style.borderRadius = '20px';
  ele.style.boxShadow = '8px 8px 15px darkgray';
};

// hover events (mouseenter and mouseleave)
ele.onmouseenter = function () {
  ele.style.color = 'white';
  ele.style.backgroundColor = 'red';
  ele.style.padding = '25px';
  ele.style.borderRadius = '25px';
  ele.style.boxShadow = '10px 10px 20px black';
};

ele.onmouseleave = function () {
  ele.style.color = '';
  ele.style.backgroundColor = 'lightblue';
  ele.style.padding = '';
  ele.style.borderRadius = '5px';
  ele.style.boxShadow = '2px 2px 5px gray';
};
