import { conectaAPI } from './conectaAPI.js';
const form = document.querySelector('[data-formulario]');

async function createVideo(evt){
    evt.preventDefault();

    const img = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.ramdon()*10).toString();

    await conectaAPI.criarVideos(titulo, descricao, url, imagem);

    window.location.href ='../pages/envio-concluido.html'
}

form.addEventListener("submit", evt => createVideo(evt))