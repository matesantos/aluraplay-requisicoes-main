import { conectaAPI } from './conectaAPI.js'
let videosContainer = document.querySelector('[data-lista]');
videosContainer.innerHTML = '';
const videos = await conectaAPI.listaVideos();

export default function builderCard(titulo, descricao, imagem, url){
    videosContainer.innerHTML += `
        <li class="videos__item">
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        </li>
    `
}

videos.forEach(video => builderCard(video.titulo, video.descricao, video.imagem, video.url));