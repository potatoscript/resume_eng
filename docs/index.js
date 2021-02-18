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
	
	/*
	var game = new Game(scr_width,scr_height);
    game.fps = 30;
	game.scale = 1;
    game.onload = function(){
		var scence = new GameScene();
		game.replaceScene(scence);
	}
	game.sart();
	var GameScene = Class.create(Scene,{
		initialize:function(){
			Scene.apply(this);
			var game = Game.instance;
			this.backgroundColor="blue";
		},
		onenterframe:function(evt){
			
		}
	});
	*/
	 
	//bullet list
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
   var allContentBoxes  = $(".content-box-menu");
   var allTabs          = $(".tabs-menu li a");

	$(".box-wrapper-menu").css({
		"width":760+"px",
		"height":1600+"px"
   });
   $("#table-skill").css({
		"width":750+"px"
   });
   $(".content-box-menu,.col-one-menu col").css({
		"width":750+"px",
		"height":1590+"px",
		"overflow":"auto"
   });

	
	setMenuSize();


    $(".tabs-menu li:first-child a, .content-box-menu:first").addClass("current");
    $(".box-wrapper-menu .current .col").css("top",10+"px");
	$('.col-one-menu').css({
      'top':-3000+'px'
    });
    $(".box-wrapper-menu .current .col-one-menu").css("top",0);
	
	
    $("#menu_tabs").delegate(".tabs-menu a","click",function(){
      el = $(this);
	  
      if((!el.hasClass("current"))&&($(":animated").length==0)){
		  
		//to reset all page to 0 position to prevent the tabs-menu error on hiding the page while the page was scolled down
		$(".content-box-menu").animate({ scrollTop: 0 }, "slow");
		  
        allTabs.removeClass("current");
        el.addClass("current");
        speedOne=Math.floor(Math.random()*1000)+500;
        colOne=$(".box-wrapper-menu .current .col-one-menu");
        colOne.animate({
          "top":-3000+"px"
        },speedOne);

        allContentBoxes.removeClass("current");
        $("#"+hrefSelector).show().addClass("current");
		if(hrefSelector=="one"){
			document.getElementById("boygirl").src="index.enchant.html";
			document.getElementById("boygirl").style.display="block";
		}else{
			document.getElementById("boygirl").src="empty.html";
			document.getElementById("boygirl").style.display="none";
		}
        $(".box-wrapper-menu .current .col-one-menu").animate({
          "top":10+"px"
        },speedOne, function(){ifReadyThenReset();});

      }
    })
   
   
   $('.item')
      .mouseenter(
      function(){
        var $this = $(this);
          $.expand($this,200,230);
          //$('.system_arrow').html("△");
      })
      .mouseleave(
      function(){
        var $this = $(this);
        $.collapse($this,160,50);
        //$('#system1_arrow').html("▽");
      }
    );
	
	$('.item2')
      .mouseenter(
      function(){
        var $this = $(this);
          $.expand($this,310,310);
          //$('.system_arrow').html("△");
      })
      .mouseleave(
      function(){
        var $this = $(this);
        $.collapse($this,160,50);
        //$('#system1_arrow').html("▽");
      }
    );
	
	$('.menu')
      .mouseenter(function(){ 
          $.collapse($('.menu-current'),100,40);
		  $('.menu-current').css({
			"border-top-right-radius": "7px",
			"border-bottom-right-radius": "7px",  
			"background":"white"
		  })
		  $.expand($(this),130,40);
		  $(this).css({
			"border-top-right-radius": "20px",
			"border-bottom-right-radius": "20px",  
			"background":"#f0ffda"
		  })
		  
      })
      .mouseleave(function(){
        $.collapse($(this),100,40);
		$(this).css({
			"border-top-right-radius": "7px",
			"border-bottom-right-radius": "7px",  
			"background":"white"
		  })
		  
		  $.expand($('.menu-current'),130,40);
		  $(".menu-current").css({
			"border-top-right-radius": "20px",
			"border-bottom-right-radius": "20px",  
			"background":"#f0ffda"
		  })  
		  
      })
	  .click(function(){
		  $('#menu div').removeClass("menu-current");
		  $(this).addClass("menu-current");
		  $('.menu-current').css({
			"border-top-right-radius": "7px",
			"border-bottom-right-radius": "7px",  
			"background":"white"
		  })
		  
		  $.collapse($('.menu'),100,40);
		  $(".menu").css({
			"border-top-right-radius": "7px",
			"border-bottom-right-radius": "7px",  
			"background":"white"
		  })
		  $.expand($(this),130,40);
		  $(this).css({
			"border-top-right-radius": "20px",
			"border-bottom-right-radius": "20px",  
			"background":"#f0ffda"
		  })
		  
		  $(".menu-show").hide();
		  $(".menu-hide").hide();
		  $("#div-"+this.id).show();
		  
	  })
	
	/*
	$('.menu-current')
      .mouseenter(function(){
          $.expand($(this),130,40);
      })
      .mouseleave(function(){
		  /*
		if($('.menu-current').width>100){
			$.collapse($(this),100,40);
			$('.menu').css({
				"border-top-right-radius": "7px",
				"border-bottom-right-radius": "7px",
				"background":"white"
			})
		}
		
      })
	 */ 
	

	$('#table-btn td p')
      .mouseenter(
      function(){
        $(this).css("paddingTop","0px");
      })
      .mouseleave(
      function(){
        $(this).css("paddingTop","10px");
      }
    );
	$('#table-btn2 td p')
      .mouseenter(
      function(){
        $(this).css("paddingTop","0px");
      })
      .mouseleave(
      function(){
        $(this).css("paddingTop","10px");
      }
    );
   
   
   window.onresize = function(event){
    setMenuSize();
   }
   
   
   //start the rubber flow animation
   var fifthRotate = new RotatingImage('cavfillout/injection','.jpg','rotate2',25,1,1,1,null,null,false);
   fifthRotate.startAutoRot(300,true);
   
   doughnutLocation();
   
   setOrgChartNode();
   
   document.getElementById("boygirl").src="index.enchant.html";
   
   
});

function docDownload(){
	var d = document.getElementById("doc_iframe");
	d.style.display="block";
	d.href = "files/resume.pdf";
	d.click();
}

function hrefClick(a){ //to select the tab id
  	hrefSelector=a;
	if(a=="one"){
		doughnutLocation();
	}
	if(a=="two"){
		radarSkill();
	}
};
function ifReadyThenReset(){
    columnReadyCounter++;
  	if(columnReadyCounter==3){
  		$(".col").not(".current .col").css("top",window.innerHeight-50+"px");
  		columnReadyCounter = 0;
  	}
}

function linkToEducation(){
	var d = document.getElementById("doc_iframe");
	d.style.display="block";
	d.href = "files/Education.pdf";
	d.click();
}

function linkToEnglishLevel(){
	var d = document.getElementById("doc_iframe");
	d.style.display="block";
	d.href = "files/TOEIC.jpg";
	d.click();
}

function linkToFaceBook(){
	/*
	var d = document.getElementById("doc_iframe");
	d.style.display="block";
	d.href = "https://en.wikipedia.org/wiki/Malaysia";
	d.click();
	*/
	alert("Under Construction");
}

function linkToSaveDriving(){
	var d = document.getElementById("doc_iframe");
	d.style.display="block";
	d.href = "files/DrivingResult.jpg";
	d.click();
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

function doughnutLocation(){
	
	var config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						21,
						2,
						5,
						2,
						13,
					],
					backgroundColor: [
						window.chartColors.grey,
						window.chartColors.blue,
						window.chartColors.green,
						window.chartColors.yellow,
						window.chartColors.red,
					],
					label: 'Dataset 1'
				}],
				labels: [
					'ﾏﾚｰｼｱ',
					'ｲｷﾞﾘｽ',
					'ｼﾝｶﾞﾎﾟｰﾙ',
					'ﾀｲ',
					'日本'
				]
			},
			options: {
				responsive: true,
				legend: {
					display:false,
					position: 'bottom',
				},
				title: {
					display: false,
					text: '在住年数'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				},
				plugins: { ////by adding the plugin chartjs-plugin-labels.js
				  labels: {
					render: function (args) {
					  return args.label +" "+ args.value+"年";
					},
					arc: false,
					fontSize: 12,
					fontColor: 'blue',
					position: 'outside'
				  }
				}

			}
		};

	var ctx = document.getElementById('locationChart').getContext('2d');

	var myDoughnutChart = new Chart(ctx, config);

}

function radarSkill(){
	
	var marksData = {
	  labels: ["Listening", "Speaking", "Reading", "Writing", "Typing"],
	  datasets: [{
		label: "英語 (日常会話レベル TOIEC 820)",
		backgroundColor: "transparent",
		borderColor: "rgba(200,0,0,0.6)",
		fill: false,
		radius: 6,
		pointRadius: 6,
		pointBorderWidth: 3,
		pointBackgroundColor: "orange",
		pointBorderColor: "rgba(200,0,0,0.6)",
		pointHoverRadius: 10,
		data: [70, 60, 70, 70, 70]
	  }, {
		label: "日本語 (日常会話レベル N2)",
		backgroundColor: "transparent",
		borderColor: "rgba(0,0,200,0.6)",
		fill: false,
		radius: 6,
		pointRadius: 6,
		pointBorderWidth: 3,
		pointBackgroundColor: "cornflowerblue",
		pointBorderColor: "rgba(0,0,200,0.6)",
		pointHoverRadius: 10,
		data: [70, 60, 60, 30, 60]
	  }, {
		label: "中国語 (日常会話レベル)",
		backgroundColor: "transparent",
		borderColor: "Green",
		fill: false,
		radius: 6,
		pointRadius: 6,
		pointBorderWidth: 3,
		pointBackgroundColor: "lightgreen",
		pointBorderColor: "Green",
		pointHoverRadius: 10,
		data: [90, 80, 70, 30, 30]
	  }, {
		label: "マレーシア語 (日常会話レベル)",
		backgroundColor: "transparent",
		borderColor: "Black",
		fill: false,
		radius: 6,
		pointRadius: 6,
		pointBorderWidth: 3,
		pointBackgroundColor: "White",
		pointBorderColor: "Black",
		pointHoverRadius: 10,
		data: [70, 40, 50, 30, 30]
	  }]
	};
	 /*
	var chartOptions = {
	  scale: {
		ticks: {
		  beginAtZero: true,
		  min: 0,
		  max: 100,
		  stepSize: 10
		},
		pointLabels: {
		  fontSize: 15
		}
	  },
	  legend: {
		position: 'left',
		"labels": {
                "fontSize": 13,
            }
		
	  },
	  //responsive: false
	};
	*/
	var chartOptions = {
	  scale: {
		ticks: {
		  beginAtZero: true,
		  min: 0,
		  max: 100,
		  stepSize: 10
		},
		pointLabels: {
		  fontSize: 15
		}
	  },
	  legend: {
		position: 'left'
	  },
	  responsive: true
	};
	
	var radarChart = new Chart(skillChart, {
		type: 'radar',
		data: marksData,
		options: chartOptions
	});

}


function setMenuSize(){
	try{
		
		$(".box-wrapper-menu").css({
		"width":window.innerWidth-300+"px",
		"height":window.innerHeight-70+"px"
	   });
	   $("#table-skill").css({
			"width":750+"px"
	   });
	   $(".content-box-menu,.col-one-menu col").css({
			"width":window.innerWidth-310+"px",
			"height":window.innerHeight-70+"px",
			"overflow":"auto"
	   });
		
	}catch(err){
	}
}


/*********Ansys***************/	 
function rotatingImageError(rotError,useThrow) {
		rotError = { name: 'RotatingImage error', message: rotError, description: rotError };
		if( useThrow ) { eval('throw(rotError)'); } else { alert( rotError.name + ': ' + rotError.message ); }
	}

	function getRotPositionFromEvent(mousEvent) {
		if( typeof( mousEvent.pageX ) != 'undefined' ) {
			return [mousEvent.pageX,mousEvent.pageY];
		} else {
			var startX = mousEvent.clientX, startY = mousEvent.clientY;
			if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
				return [startX+document.documentElement.scrollLeft,startY+document.documentElement.scrollTop];
			} else {
				return [startX+document.body.scrollLeft,startY+document.body.scrollTop];
			}
		}
	}

	function RotatingImage( imgPrefix, imgExt, imgName, numRot, numTilt, curRot, curTilt, progressScript, oReadyScript, useThrow ) {

		//check for errors
		var rotError = '';
		if( !this.startAutoRot ) { rotError += '\n* Use the \'new\' keyword when calling the RotatingImage function.'; }
		if( typeof(imgPrefix) != 'string' ) { rotError += '\n* Image prefix must be a string.'; }
		if( typeof(imgExt) != 'string' ) { rotError += '\n* Image extension must be a string.'; }
		if( typeof(imgName) != 'string' ) { rotError += '\n* Image name must be a string.'; }
		if( RotatingImage.prototype.doneImages[imgName] ) { rotError += '\n* Image name'+imgName+' has already been set up ready to rotate. This cannot be done twice for a single image.'; }
		if( isNaN(numRot) || numRot < 1 || parseInt(numRot) != numRot ) { rotError += '\n* Number of images in the rotation must be a whole number >= 1.'; }
		if( isNaN(numTilt) || numTilt < 1 || parseInt(numTilt) != numTilt ) { rotError += '\n* Number of tilt angles must be a whole number >= 1.'; }
		if( isNaN(curRot) || curRot < 1 || curRot > numRot || parseInt(curRot) != curRot ) { rotError += '\n* Current rotation must be a whole number between 1 and the number of images in the rotation.'; }
		if( isNaN(curTilt) || curTilt < 1 || curTilt > numTilt || parseInt(curTilt) != curTilt ) { rotError += '\n* Current tilt must be a whole number between 1 and the number of tilt angles.'; }
		if( rotError ) { rotatingImageError(rotError,useThrow); return; }
		RotatingImage.prototype.doneImages[imgName] = true;

		//store values
		this.imgPrefix = imgPrefix;
		this.imgExt = imgExt;
		this.imgName = imgName;
		this.numRot = numRot;
		this.numTilt = numTilt;
		this.curRot = curRot;
		this.curTilt = curTilt;
		this.useThrow = useThrow;

		//prepare automation
		this.rotInterval = 0;
		this.tiltInterval = 0;
		this.pausedX = false;
		this.pausedY = false;

		//begin preloading required images - this could take a while :)
		this.preloadComplete = false;
		this.imagesLoaded = 0;
		this.imageCache = [];
		var rotref = this;
		for( var i = 1; i <= numRot; i++ ) {
			this.imageCache[i] = [];
			for( var j = 1; j <= numTilt; j++ ) {
				//index 0 is unused in both array levels
				//this is harmless but makes it easier to use later without having to add and subtract 1 (so it is more efficient)
				this.imageCache[i][j] = new Image();
				this.imageCache[i][j].onload = (function (theImage) { return function () {
					if( theImage.alreadyload ) { return; }
					theImage.alreadyload = true;
					rotref.imagesLoaded++;
					if( progressScript ) { progressScript( rotref.imagesLoaded / ( rotref.numRot * rotref.numTilt ) ); }
					if( rotref.imagesLoaded == rotref.numRot * rotref.numTilt ) {
						if( oReadyScript ) { oReadyScript(); }
						rotref.preloadComplete = true;
					}
				}; })(this.imageCache[i][j]); //workaround for Safari stupidity ('this' points to window)
				this.imageCache[i][j].onerror = function () { this.onload(); };
				this.imageCache[i][j].src = this.imgPrefix + '_' + i + '_' + j + this.imgExt;
				if( this.imageCache[i][j].complete ) { this.imageCache[i][j].onload(); }
			}
		}
	}
	RotatingImage.prototype.doneImages = {};

	//general redraw
	RotatingImage.prototype.redraw = function () {
		if( !this.image ) { this.image = document.images[this.imgName]; if( !this.image ) { return; } }
		this.image.src = this.imageCache[this.curRot][this.curTilt].src;
	};

	//automation
	RotatingImage.prototype.startAutoTilt = function (oTime,oStartDir) {
		var oOb = this;
		if( this.numTilt < 2 ) {
			rotatingImageError('AutoTilt can only be used if more than one tilt angles are being used.',this.useThrow); return;
		}
		if( isNaN(oTime) || oTime < 10 || parseInt(oTime) != oTime ) {
			rotatingImageError('AutoTilt needs to be passed an integer greater than 10 to use as the stepping interval.',this.useThrow); return;
		}
		this.stopAutoTilt();
		this.tiltDirection = oStartDir;
		this.tiltInterval = setInterval(function () {
			if( oOb.preloadComplete && !oOb.pausedY && ( oOb.image || document.images[oOb.imgName] ) ) {
				if( oOb.tiltDirection && oOb.curTilt == oOb.numTilt ) { oOb.tiltDirection = false; }
				if( !oOb.tiltDirection && oOb.curTilt == 1 ) { oOb.tiltDirection = true; }
				if( oOb.tiltDirection ) { oOb.tiltUp(true); } else { oOb.tiltDown(true); }
			}
		},oTime);
	};
	RotatingImage.prototype.stopAutoTilt = function () {
		if( this.tiltInterval ) {
			clearInterval(this.tiltInterval);
			this.tiltInterval = 0;
		}
	};
	RotatingImage.prototype.startAutoRot = function (oTime,oDir) {
		var oOb = this;
		if( isNaN(oTime) || oTime < 10 || parseInt(oTime) != oTime ) {
			rotatingImageError('AutoRotate needs to be passed an integer greater than 10 to use as the stepping interval.',this.useThrow); return;
		}
		this.stopAutoRot();
		this.rotDirection = oDir;
		this.rotInterval = setInterval(function () {
			if( oOb.preloadComplete && !oOb.pausedX && ( oOb.image || document.images[oOb.imgName] ) ) {
				if( oOb.rotDirection ) { oOb.rotateUp(true); } else { oOb.rotateDown(true); }
			}
		},oTime);
	};
	RotatingImage.prototype.stopAutoRot = function () {
		if( this.rotInterval ) {
			clearInterval(this.rotInterval);
			this.rotInterval = 0;
		}
	};

	//individual tilt/rotation
	RotatingImage.prototype.tiltTo = function (oTilt,oAllow) {
		if( !oAllow ) { this.stopAutoTilt(); }
		if( isNaN(oTilt) || oTilt < 1 || oTilt > this.numTilt || parseInt(oTilt) != oTilt ) {
			rotatingImageError('tiltTo number must be a whole number between 1 and the number of tilt angles.',this.useThrow); return;
		}
		this.curTilt = oTilt;
		this.redraw();
	};
	RotatingImage.prototype.tiltUp = function (oAllow) {
		if( !oAllow ) { this.stopAutoTilt(); }
		if( this.curTilt < this.numTilt ) {
			this.curTilt++;
			this.redraw();
		}
	};
	RotatingImage.prototype.tiltDown = function (oAllow) {
		if( !oAllow ) { this.stopAutoTilt(); }
		if( this.curTilt > 1 ) {
			this.curTilt--;
			this.redraw();
		}
	};
	RotatingImage.prototype.rotateTo = function (oRot,oAllow) {
		if( !oAllow ) { this.stopAutoRot(); }
		if( isNaN(oRot) || oRot < 1 || oRot > this.numRot || parseInt(oRot) != oRot ) {
			rotatingImageError('rotateTo number must be a whole number between 1 and the number of images in the rotation.',this.useThrow); return;
		}
		this.curRot = oRot;
		this.redraw();
	};
	RotatingImage.prototype.rotateUp = function (oAllow) {
		if( !oAllow ) { this.stopAutoRot(); }
		this.curRot++;
		if( this.curRot > this.numRot ) { this.curRot = 1; }
		this.redraw();
	};
	RotatingImage.prototype.rotateDown = function (oAllow) {
		if( !oAllow ) { this.stopAutoRot(); }
		this.curRot--;
		if( !this.curRot ) { this.curRot = this.numRot; }
		this.redraw();
	};

	//panning
	RotatingImage.prototype.setPanning = function (oX,oY,oStopX,oStopY) {
		var oOb = this;
		if( !this.image ) { this.image = document.images[this.imgName]; if( !this.image ) {
			rotatingImageError('Panning cannot be allowed until after the image has been created.',this.useThrow); return;
		} }
		if( !oX && !oY ) {
			this.image.onmousedown = null;
			if( this.image.style ) { this.image.style.cursor = ''; }
			return;
		}
		if( this.image.style ) { this.image.style.cursor = 'move'; }
		this.image.ondragstart = function () { return false; }
		this.image.onselectstart = function () { return false; }
		this.image.onmousedown = function (e) {
			if( !e ) { e = window.event; } if( !e ) { return true; }
			if( e.button > 1 || e.which > 1 ) { return true; }
			var startRotImg = oOb.curtRot, startTiltImg = oOb.curtTilt, startPos = getRotPositionFromEvent(e), oldmouseup = document.onmouseup, curSegs = [0,0];
			this.onmousemove = function (e) {
				if( !e ) { e = window.event; }
				var newSegs = [ this.width / ( oOb.numRot / 2 ), this.height / oOb.numTilt ];
				var mousePos = getRotPositionFromEvent(e);
				newSegs[2] = newSegs[0] = Math.round( ( mousePos[0] - startPos[0] ) / newSegs[0] );
				newSegs[3] = newSegs[1] = Math.round( ( mousePos[1] - startPos[1] ) / newSegs[1] );
				if( oX ) {
					if( oStopX ) { oOb.stopAutoRot(); }
					oOb.pausedX = true;
					while( newSegs[0] > curSegs[0] ) { oOb.rotateDown(!oStopX); newSegs[0]--; }
					while( newSegs[0] < curSegs[0] ) { oOb.rotateUp(!oStopX); newSegs[0]++; }
				}
				if( oY ) {
					if( oStopY ) { oOb.stopAutoTilt(); }
					oOb.pausedY = true;
					while( newSegs[1] > curSegs[1] ) { oOb.tiltDown(!oStopY); newSegs[1]--; }
					while( newSegs[1] < curSegs[1] ) { oOb.tiltUp(!oStopY); newSegs[1]++; }
				}
				curSegs = [newSegs[2],newSegs[3]];
			};
			document.onmouseup = function () {
				oOb.pausedX = false;
				oOb.pausedY = false;
				oOb.image.onmousemove = null;
				document.onmouseup = oldmouseup;
			};
			return false;
		};
	};

	//zooming
	RotatingImage.prototype.setupZoomInformation = function() {	if( !this.image ) { this.image = document.images[this.imgName]; if( !this.image ) {
			rotatingImageError('Images cannot be zoomed until after they have been created.',this.useThrow); return;
		} }
		if( !this.rotZoomDetails ) {
			if( !this.image.height && !this.image.width ) {
				rotatingImageError('Images cannot be zoomed until after they have loaded.',this.useThrow); return;
			}
			this.rotZoomDetails = { height: this.image.height, width: this.image.width, zoom: 100 };
		}
	}
	RotatingImage.prototype.zoomImageIn = function (byPercent,maxPercent) {
		this.setupZoomInformation();
		if( !this.rotZoomDetails ) { return 0; }
		var desiredPercent = this.rotZoomDetails.zoom + byPercent;
		if( desiredPercent > maxPercent ) { desiredPercent = maxPercent; }
		this.zoomImageTo(desiredPercent);
		return desiredPercent;
	}
	RotatingImage.prototype.zoomImageOut = function (byPercent,minPercent) {
		this.setupZoomInformation();
		if( !this.rotZoomDetails ) { return 0; }
		var desiredPercent = this.rotZoomDetails.zoom - byPercent;
		if( desiredPercent < minPercent ) { desiredPercent = minPercent; }
		this.zoomImageTo(desiredPercent);
		return desiredPercent;
	}
	RotatingImage.prototype.zoomImageTo = function (toPercent) {
		this.setupZoomInformation();
		if( !this.rotZoomDetails ) { return; }
		if( isNaN(toPercent) || toPercent < 0 ) { rotatingImageError('A positive number must be used when zooming.',this.useThrow); return; }
		this.image.height = Math.round( this.rotZoomDetails.height * ( toPercent / 100 ) );
		this.image.width = Math.round( this.rotZoomDetails.width * ( toPercent / 100 ) );
		this.rotZoomDetails.zoom = toPercent;
	}
	RotatingImage.prototype.getTilt = function () { return this.curTilt; };
	RotatingImage.prototype.getNumTilt = function () { return this.numTilt; };
	RotatingImage.prototype.getRotation = function () { return this.curRot; };
	RotatingImage.prototype.getNumRotation = function () { return this.numRot; };
	
	



/**********************/	 

function setOrgChartNode(){
		
	var datascource = {
      'name': '事業部長',
	  'title':'<img style="width:60px;height:80px" src="images/10.jpg">',
      'relationship': '001',
      'children': [
        { 'name': '製造部長','title':'<img style="width:60px;height:80px" src="images/2.jpg">', 'relationship': '110' },
        { 'name': '業務部長','title':'<img style="width:60px;height:80px" src="images/3.jpg">', 'relationship': '110' },
        { 'name': '品管部長','title':'<img style="width:60px;height:80px" src="images/6.jpg">', 'relationship': '110',
			'children': [

        {'name':'品管一課','title':'<img style="width:60px;height:80px" src="images/5.jpg">','nodeContentPro':'senior engineer','relationship':'111' },

        {'name':'品管二課','title':'<img style="width:60px;height:80px" src="images/8.jpg">','nodeContentPro':'senior engineer','relationship':'111' }

      ]

		}
      ]
    };

	$('#chart-container').orgchart({
      'data' : datascource,
      'exportButton': false,
	  'nodeContent':'title',
      'exportFilename': 'SportsChart',
      'parentNodeSymbol': 'fa-th-large',
      'createNode': function($node, data) {
        $node.on('click', function(event) {
          if (!$(event.target).is('.edge')) {
            $('#selected-node').val(data.name).data('node', $node);
          }
        });
      }
    })
	/*
    .on('click', '.orgchart', function(event) {
      if (!$(event.target).closest('.node').length) {
        $('#selected-node').val('');
      }
    });
	*/

    $('input[name="chart-state"]').on('click', function() {
      $('#edit-panel, .orgchart').toggleClass('view-state');
      if ($(this).val() === 'edit') {
        $('.orgchart').find('tr').removeClass('hidden')
          .find('td').removeClass('hidden')
          .find('.node').removeClass('slide-up slide-down slide-right slide-left');
      } else {
        $('#btn-reset').trigger('click');
      }
    });

    $('input[name="node-type"]').on('click', function() {
      var $this = $(this);
      if ($this.val() === 'parent') {
        $('#edit-panel').addClass('edit-parent-node');
        $('#new-nodelist').children(':gt(0)').remove();
      } else {
        $('#edit-panel').removeClass('edit-parent-node');
      }
    });
	
	
	

	
}
