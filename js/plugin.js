$(function () {

    // Toggle Show Contetn of The Box

    $('.box-head').click(function() {
        $('.box-desc').slideToggle(400).toggleClass('show');
        if($('.box-desc').hasClass('show')) {
            $('i.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else{
            $('i.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        
        }

    });

    // Change Collapse On Focus 

    $('.navbar-toggle').on('click', function () {
        let n = 0;
        if( n === 0 ) {
            $('.navbar-collapse').css('background', '#252830');
            n++;
        } else {
            $('.navbar-collapse').css('background', 'transparent');
            n = 0;
        }
        
    });;


    // Fade Out Lodaing Page When Page Downloaded

    window.onload = function() {
        $('.spinner-box .spinner').fadeOut(500, function() {
            $(this).parent().fadeOut(600);
        });
    }
    
});