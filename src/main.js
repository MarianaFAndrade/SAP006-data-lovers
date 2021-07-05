// import { filtro } from './data.js';
import data from "./data/rickandmorty/rickandmorty.js";

const personagens = data.results;
// console.log(data.results[0]);

const botao = document.getElementById("buscar");
botao.addEventListener("click", (e) => filtrar(e));

function mostrarCartoes(itens) {
  const cards = document.querySelector("#cards");
  cards.innerHTML = "";
  //   if (mostrarCartoes === []) {
  //     return alert('Filtro não encontrado')
  //   }
  const cartoes = itens
    .map(({ status, species, type, origin, image, name }) =>
        `<div id="container-card">
        <h3>${name}</h3>
     <img src="${image}" id="foto-card"></img>
     </div>
 <div>
   <span id="type">
     <h3>${type}</h3>
   </span>
   <span id="species">
     <p>${species}</p>
   </span>
   <span id="status">
     <p>${status}</p>
   </span>
 </div>`
    )
    .join("");

  cards.innerHTML += cartoes;
}

const filtrar = function (k) {
  k.preventDefault();

  //   console.log('clicou')

  const filtroStatus = document.getElementById("caracter-status").value;
  const filtroSpecies = document.getElementById("caracter-species").value;
  const filtoGender = document.getElementById("caracter-gender").value;
  const filtroOrigin = document.getElementById("caracter-origin").value;
  const ordenaraz = document.getElementById("ordenar").value
  
//   const ordem = function(a,b){
//     ordenaraz.sort(function (a, b) {
//         return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
     
//      });
//     console.log(ordenaraz)
//   }

  const personagensFiltrados = personagens.filter(function (personagem) {
    if (
      personagem.status === filtroStatus ||
      personagem.species === filtroSpecies ||
      personagem.gender === filtoGender ||
      personagem.origin.name === filtroOrigin
    ) {
      return personagem;
    }
  });
  mostrarCartoes(personagensFiltrados);
};
