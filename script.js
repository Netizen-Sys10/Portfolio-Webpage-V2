
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
    $('.contact-form').css( { 'height' :  $('.picture').height()})
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
const projectThree = $('#project-3');
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


$('#link-4').on('click', function () {

    $('.project-show').removeClass('project-show');
    projectThree.addClass('project-show');
    $('.overview').css({ 'height': projectOne.height() });
    console.log('Link4 overview height adjusted ' + $('.overview').height());
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
    $('.current-link').removeClass('current-link')
    $('#link-4').addClass('current-link');
    $('.project-show').removeClass('project-show');
    projectThree.addClass('project-show');
   //setTimeout(function () {$('#first-input').trigger( "focus")}, 100)

    $('.overview').css({ 'height': projectOne.height() });
    $('.contact-form').css( { 'height' :  $('.picture').height()})
   
    console.log('Link2 overview height adjusted ' + $('.overview').height());
    
})

/*let form = $('.contact-form');
$('#btnsubmit').on('click', () => {
    setTimeout(function () {
        //form[0].reset();
        console.log('the form has been reset')
    }, 2000)
   
})*/



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

console.log($('#firstinput').value)



const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ss3aryr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    }).then(() => {
        let form = $('.contact-form');
        form[0].reset();
        console.log('the form has been reset')
    }).then(() => {
        $('.project-show').removeClass('project-show');
        $('#project-4').addClass('project-show');
        $('.contact-form').css( { 'height' :  $('.picture').height()})
    });
});



$('#btnback').on('click', function () {

    $('.project-show').removeClass('project-show');
    $('.first-message').addClass('project-show');
    $('.current-link').removeClass('current-link')
    $('#link-3').addClass('current-link');
    $('.overview').css({ 'height': $('.first-message').height() });

})