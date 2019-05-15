/*===========MOBILE NAV=========== */

const mobileNavBtn = document.getElementById("mobile-navigation")
const mobileNav = document.getElementsByClassName("side-nav")
const closeBtn = document.getElementsByName("close")[0];

mobileNavBtn.addEventListener("click", () => {
    mobileNav[0].style.width = "100%";
    
});

closeBtn.addEventListener("click", () => {
  mobileNav[0].style.width = "0px"
});


/*=========CHART.JS Section (section skills in html)=============*/ 

const frontLangs = ["React", "Vanilla", "Electron"];
const frontPercentages = [60,30, 10];
const backLangs = ["Crystal", "Node"];
const backPercentages = [30,70];


const frontend = document.getElementById("frontend");
const frontChart = new Chart(frontend, {
  type: 'bar',
  data: {
    labels: frontLangs,
    datasets: [
      { 
        label: 'Frontend',
        data: frontPercentages,
        backgroundColor: [
          'rgba(97, 218, 251, 0.7)',
          'rgba(240, 218, 58, 0.7)',
          'rgba(43, 46, 59, 0.7)'
      ],
      }
    ]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
  
});

const backend = document.getElementById("backend");
const backChart = new Chart(backend, {
  type: 'bar',
  data: {
    labels: backLangs,
    datasets: [
      { 
        label: 'Backend',
        data: backPercentages,
        backgroundColor: [
          'rgba(0, 0, 0, 0.7)',
          'rgba(49, 110, 9, 0.7)',
          
        ],
        borderColor: [
          'rgba(0, 0, 0, 0.4)',
          'rgba(0, 0, 0, 0.4)',
        ],
      }
    ]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});

/*===========ANIMATION HANDLING=============*/


/*-----------Sections-----------*/

const about = document.getElementById("about");
const skills = document.getElementById("skills");
const services = document.getElementById("services");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");
const header = document.querySelector("header");

/*-----------Elements-----------*/

const contactForm = document.getElementsByClassName("contact-card")[0];



/*-----------NavBar scroll----------*/

const nav = document.querySelector('.nav-row'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 350) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
    } else {
        nav.style.backgroundColor = 'rgba(22, 22, 22, 0.8)';
    }
});



