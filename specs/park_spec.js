const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dino1;
  let dino2;
  beforeEach(function () {
    park = new Park('DinoLand', 25)
    dino1 = new Dinosaur('Segasourus', 'Vegan', 100)
    dino2 = new Dinosaur('Velocoraptor', 'Carnivore', 120)
    dino3 = new Dinosaur('Velocoraptor', 'Carnivore', 150)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'DinoLand')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    const dino = new Dinosaur('Boris', 'Vegan', 100)
    park.addDinosaur(dino);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.removeLastDino();
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    const actual = park.mostPopularDino();
    assert.deepStrictEqual(actual, dino2)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    const actual = park.findBySpecies('Velocoraptor');
    assert.deepStrictEqual(actual, [dino2, dino3])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    const actual = park.totalDailyVistors();
    assert.strictEqual(actual, 370)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    const actual = park.totalAnualVistors(park.totalDailyVistors());
    assert.strictEqual(actual, 135050)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    const actual = park.totalAnnualRevenue(park.totalAnualVistors(park.totalDailyVistors()));
  });

});
