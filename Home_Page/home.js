document.querySelector('.up').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



/* video yekhdem awel mayet7al el page*/
window.onload = function() {
    var video = document.getElementById("Video1");
    video.play();
};


function showMoreCakes() {
    // Get the container element
    var cakesContainer = document.getElementById('cakesss');

    // Create three more cake elements
    for (var i = 0; i < 3; i++) {
        var cakeDiv = document.createElement('div');
        cakeDiv.innerHTML = '<img src="./assets/cake' + (i + 4) + '.jpg" class="cake1">';
        cakesContainer.appendChild(cakeDiv);
    }
};