function productionTab(event, idOfElement){
    
    console.log(event, idOfElement)

    $('#produktioner-underRubrik').slideToggle(500);

    // var x = document.getElementById("produktioner-underRubrik");
    // if (x.style.display === "none") {
    //  x.style.display = "block";
    // } else {
    //  x.style.display = "none";
    // }

}

function kontaktTab(event, idOfElement){
    
    console.log(event, idOfElement)

    var x = document.getElementById("kontakt-underRubrik");

    $('#kontakt-underRubrik').slideToggle(500);
//     if (x.style.display === "none") {
//     //  x.style.display = "block";
//      $('#kontakt-underRubrik').fadeIn('slow');
//     } else {
//     //  x.style.display = "none";
//      $('#kontakt-underRubrik').is(":visible") ? 
//      $('#kontakt-underRubrik').fadeOut('slow');
//     }'

}