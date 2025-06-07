const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const canvas = document.querySelector('.canvas');

function colorChange(color) {
  body.style.backgroundColor = color;
  canvas.style.backgroundColor = color;
}

// Map of button IDs to color codes
const colorMap = {
  olive: '#708238',
  terra: '#e2725b',
  navy: '#2c3e50',
  blush: '#f8c8dc',
  sage: '#b2ac88',
  charcoal: '#36454f',
  mint: '#98ff98'
};

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    const selectedId = e.target.id;
    // console.log(e.target.id);
    

    // Check if the clicked ID exists in the map
    if (colorMap[selectedId]) {
      colorChange(colorMap[selectedId]);
    }
    else{
        colorChange(e.target.id);
    }
  });
});
