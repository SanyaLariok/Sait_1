onresize = function() {

    var bodyWidth = window.innerWidth;
    bodyHeight = window.innerHeight;
    var scalable = document.getElementById("scalable");


    scalable.style.top = (bodyHeight - (scalable.offsetHeight * scale)) / 2 + "px";
    scalable.style.left = (bodyWidth - (scalable.offsetWidth * scale)) / 2 + "px";
    scalable.style.webkitTransform = "scale(" + scale + ")";

}

onresize();