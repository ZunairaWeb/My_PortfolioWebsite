console.log("JS Loaded");
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        console.log(navMenu.classList);
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
    // navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
 let swiperproject = new Swiper('.projects__container', {
        loop:true,
        spaceBetween:24,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },

        breakpoints: {
          1200: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          mousewheel:true,
          Keyboard:true,

        },
      });
       
    

/*=============== SWIPER TESTIMONIAL ===============*/
 let swiperTestimonial = new Swiper('.testimonial__container', {
       grabCursor :true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactName= document.getElementById('contact-name');
const contactEmail= document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage= document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault()
    // Check if the field has a value
    if(contactName.value  === '' || contactEmail.value === '' || contactProject.value === '' ){
            // Add and remove color
            contactMessage.classList.remove('color-blue');
            contactMessage.classList.add('color-red');
            // Show message
            contactMessage.textContent = "Write all the input fields ";
    }else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_twp4qhf','template_b6qc01d',contactForm,'qCvbBKoqyzpVqCvCT')
        .then(() =>{
            // Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent= 'Message Send ✅'
            // Show message and add color
            setTimeout(() =>{
                   contactMessage.textContent = ''
            },5000)
        }, (error) =>{
               alert("OOPS! SOMETHING HAS FAILED...", error)
        })
        // To clear the input field
          contactName.value='',
          contactEmail.value='',
          contactProject.value=''
        
    }
    

}
contactForm.addEventListener('submit',sendEmail)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        const sectionsClass = document.querySelector(
            '.nav__menu a[href*="' + sectionId + '"]'
        );

        if (sectionsClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button');

const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => {
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

const getCurrentIcon = () => {
    return themeButton.classList.contains(iconTheme)
        ? 'ri-moon-line'
        : 'ri-sun-line';
};

/* Restore previously selected theme */
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);

    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

/* Theme button */
if (themeButton) {
    themeButton.addEventListener('click', () => {

        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);

        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
}
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    display:400,
    rest: true   /*Animation Repeat*/


})
sr.reveal(`.home__data, .projects__container , .testimonial__container , .footer__container`)
sr.reveal(`.home__info div`, {delay:600, origin:'bottom', interval :100})
sr.reveal(`.skills_content:nth-child(1) , .contact__content:nth-child(1)`, { origin:'left'})
sr.reveal(`.skills_content:nth-child(2) ,.contact__content:nth-child(2)`, { origin:'right'})
sr.reveal(`.qualification__content, .services__card`,{ interval:100})

