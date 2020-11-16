let idToast = 0;
let root = null;
const wrapToast = document.createElement('div');

function show(content, options) {
    const {
        variant = 'info',
        position = 'top-right',
        rootElement = '#root',
        autoHideDuration = '5s'
    } = options;

    const color = variant === 'warning' ? variant : 'default';
    const toast = document.createElement('div');
    toast.className = `toast ${position}`;
    toast.innerHTML = makeToast(variant, color, autoHideDuration, content);
    root = document.querySelector(rootElement);

    makeWrapToast(position, toast);
}

function makeToast(variant, color, autoHideDuration, content) {
    return `
        <div class="toast__header bg--${variant} text--${color}>
            <p class="toat__title">${variant}</p>
            <p class="toast__time">${autoHideDuration}</p>
            <button type="button" class="toast__close" data-id="${idToast}">x</button>
        </div>
        <p class="toast__message">${content}</p>
    `;
}

function makeWrapToast(position, toast) {
    wrapToast.className = `wrap ${position}`;
    wrapToast.prepend(toast);
    root.append(wrapToast);
    idToast++;
    const closeBtns = document.querySelectorAll('.toast__close');
    closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', closeToast));
    changeTime();
}

function closeToast(elem = '') {
    if (!elem.target) {
        elem.parentElement.parentElement.remove();
    } else {
        this.parentElement.parentElement.remove();
    }
}

function changeTime() {
    const timesElements = document.querySelectorAll('.toast__time');
    timesElements.forEach(changeTimeEachSecond)
}

function changeTimeEachSecond(elem) {
    let seconds = swapMinutesToSeconds(elem.textContent);

    let id = setInterval(() => {
        seconds -= 1;
        let timeRes = swapSecondsToMinutes(seconds);
        elem.textContent = timeRes;

        if (seconds === 0) {
            clearInterval(id);
            closeToast(elem);
        }
    }, 1000);
}

function swapMinutesToSeconds(time) {
    const times = time.split(' ').map(innerTime => Number.parseInt(innerTime));

    if (times.length === 2) {
        return times[0] * 60 + times[1];
    }

    return times[0];
}

function swapSecondsToMinutes(time) {
    let minutes;

    if (time >= 60) {
        minutes = Math.floor(time / 60);
        return `${minutes}m ${time - minutes * 60}s`;
    }

    return time + 's';
}

/********TEST********/

show('default toast', {});
show('success, top-right, #root, 3s', { variant: 'success', position: 'top-right', rootElement: '#root', autoHideDuration: '3s' });

setTimeout(() => {
    show('warning, bottom-right, .container, 15s', { variant: 'warning', position: 'bottom-right', rootElement: '.container', autoHideDuration: '15s' });
    show('error, bottom-right, .container, 9s', { variant: 'error', position: 'bottom-right', rootElement: '.container', autoHideDuration: '13s' });    
}, 6000);

