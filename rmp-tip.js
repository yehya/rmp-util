/**
 * rmp-tip
 * This function is passed an 2 arguments, an element,
 * and RateMyProfessor data, which will then be displayed
 * as a tip.
 *
 * @param {element} professorElement
 * @param {object} prfData
 */
var rmptip = function(professorElement, prfData) {

  /**
   * Image location sources
   * @type {string[]}
   */
  var HOTNESS_IMAGES = [
     '<img src=\'assets/cold-chili.png\' height=\'25\' width=\'25\'>',
     '<img src=\'assets/warm-chili.png\' height=\'25\' width=\'25\'>',
     '<img src=\'assets/steamy-chili.png\' height=\'25\' width=\'25\'>',
     '<img src=\'assets/scorching-chili.png\' height=\'25\' width=\'25\'>'
 ];

  /**
   * Constants for chili pepper image to use
   * @type {{COLD: number, WARM: number, STEAMY: number, SCORCHING: number}}
   */
  this.HOTNESS = {
    COLD: 0,
    WARM: 1,
    STEAMY: 2,
    SCORCHING: 3
  };

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
    var BAR_COLOR_STYLES = ['linear-gradient(to right, #b51b58 0%, #ef2e72 100%)', 'linear-gradient(to right, #ff9c00 0%, #ffd42b 100%)', 'linear-gradient(to right, #849c1b 0%, #c8e744 100%)'];
    var color = 'linear-gradient(to right, #b51b58 0%, #ef2e72 100%)';

    /* Determines what color each progress bar is */
    switch (true){
      case (rating >= 0 && rating <= 1):
        color = BAR_COLOR_STYLES[0];
        break;
      case (rating > 1 && rating <= 3):
        color = BAR_COLOR_STYLES[1];
        break;
      case (rating > 3 && rating <= 5):
        color = BAR_COLOR_STYLES[2];
        break;
    }

    /*progress bar for the professor attributes*/
    var bar = '<span id=\'entireBar\'><span id=\'progressBar\' style="width: ' + width + ';background:' + color +
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

  var hotnessElement, profQuality, profAvgGrade, profHotness, profHelpfulness, profClarity ,profEasiness;
  hotnessElement = HOTNESS_IMAGES[prfData.profHotness - 1];

  /* Validates that the professors data that is passed in and returns a professorDataError message*/
  var validateProfessorData = function() {
    try {
      if (prfData.profHotness < 0 || prfData.profHotness > 4) {
        throw{
          name: 'ProfessorHotnessOutOfRange',
          message: 'Professor Hotness Range must be between 1 and 4'
        };
      }
      if (prfData.profQuality <= 0 || prfData.profQuality > 5) {
        throw{
          name: 'ProfessorQualityOutOfRange',
          message: 'Professor Quality Range must be between 1 and 5'
        };
      }
      if (prfData.profAvgGrade <= 0 || prfData.profAvgGrade > 5) {
        throw{
          name: 'ProfessorAvgGradeOutOfRange',
          message: 'Professor Average Grade Range must be between 1 and 5'
        };
      }
      if (prfData.profHelpfulness <= 0 || prfData.profHelpfulness > 5) {
        throw{
          name: 'ProfessorHelpfulnessOutOfRange',
          message: 'Professor Helpfulness Range must be between 1 and 5'
        };
      }
      if (prfData.profClarity <= 0 || prfData.profClarity > 5) {
        throw{
          name: 'ProfessorClarityOutOfRange',
          message: 'Professor Clarity Range must be between 1 and 5'
        };
      }
      if (prfData.profEasiness <= 0 || prfData.profEasiness > 5) {
        throw{
          name: 'ProfessorEasinessOutOfRange',
          message: 'Professor Easiness Range must be between 1 and 5'
        };
      }
    }catch (error) {
      console.error(error.name + ' ' + error.message);
      switch (error.name){
        case 'ProfessorHotnessOutOfRange':
          hotnessElement = 'Invalid Data';
          break;
        case 'ProfessorQualityOutOfRange':
          prfData.profQuality = 'Invalid Data';
          break;
        case 'ProfessorAvgGradeOutOfRange':
          prfData.profAvgGrade = 'Invalid Data';
          break;
        case 'ProfessorHelpfulnessOutOfRange':
          prfData.profHelpfulness = 'Invalid Data';
          break;
        case 'ProfessorClarityOutOfRange':
          prfData.profClarity = 'Invalid Data';
          break;
        case 'ProfessorEasinessOutOfRange':
          prfData.profEasiness = 'Invalid Data';
          break;
      }
    }
  };

  validateProfessorData();
  /* Contains the professor attributes in html elements  */

  profQuality = profDescriptionHeading('profcolumns',prfData.profQuality, 'Quality','');
  profAvgGrade = profDescriptionHeading('profcolumns',prfData.profAvgGrade, 'Avg Grade','');
  profHotness = profDescriptionHeading('profcolumns', hotnessElement, 'Hotness','');
  profHelpfulness = profDescriptionHeading('profLine', prfData.profHelpfulness, 'Helpfulness',bars.helpfulness);
  profClarity = profDescriptionHeading('profLine',prfData.profClarity, 'Clarity',bars.clarity);
  profEasiness = profDescriptionHeading('profLine',prfData.profEasiness, 'Easiness',bars.easiness);
  professorTipPopUp.setContent(profQuality + profAvgGrade + profHotness + profHelpfulness + profClarity + profEasiness); // Updates Opentips content

};
