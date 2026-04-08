// 1. Find the elements on the page
const btn = document.getElementById('colorButton');
const body = document.getElementById('myBody');

// 2. Create a function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 3. Tell the button what to do when clicked
btn.addEventListener('click', function() {
    // Change background to a random color
    body.style.backgroundColor = getRandomColor();
    
    // Toggle the growing class
    btn.classList.toggle('grow-active');
});