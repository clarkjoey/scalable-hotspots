const svgContainer = document.getElementById('svg-container');
const imageUpload = document.getElementById('image-upload');
const fitModeSelect = document.getElementById('fit-mode');
const imagePosition = document.getElementById('screenshot-image');
console.log(fitModeSelect.value);

// Add event listener to handle file selection
imageUpload.addEventListener('change', handleFileSelect);

// Function to handle file selection
function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const imageDataURL = event.target.result;
        const image = new Image();
        image.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            let width, height;

            if (fitModeSelect.value === 'horizontal') {
                // Fit horizontally
                console.log("fit horizontal");
                width = svgContainer.viewBox.baseVal.width;
                height = (image.height / image.width) * width;
                console.log("width", width);
                console.log("height", height);
                canvas.width = width;
                canvas.height = "2054";
                
                const yOffset = (height - svgContainer.viewBox.baseVal.height) / 2;
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, -yOffset, width, height);
            } else {
                // Fit vertically
                console.log("fit vertical");
                height = svgContainer.viewBox.baseVal.height;
                width = (image.width / image.height) * height;
                console.log("width", width);
                console.log("height", height);
                canvas.width = "2739";
                canvas.height = height;
                const xOffset = (svgContainer.viewBox.baseVal.width - width) / 2; 
                ctx.drawImage(image, 0, 0, image.width, image.height, xOffset, 0, width, height);
            }

            svgContainer.querySelector('image').setAttributeNS('http://www.w3.org/1999/xlink', 'href', canvas.toDataURL());
        };
        image.src = imageDataURL;
    };

    reader.readAsDataURL(file);
}

// Add event listener to handle changes in fit mode selection
document.getElementById('fit-mode').addEventListener('change', function(event) {
    selectedFitMode = event.target.value;
    console.log(fitModeSelect.value);
});