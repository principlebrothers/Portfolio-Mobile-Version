const inputEmail = document.getElementById('email');
const message = document.getElementById('msg');
const inputName = document.getElementById('name');

function storedData() {
  const formData = {
    email: inputEmail.value,
    msg: message.value,
    name: inputName.value
  };
  localStorage.setItem('form', JSON.stringify(formData))
}

function getData(){
  const receivedData = localStorage.getItem('form');
  if(receivedData) {
    fetch = JSON.parse(receivedData);
    inputEmail.value = fetch.email;
    message.value = fetch.msg;
    inputName.value = fetch.name;
  }
}

window.onload = () => {
  inputEmail.addEventListener('input',storedData());
  message.addEventListener('input', storedData());
  inputName.addEventListener('input',storedData());
  getData();
};