// Scatter as if someone threw an object and landed somewhere random
// it will move in x and y axes and rotate to make it more realistic
let scatter = anime.set('.scattered', {
    translateX: function () {
        return anime.random(200, 200);
    },
    translateY: function () {
        return anime.random(-200, 200);
    },
    rotate: function () {
        return anime.random(-90, 90);
    },
});
// transition from -1000 (left) to 0 (center)
let world = anime({
    targets: '.world',
    translateX: [-1000, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: 500
})
// Opposite of 'world', transition from 1000 (right) to 0 (center)
let you = anime({
    targets: '.you',
    translateX: [1000, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: 1000
});

// Small fade in animation after the other
let other = anime({
    targets: '.other',
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 3000,
    delay: 2000
});