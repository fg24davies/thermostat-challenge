
class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSave = true;
  }

  up() {
    this.temperature++
  }

  down() {
    if (this.temperature > 10) {
    this.temperature--
    } 
  }
}

