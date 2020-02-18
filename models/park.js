const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

  Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
  }

  Park.prototype.removeLastDino = function(){
    this.dinosaurs.pop();
  }

  Park.prototype.numberOfDinos = function(){
    return this.dinosaurs.length()
  }

  Park.prototype.mostPopularDino = function(){
    let dinosByGuests = this.dinosaurs.sort(function(a, b){
      return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
    });
    return dinosByGuests[0];
  }

  Park.prototype.findBySpecies = function(speciesToFind){
    let foundDinos = [];
    for (var dino of this.dinosaurs) {
      if (dino.species === speciesToFind)
      foundDinos.push(dino);
    }
    return foundDinos;
  }

  Park.prototype.totalDailyVistors = function() {
    let total = 0;
    for (var dino of this.dinosaurs) {
      total += dino.guestsAttractedPerDay;
    }
    return total;
  }

  Park.prototype.totalAnualVistors = function(daily){
    return totalAnnualVists = daily * 365;
  }

  Park.prototype.totalAnnualRevenue = function(annualVisitors){
    return totalRevenue = this.ticketPrice * annualVisitors;
  }
module.exports = Park;
