class Trainer {
  constructor(id, name, pokemon) {
    this.id = id;
    this.name = name;
    this.pokemon = pokemon;
  }

  static createTrainers(trainers) {
    return trainers.map((trainer) => { return new Trainer(trainer.id, trainer.name, trainer.pokemon); });
  }

  showTrainer() {
    let trainerList = document.getElementById('trainer-list');
    let trainerEle = document.createElement('li');
    trainerEle.setAttribute('id', `trainer-id-${this.id}`);
    trainerEle.innerText = `${this.name}`;
    trainerList.append(trainerEle);

    trainerEle.addEventListener('click', (event) => { this.showTrainerPanel() });
  }

  showTrainerPanel() {
    let trainerPanel = document.getElementById('trainer-panel');
    trainerPanel.innerHTML = "";

    let trainerHeader = document.createElement('h1');
    trainerHeader.innerText = `${this.name}`
    trainerPanel.append(trainerHeader)

    let pokemons = this.pokemon.map((pokemon) => {
      return new Pokemon(pokemon.id, pokemon.nickname, pokemon.species);
    });

    pokemons.forEach(pokemon => pokemon.showPokemon(this))
  }
}
