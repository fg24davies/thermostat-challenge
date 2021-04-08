$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#powersavemode').text(thermostat.powerSave);

  $('#usagelevel').text(thermostat.getUsage());

  $('#decrease').click(function(){
    thermostat.down();
    updateDisplay()
  })

  $('#increase').click(function(){
    thermostat.up();
    updateDisplay()
  })

  $('#reset').click(function(){
    thermostat.resetTemp();
    updateDisplay()
  })

  $('#powersave').click(function(){
    thermostat.powerSaveSwitch();
    $('#powersavemode').text(thermostat.powerSave);
  })

  function updateDisplay() {
    $('#temperature').text(thermostat.temperature);
    $('#usagelevel').text(thermostat.getUsage());
  }
})

