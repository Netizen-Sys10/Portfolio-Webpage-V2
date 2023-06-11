
//
$(window).on('load', () => {
    setTimeout(function () {
        // if project image has more height than width, we're in mobile view
        if ($('.project-image').height() > $('.project-image').width() ) {
             // set the overview container to the height of the current project
             $('.overview').css({'height':$('.project-show').height()});
            // skill container same size as image
            //$('.skills-container').css({'height': $('.project-image').height()});
            // orient skill icon around project img width
            //$('.skill-icon').css({'width': ($('.project-image').width()-20)/3});
            // reset the icon height to avoid scaling issues
            //$('.skill-icon').css({'height': 'auto'});
            console.log('on load overview - portrait: ' + $('.overview').height())
            console.log('on load skills-container - portrait: ' + $('.skills-container').height())
           
        }
        else {
            $('.overview').css({'height':$('.project-show').height()});
            $('.skills-container').css({'height': $('.project-image').height()});
            // orient skill icon around project img height
            //$('.skill-icon').css({'height': ($('.project-image').height()-20)/3});
            // reset the icon width to avoid scaling issues
            //$('.skill-icon').css({'width': 'auto'});
            console.log('on load - landscape: ' + $('.overview').height())
            console.log('on load - landscape: ' + $('.skills-container').height())            
        } 
}, 5)
});



var intervalId = setInterval(function() {
    $('.overview').css({'height': $('.project-show').height()});
  }, 100);


$(window).on('resize', () => {
    // Whenever you resize make overview as high as the current project 
    setTimeout(function () {
        $('.overview').css({'height': $('.project-show').height()});
        console.log( 'overview height adjusted' + $('.overview').height());
    }, 5)

    setTimeout(function () {
        if ($('.project-image').height() > $('.project-image').width() ) {
            $('.skills-container').css({'height': $('.project-image').height()});
           // $('.skill-icon').css({'width': ($('.project-image').width()-20)/3});
            //$('.skill-icon').css({'height': 'auto'});
            console.log( 'portrait - skills container changed' +$('.skills-container').height() );
        }

        else {
            $('.skills-container').css({'height': $('.project-image').height()});
            //$('.skill-icon').css({'height': ($('.project-image').height()-20)/3});
            //$('.skill-icon').css({'width': 'auto'});
            console.log( 'landscape - skills container changed' +$('.skills-container').height() );
        }
    
}, 5)
});








const linkOne = $('#link-1');
const projectOne =  $('#project-1');
const projectTwo =  $('#project-2');
const projectThird =  $('#project-3');
const firstMessage = $('.first-message');



linkOne.on('click', function () {

    $('.project-show').removeClass('project-show');
    projectOne.addClass('project-show');
    $('.overview').css({'height': projectOne.height()});
    console.log( 'Link1 overview height adjusted ' + $('.overview').height());
});




$('#link-2').on('click', function () {
  
    $('.project-show').removeClass('project-show');
    projectTwo.addClass('project-show');
    $('.overview').css({'height': projectOne.height()});
    console.log( 'Link2 overview height adjusted ' + $('.overview').height());
});


$('#link-3').on('click', function () {
 
    $('.project-show').removeClass('project-show');
    projectThird.addClass('project-show');
    $('.overview').css({'height': projectOne.height()});
    console.log( 'Link3 overview height adjusted ' + $('.overview').height());
});


$('#logo-link').on('click', function () {
    $('.project-show').removeClass('project-show');
    $('.first-message').addClass('project-show');
    $('.overview').css({'height':$('.first-message').height() });

    console.log( 'Link4 overview height adjusted ' + $('.overview').height());
})