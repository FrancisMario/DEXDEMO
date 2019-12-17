/**
 * 
 */

$('#settings').click(function () {
  console.log('settings pressed');
  sendApiRequest({'type' : 'settings'});
});

$('#clients').click(function () {
  console.log('clients pressed');
  sendApiRequest({'type' : 'clients'});
});

$('#dashboard').click(function () {
  console.log('dashobard pressed');
  sendApiRequest({'type' : 'dashboard'} );
});

$('#bookings').click(function () {
  console.log('bookings pressed');
  sendApiRequest({'type' : 'newbookings'});
});

$('.delivery').click(function () {
  console.log('delivery pressed');
  sendApiRequest({'type' : 'delivery'});
});

$('.info').click(function () {
  // console.log(this);
  console.log('bookings pressed');
  sendApiRequest({'type': 'clientDetail', 'client_type':'cp','id':"blahblah"},"append");
});

$('#dismiss_modal').click(function () {
  $('#myModal').remove();
});

// $('.info').click(function () {
//   // console.log(this);
//   console.log('bookings pressed');
//   sendApiRequest({'type': 'clientDetail', 'client_type':'cp','id':"blahblah"},"append");
// });

// navbar navigation settings
// document.addEventListener('click', function (event) {

//   // 
//   if (event.target.classList.contains('sidenav')) {
//     var id = event.target.getAttribute("id");
//     console.log('sidenav pressed');
//     switch (id) {
//       case "settings":

//         break;

//         case "clients":

//         break;

//         case "dashboard":

//             break;

//             case "bookings":

//         break;


//     }

//   } else if (event.target.classList.contains('delivery')){
//     var id = event.target.getAttribute("id");
//       console.log(id);
//       sendApiRequest({
//         type:"delivery",
//         data:{
//           delevery_id : id
//         }
//       });
//   } else if (event.target.classList.contains('info')){
//     var id = event.target.getAttribute("id");
//       console.log(id);
//       sendApiRequest({
//         type:"info",
//         data:{
//           delevery_id : id
//         }
//       });
// }  else if (event.target.classList.contains('settings')){
//     var id = event.target.getAttribute("id");
//       console.log(id);
//       sendApiRequest({
//         type:"settings",
//         data:{
//           delevery_id : id
//         }
//       });
// }
// });




// This code makes sure that all browsers are accounted for with the httprequest
var XMLHttpFactories = [
  function () {
    return new XMLHttpRequest()
  },
  function () {
    return new ActiveXObject("Msxml3.XMLHTTP")
  },
  function () {
    return new ActiveXObject("Msxml2.XMLHTTP.6.0")
  },
  function () {
    return new ActiveXObject("Msxml2.XMLHTTP.3.0")
  },
  function () {
    return new ActiveXObject("Msxml2.XMLHTTP")
  },
  function () {
    return new ActiveXObject("Microsoft.XMLHTTP")
  }
];

function createXMLHTTPObject() {
  var xmlhttp = false;
  for (var i = 0; i < XMLHttpFactories.length; i++) {
    try {
      xmlhttp = XMLHttpFactories[i]();
    } catch (e) {
      continue;
    }
    break;
  }
  return xmlhttp;
}





function addTable(params) {
  $("#arena").html(params);
}

function appendTable(params) {
  $( "#arena" ).append(params);
}

// Page Getter
function sendApiRequest(content,type) {
  console.log(" sending " + content);
  $.post('/api',content, function (data) {
    console.log(data);

    if (type === "append") {
      appendTable(data);
    } else {
      addTable(data);
    }
  });
}

// function sendApiRequest() {
//   $.post('/api', {'type': 'clientDetail', 'client_type':'cp','id':'blahblah'}, function (data) {
//     console.log(data);
//   });
// }

// function sendGetApiRequest(content) {
//   console.log(content);
//   $.get('/api', content, function (data) {
//     appendTable(data);
//   });
// }