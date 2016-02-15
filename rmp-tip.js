
/* hover pop up function that takes in the professor element for hovering over and professor data*/
var rmptip = function(professorElement, professorData) {

  // contains the hotness images
  var HOTNESS_IMAGES = [
      '<img src=\'assets/cold-chili.png\' height=\'29\' width=\'29\'>',
      '<img src=\'assets/warm-chili.png\' height=\'25\' width=\'25\'>',
      '<img src=\'assets/steamy-chili.png\' height=\'29\' width=\'29\'>'
  ];

  /*  creates a new instance of open tip which contains the pop up*/
  var professorTipPopUp = new Opentip(professorElement, {
  title: ('<span>' + '<img src=\'assets/smilebox.png\' height=\'42\' width=\'42\'>' +
        '<h1 class=\'profname\'>' +
        professorData.profName +
        '</h1>' + '</span>'),
  // html for the title and content is not escaped for styling
  escapeTitle: false,
  escapeContent: false,
  hideDelay: 0.1,
  fixed: true,
  hideEffect: 'fade',
  borderRadius: 12,
  borderWidth: 3,
  borderColor: '#000',
  shadow: true,
  shadowBlur: 10,
  shadowOffset: [3,3],
  background: '#00adee'
}
);

  professorTipPopUp.show(); // Shows the tooltip immediately
  professorTipPopUp.hide(); // Hides the tooltip immediately
  professorTipPopUp.prepareToShow(); // Shows the tooltip after the given delays. This could get interrupted
  professorTipPopUp.prepareToHide();// prepares it to hide
  professorTipPopUp.deactivate(); // hides it
  professorTipPopUp.activate(); // shows it

  /*progress bar for the professor attributes*/
  var progressBar = '<span id=\'entireBar\'><span id=\'progressBar\'></span><a href=\'#\' id=\'A_3\'></a></span>';

  /* creates the project description headings, professor heading content and appends the progress bar */
  var profDescriptionHeading = function(profClass, profAttribute, profAttributeTitle, progressBar) {
  return '<span class=\'' + profClass + '\'>' + '<h2 class=\'profheading\'>' + profAttributeTitle + '</h2>' +
  '<h2 class=\'profheadingcontent\'>' + profAttribute + progressBar + '</h2>' + '</span>';
};

  var hotnessElement;
  /* Validates that the professor hotness that is passed in from the professors data object is between 1 and 3 or returns error message*/
  try {
    if (professorData.profHotness >= 1 && professorData.profHotness <= 3) {
      hotnessElement = HOTNESS_IMAGES[professorData.profHotness - 1];
    }else {
      throw{
      name: 'ProfessorHotnessOutOfRange',
      message: 'Professor Range must be between 1 and 3'
    };
    }
  }
  catch (ProfessorHotnessOutOfRange) {
    console.error(ProfessorHotnessOutOfRange.name + ' ' + ProfessorHotnessOutOfRange.message);
    hotnessElement = HOTNESS_IMAGES[0];
  }

  /* Contains the professor attributes in html elements  */
  var profQuality = profDescriptionHeading('profcolumns',professorData.profQuality, 'Quality','');
  var profAvgGrade = profDescriptionHeading('profcolumns',professorData.profAvgGrade, 'Avg Grade','');
  var profHotness = profDescriptionHeading('profcolumns', hotnessElement, 'Hotness','');
  var profHelpfulness = profDescriptionHeading('profLine', professorData.profHelpfulness, 'Helpfulness',progressBar);
  var profClarity = profDescriptionHeading('profLine',professorData.profClarity, 'Clarity',progressBar);
  var profEasiness = profDescriptionHeading('profLine',professorData.profEasiness, 'Easiness',progressBar);
  professorTipPopUp.setContent(profQuality + profAvgGrade + profHotness + profHelpfulness + profClarity + profEasiness); // Updates Opentips content
  var canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d');
  //console.log(canvas);
  // canvas.width = 700;
  // canvas.height = 50;
  // var progressBars = document.querySelector("canvas").nextElementSibling.childNodes[1];
  var progressBars = document.querySelector('#opentip-3');
  console.log(progressBars);
};
