function rodar() {
    var horario = document.querySelector(".numeros");

    var agora = new Date();

    var exibido = correcao(agora.getHours()) + ":" + correcao(agora.getMinutes()) + ":" + correcao(agora.getSeconds());

    horario.textContent = exibido;

    function correcao(zero) {
        if (zero < 10) {
            zero = '0' + zero;
        }
        return zero;
    }
}

rodar();
setInterval(rodar, 1000);