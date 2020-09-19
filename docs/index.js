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
   
   doughnutLocation();
   
   setOrgChartNode();
   
   
   
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


	  

function setOrgChartNode(){
		
	var datascource = {
      'name': '事業部長',
	  'title':'<img style="width:60px;height:80px" src="images/10.jpg">',
      'relationship': '001',
      'children': [
        { 'name': '製造部長','title':'<img style="width:60px;height:80px" src="images/2.jpg">', 'relationship': '110' },
        
        { 'name': '品管部長','title':'<img style="width:60px;height:80px" src="images/6.jpg">', 'relationship': '110',
			'children': [

        {'name':'品管一課','title':'<img style="width:60px;height:80px" src="images/5.jpg">','nodeContentPro':'senior engineer','relationship':'111' },

        {'name':'品管二課','title':'<img style="width:60px;height:80px" src="images/8.jpg">','nodeContentPro':'senior engineer','relationship':'111' }

      ]

		},
{ 'name': '業務部長','title':'<img style="width:60px;height:80px" src="images/3.jpg">', 'relationship': '110' }
      ]
    };

	$('#chart-container').orgchart({
      'data' : datascource,
     
	  'nodeContent':'title',
     
      'parentNodeSymbol': 'fa-th-large',
      'createNode': function($node, data) {
        $node.on('click', function(event) {
          if (!$(event.target).is('.edge')) {
            $('#selected-node').val(data.name).data('node', $node);
          }
        });
      }
    })
    .on('click', '.orgchart', function(event) {
      if (!$(event.target).closest('.node').length) {
        $('#selected-node').val('');
      }
    });

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
