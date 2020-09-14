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
    $(".box-wrapper-menu .current .col").css("top",100);
	$('.col-one-menu').css({
      'top':-3000+'px'
    });
    $(".box-wrapper-menu .current .col-one-menu").css("top",0);
	
	
    $("#menu_tabs").delegate(".tabs-menu a","click",function(){
      el = $(this);
      if((!el.hasClass("current"))&&($(":animated").length==0)){
        allTabs.removeClass("current");
        el.addClass("current");
        speedOne=Math.floor(Math.random()*1000)+500;
        colOne=$(".box-wrapper-menu .current .col-one-menu");
        colOne.animate({
          "top":-3000
        },speedOne);

        allContentBoxes.removeClass("current");
        $("#"+hrefSelector).addClass("current");
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
      .mouseenter(
      function(){
        var $this = $(this);
          $.expand($this,130,40);
		  $.collapse($('.menu-current'),100,40);
      })
      .mouseleave(
      function(){
        var $this = $(this);
        $.collapse($this,100,40);
		
        $('.menu-current').css({
			"border-top-right-radius": "18px",
			"border-bottom-right-radius": "18px",
			"background":"#f0ffda",
		})
		$.expand($('.menu-current'),130,40);
		
      }
    );
	
	$('.menu-current')
      .mouseenter(
      function(){
        var $this = $(this);
          $.expand($this,130,40);
      })
      .mouseleave(
      function(){
        var $this = $(this);
		if($('.menu-current').width>100){
			$.collapse($this,100,40);
			$(this).css({
				"border-top-right-radius": "7px",
				"border-bottom-right-radius": "7px",
				"background":"white"
			})
		}
        
		
      }
    );

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
   
   doughnutLocation();
   
   setNode();
   
   
   
});

function docDownload(){
	var d = document.getElementById("doc_iframe");
	d.style.display="block";
	d.href = "files/履歴書・職務経歴書_20200911.pdf";
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
	  responsive: false
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
		"height":window.innerHeight-80+"px"
	   });
	   $("#table-skill").css({
			"width":750+"px"
	   });
	   $(".content-box-menu,.col-one-menu col").css({
			"width":window.innerWidth-310+"px",
			"height":window.innerHeight-90+"px",
			"overflow":"auto"
	   });
		
	}catch(err){
	}
}

var level = new Array();
var level_2 = new Array();
var level_3 = new Array();
var level_4 = new Array();
var level_5 = new Array();
var d2 = new Array();
var d3 = new Array();
var d4 = new Array();
var d5 = new Array();
var d6 = new Array();
var datascource = new Array();
var senior = "20";//ceo id
var visibleLevel = 3;
var oc;
function setNode(){
	
	datasource = {
              'id': [1,2,3],
              'name': ["bruce","kslim","LIM"],
              'title': ["Mr","Dr","san"],
              'levels':["Manager","Enginner","CEO"],
              'tel': ["","",""],
              'email': ["","",""],
              'english': ["","",""],
              'ip': ["","",""],
              'job': ["","",""],
              'stage': ["","",""],
              'senior': ["","",""],
              'department':["","",""],
              'departmentParent':["","",""],
              'children': ["","",""],
              'staffid':["","",""]
            };

	
	oc = $('#chart-container').orgchart({
      'zoom': true,
      'pan': true,
      'data' : datasource,
      'visibleLevel': 1,
      'nodeContent': 'title',
      'nodeID': 'id',
      'createNode': function($node, data) {

        var secondMenuIcon = $('<i>', {
          'class': 'fa fa-info-circle second-menu-icon',
          click: function() {
  					if(document.getElementById("edit_data").checked==false){
            	$(this).siblings('.second-menu').toggle();
  					}
          },
          mouseover:function(){

          },
  				mouseleave:function(){
  					$(this).siblings('.second-menu').hide();
  				}
        });



        var level= '<div class="levels" style="display:none">'+data.levels+'</div>';
        var department= '<div class="department" style="display:none">'+data.department+'</div>';
        var departmentParent= '<div class="departmentParent" style="display:none">'+data.departmentParent+'</div>';
        var id = '<div class="id" style="display:none">'+data.id+'</div>';
  			var tel = '<div class="tel" style="display:none">'+data.tel+'</div>';
  			var email = '<div class="email" style="display:none">'+data.email+'</div>';
  			var english = '<div class="english" style="display:none">'+data.english+'</div>';
  			var ip = '<div class="ip" style="display:none">'+data.ip+'</div>';
        var job ='<div class="job" style="display:none">'+data.job+'</div>';
        var stage ='<div class="stage" style="display:none">'+data.stage+'</div>';
        var senior ='<div class="senior" style="display:none">'+data.senior+'</div>';
        var staffid ='<div class="staffid" style="display:none">'+data.staffid+'</div>';

        var secondMenu = '<div class="second-menu"><img id="img2_'+data.id+'" class="avatar" src="' + dir_pims+photo_folder2+data.name+'.jpg"></div>';

        $node[0].style.cursor="pointer";
  			$node[0].style.marginTop = "-3px";

        if(String(data.title).indexOf("object")==-1 ){
          $node
          .append(secondMenuIcon)
          .append(secondMenu)
          .append(id)
          .append(department)
          .append(level)
          .append(tel)
          .append(email)
          .append(english)
          .append(ip)
          .append(job)
          .append(stage)
          .append(senior)
          .append(staffid)
          .append(departmentParent);
        }else{
          $node[0].innerText = String($node[0].innerText).split("object").slice(0,1);
          $node[0].style.border = "1px solid black";
          $node[0].style.height = "30px";
  				$node[0].style.width = "120px";
  				$node[0].style.marginTop = "1px";
  				$node[0].style.borderRadius = "10px";
  				$node[0].style.fontWeight="bold";
  				$node[0].style.boxShadow="0 0 10px rgba(0,0,0,.5)";
  				var name = '<div class="title" style="display:none">'+$node[0].innerText+'</div>';
  				var department = '<div class="department" style="display:none">object</div>';
          var departmentParent = '<div class="departmentParent" style="display:none">'+data.departmentParent+'</div>';
          $node.append(id).append(name).append(department).append(departmentParent);

  				//$node.append(id);
        }

      }
    });
}