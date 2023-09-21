function calculateFibonacci() {
    const input = document.getElementById('fibonacciInput').value;
    const result = document.getElementById('fibonacciResult');

    if (input <= 0) {
        result.textContent = 'Enter a number greater than 0';
    } else {
        const fibonacci = [0, 1];
        for (let i = 2; i < input; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        result.textContent = `Fibonacci series : ${fibonacci.join(', ')}`;
    }
}

function countVolume() {
    const shape = document.getElementById('shape').value;
    const result = document.getElementById('volumeResult');

    if (shape === 'cube') {
        const side = document.getElementById('side').value;
        const volume = side * side * side;
        result.textContent = `Cube Volume is ${volume} cm3`;
    } else if (shape === 'cuboid') {
        const length = document.getElementById('length').value;
        const wide= document.getElementById('wide').value;
        const height = document.getElementById('height').value;
        const volume = length * wide * height;
        result.textContent = `Cuboid Valume is ${volume} cm3`;
    } else if (shape === 'cylinder') {
        const radius = document.getElementById('radius').value;
        const height = document.getElementById('height').value;
        const volume = Math.PI * Math.pow(radius, 2) * height;
        result.textContent = `Tube/cylinder volume is ${volume.toFixed(2)} cm3`;
    } else if (shape === 'sphere') {
        const radius= document.getElementById('radius').value;
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);
        result.textContent = `Sphere volume is ${volume.toFixed(3)} cm3`;
    } else if (shape == 'cone'){
        const radius = document.getElementById('radius').value;
        const height = document.getElementById('height').value;
        const volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
        result.textContent = `Cone volume is ${volume.toFixed(2)} cm3`;
    }
}

// Menampilkan input yang sesuai dengan pilihan bangun ruang
document.getElementById('shape').addEventListener('change', function () {
    const shapeInputs = document.getElementById('shapeInputs');
    const shape = this.value;
    shapeInputs.innerHTML = '';

    if (shape === 'cube')
    {
        shapeInputs.innerHTML = '<label for"cube">Lenght of side (cm):</label><input type="number" id="side" placeholder="type here">';
    } 
    else if (shape === 'cuboid') 
    {
        shapeInputs.innerHTML = '<label for="lenght">Length (cm):</label><input type="number" id="length" placeholder="type here">' +
            '<label for="wide">Wide(cm):</label><input type="number" id="wide" placeholder="type here">' +
            '<label for="height">Height (cm):</label><input type="number" id="height" placeholder="type here">';
    } 
    else if (shape === 'cylinder') 
    {
        shapeInputs.innerHTML = '<label for="radius">Radius (cm):</label><input type="number" id="radius" placeholder="type here">' +
            '<label for="height">Height(cm):</label><input type="number" id="height" placeholder="type here">';
    } 
    else if (shape === 'sphere')
    {
        shapeInputs.innerHTML = '<label for="radius">Radius (cm):</label><input type="number" id="radius" placeholder="type here">';
    } 
    else if (shape === 'cone')
    {
        shapeInputs.innerHTML = '<label for="radius">Radius (cm):</label><input type="number" id="radius" placeholder="type here">' +
        '<label for="height">Height (cm):</label><input type="number" id="height" placeholder="type here">';
    }
});