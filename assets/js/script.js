/*------------------------------------------------------------------------- 
LOADER ANIMATION
---------------------------------------------------------------------------*/
$(window).on("load",function(){
      $(".loader_wrapper").fadeOut("slow");
  });
  $(document).ready(function(){
    $(".open_close").click(function(){
      $(".links_icon_section").slideToggle("slow");
    });
  });
/*------------------------------------------------------------------------- 
the spin btn to open the color container For changing the color of the page
---------------------------------------------------------------------------*/
var open_close_btn = document.querySelector('.btn_changecolor');
var container = document.querySelector('.color_changer_container');

open_close_btn.onclick = function () {
	container.classList.toggle("open");
}


/*-----------------------------------------------------------------
for the links
---------------------------------------------------------------------*/
//this called it to open and close
var toggle = document.querySelector('#home_link');
var toggle_1 = document.querySelector('#blog_link');
var toggle_2 = document.querySelector('#story_link');
var toggle_3 = document.querySelector('#about_link');
var toggle_4 = document.querySelector('#contact_link');
//ends here
// this called it to open and close
var open_slide_1 = document.getElementById('home_link_btn');
var open_slide_2 = document.getElementById('blog_link_btn');
var open_slide_3 = document.getElementById('story_link_btn');
var open_slide_4 = document.getElementById('about_link_btn');
var open_slide_5 = document.getElementById('contact_link_btn');


// for opining it
open_slide_1.onclick = function () {
  toggle.classList.toggle("toggle");
  open_slide_1.classList.toggle("D_color");
}
open_slide_2.onclick = function () {
  toggle_1.classList.toggle("toggle");
  open_slide_2.classList.toggle("D_color");
}
open_slide_3.onclick = function () {
  toggle_2.classList.toggle("toggle");
  open_slide_3.classList.toggle("D_color");
}
open_slide_4.onclick = function () {
  toggle_3.classList.toggle("toggle");
  open_slide_4.classList.toggle("D_color");
}
open_slide_5.onclick = function () {
  toggle_4.classList.toggle("toggle");
  open_slide_5.classList.toggle("D_color");
}



//------------------------------------------------------
// FOR CHANGING THE BACKGROUND, TEXT OR BUTTON COLOR
//-------------------------------------------------------
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var orange = document.getElementById('orange');
var gold = document.getElementById('gold');
var purple = document.getElementById('purple');
var pink = document.getElementById('pink');
var brown = document.getElementById('brown');
var gray = document.getElementById('gray');
var skyblue = document.getElementById('skyblue');

red.onclick = function () {
  document.body.classList.add("red_colour");
  if (document.body.classList.contains("red_colour")) {
       document.body.classList.remove("blue_colour","green_colour","orange_colour","gold_colour","purple_colour","pink_colour","brown_colour","gray_colour","skyblue_colour");
  }
}
blue.onclick = function () {
  document.body.classList.add("blue_colour");
  document.body.classList.remove("red_colour","green_colour","orange_colour","gold_colour","purple_colour","pink_colour","brown_colour","gray_colour","skyblue_colour");
}
green.onclick = function () {
  document.body.classList.add("green_colour");
  document.body.classList.remove("blue_colour","red_colour","orange_colour","gold_colour","purple_colour","pink_colour","brown_colour","gray_colour","skyblue_colour");
}
orange.onclick = function () {
  document.body.classList.add("orange_colour");
  document.body.classList.remove("blue_colour","green_colour","red_colour","gold_colour","purple_colour","pink_colour","brown_colour","gray_colour","skyblue_colour");
}
gold.onclick = function () {
  document.body.classList.add("gold_colour");
  document.body.classList.remove("blue_colour","green_colour","orange_colour","red_colour","purple_colour","pink_colour","brown_colour","gray_colour","skyblue_colour");
}
purple.onclick = function () {
  document.body.classList.add("purple_colour");
  document.body.classList.remove("blue_colour","green_colour","orange_colour","gold_colour","red_colour","pink_colour","brown_colour","gray_colour","skyblue_colour");
}
pink.onclick = function () {
  document.body.classList.add("pink_colour");
  document.body.classList.remove("blue_colour","green_colour","orange_colour","gold_colour","purple_colour","red_colour","brown_colour","gray_colour","skyblue_colour");
}
brown.onclick = function () {
  document.body.classList.add("brown_colour");
  document.body.classList.remove("blue_colour","green_colour","orange_colour","gold_colour","purple_colour","pink_colour","red_colour","gray_colour","skyblue_colour");
}
gray.onclick = function () {
  document.body.classList.add("gray_colour");
  document.body.classList.remove("blue_colour","green_colour","orange_colour","gold_colour","purple_colour","pink_colour","brown_colour","red_colour","skyblue_colour");
}
skyblue.onclick = function () {
  document.body.classList.add("skyblue_colour");
  document.body.classList.remove("blue_colour","green_colour","orange_colour","gold_colour","purple_colour","pink_colour","brown_colour","gray_colour","red_colour");
}
