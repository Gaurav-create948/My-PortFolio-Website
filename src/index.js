// using js for smooth scroll.
let navlinks = document.querySelectorAll(".links");
let footerLinks = document.querySelectorAll(".footer-links");
for (const link of navlinks) {
  link.addEventListener("click", smoothScroll);
}
for (const link of footerLinks) {
  link.addEventListener("click", smoothScroll);
}
function smoothScroll(event) {
  event.preventDefault();
  const href = this.getAttribute("href");
  console.log(href);
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}


// showing side navbar on small width devices
let navLogo = document.querySelector(".nav-logo");
let header = document.getElementById("header")
let about = document.getElementById("about");
let mySkills = document.getElementById("my-skills");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer");

navLogo.addEventListener("click", () => {
  let sideNav = document.querySelector(".side-nav");
  let links = document.querySelectorAll(".side-nav ul li a");
  if(sideNav.getAttribute("show") == "0"){
    sideNav.setAttribute("show", "1");
    sideNav.style.display = "block";
    sideNav.style.position = "fixed";
  }
  else{
    sideNav.setAttribute("show", "0");
    sideNav.style.display = "none"; 
  }
  links.forEach(element => {
    element.addEventListener("click", () => {
      sideNav.setAttribute("show", "0");
      sideNav.style.display = "none";
      header.classList.remove("blur");
      about.classList.remove("blur");
      mySkills.classList.remove("blur");
      contact.classList.remove("blur");
      footer.classList.remove("blur");
    })
  });
  header.classList.toggle("blur");
  about.classList.toggle("blur");
  mySkills.classList.toggle("blur");
  contact.classList.toggle("blur");
  footer.classList.toggle("blur");
});


// type writer effect
let headerContent = document.querySelector(".overlay h1 span");
const options = new Typed(headerContent, {
  strings : ["Gaurav Kumar", "a Web Developer"],
  typeSpeed : 200,
  backSpeed : 200,
  loop : true
})



// intersection observer showing the skill bar dynamically
let skillBars = document.querySelectorAll(".skill-per");
let skillPer =  document.querySelectorAll(".skill-per span");
let intersections = {
  root: null,
  rootMargin: '0px',
  threshold: 0.70
}

let observer = new IntersectionObserver((entries, observer) => {
  // console.log(entries[0]);
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      // when skill section is not in viewport then i don't want to show the skill bar length.
      skillBars.forEach(element => {
        element.style.maxWidth = '0%';
      });
    }
    else{
      // when skill section is in viewport then i want to show the skill bar length.
      skillBars.forEach(element => {
        let percentData = element.getAttribute("per");
        element.style.maxWidth = `${percentData}%`;
      });      
      skillPer.forEach(element => {
        element.style.left = element.innerHTML;
      })
    }
  })
}, intersections);
observer.observe(mySkills);