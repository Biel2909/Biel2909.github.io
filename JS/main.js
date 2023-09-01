 import {renderizarCatlogo} from "./cartaoProduto.js";
 import {inicializarCarrinho, fecharCarrinho, abrirCarrinho} from "./menuCarrinho.js";

inicializarCarrinho();
renderizarCatlogo();

const botaoFecharCarrinho = document.getElementsByClassName ('fecharCarrinho')
const botaoAbrirCarrinho = document.getElementsByClassName ('abrirCarrinho')

botaoFecharCarrinho.addEventListener("click", fecharCarrinho)
botaoAbrirCarrinho.addEventListener("click", abrirCarrinho)