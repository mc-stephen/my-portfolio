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
let arr = document.querySelectorAll('.color_changer_container .fa-paint-brush');

// iliterate through all the brush icon for each color
for (arrs in arr){
  // give each icon an onclick even listener
  arr[arrs].onclick = function(){
    // remove all previous icon id name from the body class name
    for (allelem in arr){
      document.body.classList.remove(arr[allelem].id + '_colour');
    }
    // add the specific icon id name that was click to the body class name
    document.body.classList.add(this.id + '_colour');
  }
}
