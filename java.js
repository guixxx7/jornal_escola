function lerMais(botao) {
  const artigo = botao.parentElement;
  const paragrafo = artigo.querySelector("p");

  if (botao.innerText === "Ler mais") {
    paragrafo.innerText += 
      " [Aqui entra o texto completo da notícia, com mais detalhes e informações para os leitores.]";
    botao.innerText = "Mostrar menos";
  } else {
    paragrafo.innerText = 
      paragrafo.innerText.split(" [Aqui entra")[0] + "...";
    botao.innerText = "Ler mais";
  }
}
