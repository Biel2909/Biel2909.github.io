import { catalogo } from "./utlidades.js";

const idsProdutoCarrinhoComQuantidade ={
	

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

function incrementarQuantidadeProduto(idproduto){

	idsProdutoCarrinhoComQuantidade[idproduto]++;
	atualizarInformacaoQuantidade()
}

function descrementarQuantidadeProduto(idproduto){

	idsProdutoCarrinhoComQuantidade[idproduto]--;
	atualizarInformacaoQuantidade()
}

function atualizarInformacaoQuantidade(idproduto){
	document.getElementById(`quantidade-${produto-id}`). innrText = idsProdutoCarrinhoComQuantidade[idproduto]; 

}

export function adicionarAoCarrinho(idproduto){
	if(idproduto in idsProdutoCarrinhoComQuantidade){
		return;

		incrementarQuantidadeProduto(idproduto);

	}
	idsProdutoCarrinhoComQuantidade[idproduto] = 1;
	const produto = catalogo.find((p)=> p.id === idproduto);
	const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
	const elementoArticle = document.createElement("article")

	const articleClasses = [
		"flex",
		"bg-slate-100",
		"rounded-lg",
		"p-1",
		"relative",
		];

	for (const atricleClass of articleClasses){
	elementoArticle.classList.add("flex")
	elementoArticle.classList.add("bg-slate-100")
}
	e


	const cartaoProdutoCarrinho = 
				<button >X</button>
				
				<img src= "../IMG/camisa1.jpg}">
				<div id="j" class="py-2">
					<p>${produto.nome}</p>
					<p>Tamanha M</p>
					<p>$${produto.preco}</p>
				</div>

				<div class="+-">
					<button id="decrementar-produto-${produto.id}">-</button>
					<p id="quantidade-${produto.id}">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
					<button "incrementar-produto-${produto.id}">+</button>
				</div>
			
			elementoArticle.innerHTML = cartaoProdutoCarrinho;	
			containerProdutosCarrinho.appendChild(elementoArticle);
			document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click",() => incrementarQuantidadeProduto(produto.id));
			document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click",() => incrementarQuantidadeProduto(produto.id));
		}
