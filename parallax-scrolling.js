var image = document.getElementsByClassName("background");
new simpleParallax(image, {
    orientation: 'down',
    scale: 1.5,
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
});