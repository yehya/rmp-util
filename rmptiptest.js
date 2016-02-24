/* fake professor data for testing */
var jordanJohnson = {
    name: 'Jordan Johnson',
    quality: 4.3,
    avg: 'B',
    chili: 1,
    help: 4.3,
    clarity: 4.2,
    dificulty: 2.3
};

/* fake professor data for testing */
var jacksonDaniels = {
    name: 'Jackson Daniels Morgan Arouga ',
    quality: 2.0,
    avg: 'C',
    chili: 2,
    help: 2,
    clarity: 2,
    dificulty: 4
};

/* fake professor data for testing */
var bananaSu = {
    name: 'Banana Su',
    quality: 3,
    avg: 'C',
    chili: 3,
    help: 4,
    clarity: 3,
    dificulty: 1
};

var professorElement = document.querySelectorAll('.testtext'); // professor test element

rmptip(professorElement[0], jordanJohnson);
rmptip(professorElement[1], jacksonDaniels);
rmptip(professorElement[2], bananaSu);

console.log($("#opentip-2 > canvas"));
console.log(document.querySelector("#opentip-2 > canvas"));