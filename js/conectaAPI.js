const url = 'http://localhost:3000/videos';

async function listaVideos(){
    const conexao =  await fetch(url);
    const objetoConvertido = await conexao.json();
    return objetoConvertido;
}

async function criarVideos(titulo, descricao, url, imagem){
    const conexao =  await fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo,
            descricao: `${descricao} mil vizualizações`,
            url,
            imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function searchVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos,
    criarVideos,
    searchVideo
}