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
const projects = [
  {
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

const workSection = document.querySelector('.work-section');

for (let i = 0; i < projects.length; i+=1) {
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
      <button type="button" class="popup">See Project</button>
  </div>
</div>`;
}