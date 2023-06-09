// click funtion per link id
// on click a certain project needs its css changed
// add to the project the acive id
// the current displayed content needs to be changed to and lose its active id

const linkOne = $('#link-1');
const projectOne =  $('#project-1');
const projectTwo =  $('#project-2');
const projectThird =  $('#project-3');
const firstMessage = $('.first-message');

linkOne.on('click', function () {
    $('.project-show').removeClass('project-show')
    projectOne.addClass('project-show');
});




$('#link-2').on('click', function () {
    $('.project-show').removeClass('project-show')
    projectTwo.addClass('project-show');
});

$('#link-3').on('click', function () {
    $('.project-show').removeClass('project-show')
    projectThird.addClass('project-show');
});