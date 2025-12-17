// Site UI Behaviors - Navbar Indicator & Back to Top

// Animated navbar indicator
document.addEventListener('DOMContentLoaded', function () {
  const navWrap = document.querySelector('.nav-wrap');
  if (!navWrap) return;
  
  const indicator = navWrap.querySelector('.nav-indicator');
  const links = Array.from(navWrap.querySelectorAll('.nav-link'));

  // Position indicator under a link
  function placeIndicator(el) {
    const rect = el.getBoundingClientRect();
    const parentRect = navWrap.getBoundingClientRect();
    const left = rect.left - parentRect.left + navWrap.scrollLeft;
    
    indicator.style.width = rect.width + 'px';
    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.opacity = '1';
  }

  let active = links.find(l => l.classList.contains('active')) || links[0];
  if (active) placeIndicator(active);

  // Update indicator on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      active = link;
      placeIndicator(link);
    });
  });

  // Reposition on window resize
  window.addEventListener('resize', () => {
    if (active) placeIndicator(active);
  });
});

// Back-to-top button
document.addEventListener('DOMContentLoaded', function(){
  const back = document.getElementById('backToTop');
  if(!back) return;
  
  // Show/hide button based on scroll position
  function checkScroll(){ 
    if(window.scrollY > 300) back.classList.add('show'); 
    else back.classList.remove('show'); 
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll();
  
  // Smooth scroll to top on click
  back.addEventListener('click', ()=> window.scrollTo({top: 0, behavior: 'smooth'}));
});
