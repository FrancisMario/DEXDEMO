

/* GET api Processors. */


 async function DeliveryTables(req, res) {
  const database = require("./../modules/getData");
  let requestType = req.body.type;
  console.log(req.body);

  switch (requestType) {

    // Getting all deliveries and sending them to client
    case 'delivery':
        console.log("del req");
        let data = database.getAllClients(re.body);

        if (data === undefined) {
          res.status(200).write("NO_RECORD_FOUND");
          res.end();
        } else{
          res.status(200).render('deliverytable.hbs', {
            table_name: 'Table for Deliveries',
            layout: false ,
            row : data[0]
          });
        }

      break;

      case 'info':
        console.log("info req");
      res.status(200).render('info', {
        layout: false
      });
      break;

    case 'settings':
        console.log("settings req");
      res.status(200).render('settings', {
        layout: false
      });
      break;

    case 'panel':
        console.log("panel req");
      res.status(200).render('clients', {
        client: [{
            client_name: 'Gamcell',
            client_image_url: '',
            total: 100,
            pending: 6,
            client_id: 0
          },
          {
            client_name: 'Qcell',
            client_image_url: '',
            total: 149,
            pending: 62,
            client_id: 1
          },
          {
            client_name: 'GPA',
            client_image_url: '',
            total: 40,
            pending: 78,
            client_id: 2
          },
          {
            client_name: 'WestCoastRadio',
            client_image_url: '',
            total: 156,
            pending: 10,
            client_id: 3
          }
        ]
      });
      break;

    case 'dashboard':
      console.log("dash req");
      res.status(200).render('dashboard');
      break;
    
      case 'newbookings':
      console.log("newbookings req");
      res.status(200).render('newbookings');
      break;
     
      case 'clients':
      console.log("clients req");
      res.status(200).render('clients',{
        client: [{
            client_name: 'Gamcell',
            client_image_url: '',
            total: 100,
            pending: 6,
            client_id: 0
          },
          {
            client_name: 'Qcell',
            client_image_url: '',
            total: 149,
            pending: 62,
            client_id: 1
          },
          {
            client_name: 'GPA',
            client_image_url: '',
            total: 40,
            pending: 78,
            client_id: 2
          },
          {
            client_name: 'WestCoastRadio',
            client_image_url: '',
            total: 156,
            pending: 10,
            client_id: 3
          }
        ]
      });
      break;
      case 'clientDetail':
        console.log('rendering page');
        var data = await getInfoModal(req.body);
        console.log('fdas' );
        data = JSON.parse(data)
        console.log(data[0]);
        if (data[0] === undefined) {
          res.status(200).write("NO_SUCH_RECORD");  
          res.end() ;
        } else {
        res.render('clientDetails',{
            client_id: data[0].client_id,
            client_name:data[0].client_name,
            client_address:data[0].client_address,
            client_email:data[0].client_email,
            client_tel:data[0].client_tel,
            layout:false
        });}
        console.log("fama");
        // res.status(200).write("hello there");
        // res.end();
           break

    default:

      break;
  }

}

async function getInfoModal(params) {
  const clientDetails = require('./../modules/getData');
  var data = await clientDetails.getClientInfo(params);
  console.log(data);
  // .render('clientDetails',{});
  return data;
}

module.exports.DeliveryTables = DeliveryTables;