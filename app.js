const navLinks = document.querySelectorAll('header nav a');

const logoLinks = document.querySelector('.logo');

const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
});




const activePage = ()=>{

    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    
    header.classList.remove('active');
    setTimeout(() =>{
        header.classList.add('active');
    
    },1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() =>{
        barsBox.classList.add('active');
    
    },1100);

    sections.forEach(sections => {
        sections.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

navLinks.forEach((link, idx) =>{
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activePage();
            
            link.classList.add('active')

            setTimeout(() => {
                sections[idx].classList.add('active')
            }, 1100);
        }
    });
});

logoLinks.addEventListener('click', ()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[idx].classList.add('active')
        }, 1100);
    }
});

const resumebtn=document.querySelectorAll('.resume-btn');

resumebtn.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        const resumedetail=document.querySelectorAll('.resume-detail');

        resumebtn.forEach(btn =>{
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        resumedetail.forEach(detail =>{
            detail.classList.remove('active');
        })
        btn.classList.add('active');

        resumedetail[idx].classList.add('active')

    })
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-main .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');


    // Corrected the translate syntax using proper backticks for string interpolation
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    })
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.add('disabled')

    } else {
        index = 5; // Wrap around to 0 instead of setting index to 5
        arrowLeft.classList.remove('disabled')
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) { // Change the condition to allow wrapping to 4
        index--;
        arrowLeft.classList.add('disabled')

    } else {
        index = 6; // Wrap around to the last item when at index 0
        arrowLeft.classList.remove('disabled')

    }
    activePortfolio();
});


