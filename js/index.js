const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add('show');
    }
  });
});

const projectTrack = document.querySelector('#project-track');
const previousProjects = document.querySelector('#projects-previous');
const nextProjects = document.querySelector('#projects-next');

if (projectTrack && previousProjects && nextProjects) {
  const updateProjectControls = () => {
    const maxScroll = projectTrack.scrollWidth - projectTrack.clientWidth;
    previousProjects.disabled = projectTrack.scrollLeft <= 1;
    nextProjects.disabled = projectTrack.scrollLeft >= maxScroll - 1;
  };

  const scrollProjects = direction => {
    const card = projectTrack.querySelector('.card');
    if (!card) return;

    const gap = parseFloat(getComputedStyle(projectTrack).columnGap) || 0;
    projectTrack.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  };

  previousProjects.addEventListener('click', () => scrollProjects(-1));
  nextProjects.addEventListener('click', () => scrollProjects(1));
  projectTrack.addEventListener('scroll', updateProjectControls, { passive: true });
  window.addEventListener('resize', updateProjectControls);
  updateProjectControls();
}