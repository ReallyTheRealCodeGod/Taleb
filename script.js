
 $( ".underRubrik:not(.still)" ).slideToggle( "slow")

$(function() {
    $('.tabhover').hover(function(){
        $(this).css('color', 'black');
    },
    function(){
        $(this).css('color', 'rgb(102, 99, 67)');
    });
});
    
function productionTab(event, idOfElement){
    
    console.log(event, idOfElement)
    $('#produktioner-underRubrik').slideToggle(500, function(e){

        console.log(getComputedStyle(document.querySelector('#kontakt-underRubrik')).display)
        if(getComputedStyle(document.querySelector('#produktioner-underRubrik')).display === 'block'  
        && getComputedStyle(document.querySelector('#kontakt-underRubrik')).display === 'block')
        {
            $( "#kontakt-underRubrik:not(#produktioner-underRubrik)").slideToggle( "slow")

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
    
    console.log(event, idOfElement)

    var x = document.getElementById("");

    $('#kontakt-underRubrik').slideToggle(500, function(e){

        console.log(getComputedStyle(document.querySelector('#produktioner-underRubrik')).display)
        if(getComputedStyle(document.querySelector('#kontakt-underRubrik')).display === 'block'  
        && getComputedStyle(document.querySelector('#produktioner-underRubrik')).display === 'block')
        {
            $( "#produktioner-underRubrik:not(#kontakt-underRubrik)").slideToggle( "slow")

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
