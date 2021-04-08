
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
    thermostat.temperature = 10
    thermostat.down();
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a powersave mode', function() {
    expect(thermostat.powerSave).toEqual(true);
  });

});

