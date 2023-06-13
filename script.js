
$(window).on('load', () => {
    setTimeout(function () {
        // if project image has more height than width, we're in mobile view
        if ($('.project-image').height() > $('.project-image').width()) {
            // set the overview container to the height of the current project
            $('.overview').css({ 'height': $('.project-show').height() });
            console.log('on load overview - portrait: ' + $('.overview').height())
            console.log('on load skills-container - portrait: ' + $('.skills-container').height())
        }
        else {
            $('.overview').css({ 'height': $('.project-show').height() });
            $('.skills-container').css({ 'height': $('.project-image').height() });
            console.log('on load - landscape: ' + $('.overview').height())
            console.log('on load - landscape: ' + $('.skills-container').height())
        }
    }, 5)

    if ($('html').height() >= $('.outer-content-container').height()) {
        $('.vanta-canvas').css({ 'height': $('html').height() });
    }
    else {
        if ($(window).width() < 500) {
            $('.vanta-canvas').css({ 'height': $('.outer-content-container').height() + 15 });
        }
        else {
            $('.vanta-canvas').css({ 'height': $('.outer-content-container').height() + 40 });
        }
    }
});



var intervalId = setInterval(function () {

    $('.overview').css({ 'height': $('.project-show').height() });
}, 20);


var intervalId = setInterval(function () {
    if ($('html').height() >= $('.outer-content-container').height()) {
        $('.vanta-canvas').css({ 'height': $('html').height() });
    }
    else {
        if ($(window).width() < 500) {
            $('.vanta-canvas').css({ 'height': $('.outer-content-container').height() + 15 });
        }
        else {
            $('.vanta-canvas').css({ 'height': $('.outer-content-container').height() + 40 });
        }
    }
}, 100);

$(window).on('resize', () => {
    // Whenever you resize make overview as high as the current project 
    setTimeout(function () {
        $('.overview').css({ 'height': $('.project-show').height() });
        console.log('overview height adjusted' + $('.overview').height());
    }, 5)

    setTimeout(function () {
        if ($('.project-image').height() > $('.project-image').width()) {
            $('.skills-container').css({ 'height': $('.project-image').height() });
            // $('.skill-icon').css({'width': ($('.project-image').width()-20)/3});
            //$('.skill-icon').css({'height': 'auto'});
            console.log('portrait - skills container changed' + $('.skills-container').height());
        }

        else {
            $('.skills-container').css({ 'height': $('.project-image').height() });
            //$('.skill-icon').css({'height': ($('.project-image').height()-20)/3});
            //$('.skill-icon').css({'width': 'auto'});
            console.log('landscape - skills container changed' + $('.skills-container').height());
        }

    }, 5)
});








const linkOne = $('#link-1');
const projectOne = $('#project-1');
const projectTwo = $('#project-2');
const projectThird = $('#project-3');
const firstMessage = $('.first-message');



linkOne.on('click', function () {

    $('.project-show').removeClass('project-show');
    projectOne.addClass('project-show');
    $('.overview').css({ 'height': projectOne.height() });
    console.log('Link1 overview height adjusted ' + $('.overview').height());
});




$('#link-2').on('click', function () {

    $('.project-show').removeClass('project-show');
    projectTwo.addClass('project-show');
    $('.overview').css({ 'height': projectOne.height() });
    console.log('Link2 overview height adjusted ' + $('.overview').height());
});


$('#link-3').on('click', function () {

    $('.project-show').removeClass('project-show');
    $('.first-message').addClass('project-show');
    $('.overview').css({ 'height': $('.first-message').height() });

    console.log('Link3 overview height adjusted ' + $('.overview').height());
});


$('#logo-link').on('click', function () {

    $('.project-show').removeClass('project-show');
    $('.first-message').addClass('project-show');
    $('#logo-link').addClass('logo-rotate');
    $('.current-link').removeClass('current-link')
    $('#link-3').addClass('current-link');
    $('.overview').css({ 'height': $('.first-message').height() });
    setTimeout(function () {
        $('#logo-link').removeClass('logo-rotate');
    }, 200)

    console.log('Link4 overview height adjusted ' + $('.overview').height());
})


$('#email').on('click', function () {
    $('.email-address').removeClass('email-reverse');
    $('.email-address').addClass('email');
    setTimeout(function () {
        $('.email-address').removeClass('email');
        $('.email-address').addClass('email-reverse');
    }, 1800)
})

var link_array = $(".link");
//link_array.each( function () {
//  $('.link').addClass('current-link');
//});
console.log(link_array)

for (let link of link_array) {
    $(link).on('click', () => {
        $('.current-link').removeClass('current-link')
        $(link).addClass('current-link');
    })
}

