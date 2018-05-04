class Pokemon {
  constructor(id, nickname, species, trainer) {
    this.id = id;
    this.nickname = nickname;
    this.species = species;
  }

  showPokemon(trainer) {
    let trainerPanel = document.getElementById('trainer-panel');

    let pokemonList = document.createElement('ul');
    pokemonList.setAttribute('id', `pokemon-list-${trainer.id}`);

    let pokemonEle = document.createElement('li');
    pokemonEle.setAttribute('id', `pokemon-id-${this.id}`);
    pokemonEle.innerText = `${this.nickname} (${this.species})`

    let releaseButton = document.createElement('button');
    releaseButton.setAttribute('id', `release-pokemon-${this.id}`);
    releaseButton.innerText = "RELEASE";

    pokemonEle.append(releaseButton);
    pokemonList.append(pokemonEle);
    trainerPanel.append(pokemonList);

    releaseButton.addEventListener('click', (event) => { this.deletePokemon() });
  }

  deletePokemon() {
    pokemonAdapter.deleteResource(this.id);
    document.getElementById(`pokemon-id-${this.id}`).remove();
  }
}
