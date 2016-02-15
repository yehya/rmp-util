/* fake professor data for testing */
var jordanJohnson = {
    profName: 'Jordan Johnson',
    profQuality: 4.3,
    profAvgGrade: 'B',
    profHotness: 1,
    profHelpfulness: 4.3,
    profClarity: 4.2,
    profEasiness: 2.3
};

/* fake professor data for testing */
var jacksonDaniels = {
    profName: 'Jackson Daniels Morgan Arouga ',
    profQuality: 2.0,
    profAvgGrade: 'C',
    profHotness: 3,
    profHelpfulness: 2,
    profClarity: 2,
    profEasiness: 4
};

/* fake professor data for testing */
var bananaSu = {
    profName: 'Banana Su',
    profQuality: 1,
    profAvgGrade: 'C',
    profHotness: 7,
    profHelpfulness: 3,
    profClarity: 1,
    profEasiness: 1
};

var professorElement = document.querySelectorAll('.testtext'); // professor test element

rmptip(professorElement[0], jordanJohnson);
rmptip(professorElement[1], jacksonDaniels);
rmptip(professorElement[2], bananaSu);