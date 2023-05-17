import { conectaAPI } from './conectaAPI.js';
import  builderCard  from './showVideo.js';

async function buscarVideo(evt) {
    evt.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]');
    const busca = await conectaAPI.searchVideo(dadosDePesquisa.value);
    
    let lista = document.querySelector('[data-lista]');

    lista.innerHTML = '';
    busca.forEach(video => builderCard(video.titulo, video.descricao, video.imagem, video.url));
}

const botao = document.querySelector('[data-botao-pesquisa');

botao.addEventListener('click', evt => buscarVideo(evt));