// Scatter as if someone threw an object and landed somewhere random
// it will move in x and y axes and rotate to make it more realistic
let scatter = anime.set('.scattered', {
    translateX: function () {
        return anime.random(-200, 200);
    },
    translateY: function () {
        return anime.random(-200, 200);
    },
    rotate: function () {
        return anime.random(-90, 90);
    },
});

const SLIDEDURATION = 1000;
const OFFSET = 1000
const FADEIN = [0, 1]

anime.timeline().add({
    // transition from -1000 (left) to 0 (center)
    targets: '.world',
    translateX: [-OFFSET, 0],
    translateZ: 0,
    opacity: FADEIN,
    easing: "easeOutExpo",
    duration: SLIDEDURATION,
}).add({
    // transition from -1000 (left) to 0 (center)
    targets: '.you',
    translateX: [OFFSET, 0],
    translateZ: 0,
    opacity: FADEIN,
    easing: "easeOutExpo",
    duration: SLIDEDURATION,
}).add({
    // fade in other text
    targets: '.other',
    opacity: FADEIN,
    easing: "easeOutExpo",
    duration: 2 * SLIDEDURATION,
    delay: 0
});