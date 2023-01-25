import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY))
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

(() => {
  try {
    const { message, email } = JSON.parse(localStorage.getItem(STORAGE_KEY));

    refs.textarea.value = message;
    refs.input.value = email;
  } catch (e) {
    console.log('Заполните форму!');
  }
})()

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
////////////////////////////////////////////////////
