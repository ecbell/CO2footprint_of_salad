class About {
  constructor(parent, ingredients) {
    
    document.querySelectorAll("about-info").forEach(button => {
      button.addEventListener('click', () => {
        const aboutContent = button.nextElementSibling;

        button.classList.toggle('about-info-active');

        if (button.classList.contains('about-info-active')) {
          aboutContent.style.maxHeight = aboutContent.scrollHeight + 'px'
          console.log(aboutContent.scrollHeight)
        } else {
          aboutContent.style.maxHeight = 0;
        }
      })
    })
  }
}


export default About