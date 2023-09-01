import { catalogo } from "./utlidades.js";

const idsProdutoCarrinhoComQuantidade ={
	3		

}

export function abrirCarrinho() {
	document.getElementById("carrinho").classList.add('abrirCarrinho');
	document.getElementById("carrinho").classList.remove('fecharCarrinho');
	
}

export function fecharCarrinho() {
	document.getElementById("carrinho").classList.remove('fecharCarrinho');
	document.getElementById("carrinho").classList.add('fecharCarrinho');
}

export function inicializarCarrinho(){
		 const botaoFecharCarrinho = document.getElementById ('fecharCarrinho')
		 const botaoAbrirCarrinho = document.getElementById ('abrirCarrinho')
		 botaoFecharCarrinho.addEventListener("click", fecharCarrinho())
		 botaoAbrirCarrinho.addEventListener("click", abrirCarrinho())
} 

export function adicionarAoCarrinho(idproduto){
	idsProdutoCarrinhoComQuantidade[idproduto] = 1;
	const produto = catalogo.find((p)=> p.id === idproduto);
	const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
	const cartaoProdutoCarrinho = `<article>
				<button class ="fecCard">X</button>
				<img src="./IMG/${produto.imagem}">
				<div id="j" class="py-2">
					<p>${produto.nome}</p>
					<p>Tamanha M</p>
					<p>$${produto.preco}</p>
				</div>

				<div class="+-">
					<button>-</button>
					<p id="quantidade-${produto.id}">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
					<button>+</button>
				</div>
			</article>`
			containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}
