let inpField = document.querySelector("p");
let isCapsLock = false;
let isShiftPressed = false;

function handleKeyPress(value) {
    switch (value) {
        case 'delete':
            inpField.textContent = inpField.textContent.slice(0, -1);
            break;
        case 'enter':
            inpField.textContent += '\n';
            break;
        case 'space':
            inpField.textContent += ' ';
            break;
        case 'caps':
            isCapsLock = !isCapsLock;
            updateCapsLock();
            break;
        case 'shift':
            isShiftPressed = !isShiftPressed;
            updateShiftKeys();
            break;
        default:
            inpField.textContent += handleCharacter(value);
    }
}

function handleCharacter(value) {
    if (isCapsLock || isShiftPressed) {
        return value.toUpperCase();
    } else {
        return value.toLowerCase();
    }
}

function updateCapsLock() {
    const keys = document.querySelectorAll("#keyboard input");
    keys.forEach(key => {
        if (key.value.length === 1) {
            key.value = isCapsLock ? key.value.toUpperCase() : key.value.toLowerCase();
        }
    });
}

function updateShiftKeys() {
    const keys = document.querySelectorAll("#keyboard input");
    keys.forEach(key => {
        if (key.value.length === 1) {
            key.value = isShiftPressed ? key.value.toUpperCase() : key.value.toLowerCase();
        }
    });
}

document.getElementById('keyboard').addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT') {
        handleKeyPress(event.target.value);
    }
});
