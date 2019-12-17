/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";
    var mainApp = {

        initFunction: function () {
            /*MENU 
            ------------------------------------*/
            // $('#main-menu').metisMenu();
			
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

            /* MORRIS BAR CHART
			-----------------------------------------*/
            Morris.Bar({
                element: 'morris-bar-chart',
                data: [{
                    y: 'Jambanjelly',
                    a: 100,
                    b: 75
                }, {
                    y: 'Farato',
                    a: 175,
                    b: 150
                }, {
                    y: 'Siffoe',
                    a: 50,
                    b: 40
                }, {
                    y: 'Jamburr',
                    a: 75,
                    b: 65
                }, {
                    y: 'Kitty',
                    a: 50,
                    b: 40
                }, {
                    y: 'Tanji',
                    a: 75,
                    b: 65
                }, {
                    y: 'Gunjur',
                    a: 100,
                    b: 90
                }],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Total Number', 'Available'],
				 barColors: ['#A6A6A6','#24C2CE','#A8E9DC'],
                hideHover: 'auto',
                resize: true
            });
	 


            
           
        
            $('.bar-chart').cssCharts({type:"bar"});
       
	 
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.initFunction(); 
		$("#sideNav").click(function(){
			if($(this).hasClass('closed')){
				$('.navbar-side').animate({left: '0px'});
				$(this).removeClass('closed');
				$('#page-wrapper').animate({'margin-left' : '260px'});
				
			}
			else{
			    $(this).addClass('closed');
				$('.navbar-side').animate({left: '-260px'});
				$('#page-wrapper').animate({'margin-left' : '0px'}); 
			}
		});
    });

}(jQuery));
