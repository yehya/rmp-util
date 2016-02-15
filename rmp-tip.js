/**
 * rmp-tip
 * This function is passed an element 2 arguments, an element,
 * and RateMyProfessor data, which will then be displayed
 * as a tip.
 *
 * @param {element} professorElement
 * @param {object} prfData
 */
var rmptip = function(professorElement, prfData) {

  // contains the hotness images
  var HOTNESS_IMAGES = [
      '<img src=\'assets/cold-chili.png\' height=\'25\' width=\'25\'>',
      '<img src=\'assets/warm-chili.png\' height=\'25\' width=\'25\'>',
      '<img src=\'assets/steamy-chili.png\' height=\'25\' width=\'25\'>',
      '<img src=\'scorching-chili.png\' height=\'25\' width=\'25\'>'    
  ];

  /*  creates a new instance of open tip which contains the pop up*/

  var tipTitle = '<span>' + '<img src=\'assets/smilebox.png\' height=\'42\' width=\'42\'>' +
      '<h1 class=\'profname\'>' + prfData.profName + '</h1>' + '</span>';

  var professorTipPopUp = new Opentip(professorElement, {
    title: tipTitle,
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
  });

  /**
   * This function takes in a rating value for a bar that is out of 5
   * and then uses that value to generate a customized bar.
   *
   * @param {number} rating
   * @returns {string}
   */
  var getBarHTML = function(rating) {
    var widthPX = (rating / 5) * 200;
    var width = widthPX + 'px';

    /*progress bar for the professor attributes*/
    var bar = '<span id=\'entireBar\'><span id=\'progressBar\' style="width: ' + width +
        ';"></span><a href=\'#\' id=\'A_3\'></a></span>';

    return bar;
  };

  // The bars
  var bars = {};

  bars.helpfulness = getBarHTML(prfData.profHelpfulness);
  bars.clarity = getBarHTML(prfData.profClarity);
  bars.easiness = getBarHTML(prfData.profEasiness);

  /* creates the project description headings, professor heading content and appends the progress bar */
  var profDescriptionHeading = function(profClass, profAttribute, profAttributeTitle, progressBar) {
    return '<span class=\'' + profClass + '\'>' + '<h2 class=\'profheading\'>' + profAttributeTitle + '</h2>' +
    '<h2 class=\'profheadingcontent\'>' + profAttribute + progressBar + '</h2>' + '</span>';
  };

  var hotnessElement;
  /* Validates that the professor hotness that is passed in from the professors data object is between 1 and 3 or returns error message*/
  try {
    if (prfData.profHotness >= 1 && prfData.profHotness <= 4) {
      hotnessElement = HOTNESS_IMAGES[prfData.profHotness - 1];
    }else {
      throw{
      name: 'ProfessorHotnessOutOfRange',
      message: 'Professor Range must be between 1 and 4'
    };
    }
  }
  catch (ProfessorHotnessOutOfRange) {
    console.error(ProfessorHotnessOutOfRange.name + ' ' + ProfessorHotnessOutOfRange.message);
    hotnessElement = HOTNESS_IMAGES[0];
  }

  /* Contains the professor attributes in html elements  */
  var profQuality = profDescriptionHeading('profcolumns',prfData.profQuality, 'Quality','');
  var profAvgGrade = profDescriptionHeading('profcolumns',prfData.profAvgGrade, 'Avg Grade','');
  var profHotness = profDescriptionHeading('profcolumns', hotnessElement, 'Hotness','');
  var profHelpfulness = profDescriptionHeading('profLine', prfData.profHelpfulness, 'Helpfulness',bars.helpfulness);
  var profClarity = profDescriptionHeading('profLine',prfData.profClarity, 'Clarity',bars.clarity);
  var profEasiness = profDescriptionHeading('profLine',prfData.profEasiness, 'Easiness',bars.easiness);
  professorTipPopUp.setContent(profQuality + profAvgGrade + profHotness + profHelpfulness + profClarity + profEasiness); // Updates Opentips content
};
