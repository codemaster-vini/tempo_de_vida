const dataNasci = new Date("SEP 25, 2002 14:35:00");
const stampNasci = dataNasci.getTime()

const intervalo = setInterval(function() {
    const atualData = new Date();
    const stampAtual = atualData.getTime();

    const tempoDeVida = stampAtual - stampNasci;
    const anos = Math.floor(tempoDeVida / (1000 * 60 * 60 * 24 * 365));
    const dias = Math.floor(tempoDeVida % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
    const horas = Math.floor(tempoDeVida % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutos = Math.floor(tempoDeVida % (1000 * 60 * 60) / (1000 * 60));
    const segundos = Math.floor(tempoDeVida % (1000 * 60) / 1000);

    window.document.getElementById('cronometro').innerHTML = `${anos}a, ${dias}d, ${horas}h, ${minutos}m, ${segundos}s`;

    const totalDias = Math.floor(tempoDeVida / (1000 * 60 * 60 * 24));
    const totalHoras = Math.floor(tempoDeVida / (1000 * 60 * 60));
    const totalMinutos = Math.floor(tempoDeVida / (1000 * 60));
    const totalSegundos = Math.floor(tempoDeVida / 1000);

    window.document.getElementById('totalAnos').innerHTML = `${anos}`;
    document.getElementById('totalDias').innerHTML = `${totalDias}`;
    window.document.querySelector('#totalHoras').innerHTML = `${totalHoras}`;
    document.querySelector('#totalMinutos').innerHTML = `${totalMinutos}`;
    document.querySelector('#totalSegundos').innerHTML = `${totalSegundos}`;
}, 1000)

AOS.init();