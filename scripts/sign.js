// <------------------------------------- sign in ---------------------------------->

function popwind(){
	document.getElementById('frame').style.display = "block";
}

function divhide(){
	document.getElementById('frame').style.display = "none";
}

function loadnew(){
    var name = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;


    if(name == "priyal" && pass == "test123"){
        console.log("works");
        document.getElementById("sign").innerHTML = "Hello!";
        document.myform.action = "sign.html"; 
    }
    else{
        console.log("blah");
        document.getElementById("frame").style.display = 'block';
        document.getElementById("false").innerHTML = "Invalid username or password";
        document.getElementById("pass").value = "";
    }

}

// <------------------------------------- logout ---------------------------------->
function logOut(){
  
}


function addmore(){

}

function showswap(){
	
}


// <------------------------------------- slider ---------------------------------->

$(function(){
  'use strict';

  // Slider functions
  function sliderPane(){

    function slide(){
      var sliderCtx = $('#team-slider');
      var slider = sliderCtx.find('.slider');
      var sliderWidth = slider.width();
      var slideWidth = sliderWidth/3;

      var arrLeft = $('.slider-controls .control-left');
      var arrRight = $('.slider-controls .control-right');

      var bullets = $('.slider-bullets .bullet a');


      // Some functions for the slider 
      function slideTo($url){

        function addCurrent($num){
          $('.slider').attr('data-slide', $num);
        }
        slider.css({
          marginLeft: 0
        });
        if($url === '#1'){
          slider.css({
            marginLeft: 0
          });

          addCurrent('1');
        }
        else if($url === '#2'){
          slider.css({
            marginLeft: '-'+slideWidth + 'px'
          });

          addCurrent('2');
        }
        else{
          slider.css({
            marginLeft: '-'+slideWidth*2 + 'px'
          });
          addCurrent('3'); 
        }

      }

      function colorBullets(){
        var slider = $('.slider');

        $('.team-slider a').on('click', function(){
          var num = slider.attr('data-slide');

          if(num === '1'){
            $('.slider-bullets .bullet').removeClass('active');
            $('.slider-bullets .bullet:nth-child(1)').addClass('active');

          }
          else if(num === '2'){
            $('.slider-bullets .bullet').removeClass('active');
            $('.slider-bullets .bullet:nth-child(2)').addClass('active');
          }
          else {
            $('.slider-bullets .bullet').removeClass('active');
            $('.slider-bullets .bullet:nth-child(3)').addClass('active');
          }

        }); 
      }
      // Make it slide ! 
      arrLeft.on('click', function(){ 

        var $this = $(this);

        var url = $this.attr('href');
        slideTo(url);

        if($this.attr('href') === '#3'){ 
          $this.attr('href', '#2'); 
          arrRight.attr('href', '#1'); 
        }  
        else if($this.attr('href') === '#2'){
          $this.attr('href', '#1'); 
          arrRight.attr('href', '#3');
        }
        else {
          $this.attr('href', '#3');
          arrRight.attr('href', '#2');
        }

      });
      arrRight.on('click', function(){
        var $this = $(this);
        var url = $this.attr('href'); 
        slideTo(url);

        if($this.attr('href') === '#3'){
          $this.attr('href', '#1');
          arrLeft.attr('href', '#2'); 
        }
        else if($this.attr('href') === '#1'){
          $this.attr('href', '#2'); 
          arrLeft.attr('href', '#3');
        }
        else {
          $this.attr('href', '#3');
          arrLeft.attr('href', '#1');
        }

      });
      bullets.on('click', function(){
        var url = $(this).attr('href');
        if (url == "#1"){
          arrLeft.attr('href', '#3');
          arrRight.attr('href', '#2');
        }
        else if (url == "#2"){
          arrLeft.attr('href', '#1');
          arrRight.attr('href', '#3');
        }
        else {
          arrLeft.attr('href', '#2');
          arrRight.attr('href', '#1');
        }
        
        slideTo(url);
      });
      colorBullets();
    }
    slide();
  }
  sliderPane();
})