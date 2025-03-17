'use strict';

const form = document.querySelector('.feedback-form');

if (!form) {
    console.warn(
    'Элемент .feedback-form не найден на странице. Скрипт формы не будет выполнен.'
    );
} else {
    const STORAGE_KEY = 'feedback-form-state';
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const formData = {
        email: savedData.email || '',
        message: savedData.message || '',
    };

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;

    form.addEventListener('input', event => {
        formData.email = form.elements.email.value;
        formData.message = form.elements.message.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    });

    form.addEventListener('submit', event => {
    event.preventDefault();

        formData.email = form.elements.email.value.trim();
        formData.message = form.elements.message.value.trim();

    if (!formData.email || !formData.message) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    });
}
