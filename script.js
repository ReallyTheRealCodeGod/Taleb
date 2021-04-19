
// function extendMagnificIframe(){

//     var $start = 0;
//     var $iframe = {
//         markup: '<div class="mfp-iframe-scaler">' +
//                 '<div class="mfp-close"></div>' +
//                 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
//                 '</div>' +
//                 '<div class="mfp-bottom-bar">' +
//                 '<div class="mfp-title"></div>' +
//                 '</div>',
//         patterns: {
//             youtube: {
//                 index: 'youtu', 
//                 id: function(url) {   

//                     var m = url.match( /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/ );
//                     if ( !m || !m[1] ) return null;

//                         if(url.indexOf('t=') != - 1){

//                             var $split = url.split('t=');
//                             var hms = $split[1].replace('h',':').replace('m',':').replace('s','');
//                             var a = hms.split(':');

//                             if (a.length == 1){

//                                 $start = a[0]; 

//                             } else if (a.length == 2){

//                                 $start = (+a[0]) * 60 + (+a[1]); 

//                             } else if (a.length == 3){

//                                 $start = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 

//                             }
//                         }                                   

//                         var suffix = '?autoplay=1';

//                         if( $start > 0 ){

//                             suffix = '?start=' + $start + '&autoplay=1';
//                         }

//                     return m[1] + suffix;
//                 },
//                 src: '//www.youtube.com/embed/%id%'
//             },
//             vimeo: {
//                 index: 'vimeo.com/', 
//                 id: function(url) {        
//                     var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
//                     if ( !m || !m[5] ) return null;
//                     return m[5];
//                 },
//                 src: '//player.vimeo.com/video/%id%?autoplay=1'
//             }
//         }
//     };

//     return $iframe;     

// }

$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

//med class definatioenen "tabhover", gør at tabs skifter farve, så man har en ide om at de er "clickable"
$(function() {
    $('.tabhover').hover(function(){
        $(this).css('color', 'black');
    },
    function(){
        $(this).css('color', 'rgb(102, 99, 67)');
    });
});
    
//
function productionTab(event, idOfElement){

   clickSubjectUnderWork("grow")
    $('#produktioner-underRubrik').slideToggle(500, function(e) {

        console.log(getComputedStyle(document.querySelector('#kontakt-underRubrik')).display)
        if(getComputedStyle(document.querySelector('#produktioner-underRubrik')).display === 'block'  
        && getComputedStyle(document.querySelector('#kontakt-underRubrik')).display === 'block')
        {
            $( "#kontakt-underRubrik:not(#produktioner-underRubrik)").slideToggle( 500)

        }
});

    // var x = document.getElementById("produktioner-underRubrik");
    // if (x.style.display === "none") {
    //  x.style.display = "block";
    // } else {
    //  x.style.display = "none";
    // }
}

function kontaktTab(event, idOfElement) {
 
    var x = document.getElementById("");   
    clickSubjectUnderWork("grow")
    
    $('#kontakt-underRubrik').slideToggle(500, function(e){
        
        console.log(getComputedStyle(document.querySelector('#produktioner-underRubrik')).display)

        if(getComputedStyle(document.querySelector('#kontakt-underRubrik')).display === 'block'  
        && getComputedStyle(document.querySelector('#produktioner-underRubrik')).display === 'block')
        {
            $( "#produktioner-underRubrik:not(#kontakt-underRubrik)").slideToggle( 500)
        }
        
        // const element = document.querySelector('tabhover')
        // const style = getComputedStyle(element)
        // var color = style.listStyleType;
        // console.log(color)
        // if(color === 'disc'){
            
            //     $( element ).css( "list-style-type", "square");
            // }else $( element ).css( "list-style-type", "disc");
            
            // const type = style.list-style-type
            // console.log(type + "test")
            
            //     if (x.style.display === "none") {
                //     //  x.style.display = "block";
                //      $('#kontakt-underRubrik').fadeIn('slow');
                //     } else {
                    //     //  x.style.display = "none";
                    //      $('#kontakt-underRubrik').is(":visible") ? 
                    //      $('#kontakt-underRubrik').fadeOut('slow');
                    //     }'
        });
}

var flagAlreadyShrunk = false;
var flagUnderrubrikWorkPressed = false;

function clickSubjectUnderWork(directionOfGrowth, expandSubject) {

    if(directionOfGrowth === "shrink") {
        $("#produktioner").css("font-size","120%")


        if(getComputedStyle(document.querySelector('#'+expandSubject)).display === 'block'){
            $('#'+expandSubject).slideToggle(500)
            return
        }
            if(getComputedStyle(document.querySelector('#underEditorial')).display === 'block'){
                $('#underEditorial').slideToggle(500)
            }
            if(getComputedStyle(document.querySelector('#underArtical')).display === 'block'){
                $('#underArtical').slideToggle(500)
            }
            if(getComputedStyle(document.querySelector('#underPhotos')).display === 'block'){
                $('#underPhotos').slideToggle(500)
            }
        
        $('#'+expandSubject).slideToggle(500)

        if(!flagAlreadyShrunk){
            $('#overskrift-navn').slideToggle(500)
            $('#contact-text').slideToggle(500)
        }
        flagAlreadyShrunk = true;
        flagUnderrubrikWorkPressed = true;
    }

    if(directionOfGrowth === "grow") {

        if(getComputedStyle(document.querySelector('#underEditorial')).display === 'block'){
            $('#underEditorial').slideToggle(500)
        }
        if(getComputedStyle(document.querySelector('#underArtical')).display === 'block'){
            $('#underArtical').slideToggle(500)
        }
        if(getComputedStyle(document.querySelector('#underPhotos')).display === 'block'){
            $('#underPhotos').slideToggle(500)
        }

        $("#produktioner").css("font-size","2em ")
        $("#produktioner").css("font-weight", "bolder")
        if(getComputedStyle(document.querySelector('#produktioner-underRubrik')).display === 'block' && getComputedStyle(document.querySelector('#kontakt-underRubrik')).display === 'block') {
            $('#overskrift-navn').slideToggle(500)
            $('#contact-text').slideToggle(500)

        }
        if(flagAlreadyShrunk) {

            $('#overskrift-navn').slideToggle(500)
            $('#contact-text').slideToggle(500)
            
        }

        flagAlreadyShrunk = false;
    }
}
