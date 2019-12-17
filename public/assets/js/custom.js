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
            $('#main-menu').metisMenu();
			
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
                hideHover: 'auto',
                resize: true
            });
           
     
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.initFunction();
    });

}(jQuery));
