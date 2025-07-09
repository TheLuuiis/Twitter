'used strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
    console.log('Funcionando!');
    const containerModal = document.querySelector('.container-modal');
    const btnOpen = document.getElementById('btnOpen');
    const btnCloset = document.getElementById('btnCloset');
    const form = document.getElementById('form');
    const name = document.getElementById('nombre');
    const tel = document.getElementById('telefono');
    const nameError = document.getElementById('nameError');
    const telError = document.getElementById('telError');

    btnOpen.addEventListener('click', () => {
        containerModal.style.display = 'flex';
    });

    btnCloset.addEventListener('click', () => {
        containerModal.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        if (!name.value.trim()) {
            nameError.textContent = 'Campo obligatorio';
            errorInputs();
            isValid = false;
        } else if(!isValidName(name.value.trim())) {
            nameError.textContent = 'Invalid name';
            isValid = false;
        } else {
            nameError.textContent = '';
        };

        if (!tel.value.trim()) {
            telError.textContent = 'Campo obligatorio';
            errorInputs();
            isValid = false;
        } else if(!isValidTel(tel.value.trim())) {
            telError.textContent = 'Invalid tel';
            isValid = false;
        } else {
            telError.textContent = '';
        };
    });

    const errorInputs = () => {
        name.style.border = '1px solid red';
        tel.style.border = '1px solid red';
    };

    const resetErrors = () => {
        name.style.border = ''; 
        nameError.textContent = '';
        tel.style.border = ''; 
        telError.textContent = ''; 
    };

    name.addEventListener('change', resetErrors);
    tel.addEventListener('change', resetErrors);

    function isValidName(name) {
        const nameRegex = /^[a-zA-ZÀ-ÿ0-9\s.'_\-]{1,50}$/;
        return nameRegex.test(name);
    };
    
    function isValidTel(tel) {
        const telRegex = /^\+?[0-9]{7,15}$/;
        return telRegex.test(tel);
    }

    const btnSubmit = document.querySelector('.container-form-modal button[type="submit"]');
        btnSubmit.addEventListener('click', () => {
        form.dispatchEvent(new Event('submit'));
    });


});