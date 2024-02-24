document.addEventListener('DOMContentLoaded', function() {
    var svgContainer = document.getElementById('svg-container');
    var saveButton = document.getElementById('saveButton');
    var loadButton = document.getElementById('loadButton');

    saveButton.addEventListener('click', function() {
        var svgContent = new XMLSerializer().serializeToString(svgContainer);
        localStorage.setItem('savedSVG', svgContent);
        alert('SVG content saved to local storage.');
    });

    loadButton.addEventListener('click', function() {
        var savedSVG = localStorage.getItem('savedSVG');
        if (savedSVG) {
            var parser = new DOMParser();
            var svgDoc = parser.parseFromString(savedSVG, 'image/svg+xml');
            // Replace the current SVG content with the loaded SVG content
            svgContainer.parentNode.replaceChild(svgDoc.documentElement, svgContainer);
            alert('SVG content loaded from local storage.');
        } else {
            alert('No SVG content found in local storage.');
        }
    });
});