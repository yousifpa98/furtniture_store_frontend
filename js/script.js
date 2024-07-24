document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.fas.fa-bars');
    const mobileMenu = document.querySelector('.links-mobile');
  
    hamburger.addEventListener('click', () => {
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
      } else {
        mobileMenu.style.display = 'block';
      }
    });
  });
  