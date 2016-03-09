/**
* Comment Area for a professor
*/
var CommentArea = function(){
	this.entireBlock = document.createElement('div');
	this.body = document.getElementsByTagName("body")[0];
	this.commentImages = ["data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRjYwM0U2RkI4RjcxMUUzOTZDNkY5NjRBQjgxQjMxNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRjYwM0U3MEI4RjcxMUUzOTZDNkY5NjRBQjgxQjMxNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFGNjAzRTZEQjhGNzExRTM5NkM2Rjk2NEFCODFCMzE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFGNjAzRTZFQjhGNzExRTM5NkM2Rjk2NEFCODFCMzE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAJQAoAwERAAIRAQMRAf/EAH0AAQACAwEAAAAAAAAAAAAAAAAFBgEDBAcBAQADAAMBAAAAAAAAAAAAAAAEBQYBAgMHEAACAgIBAgUFAAAAAAAAAAABAgADEQQFIRIxQWEiBlFxgSMUEQACAgEDAgQHAAAAAAAAAAAAAQIDESESBDEFQWGRE1FxgaEiFAb/2gAMAwEAAhEDEQA/APXJ8UNSIAgCAIBu1aqrdmuq1yiOwUsoyRnoOn3kji1xnZGMniLeMo6WSai2iw2fD9eutnbaftUEn2Dymvs/kq4xcnZLC8kVq7i28bUV6mvXfaFbWMKS2BYBlseRxMjTXXK1RbexvrjX0LGUmo5xqWI/DtdULnbftAyfYPDxmuf8lWo7vclj5Irl3GWcbUVlwodghygJ7SehIz0MxU0k3joWi6amASCCDgjqDOE8aoHfbz/K26/873frIwSBhiPUy2t75yp1+25fj9/Ujx4lallIj5UkkkhznM26511sLoBhiq5bHqwlwu9cyyv21LKx4LX1Iv6tSlnBGymJQgCAdWnt0a6t36tew5OUazOF/EncTlQqT3Vxsl4bvD6HjZW5dJNG63nORsQorrTWRjsqUKMfSSLe9ciS2pqEfhFYOkeLBa9X5kfKkkiAIAgCAIB//9k=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAIAAAC/AjzkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTVCMDMxNUQ5NjVBMTFFMzlENjRCMUI0NkZBQzU3NjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTVCMDMxNUU5NjVBMTFFMzlENjRCMUI0NkZBQzU3NjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NjAxOTdDRTkzM0QxMUUzOUQ2NEIxQjQ2RkFDNTc2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NUIwMzE1Qzk2NUExMUUzOUQ2NEIxQjQ2RkFDNTc2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhkA5ckAAAIDSURBVHja7JbLSgJhFMd1bl7GLEe70ZjhJghxUXTZtY1aRLueozbRC1SbeoZeICKIoHqAiMiQIoISQi20dJocHZsZp05GFxS/uRi5aD5mMR7+//PzO3PmO2PfiY3ZWrEwW4uWBbbAFvjvwHaPc4DEvfozghgsYETLCGSKtrHwOkNHVVWKp1aT+V1NapCZibJLGEbli/HjxIJcKZjZcYRdBOq7CKOiweXqPlALBCADMdyDEexmSu0kA6xv6ltnJ8Kd82gwCED29RPskMQw2O8ZrnlOAc8IGlwnsFeTGAS7qd6aiKsuoilwN7YgnjFe2991ER0C3DC4LGc1I81YGoJzQkwz0oylIbgkpR+Fk5+R29w2GlwjADskMfMex5MrZfnh4/46s5kvnqHBIADZZ5EfwI5qCPQ3FxxeXd6JknTPFc91Hpk+OgLNnH0+Qhxb2uB/ORahdBThM5QUDiwCp81PJ1gOghkPb+CY8447THF7OeFUfVUQ4p72yVBgrt01ePu4FU+tmQeThJcvXQXaRllmGq6KKnKli4J4I8oZSeGrw4N0kAxNsR3uoa/xJVcECdlZepsLMob8s7AbN9WHkEEx8kIs/XSQ5vbhL/4C+HsMkN2wM9rZ7yK7cMyFY5SilmWFL0rpgpjgxcuK+qIzFWGoa6DCIp+x8dZXpgW2wBYY1psAAwCqJL2e6JDgwgAAAABJRU5ErkJggg==", "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQTcwMzMwMEI4RjcxMUUzOTZDNkY5NjRBQjgxQjMxNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQTcwMzMwMUI4RjcxMUUzOTZDNkY5NjRBQjgxQjMxNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFGNjAzRTc1QjhGNzExRTM5NkM2Rjk2NEFCODFCMzE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFGNjAzRTc2QjhGNzExRTM5NkM2Rjk2NEFCODFCMzE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAJQAoAwERAAIRAQMRAf/EAH0AAQADAQAAAAAAAAAAAAAAAAABBgcDAQEAAgMBAQAAAAAAAAAAAAAAAQMCBQYEBxAAAAQFAwMFAQEAAAAAAAAAAAECBREDEwQGMRIUIVEVQWEyFgciFxEAAQMCBAUFAAAAAAAAAAAAAAECAxEEIVESE0FxkSIFMeEUFQb/2gAMAwEAAhEDEQA/AKUPCfbwAAAAAAB6ASbbhP4Vjbq12rtdu0y+t7hJLpW5Uke5b/n00F7YkXE4jyX6eeKR0bWI1Uzx9jP/AK+2/wCoeB4x+O5/G41X+qe3Sr39YiundQ6D5b/g71e/RWtOPI0DNvwrG2psuna0dpljb26TXSuCqo9i3/ProLHRImJz/jf088r0jcxHKuWHsYkWnYUHbgCCw45lubN8hTWwXt0mXMM1Fa25HMMjVqpCSIzIzGTXLwNfeWFrIu5M1vNcCfpefb+d4dwrbqtajNqb4x3aboxDSpH2VpTRrZT0pVKEZHlubOEhLW/3t0qXLMlHa3BHLMzTopaTIjMyBzl4k2dhaxruQtbzTErwxNgABYmfPsmZWc2tpnos5SlqmKuZctPIM1elU49C7DJHqiYGuuPFQTSbkialyr29Dh94zOtW83eVYx31TjERqXMs+stqU2205Hd5z/JnpnJrdp6LyUlaZibmZLTyCNPpVKHQ+wlXqqUUrt/FQQybkaaVyr29CujE2IAAAAAAAAf/2Q=="];
	this.items = [];
    this.numOfComments = 0;
};

/**
* Creates all the elements needed for the new comment area
*/
CommentArea.prototype.newCommentArea = function(){
	this.items = [];
	this.items[0] = document.createElement('a');
	this.items[1] = document.createElement('div');
	this.items[2] = document.createElement('div');
	this.items[3] = document.createElement('img');
	this.items[4] = document.createElement('div');
	this.items[5] = document.createElement('h3');
	this.items[6] = document.createElement('span');
	this.items[7] = document.createElement('a');
	this.items[8] = document.createElement('div');
	this.items[9] = document.createElement('div');
	this.items[10] = document.createElement('div');
	this.items[11] = document.createElement('hr');
	this.items[12] = document.createElement('br');
};

/**
 * Assigns the new set of elements IDS
 */
CommentArea.prototype.assignID = function(){
    console.log("hello");
	this.entireBlock.id = 'entire-block';
	this.items[0].id = 'x';
	this.items[1].id = 'content-section';
	this.items[2].id = 'entire-content-section';
    this.items[3].id = 'comments-image';
    this.items[4].id = 'top-content-section';
    this.items[5].id = 'content-header';
    this.items[6].id = 'middle-content';
    this.items[7].id = 'content-bottom';
    this.items[8].id = 'tag-section';
    this.items[9].id = 'tag';
    this.items[10].id = 'hr-line';
    this.items[11].id = 'comment-splitter';
};

/**
 * Assigns the new set of elements class names
 */
CommentArea.prototype.assignClassName = function(){
    console.log("Assigning class names!");
	this.entireBlock.className = 'container-fluid'; /* entire-block  */
	this.items[0].className = 'x'; /* x */
	this.items[1].className = 'content-section';
	this.items[2].className = 'entire-content-section';
    this.items[3].className = 'comments-image';
    this.items[4].className = 'top-content-section';
    this.items[5].className = 'content-header';
    this.items[6].className = 'middle-content';
    this.items[7].className = 'content-bottom';
    this.items[8].className = 'tag-section';
    this.items[9].className = 'tag';
    this.items[10].className = 'hr-line';
    this.items[11].className = 'comment-splitter';
};


/**
* Builds the DOM relationship for each comment section
*/
CommentArea.prototype.buildCommentArea = function(){
	if(this.numOfComments == 1){
		this.entireBlock.appendChild(this.items[0]);
	}
	this.entireBlock.appendChild(this.items[1]);
	this.items[1].appendChild(this.items[2]);
	this.items[2].appendChild(this.items[3]);
	this.items[2].appendChild(this.items[4]);
	this.items[4].appendChild(this.items[5]);
    this.items[4].appendChild(this.items[6]);
	this.items[2].appendChild(this.items[7]);
	this.items[2].appendChild(this.items[12]);
	this.items[2].appendChild(this.items[8]);
	this.items[8].appendChild(this.items[9]);
	this.items[1].appendChild(this.items[10]);
	this.items[10].appendChild(this.items[11]);
	this.body.appendChild(this.entireBlock);	
};

/**
* Injects new content for each comment section
*/
CommentArea.prototype.injectContent = function(imageURL,rating,commentText,footerText,tagText){
	$(this.items[3]).attr('src', imageURL);
	$(this.items[5]).text(rating);
	$(this.items[6]).text(commentText);
	$(this.items[7]).text(footerText);
	$(this.items[9]).text(tagText);
	$(this.items[0]).text("x");
};

/**
 * Creates a new comment 
 */
CommentArea.prototype.newComment = function(ratingLevel,rating,commentText,footerText,tagText){
	this.numOfComments++;
	this.newCommentArea();
	this.assignID();
    this.assignClassName();
	this.buildCommentArea();
	this.injectContent(this.getImage(ratingLevel),rating,commentText,footerText,tagText);
};

/**
 * Obtains the Image to Inject
 */
CommentArea.prototype.getImage = function(rating){
    this.selectImage = {
        "AVERAGE": this.commentImages[0],
        "GOOD": this.commentImages[1],
        "POOR": this.commentImages[2]
    };
      return this.selectImage[rating];
};

/**
 * Slides the Entire Comment Area to the left
 */
CommentArea.prototype.slideLeft = function(elm){
    elm.slideDown();
    elm.animate({right: '2px'});
};

/**
 * Slides the Entire Comment Area to the Right
 */
CommentArea.prototype.slideRight = function(elm){
    elm.slideUp();
    elm.animate({right: '-445px'});
};

/**
 *  Adds the slideEffect to the given Element
 */
CommentArea.prototype.slideEffect = function(element){
      var entireBlock = $(this.entireBlock);
      var commentArea = this;
      element.bind("mouseover", function(e){  
            // console.log($("[id^=entire-block]").position());        
            // $("[id^=entire-block]").each(function(i,eve){
            //     var cmntArea = $(this);
            //     if(cmntArea.position().left == 1407.8125){
            //         // cmntArea.slideUp();
            //         cmntArea.animate({right: '-445px'});
            //     }
            // });
            // $("[id^=entire-block]").slideUp();
            $("[id^=entire-block]").animate({right: '-445px'});
            commentArea.slideLeft(entireBlock);
      });
      var xIcon;
      if(this.numOfComments == 1) xIcon = $(this.items[0]);
      else xIcon = $("#x"); 
      xIcon.click(function(){
          commentArea.slideRight(entireBlock);
      });
};


