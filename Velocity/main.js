$(document).ready(function() {
  var driversList = [
    {
      driverName: "Bebon",
      price: "$6,234",
      brand: "Volvo",
      miles: "123 miles"
    },
    {
      driverName: "Gran Tesoro",
      price: "$6,234",
      brand: "Volvo",
      miles: "123 miles"
    },
    {
      driverName: "Belafonte",
      price: "$6,234",
      brand: "Volvo",
      miles: "123 miles"
    },
    {
      driverName: "Chester",
      price: "$6,234",
      brand: "Volvo",
      miles: "123 miles"
    }
  ];

  $.each(driversList, function(index, value) {
    $("#drivers-list").append(
      '<div class="dp-flex pd-10"> <div class="circle-48 prime-bg-color p-relative"><div class="circle-16 bg-blue p-absolute right-0"></div></div> <div class="dp-flex-c mg-l-10p w-80 mg-t-5p"><div class="dp-flex-sp-bw"><span>' +
        value.driverName +
        "</span><span>" +
        value.price +
        '</span></div> <div class="dp-flex-sp-bw"> <span>' +
        value.brand +
        "</span> <span>" +
        value.miles +
        "</span></div></div> </div>"
    );
  });

  var serviceRemainders = [
    { vehicle: "#11283" },
    { vehicle: "#11456" },
    { vehicle: "#11567" },
    { vehicle: "#12343" }
  ];

  $.each(serviceRemainders, function(index, value) {
    $("#service-remainder").append(
      '<div class="dp-flex-sp-bw mg-l-5 mg-r-5 mg-t-10p"><label class="container">Vehicle: ' +
        value.vehicle +
        '<input type="checkbox" > <span class="checkmark"></span></label><div class="due-label fs-12">Due Today</div></div>'
    );
  });

  var latestTrips = [
    {
      destination: "Bebon",
      price: "$6,234",
      date: "Volvo",
      time: "13 mins"
    },
    {
      destination: "Bebon",
      price: "$6,234",
      date: "Volvo",
      time: "13 mins"
    },
    {
      destination: "Bebon",
      price: "$6,234",
      date: "Volvo",
      time: "13 mins"
    },
    {
      destination: "Bebon",
      price: "$6,234",
      date: "Volvo",
      time: "13 mins"
    }
  ];

  $.each(latestTrips, function(index, value) {
    $("#latest-trips").append(
      '<div class="dp-flex pd-10"> <div class="dp-flex-c mg-l-10p w-95 mg-t-5p"><div class="dp-flex-sp-bw"><span>' +
        value.destination +
        "</span><span>" +
        value.price +
        '</span></div> <div class="dp-flex-sp-bw"> <span>' +
        value.date +
        "</span> <span>" +
        value.time +
        "</span></div></div> </div>"
    );
  });

  var vehiclesDashboard = [
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "137",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "137",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "137",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "137",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "137",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "137",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "137",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "137",
      energy_used: "450kwh",
      action: "Manage"
    }
  ];

  $.each(vehiclesDashboard, function(index, value) {
    $("#vehicles-dashboard").append(
      '<tr class="align-font-center bg-white border-btm"> <td class="dp-flex align-it-center"><div class="dp-flex-c circle-34 prime-bg-color"></div><div class="dp-flex-c mg-l-10p"><div>' +
        value.name +
        '</div><div class="mg-t-5p">' +
        value.id +
        "</div></div></td><td>" +
        value.vehicle_model +
        "</td><td>" +
        value.next_service +
        "</td><td>" +
        value.trips +
        "</td><td>" +
        value.energy_used +
        '</td><td class="blue-color pointer">' +
        value.action +
        "</td></tr>"
    );
  });

  var userActivity = [
    {
      id: "#2178",
      subject: "Refund request",
      requested_date: "09/10/2019",
      latest_update: "08/21/2020",
      status: "Active",
      action: "Open"
    },
    {
      id: "#2178",
      subject: "Refund request",
      requested_date: "09/10/2019",
      latest_update: "08/21/2020",
      status: "Active",
      action: "Open"
    },
    {
      id: "#2178",
      subject: "Refund request",
      requested_date: "09/10/2019",
      latest_update: "08/21/2020",
      status: "Active",
      action: "Open"
    },
    {
      id: "#2178",
      subject: "Refund request",
      requested_date: "09/10/2019",
      latest_update: "08/21/2020",
      status: "Active",
      action: "Open"
    },
    {
      id: "#2178",
      subject: "Refund request",
      requested_date: "09/10/2019",
      latest_update: "08/21/2020",
      status: "Active",
      action: "Open"
    },
    {
      id: "#2178",
      subject: "Refund request",
      requested_date: "09/10/2019",
      latest_update: "08/21/2020",
      status: "Active",
      action: "Open"
    },
    {
      id: "#2178",
      subject: "Refund request",
      requested_date: "09/10/2019",
      latest_update: "08/21/2020",
      status: "Active",
      action: "Open"
    },
    {
      id: "#2178",
      subject: "Refund request",
      requested_date: "09/10/2019",
      latest_update: "08/21/2020",
      status: "Active",
      action: "Open"
    }
  ];

  $.each(userActivity, function(index, value) {
    $("#user-activity").append(
      '<tr class="align-font-center bg-white border-btm"><td>' +
        value.id +
        "</td><td>" +
        value.subject +
        "</td><td>" +
        value.requested_date +
        "</td><td>" +
        value.latest_update +
        "</td><td>" +
        value.status +
        '</td><td class="blue-color pointer">' +
        value.action +
        "</td></tr>"
    );
  });

  var serviceRemainders = {
    serviceNeeded: [
      {
        name: "Spire",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "EOS",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Eagle",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Bebop",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      }
    ],
    waiting: [
      {
        name: "Expedition",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Bliss",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Vigor",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      }
    ],
    inService: [
      {
        name: "Scorpion",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Resolve",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      }
    ],
    fullyServiced: [
      {
        name: "Empire",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "EOS",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Spire",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Nebula",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      }
    ]
  };

  $.each(serviceRemainders.serviceNeeded, function(index, value) {
    $("#service-needed").append(
      '<div class="mg-t-15p pd-20 bg-white pointer border-left-blue"><div class="dp-flex-sp-bw"><div>' +
        value.name +
        "</div><div>" +
        value.price +
        '</div></div><div class="dp-flex-sp-bw icon-color mg-t-5p"><div>' +
        value.item +
        "</div><div>" +
        value.date +
        "</div></div></div>"
    );
  });

  $.each(serviceRemainders.waiting, function(index, value) {
    $("#waiting").append(
      '<div class="mg-t-15p pd-20 bg-white pointer border-left-green"><div class="dp-flex-sp-bw"><div>' +
        value.name +
        "</div><div>" +
        value.price +
        '</div></div><div class="dp-flex-sp-bw icon-color mg-t-5p"><div>' +
        value.item +
        "</div><div>" +
        value.date +
        "</div></div></div>"
    );
  });

  $.each(serviceRemainders.inService, function(index, value) {
    $("#in-service").append(
      '<div class="mg-t-15p pd-20 bg-white pointer border-left-blue"><div class="dp-flex-sp-bw"><div>' +
        value.name +
        "</div><div>" +
        value.price +
        '</div></div><div class="dp-flex-sp-bw icon-color mg-t-5p"><div>' +
        value.item +
        "</div><div>" +
        value.date +
        "</div></div></div>"
    );
  });

  $.each(serviceRemainders.fullyServiced, function(index, value) {
    $("#fully-serviced").append(
      '<div class="mg-t-15p pd-20 bg-white pointer border-left-green"><div class="dp-flex-sp-bw"><div>' +
        value.name +
        "</div><div>" +
        value.price +
        '</div></div><div class="dp-flex-sp-bw icon-color mg-t-5p"><div>' +
        value.item +
        "</div><div>" +
        value.date +
        "</div></div></div>"
    );
  });


  
});

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(12.972442, 77.580643),
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
