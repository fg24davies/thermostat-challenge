$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#decrease').click(function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  })


  $('#increase').click(function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  })

  

})

