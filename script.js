
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
