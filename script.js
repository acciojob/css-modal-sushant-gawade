//your JS code here. If required.
// Get the modal element
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const openBtn = document.getElementById('openModal');

// Get the <span> element that closes the modal (the 'x')
const closeBtn = document.querySelector('.close-modal');

// --- Functions to control the modal ---

// 1. Open the modal
openBtn.onclick = function() {
    modal.style.display = 'block';
}

// 2. Close the modal when 'x' is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// 3. Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}