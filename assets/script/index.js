const contact = document.querySelector('#contact');

function scrollToSection(sectionId) {
  contact.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
