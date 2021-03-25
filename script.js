const poke_container = document.getElementById('poke_container');
const pokemons_number = 59;
const colors = {
	fire: '#f7931d',
	grass: '#47b976',
	electric: '#f8cf19',
	water: '#00adef',
	ground: '#d0a9cf',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
		<div class="title">
			<div class="name">${name}</div>
			<div class="number">#${pokemon.id
									.toString()
									.padStart(3, '0')}</div>
		</div>
		
		<div class="img-container">
			<img src="https://pokeres.bastionbot.org/images/pokemon/${
							pokemon.id
						}.png" alt="${name}" />
		</div>
		
		<div class="info"> 
			<small class="type">Type: <span>${type}</span></small>
		</div>	
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

fetchPokemons();

/* WORKING PROGRESS FOR PORTFOLIO */ 

// const nameSearch = document.querySelector('#name');
// const numberSearch = document.querySelector('#number');
// const typeSearch = document.querySelector('#type');
// console.log(nameSearch);


// const returnNamePoke = async () => {
// 	const url2 = `https://pokeapi.co/api/v2/pokemon/${name}`;
// 	const res2 = await fetch(url2);
// 	const pokemon = await res2.json();
// 	createPokemonCard(pokemon);
// };

// const returnNumberPoke (id1){
// 	const url3 = `https://pokeapi.co/api/v2/pokemon/${id1}`;
// 	const res3 = await fetch(url3);
// 	const pokemon = await res3.json();
// 	createPokemonCard(pokemon);
// };

// const returnTypePoke (type){
// 	const url4 = `https://pokeapi.co/api/v2/pokemon/${type}`;
// 	const res4 = await fetch(url4);
// 	const pokemon = await res4.json();
// 	createPokemonCard(pokemon);
// };

// nameSearch.addEventListener('submit', returnNamePoke);
// numberSearch.addEventListener('submit', returnNumberPoke);
// typeSearch.addEventListener('submit', returnTypePoke);

