// https://calculator.swiftutors.com/volume-of-a-triangular-prism-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumeofTriangularPrismRadio = document.getElementById('volumeofTriangularPrismRadio');
const lengthofTrianglularPrismRadio = document.getElementById('lengthofTrianglularPrismRadio');
const baseofTrianglularPrismRadio = document.getElementById('baseofTrianglularPrismRadio');
const heightofTrianglularPrismRadio = document.getElementById('heightofTrianglularPrismRadio');

let volumeofTriangularPrism;
let lengthofTrianglularPrism = v1;
let baseofTrianglularPrism = v2;
let heightofTrianglularPrism = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

volumeofTriangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of Trianglular Prism';
  variable2.textContent = 'Base of Trianglular Prism';
  variable3.textContent = 'Height of Trianglular Prism';
  lengthofTrianglularPrism = v1;
  baseofTrianglularPrism = v2;
  heightofTrianglularPrism = v3;
  result.textContent = '';
});

lengthofTrianglularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Triangular Prism';
  variable2.textContent = 'Base of Trianglular Prism';
  variable3.textContent = 'Height of Trianglular Prism';
  volumeofTriangularPrism = v1;
  baseofTrianglularPrism = v2;
  heightofTrianglularPrism = v3;
  result.textContent = '';
});

baseofTrianglularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Triangular Prism';
  variable2.textContent = 'Length of Trianglular Prism';
  variable3.textContent = 'Height of Trianglular Prism';
  volumeofTriangularPrism = v1;
  lengthofTrianglularPrism = v2;
  heightofTrianglularPrism = v3;
  result.textContent = '';
});

heightofTrianglularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Triangular Prism';
  variable2.textContent = 'Length of Trianglular Prism';
  variable3.textContent = 'Base of Trianglular Prism';
  volumeofTriangularPrism = v1;
  lengthofTrianglularPrism = v2;
  baseofTrianglularPrism = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumeofTriangularPrismRadio.checked)
    result.textContent = `Volume of Triangular Prism = ${computeStraightVolumeofTriangularPrism().toFixed(2)}`;

  else if(lengthofTrianglularPrismRadio.checked)
    result.textContent = `Length of Trianglular Prism = ${computeLengthofTrianglularPrism().toFixed(2)}`;

  else if(baseofTrianglularPrismRadio.checked)
    result.textContent = `Base of Trianglular Prism = ${computeBaseofTrianglularPrism().toFixed(2)}`;

  else if(heightofTrianglularPrismRadio.checked)
    result.textContent = `Height of Trianglular Prism = ${computeHeightofTrianglularPrism().toFixed(2)}`;
})

// calculation

function computeStraightVolumeofTriangularPrism() {
  return 0.5 * Number(lengthofTrianglularPrism.value) * Number(baseofTrianglularPrism.value) * Number(heightofTrianglularPrism.value);
}

function computeLengthofTrianglularPrism() {
  return (Number(volumeofTriangularPrism.value) * 2) / (Number(baseofTrianglularPrism.value) * Number(heightofTrianglularPrism.value));
}

function computeBaseofTrianglularPrism() {
  return (Number(volumeofTriangularPrism.value) * 2) / (Number(lengthofTrianglularPrism.value) * Number(heightofTrianglularPrism.value));
}

function computeHeightofTrianglularPrism() {
  return (Number(volumeofTriangularPrism.value) * 2) / (Number(lengthofTrianglularPrism.value) * Number(baseofTrianglularPrism.value));
}