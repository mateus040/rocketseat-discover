function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light') // Verifica se tem o 'light', se não tiver ele coloca, se tiver ele tira

    const image = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        // Se estiver com a classe 'light', ele irá adicionar a imagem para versão light
        image.setAttribute('src', '/assets/foto_light.png');
    }
    else {
        // Se estiver sem a classe 'light', ele irá adicionar a imagem para a versão black
        image.setAttribute('src', '/assets/foto_black.png')
    }


}