function alterarStatus(id) {
  const jogo = {};
  jogo.htmlElement = document.getElementById(`game-${id}`);
  const statusDoJogo = buscaStatusDoJogo(jogo.htmlElement);

  if (statusDoJogo === "disponivel") {
    alugarJogo(jogo);
  } else {
    devolverJogo(jogo);
  }
}

/**
 * @param {HTMLElement} htmlElement
 * @returns {"disponivel" | "alugado"}
 */
function buscaStatusDoJogo(htmlElement) {
  const imagemDoJogo = htmlElement.querySelector("div");

  if (imagemDoJogo.classList.contains("dashboard__item__img--rented")) {
    return "alugado";
  }

  return "disponivel";
}

function alugarJogo(jogo) {
  const imagemDoJogo = jogo.htmlElement.querySelector("div");
  imagemDoJogo.classList.add("dashboard__item__img--rented");

  const botaoDoJogo = jogo.htmlElement.querySelector("a");
  botaoDoJogo.innerHTML = "Devolver";
  botaoDoJogo.classList.add("dashboard__item__button--return");
}

function devolverJogo(jogo) {
  const imagemDoJogo = jogo.htmlElement.querySelector("div");
  imagemDoJogo.classList.remove("dashboard__item__img--rented");

  const botaoDoJogo = jogo.htmlElement.querySelector("a");
  botaoDoJogo.innerHTML = "Alugar";
  botaoDoJogo.classList.remove("dashboard__item__button--return");
}
