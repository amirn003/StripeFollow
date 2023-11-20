const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => {
    this.classList.add('trigger-enter-active');
  }, 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoordinates = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  // console.log(dropdownCoordinates);
  // console.log('NAV ==> ', dropdownCoordinates);

  const coords = {
    height: dropdownCoordinates.height,
    width: dropdownCoordinates.width,
    top: dropdownCoordinates.top - navCoords.top,
    left: dropdownCoordinates.left - navCoords.left
  };

  console.log(coords);


  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}


triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
