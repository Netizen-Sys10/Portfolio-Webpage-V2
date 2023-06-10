// click funtion per link id
// on click a certain project needs its css changed
// add to the project the acive id
// the current displayed content needs to be changed to and lose its active id

$(window).on('resize', () => {

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

$(window).on('resize', () => { 
    setTimeout(function () {
    $('.overview').css({'height': $('.project-show').height()});
    console.log( 'are we resizing?');
}, 5)
});


