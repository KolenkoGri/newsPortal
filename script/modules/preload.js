const main = document.querySelector('main');

export const preload = (status) => {
    if (status) {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.style.left = `calc(${window.screen.width / 2 })`;
        const preload = document.createElement('div');
        preload.classList.add('preload');
        overlay.append(preload);
        console.log(status);
        main.append(overlay);
    } else {
        const overlay = document.querySelector('.overlay');
        overlay.remove();
    }
}