// import { results } from './data.js';
import data from "./data/rickandmorty/rickandmorty.js";

const personagens = data.results;
// console.log(data.results[0]);

const botao = document.getElementById("buscar");
botao.addEventListener("click", (e) => filtrar(e));

function mostrarCartoes(itens) {
  const cards = document.querySelector("#cards");
  cards.innerHTML = "";
  if (mostrarCartoes === []) {
    return alert('Filtro não encontrado')
  }
  const cartoes = itens
    .map(
      ({ status, species, type, origin, image }) =>
        `<div id="container-card">
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

  const personagensFiltrados = personagens.filter(function (personagem) {
    if (
      personagem.status === filtroStatus &&
      personagem.species === filtroSpecies &&
      personagem.gender === filtoGender
    ) {
      return personagem;
    }
  });
  mostrarCartoes(personagensFiltrados);

  //   const opcoesStatus = status.filter.option[filtroStatus.seletor].value;
  //   console.log(filtroStatus)
  //   console.log(opcoesStatus)

  //   const filtroEspecie = document.getElementById("caracter-species");
  //   const opcoesEspecie = species.filer.option[filtroEspecie.seletor].value;

  //   const filtroTipo = document.getElementById("caracter-type");
  //   const opcoesTipo = type.filer.option[filtroTipo.seletor].value;

  //   const filtroOrigem = document.getElementById("caracter-filter");
  //   const opcoesOrigem = origin.filer.option[filtroOrigem.seletor].value;
};
