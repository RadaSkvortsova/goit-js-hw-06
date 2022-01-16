const inputRef = document.querySelector('#validation-input');
const validNumber = parseInt(inputRef.dataset.length);

const simboInput = event => {
    if (event.currentTarget.value.length === validNumber) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.replace('invalid', 'valid');
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.replace('valid', 'invalid');
    }
};
inputRef.addEventListener('blur', simboInput);
