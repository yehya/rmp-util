/* fake professor data for testing */
var jordanJohnson = {
    name: 'Jordan Johnson',
    quality: 4.3,
    avg: 'B',
    chili: 1,
    help: 4.3,
    clarity: 4.2,
    easiness: 2.3
};

/* fake professor data for testing */
var jacksonDaniels = {
    name: 'Jackson Daniels Morgan Arouga ',
    quality: 2.0,
    avg: 'C',
    chili: 2,
    help: 2,
    clarity: 2,
    easiness: 4
};

/* fake professor data for testing */
var bananaSu = {
    name: 'Banana Su',
    quality: 3,
    avg: 'D',
    chili: 3,
    help: 4,
    clarity: 3,
    easiness: 1
};

var professorElement = document.querySelectorAll('.testtext'); // professor test element

Rmptip(professorElement[0], jordanJohnson);
Rmptip(professorElement[1], jacksonDaniels);
Rmptip(professorElement[2], bananaSu);

