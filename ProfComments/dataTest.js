var comment1 = {
    image: "POOR",
    rating: "POOR",
    text: "Attending class is not necessary, but reading the textbook is a must. I attended all of his classes for ECON1000 but didn't find it helpful, so I never went to class for ECON1010. Do your readings and study from the test banks. With some effort, you're guaranteed to get an A. Would take his class again.",
    footer: "Find out what students are saying.",
    tag: "GET READY TO READ"
};

var comment2 = {
    image: "AVERAGE",
    rating: "AVERAGE",
    text: "As a second language learner, he made me believe in my writing ability... Even though there is a lot of works in his class; however, as long as you finish it you definitely has a high grade no matter how bad your writing is =))... I'm saying that because my writing is really bad. Take him, you will have less stress while taking other hard classes.",
    footer: "Find out what students are saying.",
    tag: "TESTS? NOT MANY (10)"
};

var comment3 = {
    image: "GOOD",
    rating: "GOOD",
    text: "Attending class is not necessary, but reading the textbook is a must. I attended all of his classes for ECON1000 but didn't find it helpful, so I never went to class for ECON1010. Do your readings and study from the test banks. With some effort, you're guaranteed to get an A. Would take his class again.",
    footer: "Find out what students are saying.",
    tag: "TOUGH GRADER (10)"
};

var commentArea = new CommentArea();
commentArea.newComment(comment1.image,comment1.rating,comment1.text,comment1.footer,comment1.tag);
commentArea.newComment(comment2.image,comment2.rating,comment2.text,comment2.footer,comment2.tag);
commentArea.newComment(comment3.image,comment3.rating,comment3.text,comment3.footer,comment3.tag);
commentArea.slideEffect($("#test-text"));   