
export async function requisicaoBuscar(bebida) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${bebida}`
  );

  const dados = await response.json();
  
  return dados.drinks;
}
