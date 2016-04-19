$(document).ready(function(){

  $(".join-us").hover(function(){
    $(".tooltip").toggleClass("showMe")
  });


  $("#tab-link2").click(function(e){
    $("#tab-link1").removeClass("tab-link-active");
    $("#tab-link2").addClass("tab-link-active");
     $("#tab1-content").removeClass("tab-content-active").addClass("tab-content-inactive");
     $("#tab2-content").removeClass("tab-content-inactive").addClass("tab-content-active");
      e.preventDefault();
  });

  $("#tab-link1").click(function(e){
    $("#tab-link2").removeClass("tab-link-active");
    $("#tab-link1").addClass("tab-link-active");
     $("#tab2-content").removeClass("tab-content-active").addClass("tab-content-inactive");
     $("#tab1-content").removeClass("tab-content-inactive").addClass("tab-content-active");
      e.preventDefault();
  })

//to trigger the background color change of the navbar when a point is reached
var waypoint = new Waypoint({
  element: document.getElementById('aboutus'),
  handler: function(direction) {
    if(direction=== 'down'){
         $('.topnav').css({"background-color":"green"});
         }
         else if(direction === 'up'){
          $('.topnav').css({"background-color":""});
         }
    // $(".topnav").css({"background-color":"green"})
  }
})

})
