document.getElementById("toggleBtn").addEventListener("click", function() {
    let buttonContainer = document.getElementById("button-container");
    buttonContainer.classList.toggle("collapsed");
});

document.getElementById("delete").addEventListener("click", function() {
    let svg = document.getElementById("svg-container");
    if (svg.lastElementChild.tagName === 'rect') svg.lastElementChild.remove();
    else alert("No hotspots to delete");
});

// submit hotsopts
document.getElementById("submit").addEventListener("click", function(e) {
    let rects = document.getElementById("svg-container").querySelectorAll('rect.hotspot');
    console.log(rects.length)
    if (rects.length !== 0) rects.forEach(e => e.setAttribute('fill-opacity', '0'));
    else alert("Please set at least 1 hotspot to submit");
    e.target.style.display = "none";
    document.getElementById("unsubmit").style.display = "block";
});

// unsubmit hotspot
document.getElementById("unsubmit").addEventListener("click", function(e) {
    let rects = document.getElementById("svg-container").querySelectorAll('rect.hotspot');
    console.log(rects.length)
    if (rects.length !== 0) rects.forEach(e => e.setAttribute('fill-opacity', '0.5'));
    else alert("Please set at least 1 hotspot to submit");
    e.target.style.display = "none";
    document.getElementById("submit").style.display = "block";
});

document.getElementById("destroyBtn").addEventListener("click", function() {
    let buttonContainer = document.getElementById("button-container");
    buttonContainer.style.display = "none";
});

// wait I need the module back
document.addEventListener('keydown', function(event) {
    // Check if CMD (or Ctrl) key and 'Z' key are pressed
    if ((event.metaKey || event.ctrlKey) && event.key === 'z') {
        let buttonContainer = document.getElementById("button-container");
        buttonContainer.style.display = "block";
    }
});