
describe('Thermostat', function() {

  var thermostat 
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature by 1', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature by 1', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('minimum temperature is 10', function() {
    thermostat.temperature = 10;
    thermostat.down();
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a powersave mode', function() {
    expect(thermostat.powerSave).toEqual(true);
  });

  it('powersave mode is on max temp is 25', function() {
    thermostat.temperature = 25;
    thermostat.up();
    expect(thermostat.temperature).toEqual(25);
  });

  it('powersave mode is off max temp is 32', function() {
    thermostat.powerSaveSwitch();
    thermostat.temperature = 32;
    thermostat.up();
    expect(thermostat.temperature).toEqual(32);
  });

  it('can change state of powersave', function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.powerSave).toEqual(false);
    thermostat.powerSaveSwitch();
    expect(thermostat.powerSave).toEqual(true);
  });

  it('resets the temperature to 20', function() {
    thermostat.temperature = 25;
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  it('returns the usage of the system at the current temperature', function() {
    thermostat.temperature = 17
    expect(thermostat.getUsage()).toEqual('low-usage')
    thermostat.temperature = 25
    expect(thermostat.getUsage()).toEqual('medium-usage')
    thermostat.temperature = 26
    expect(thermostat.getUsage()).toEqual('high-usage')
  })

});

