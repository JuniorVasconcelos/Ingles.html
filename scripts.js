// Obtenha uma referência para o elemento de áudio e o botão
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

// Adicione um ouvinte de evento de clique ao botão
playButton.addEventListener('click', function () {
    // Verifique se o áudio está pausado
    if (audioPlayer.paused) {
        // Se estiver pausado, reproduza
        audioPlayer.play();
        playButton.innerHTML = 'Pausar'; // Atualize o texto do botão
    } else {
        // Se estiver reproduzindo, pause
        audioPlayer.pause();
        playButton.innerHTML = 'Clique para Tocar'; // Atualize o texto do botão
    }
});