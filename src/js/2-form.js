const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};

const saveData = localStorage.getItem(localStorageKey);
if (saveData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', evt => {
  if (evt.target.name) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log('Form submitted:', formData);

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = { email: '', message: '' };
});
