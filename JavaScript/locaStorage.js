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
    const formObject = JSON.parse(receivedData);
    inputEmail.value = formObject.email;
    message.value = formObject.msg;
    inputName.value = formObject.name;
  }
}

window.onload = () => {
  inputEmail.addEventListener('input',storedData());
  message.addEventListener('input', storedData());
  inputName.addEventListener('input',storedData());
  getData();
};

inputName.onchange = storedData;
inputEmail.onchange = storedData;
message.onchange = storedData;