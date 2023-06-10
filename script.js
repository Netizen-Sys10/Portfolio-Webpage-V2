
//
$(window).on('load', () => {
    setTimeout(function () {
        // if project image has more height than width, we're in mobile view
        if ($('.project-image').height() > $('.project-image').width() ) {
            // orient skill icon around project img width
            $('.skill-icon').css({'width': ($('.project-image').width()-20)/3});
            $('.skills-container').css({'height': $('.project-image').height()});
            $('.skill-icon').css({'height': 'auto'});
            $('.overview').css({'height':$('.project-show').height()});
        }
        else {
            // orient skill icon around project img height
            $('.skill-icon').css({'height': ($('.project-image').height()-20)/3});
            $('.skill-icon').css({'width': 'auto'});
            $('.skills-container').css({'height': $('.project-image').height()});
            $('.overview').css({'height':$('.project-show').height()});
        } 
}, 5)
});



// Whenever you resize make overview as high as the current project
$(window).on('resize', () => { 
    setTimeout(function () {
    $('.overview').css({'height': $('.project-show').height()});
    console.log( 'overview height adjusted');
}, 5)
});


$(window).on('resize', () => { 
    setTimeout(function () {
        if ($('.project-image').height() > $('.project-image').width() ) {

            $('.skill-icon').css({'width': ($('.project-image').width()-20)/3});
            $('.skills-container').css({'height': $('.project-image').height()});
            $('.skill-icon').css({'height': 'auto'});
            $('.overview').css({'height':$('.project-show').height()});
            console.log( 'skills width changed');
        }

        else {
            $('.skill-icon').css({'height': ($('.project-image').height()-20)/3});
            $('.skill-icon').css({'width': 'auto'});
            $('.skills-container').css({'height': $('.project-image').height()});
            $('.overview').css({'height':$('.project-show').height()});
          console.log( 'are we resizing the skills?');
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
    console.log( $('.overview').height());
});




$('#link-2').on('click', function () {
  
    $('.project-show').removeClass('project-show');
    projectTwo.addClass('project-show');
    $('.overview').css({'height': projectTwo.height()});
    console.log( $('.overview').height());
});


$('#link-3').on('click', function () {
 
    $('.project-show').removeClass('project-show');
    projectThird.addClass('project-show');
    $('.overview').css({'height': projectThird.height()});
    console.log( $('.overview').height());
});


$('#logo-link').on('click', function () {
    $('.project-show').removeClass('project-show');
    $('.first-message').addClass('project-show');
    $('.overview').css({'height':$('.first-message').height() });
})