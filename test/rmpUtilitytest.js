/**
 * fake professor data for testing
 */
var jordanJohnson = {
    name: 'Jordan Johnson',
    quality: 4.3,
    avg: 'B',
     chili: 0,
    help: 4.3,
    clarity: 4.2,
    easiness: 2.3
};

var jacksonDaniels = {
    name: 'Jackson Daniels Morgan Arouga ',
    quality: 2,
    avg: 'C',
     chili: 0,
    help: 2,
    clarity: 2,
    easiness: 4
};

var bananaSu = {
    name: 'Banana Su',
    quality: 3,
    avg: 'D',
     chili: 3,
    help: 4,
    clarity: 3,
    easiness: 1
};

var comment1 = {
    image: "POOR",
    rating: "POOR",
    text: "Attending class is not necessary, but reading the textbook is a must. I attended all of his classes for ECON1000 but didn't find it helpful, so I never went to class for ECON1010. Do your readings and study from the test banks. With some effort, you're guaranteed to get an A. Would take his class again.",
    footer: "Find out what students are saying.",
    tag: "GET READY TO READ",
    course: "FLAN200"
};

var comment2 = {
    image: "AVERAGE",
    rating: "AVERAGE",
    text: "As a second language learner, he made me believe in my writing ability... Even though there is a lot of works in his class; however, as long as you finish it you definitely has a high grade no matter how bad your writing is =))... I'm saying that because my writing is really bad. Take him, you will have less stress while taking other hard classes.",
    footer: "Find out what students are saying.",
    tag: "TESTS? NOT MANY (10)",
    course: "FLAN200"
};

var comment3 = {
    image: "GOOD",
    rating: "GOOD",
    text: "Attending class is not necessary, but reading the textbook is a must. I attended all of his classes for ECON1000 but didn't find it helpful, so I never went to class for ECON1010. Do your readings and study from the test banks. With some effort, you're guaranteed to get an A. Would take his class again.",
    footer: "Find out what students are saying.",
    tag: "TOUGH GRADER (10)",
    course: "FLAN200"
};

var professorElements = $('[id^=prof]'); // professor test element

var RmpUtility = new rmpUtility();

/* Testing for rmp tips  */
RmpUtility.tip(professorElements[0], jordanJohnson);
RmpUtility.tip(professorElements[1], jacksonDaniels);
RmpUtility.tip(professorElements[2], bananaSu);

/* Testing for multiple comments with multiple Comment Areas */
RmpUtility.comment(professorElements[0],[comment1,comment2,comment3]);
RmpUtility.comment(professorElements[1],[comment1,comment2]);
RmpUtility.comment(professorElements[2],[comment1]);
console.log(RmpUtility);


