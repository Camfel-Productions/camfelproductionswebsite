/* global $ */

function slide(){
 
  $( "#slidein" ).slideToggle( "slow", function() {
    // Animation complete.
  });
}






var presentationSummary = document.getElementById("presentation-summary");

console.log(presentationSummary);

function funct() {
    $("#firstspan").hide();
}
function fadestuff() {
$("#elementarylink").fadeIn("slow",function(){});
}


$( "p" ).click(function() {
  $( "p" ).fadeOut( "slow" );
});


