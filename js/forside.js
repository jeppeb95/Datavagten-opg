document.addEventListener("DOMContentLoaded", function() {
    var visSkyKnap = document.getElementById("visSkyKnap");
    var overlay = document.getElementById("overlay");

    visSkyKnap.addEventListener("click", function() {
        visSky();
        visOverlay();
    });

    function visSky() {
        var skyContainer = document.getElementById("skyContainer");
        skyContainer.classList.add("show");
    }

    function visOverlay() {
        overlay.style.display = "block";
    }
});
