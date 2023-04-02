const metroid = document.querySelector('.metroid');
const cano = document.querySelector('.cano');

const jump = () => {
    metroid.classList.add('jump');

    setTimeout(() => {
        metroid.classList.remove('jump');
    }, 500);
}   

const loop = setInterval(() => {
    const canoPosicao = cano.offsetLeft;
    const metroidPosicao = +window.getComputedStyle(metroid).bottom
    .replace('px', '');

    if(canoPosicao <= 120 && canoPosicao > 0 && metroidPosicao < 80){
        
        cano.style.animation = 'none';
        cano.style.left = `${canoPosicao}px`;

        metroid.style.animation = 'none';
        metroid.style.left = `${metroidPosicao}px`;

        metroid.src = './src/imagens/gameover.webp';
        metroid.style.width = '75px';
        metroid.style.marginLeft = '50px';

        clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', jump);