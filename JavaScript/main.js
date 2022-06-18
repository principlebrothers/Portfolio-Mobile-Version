// ================================================================================================================
//                                                 HEADER SECTION (MOBILE-MENU)
// ================================================================================================================

const menuButton = document.querySelector('#metaMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const closedButton = document.querySelector('.closed-btn');
const menuLinks = document.querySelectorAll('.in-text-link');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
})

closedButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
})

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  })
}

// ================================================================================================================
//                                                 WORK SECTION (POPUP-WINDOW)
// ================================================================================================================
const workSection = document.querySelector('.work-section');
const popUpClosedButton = document.querySelector('#closed-Btn');

const projects = [
  {
    id: 1,
    class: "tonic-frontpage padding",
    name: 'Tonic',
    image: './images/Snapshoot-Portfolio.png',
    alt: 'portfolio',
    width: "295",
    height: "220",
    canopy: ['CANOPY', 'BackEndDev', '2022'],
    description: 'A daily selection of privately personalized reads: no accounts or sign-ups required',
    languages: ['html', 'css', 'javaScript'],
    liveBtn: 'https://principlebrothers.github.io/Portfolio-Mobile-Version/',
    sourceBtn: 'https://github.com/principlebrothers/Portfolio-Mobile-Version/blob/main/index.html'
  },
  {
    id: 2,
    class: "multi-post-availability padding",
    name: 'Multi-Post Stories',
    image: './images/Availability.png',
    alt: 'multi-post-availability',
    canopy: ['CANOPY', 'BackEndDev', '2022'],
    description: 'A daily selection of privately personalized reads: no accounts or sign-ups required',
    languages: ['html', 'css', 'javaScript'],
    liveBtn: 'https://principlebrothers.github.io/Portfolio-Mobile-Version/',
    sourceBtn: 'https://github.com/principlebrothers/Portfolio-Mobile-Version/blob/main/index.html'
  },
  {
    id: 3,
    class: "Gymfit padding",
    name: 'Tonic',
    image: './images/Gymfit.png',
    alt: 'Gymfit',
    canopy: ['CANOPY', 'BackEndDev', '2022'],
    description: 'A daily selection of privately personalized reads: no accounts or sign-ups required',
    languages: ['html', 'css', 'javaScript'],
    liveBtn: 'https://principlebrothers.github.io/Portfolio-Mobile-Version/',
    sourceBtn: 'https://github.com/principlebrothers/Portfolio-Mobile-Version/blob/main/index.html'
  },
  {
    id: 4,
    class: "professional padding",
    name: 'Multi-Post Stories',
    image: './images/Professional.png',
    alt: 'Professional',
    canopy: ['CANOPY', 'BackEndDev', '2022'],
    description: 'A daily selection of privately personalized reads: no accounts or sign-ups required',
    languages: ['html', 'css', 'javaScript'],
    liveBtn: 'https://principlebrothers.github.io/Portfolio-Mobile-Version/',
    sourceBtn: 'https://github.com/principlebrothers/Portfolio-Mobile-Version/blob/main/index.html'
  }
];

let len = projects.length;
for (let i = 0; i < len; i += 1) {
  const project = projects[i];

  workSection.innerHTML += ` <div class="${project.class}">
  <div class="frontpage-icon">
      <img src="${project.image}" alt="${project.alt}">
  </div>
  <div class="tonic-wrapper">
      <div class="tonic">
          <h2>${project.name}</h2>
          <ul class="tonic-section-header">
              <li class="canopy">${project.canopy[0]}</li>
              <li><img src="./images/Counter.png" alt="counter" class="counter" /></li>
              <li class="back-end-dev">${project.canopy[1]}</li>
              <li><img src="./images/Counter.png" alt="counter" /></li>
              <li class="year">${project.canopy[2]}</li>
          </ul>
          <p class="tonic-details">${project.description}</p>
      </div>

      <ul class="programing-languages">
          <li><a href="#">${project.languages[0]}</a></li>
          <li><a href="#">${project.languages[1]}</a></li>
          <li><a href="#">${project.languages[2]}</a></li>
      </ul>
      <button type="button" class="popup" id=${project.id}>See Project</button>
  </div>
</div>`;
}

const popUpWindow = document.querySelector('#popUp');
const popUpButton = document.querySelectorAll('.popup');
const overLay = document.getElementById("overlay");
const liveButton = document.querySelector('.live');
const sourceButton = document.querySelector('.source');
const popUpTonicDiv = document.querySelector('#specialPopUp');


function popImageChange(selectedBtn) {
  for (let i = 0; i < len; i += 1) {
    let project = projects[i];

    if (project.id === selectedBtn) {
      popUpTonicDiv.insertAdjacentHTML("afterend", `<img class="popup-portfolio-image" src="${project.image}" alt="${project.alt}">`);
    }
  }
}

for (let i = 0; i < popUpButton.length; i += 1) {
  const btnSelected = popUpButton[i];
  btnSelected.addEventListener('click', (e) => {
    if (Number(btnSelected.id) === 1) {
      popUpWindow.style.display = 'block';
      overLay.classList.add('active');
      overLay.style.display = 'block';
      popImageChange(Number(btnSelected.id));
    }
    else if (Number(btnSelected.id) === 2) {
      popUpWindow.style.display = 'block';
      overLay.classList.add('active');
      overLay.style.display = 'block';
      popImageChange(Number(btnSelected.id));
    }
    else if (Number(btnSelected.id) === 3) {
      popUpWindow.style.display = 'block';
      overLay.classList.add('active');
      overLay.style.display = 'block';
      popImageChange(Number(btnSelected.id));
    }
    else if (Number(btnSelected.id) === 4) {
      popUpWindow.style.display = 'block';
      overLay.classList.add('active');
      overLay.style.display = 'block';
      popImageChange(Number(btnSelected.id));;
    }
  })
}

popUpClosedButton.addEventListener('click', () => {
  popUpWindow.style.display = 'none';
  overlay.classList.remove('active');
  overLay.style.display = 'none';
  const popImageContainer = document.querySelector('.popup-portfolio-image')
  popImageContainer.remove();
})

liveButton.addEventListener('click', () => {
  window.open(projects[0].liveBtn, '_blank')
})

sourceButton.addEventListener('click', () => {
  window.open(projects[0].sourceBtn);
})

// ================================================================================================================
//                                               CONTACT SECTION  FORM-VALIDATION
// ================================================================================================================
const emailInput = document.getElementById('email');
const msgBox = document.getElementById('validationMsg');
const form = document.querySelector('form');


function showError() {
  msgBox.textContent = 'The email must be lowercase!';
  msgBox.style.color = "#ff0000";
  msgBox.style.fontStyle = "normal";
}

form.addEventListener('submit', function (event) {
  const emailPattern = /^[a-z0-9@.]+$/;
  if(!emailPattern.test(emailInput.value)) {
    showError();
    event.preventDefault();
  }
});
