/******Global variable to set the tab menu action*************/
var hrefSelector        = "",
    el                 = "",
    colOne             = "",
    columnReadyCounter  = 0,
    speedOne            = 1000,
	target_tab			= 1,
	columnReadyCounter  = 0;

var t = 0;
var t2 = 0;
var t3 = 0;

$( document ).ready(function() {
	
	 
	
	document.getElementById("caret-basic").addEventListener("click", function() {
	  if(t==0){
		  $(".active").hide();
		  t=1;
	  }else{
		  $(".active").show();
		  t=0;
	  }		  
	  this.classList.toggle("caret-basic-down");
	}); 
	 
	
	document.getElementById("caret2").addEventListener("click", function() {
	  if(t2==0){
		  $(".active2").hide();
		  t2=1;
	  }else{
		  $(".active2").show();
		  t2=0;
	  }		  
	  this.classList.toggle("caret-down2");
	});
	
	document.getElementById("caret3").addEventListener("click", function() {
	  if(t3==0){
		  $(".nested3").hide();
		  t3=1;
	  }else{
		  $(".nested3").show();
		  t3=0;
	  }		  
	  this.classList.toggle("caret-down3");
	});
	 
	 var toggler = document.getElementsByClassName("caretx");
	  var i;
	  for (i = 0; i < toggler.length; i++) {
		toggler[i].addEventListener("click", function() {
		  this.parentElement.querySelector(".nestedx").classList.toggle("active");
		  this.classList.toggle("caret-down");
		});
	 }




	
   $('.flipItem')
	.mouseover(
	  function(){
	    var $this = $(this);
	   
	    //$.expand($this,80,80);
	    $this.css("zIndex",1000);    
	
	})
	.mouseleave(function(){
	  var $this = $(this);
	  //$.collapse($this,50,50);
	  $this.css("zIndex",900);  
	});		
	
   $("#bruce")
   .css("cursor","pointer")
   .mouseenter(function(){
      $("#div_bruce").show();
   })
   .mouseout(function(){
      $("#div_bruce").hide();	   
   })
   
   
   /******* Tab Menu Setting ****************/
   var allContentBoxes  = $(".content-box");
   var allTabs          = $(".tabs li a");

	$(".box-wrapper").css({
		"width":window.innerWidth-340+"px",
		"height":window.innerHeight-90+"px"
   });
   $("#table-skill").css({
		"width":window.innerWidth-380+"px"
   });
   $(".content-box,.col-one col").css({
		"width":window.innerWidth-350+"px",
		"height":window.innerHeight-100+"px",
		"overflow":"auto"
   });


    $(".tabs li:first-child a, .content-box:first").addClass("current");
    $(".box-wrapper .current .col").css("top",100);
	$('.col-one').css({
      'top':-1000+'px'
    });
    $(".box-wrapper .current .col-one").css("top",0);

    $('.col-one-2').css({
      'top':window.innerHeight-165+'px'
    });
    $(".box-wrapper-2 .current-2 .col-one-2").css("top",0);
	
	
    $("#menu_tabs").delegate(".tabs a","click",function(){
      el = $(this);
      if((!el.hasClass("current"))&&($(":animated").length==0)){
        allTabs.removeClass("current");
        el.addClass("current");
        speedOne=Math.floor(Math.random()*1000)+500;
        colOne=$(".box-wrapper .current .col-one");
        colOne.animate({
          "top":-colOne.height()*10
        },speedOne);

        allContentBoxes.removeClass("current");
        $("#"+hrefSelector).addClass("current");
        $(".box-wrapper .current .col-one").animate({
          "top":10+"px"
        },speedOne, function(){ifReadyThenReset();});

      }
    })
   
   
});


function hrefClick(a){ //to select the tab id
  	hrefSelector=a;
};
function ifReadyThenReset(){
    columnReadyCounter++;
  	if(columnReadyCounter==3){
  		$(".col").not(".current .col").css("top",window.innerHeight-50+"px");
  		columnReadyCounter = 0;
  	}
}



function openall(){
	
	var obj = document.getElementById("toggle");
　　　　if(obj.value=="全て展開"){
	   obj.value="全て縮小"; 

	  $(".active").show();
	  t=0;
	  document.getElementById("caret-basic").classList.toggle("caret-basic-down");

	  $(".active2").show();
	  t2=0;	  
	  document.getElementById("caret2").classList.toggle("caret-down2");

	}else{
		obj.value="全て展開";
		$(".active").hide();
		  t=1;
		$(".active2").hide();
		  t2=1;  
	}


}



