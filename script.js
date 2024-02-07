document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const targetPosition = targetElement.offsetTop + targetElement.offsetHeight/2;
          
          window.scrollTo({
            top: targetPosition - window.innerHeight / 2, 
            behavior: 'smooth'
          });
        }
      });
    });
  });

  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');

    // Check the scroll position
    if (window.scrollY > 30) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  });



// const textarea = document.getElementById('textarea');

document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here
  const textarea = document.getElementById('textarea');
  // Rest of your code...
  let initialHeight = textarea.clientHeight;
textarea.addEventListener('input', () => {
    textarea.style.height = initialHeight + 'px';
    const newHeight = textarea.scrollHeight;
    textarea.style.height = `${newHeight}px`;
});
});
 

  function openEmail() {
    const email = 'j.zamora@toyota-mobilitysolutions.ph';
    window.location.href = 'mailto:' + email;
  }


