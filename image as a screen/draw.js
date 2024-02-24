var svg = document.getElementById('svg-container');
var rect;
var isDrawing = false;
var startX, startY;
var offsetX, offsetY;

svg.addEventListener('mousedown', startDrawing);
svg.addEventListener('mousemove', drawRectangle);
svg.addEventListener('mouseup', endDrawing);

function startDrawing(event) {
    isDrawing = true;
    var svgRect = svg.getBoundingClientRect(); // Get the position of the SVG element
    startX = event.clientX - svgRect.left; // Calculate the mouse position relative to the SVG element
    startY = event.clientY - svgRect.top; // Calculate the mouse position relative to the SVG element
    // get the offsets
    offsetX = startX/svgRect.width;
    offsetY = startY/svgRect.height;
    startX = 3840 * offsetX;
    startY = 2160 * offsetY;

    rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    svg.appendChild(rect);
}

function drawRectangle(event) {
    if (!isDrawing) return;
    var svgRect = svg.getBoundingClientRect(); // Get the position of the SVG element
    var mouseX = ((event.clientX - svgRect.left)/svgRect.width)*3840; // Calculate the mouse position relative to the SVG element
    var mouseY = ((event.clientY - svgRect.top)/svgRect.height)*2160; // Calculate the mouse position relative to the SVG element
    var x = Math.min(startX, mouseX);
    var y = Math.min(startY, mouseY);
    var width = Math.abs(startX - mouseX);
    var height = Math.abs(startY - mouseY);
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', 'blue');
    rect.setAttribute('fill-opacity', '0.5');
    rect.setAttribute('class', 'hotspot');
}

function endDrawing(event) {
    isDrawing = false;
}