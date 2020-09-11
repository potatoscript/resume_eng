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
		"width":760+"px",
		"height":1600+"px"
   });
   $("#table-skill").css({
		"width":750+"px"
   });
   $(".content-box,.col-one col").css({
		"width":750+"px",
		"height":1590+"px",
		"overflow":"auto"
   });

try{
	
	$(".box-wrapper").css({
	"width":window.innerWidth-300+"px",
	"height":window.innerHeight-90+"px"
   });
   $("#table-skill").css({
		"width":750+"px"
   });
   $(".content-box,.col-one col").css({
		"width":window.innerWidth-310+"px",
		"height":window.innerHeight-100+"px",
		"overflow":"auto"
   });
	
}catch(err){
}



    $(".tabs li:first-child a, .content-box:first").addClass("current");
    $(".box-wrapper .current .col").css("top",100);
	$('.col-one').css({
      'top':-2000+'px'
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
        $.collapse($this,180,60);
        //$('#system1_arrow').html("▽");
      }
    );


   
   doughnutLocation();
   
   
});

function docDownload(){
	var d = document.getElementById("doc_iframe");
	d.style.display="block";
	d.href = "履歴書・職務経歴書_20200911.pdf";
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
	 
	var chartOptions = {
	  scale: {
		ticks: {
		  beginAtZero: true,
		  min: 0,
		  max: 100,
		  stepSize: 20
		},
		pointLabels: {
		  fontSize: 18
		}
	  },
	  legend: {
		position: 'left'
	  }
	};
	var radarChart = new Chart(skillChart, {
		type: 'radar',
		data: marksData,
		options: chartOptions
	});

}

