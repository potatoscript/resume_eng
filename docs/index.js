$( document ).ready(function() {
	
      var toggler = document.getElementsByClassName("caret");
	  var i;
	  for (i = 0; i < toggler.length; i++) {
		toggler[i].addEventListener("click", function() {
		  this.parentElement.querySelector(".nested").classList.toggle("active");
		  this.classList.toggle("caret-down");
		});
	 }	
	 
	 
	 var togglerx = document.getElementsByClassName("caretx");
	 var a = document.getElementsByClassName("nestedx");
	  var i;
	  var j;
	  for (i = 0; i < togglerx.length; i++) {
		togglerx[i].addEventListener("click", function() {
		  for (j = 0; j  < a.length; j++) {	
			a[j].classList.toggle("activex");
		  }
		  this.classList.toggle("caret-downx");
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
	
	var obj = document.getElementById("toggle");
　　　　if(obj.value=="全て展開"){
	   obj.value="全て縮小"; 
	}else{
		obj.value="全て展開";
	}
	
	
	var toggler = document.getElementsByClassName("caret");
	  var i;
	  for (i = 0; i < toggler.length; i++) {
		toggler[i].parentElement.querySelector(".nested").classList.toggle("active");
		toggler[i].classList.toggle("caret-down");
	 }	
	 
	 
	 var togglerx = document.getElementsByClassName("caretx");
	 var a = document.getElementsByClassName("nestedx");
	  var i;
	  var j;
	  for (i = 0; i < togglerx.length; i++) {
		  for (j = 0; j  < a.length; j++) {	
			a[j].classList.toggle("activex");
		  }
		  togglerx[i].classList.toggle("caret-downx");
	 }

}



