let trainerAdapter = new Adapter('http://localhost:3000/trainers')
let pokemonAdapter = new Adapter('http://localhost:3000/pokemons')

document.addEventListener('DOMContentLoaded', function(){
  trainerAdapter.getResources()
  .then(trainersJSON => Trainer.createTrainers(trainersJSON))
  .then(trainers => { trainers.forEach(trainer => trainer.showTrainer()) })
});
