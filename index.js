const avatar = document.querySelector('.avatar');
const dragon = document.querySelector('.dragon');

const jump = () => {
    avatar.classList.add('jump');

    setTimeout(() => {
    avatar.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const dragonPosition = dragon.offsetLeft;
    const avatarPosition = +window.getComputedStyle(avatar).bottom.replace('px', '');

    if (dragonPosition <= 80 && dragonPosition > 0 && avatarPosition < 80){

        dragon.style.animation = 'none';
        dragon.style.left = `${dragonPosition}px`;

        avatar.style.animation = 'none';
        avatar.style.bottom = `${avatarPosition}px`

        avatar.src = 'images/gameover.png';
        avatar.style.width = '100px';
        avatar.style.marginLeft = '50px';

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);