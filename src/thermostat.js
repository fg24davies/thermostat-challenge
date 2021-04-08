
class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSave = true;
    this.maxTemperature = 25;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemperature) {
    this.temperature++;
    }
  }

  down() {
    if (this.temperature > 10) {
    this.temperature--;
    } 
  }

  powerSaveSwitch() {
    this.powerSave = !this.powerSave;
    if (this.powerSave) {
      this.maxTemperature = 25;
    } else {
      this.maxTemperature = 32;
    }
  }

  resetTemp() {
    this.temperature = 20;
  }

  getUsage() {
    if (this.temperature <18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}

