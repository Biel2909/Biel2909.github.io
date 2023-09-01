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

function renderizarProdutosCarrinho(){

}


function removerDoCarrinho(idproduto){
		delete idsProdutoCarrinhoComQuantidade[idproduto];
		renderizarProdutosCarrinho();

}

function incrementarQuantidadeProduto(idproduto){

	idsProdutoCarrinhoComQuantidade[idproduto]++;
	atualizarInformacaoQuantidade()
}

function descrementarQuantidadeProduto(idproduto){
	if (idsProdutoCarrinhoComQuantidade[idproduto]===1){
		removerDoCarrinho(idproduto);
		return

	}

	idsProdutoCarrinhoComQuantidade[idproduto]--;
	atualizarInformacaoQuantidade()
}

function atualizarInformacaoQuantidade(idproduto){
	document.getElementById(`quantidade-${produto-id}`). innrText = idsProdutoCarrinhoComQuantidade[idproduto]; 

}

function desenharProdutoNoCarrinho(idproduto){
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
	


	const cartaoProdutoCarrinho = 
				`<button id ="remover-item-${produto.id}"class = "fecCard">X</button>
				
				<img src= "../IMG/${produto.imagem}"">
				<div id="j" class="py-2">
					<p>${produto.nome}</p>
					<p>Tamanha M</p>
					<p>$${produto.preco}</p>
				</div>

				<div class="+-">
					<button id="decrementar-produto-${produto.id}">-</button>
					<p id="quantidade-${produto.id}">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
					<button "incrementar-produto-${produto.id}">+</button>
				</div>`;
			
			elementoArticle.innerHTML = cartaoProdutoCarrinho;	
			containerProdutosCarrinho.appendChild(elementoArticle);

			document.getElementById(`decrementar-produto-${produto.id}`)
			.addEventListener("click",() => decrementarQuantidadeProduto(produto.id));

			document.getElementById(`incrementar-produto-${produto.id}`)
			.addEventListener("click",() => incrementarQuantidadeProduto(produto.id));

				document.getElementById(`remover-item-${produto.id}`)
			.addEventListener("click",() => removerDoCarrinho(produto.id));
}

export function adicionarAoCarrinho(idproduto){
	if(idproduto in idsProdutoCarrinhoComQuantidade){
		return;

		incrementarQuantidadeProduto(idproduto);

	}
	idsProdutoCarrinhoComQuantidade[idproduto] = 1;
	desenharProdutoNoCarrinho(idproduto);
	
		}
