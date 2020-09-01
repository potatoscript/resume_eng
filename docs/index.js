$( document ).ready(function() {
	
      var toggler = document.getElementsByClassName("caret");
	  var i;
	  for (i = 0; i < toggler.length; i++) {
		toggler[i].addEventListener("click", function() {
		  this.parentElement.querySelector(".nested").classList.toggle("active");
		  this.classList.toggle("caret-down");
		});
	 }	
	 
	 
	 var toggler2 = document.getElementsByClassName("caret2");
	  var i;
	  for (i = 0; i < toggler2.length; i++) {
		toggler2[i].addEventListener("click", function() {
			var element = document.getElementById("init");
			element.classList.toggle("nested2");
		  this.classList.toggle("caret-down2");
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
   
   
   
});


function openall(){
	var toggler = document.getElementsByClassName("caret");
	  var i;
	  for (i = 0; i < toggler.length; i++) {
		toggler[i].parentElement.querySelector(".nested").classList.toggle("active");
		toggler[i].classList.toggle("caret-down");

	 }	
	
    var obj = document.getElementById("toggle");
　　　　if(obj.value=="全て展開"){
	   obj.value="全て縮小";
	}else obj.value="全て展開";
	
}