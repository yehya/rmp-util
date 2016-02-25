/**
 * rmp-tip
 * This function is passed an 2 arguments, an element,
 * and RateMyProfessor data, which will then be displayed
 * as a tip.
 *
 * @param {element} professorElement
 * @param {object} prfData
 */
window.rmptip = function (professorElement, prfData) {

    var IMAGE_SRC = {};

    // Hold image base64 code
    IMAGE_SRC.SMILEBOX = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABjCAYAAAAB4ffpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwM0IyQjVCRTI5NTExRTNBNTdDRTE4Q0U0MTVDRjIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwM0IyQjVDRTI5NTExRTNBNTdDRTE4Q0U0MTVDRjIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjAzQjJCNTlFMjk1MTFFM0E1N0NFMThDRTQxNUNGMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjAzQjJCNUFFMjk1MTFFM0E1N0NFMThDRTQxNUNGMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HLS9dAAAF6UlEQVR42uycXWhb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";
    IMAGE_SRC.COLD_CHILI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA8CAYAAADbl8wjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0MjRGOTE5QzFGMTExRTNBQkI4OUQxMDQyRjlFNkEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0MjRGOTFBQzFGMTExRTNBQkI4OUQxMDQyRjlFNkEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQyNEY5MTdDMUYxMTFFM0FCQjg5RDEwNDJGOUU2QTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQyNEY5MThDMUYxMTFFM0FCQjg5RDEwNDJGOUU2QTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz76cV9OAAAHuElEQVR42uybeWyT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";
    IMAGE_SRC.WARM_CHILI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA8CAYAAADbl8wjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0MjRGOTFEQzFGMTExRTNBQkI4OUQxMDQyRjlFNkEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0MjRGOTFFQzFGMTExRTNBQkI4OUQxMDQyRjlFNkEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQyNEY5MUJDMUYxMTFFM0FCQjg5RDEwNDJGOUU2QTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQyNEY5MUNDMUYxMTFFM0FCQjg5RDEwNDJGOUU2QTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4O8k12AAAEKUlEQVR42uyZWUhUURjHv3tnxtE0Nc0KtxaNrKipjIqoSIU2iKAH2x+rl4KWh4Ieou2hegyCoOWll6inoiikzXaJiqgsasxpg0hHQxt1ttv/3PkEs2yWbs69w/ngB86dO3fwN+d85zvfUTRNIxm/hyLFSDFSjBQjxUgxUowUI8VIMVKMFCNDipFijBDzYVRNCvwjRPaAjbwFPjq36Sn1pAdJDSvxPCIDbAVrQa3dwi7ywSRQDgF5pFEIMj6DF7j2FgRjfI4KVoLdoJKvHbCaGAdYDNaABaDYFlKpPc9Ht5e56fuwbgrbtK6QPdyoakoj3r8L7oE3wN/vWVlgKY+S+X2uXwMnrSSmFmwHc36ZQmGiriFB8pS3UVdmgBx+NcPht8/A1JqBt9exECHmOfDw62IwD1T0edQzcAhcsEqOmQ4OgmUDzgXkkpaRP+i16yu9n+ClVuQZFcLEaIohvOAwOA46rZB8bWAn2AOyo91sD6iQoZIvy0/N4730sMpD7fm+aHIugV2g8U+Jx4wxFVzhXzI7lg8EHWHyO4OU1m2jqQ2FVNqUS8g1f/vIfrDiT1J00SYT4uRkKEZJbiIP0FSNejIC+rKNCTHQbbfA3mhLlVlCrDJ14GiiUnQxikjICo34koUVKjKKhKx+cd4KBV4J1xAbeTk2oNhTKIzs657YSk0VreRBzgk4Qvp1jioeNaYUI3LHZrANFBpfCSti6daT74PqZqpf6sZrkc8pAFwD5ZZk5pghYDWvOJP+15doKGT8zhBkEBU15+hSIgNGa9NUfYkms4gRleYqsAVMG6wvDSHPZLenU2Znml4ZQ9Anp8/WoplAzAgeIZvA5MEentgiUGaHkwo9OfSlpIMWXi7tdDUUhvxpoaSJEfN4PUspTmZ2F4l4zo3R+pQa/7JAzfjhwDVtUMUUgEW8da/huiTpIUZNdls6uR4VidWpOxBltBglJpd3p6KKXAKKzFhKCzl+m96J+BDL/YmKGQfm8ugQUsZYaJf+2CgxNi7CXLzlFyKmxLqHMVn0gJuJiMnlYmssryCTWUKZRUX0j6vgdTxiqnjzVsnLazqlXoiMeyTWm3vFnAGjKbXjGLgf6829u+tTKS6ljlsZFK+YA2ADRbrrqRbXucj0JSJGxFkwG+wAr1JEymmKHI144/3gQG2H3qOFDZyYsywm5B3Yxz92gm2L6P2YCpa0HMwEQ00s5D2PkhPg27/1c+JrVIl6RpzHVINZoJyS3zf+TpFDNdGuvJjItDFCTN8QDacJFDn3qeRCUGwVRnG1/L+iAzSBJ+AOqAduo7/E6NZmPrcYynj/NIZfDwd5IIeLR9HbTQO9e3+F/xanhKL12M0joRW0UOQE0c2rpsgfHyn2s+nExciQYqQYKUaKkWKkGClGipFipBgpRoYUI8VIMcbHTwEGAO2wjAbiK26pAAAAAElFTkSuQmCC";
    IMAGE_SRC.STEAMY_CHILI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA8CAYAAADbl8wjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0MjRGOTE1QzFGMTExRTNBQkI4OUQxMDQyRjlFNkEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0MjRGOTE2QzFGMTExRTNBQkI4OUQxMDQyRjlFNkEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzY1ODlBNjJDMUJGMTFFM0FCQjg5RDEwNDJGOUU2QTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQyNEY5MTRDMUYxMTFFM0FCQjg5RDEwNDJGOUU2QTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7H2DAxAAAJHUlEQVR42uxbe3Bc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";
    IMAGE_SRC.SCORCHING_CHILI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA7CAYAAADGkvybAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM2NTg5QTVDQzFCRjExRTNBQkI4OUQxMDQyRjlFNkEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM2NTg5QTVEQzFCRjExRTNBQkI4OUQxMDQyRjlFNkEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzY1ODlBNUFDMUJGMTFFM0FCQjg5RDEwNDJGOUU2QTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzY1ODlBNUJDMUJGMTFFM0FCQjg5RDEwNDJGOUU2QTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71+UQfAAALcElEQVR42uxbC4xc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";

    /**
     * Image location sources
     * @type {string[]}
     */
//    var HOTNESS_IMAGES = [
//     '<img src=\'assets/cold-chili.png\' height=\'25\' width=\'25\'>',
//     '<img src=\'assets/warm-chili.png\' height=\'25\' width=\'25\'>',
//     '<img src=\'assets/steamy-chili.png\' height=\'25\' width=\'25\'>',
//     '<img src=\'assets/scorching-chili.png\' height=\'25\' width=\'25\'>'
//    ];
      
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

 var tipTitle = '<div class="container-fluid"><div class="row"><div class="col-md-3 col-sm-3 col-xs-3">' + 
          '<img src="' + IMAGE_SRC.SMILEBOX + '"/></div>' + 
          '<div class="col-md-9 col-sm-9 col-xs-9"><p>' + prfData.name + '</p></div></div>' ;
    
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
        shadowOffset: [3, 3],
        background: '#00adee'
    });
    
    
    /**
     * This function takes in a rating value for a bar that is out of 5
     * and then uses that value to generate a customized bar.
     *
     * @param {number} rating
     * @returns {string}
     */
    var getBarHTML = function (rating, trait) {
        var widthPX = (rating / 5) * 200;
        var width = widthPX + 'px';
        var BAR_COLOR_STYLES = ['linear-gradient(to right, #b51b58 0%, #ef2e72 100%)', 'linear-gradient(to right, #ff9c00 0%, #ffd42b 100%)', 'linear-gradient(to right, #849c1b 0%, #c8e744 100%)'];
        var color = 'linear-gradient(to right, #b51b58 0%, #ef2e72 100%)';

        /* Determines what color each progress bar is */
        switch (true) {
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


        //console.log(colorChosen);
        /*progress bar for the professor attributes*/
        var bar = '<div class="container-fluid">' +
                      '<p class="" style="text-align: center;">' + trait + '<p>' +
                      '<div class="progress">' +
                        '<p class="traittext">'+ rating +'</p>' +
                        '<div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"' +  'style="width:' + width +';background:' + color + '">' +
                          '<p class="progress-bar-text"></p>' +
                        '</div>' +
                      '</div>' +
                    '</div>';
        
        return bar;
        
    };

    // The bars
    var bars = {};

    bars.helpfulness = getBarHTML(prfData.help,"Helpfulness");
    bars.clarity = getBarHTML(prfData.clarity,"Clarity");
    bars.easiness = getBarHTML(prfData.dificulty, "Easiness");

    /* creates the project description headings, professor heading content and appends the progress bar */
    var profDescriptionHeading = function (profClass, profAttribute, profAttributeTitle, progressBar) {
        return '<div class="col-sm-3">' + '<span style="font-size:18px;" class=\'' + profClass + '\'>' + '<h2 class=\'profheading\'>' + profAttributeTitle + '</h2>' +
            '<h2 class=\'profheadingcontent\'>' + profAttribute + progressBar + '</h2>' + '</span>' + '</div>';
    };

    var hotnessElement, profQuality, profAvgGrade, profHotness, profHelpfulness, profClarity, profEasiness;
    hotnessElement = IMAGE_SRC.COLD_CHILI;

    /* Validates that the professors data that is passed in and returns a professorDataError message*/
    var validateProfessorData = function () {
        try {
            if (prfData.chili < 0 || prfData.chili > 4) {
                throw {
                    name: 'ProfessorHotnessOutOfRange',
                    message: 'Professor Hotness Range must be between 1 and 4'
                };
            }
            if (prfData.quality <= 0 || prfData.quality > 5) {
                throw {
                    name: 'ProfessorQualityOutOfRange',
                    message: 'Professor Quality Range must be between 1 and 5'
                };
            }
            if (prfData.avg <= 0 || prfData.avg > 5) {
                throw {
                    name: 'ProfessorAvgGradeOutOfRange',
                    message: 'Professor Average Grade Range must be between 1 and 5'
                };
            }
            if (prfData.help <= 0 || prfData.help > 5) {
                throw {
                    name: 'ProfessorHelpfulnessOutOfRange',
                    message: 'Professor Helpfulness Range must be between 1 and 5'
                };
            }
            if (prfData.clarity <= 0 || prfData.clarity > 5) {
                throw {
                    name: 'ProfessorClarityOutOfRange',
                    message: 'Professor Clarity Range must be between 1 and 5'
                };
            }
            if (prfData.dificulty <= 0 || prfData.dificulty > 5) {
                throw {
                    name: 'ProfessorEasinessOutOfRange',
                    message: 'Professor Easiness Range must be between 1 and 5'
                };
            }
        } catch (error) {
            console.error(error.name + ' ' + error.message);
            switch (error.name) {
            case 'ProfessorHotnessOutOfRange':
                hotnessElement = 'Invalid Data';
                break;
            case 'ProfessorQualityOutOfRange':
                prfData.quality = 'Invalid Data';
                break;
            case 'ProfessorAvgGradeOutOfRange':
                prfData.avg = 'Invalid Data';
                break;
            case 'ProfessorHelpfulnessOutOfRange':
                prfData.help = 'Invalid Data';
                break;
            case 'ProfessorClarityOutOfRange':
                prfData.clarity = 'Invalid Data';
                break;
            case 'ProfessorEasinessOutOfRange':
                prfData.dificulty = 'Invalid Data';
                break;
            }
        }
    };

    validateProfessorData();
    /* Contains the professor attributes in html elements  */

    profQuality = profDescriptionHeading('profcolumns', prfData.quality, 'Quality', '');
    profAvgGrade = profDescriptionHeading('profcolumns', prfData.avg, 'Avg Grade', '');
    profHotness = profDescriptionHeading('profcolumns', hotnessElement, 'Hotness', '');
    profHelpfulness = profDescriptionHeading('profLine', prfData.help, 'Helpfulness', bars.helpfulness);
    profClarity = profDescriptionHeading('profLine', prfData.clarity, 'Clarity', bars.clarity);
    profEasiness = profDescriptionHeading('profLine', prfData.dificulty, 'Easiness', bars.easiness);
    var hotImg = "<img class='chili-background' id='chili' src='" + IMAGE_SRC.COLD_CHILI  + "'>";
    var threecolLayout = function(quality, grade, hotness){
        
        return '<div class="container-fluid">' + '<div class="col-xs-4 col-sm-4 heading-box">' + quality + '</div>' + 
            '<div class="col-xs-4 col-sm-4 heading-box" >' + grade + '</div>' +
            '<div class="col-xs-4 col-sm-4 heading-box" >' + hotness + '</div>' + '</div>';
    }
    
    var colorChooser = function(rating){
        var BAR_COLOR_STYLES = ['linear-gradient(to right, #b51b58 0%, #ef2e72 100%)', 'linear-gradient(to right, #ff9c00 0%, #ffd42b 100%)', 'linear-gradient(to right, #849c1b 0%, #c8e744 100%)'];
        var color = 'linear-gradient(to right, #b51b58 0%, #ef2e72 100%)';

        /* Determines what color each progress bar is */
        switch (true) {
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
        return color;
    }
    console.log(colorChooser(prfData.quality));
    var profInfo = threecolLayout("<p class='heading-text'>Quality", "<p class='heading-text'>Grade</p>", "<p class='heading-text'>Hotness</p>")  + 
        threecolLayout("<p class='heading-text-ratings' style='background:"+colorChooser(prfData.quality)+";'>"+prfData.quality+"</p>", "<p class='heading-text-ratings' style='background:"+colorChooser(prfData.avg)+";'>"+prfData.avg+"</p>", hotImg);
    professorTipPopUp.setContent(profInfo + bars.helpfulness + bars.clarity + bars.easiness);
    professorTipPopUp.show();
    professorTipPopUp.hide();
    //console.log($("[id^=opentip-] > canvas").width(535));
    //console.log($("[id^=opentip]").width(535));
    //console.log($("[class^=opentip]").width("100%"));
    var changeRmpTip = function(){
        var tipContentSize = $("[id^=opentip] > div")
        var tipSize = $("[id^=opentip] > div");
        var actualContentSiz = $("[id^=opentip] > div.opentip");
        console.log(tipContentSize.width());
        console.log(tipSize.width());
        console.log(actualContentSiz);
    }
    changeRmpTip();
};