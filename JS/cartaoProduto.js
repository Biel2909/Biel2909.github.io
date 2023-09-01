import { catalogo } from "./utlidades.js";
import { adicionarAoCarrinho } from "./menuCarrinho.js";

export function renderizarCatlogo(){
	for (const produtoCatologo of  catalogo){
		const cartaoProduto = `
				<div id ="cartao "class='border-solid border-2 border-sky-500 w-48' id="card-produto-${produtoCatologo}" >
					<img src = "${produtoCatologo.nomeArquivoImagem}" alt= "Camisa 1 " style="height: 280px" />
					<p class ="marca">${produtoCatologo.marca} </p>
					<p>${produtoCatologo.nome}<p/>
					<p>$${produtoCatologo.preco}</p>
					<button id= 'adicionar-${produtoCatologo.id}' class="botao">Adicionar</button>
				</div>
				<div class="espaco"></div>
			`;

		document.getElementById("container-produto").innerHTML += cartaoProduto;
		document.getElementById(`adicionar-${produtoCatologo.id}`)
	}

	for (const produtoCatologo of catalogo){
		document.getElementById(`adicionar-${produtoCatologo.id}`).addEventListener("click", () => adicionarAoCarrinho(produtoCatologo.id));
	}
}
