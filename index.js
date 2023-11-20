const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => {
    this.classList.add('trigger-enter-active');
  }, 150);
  console.log('Enter!');
}

function handleLeave() {
  this.classList.remove('trigger-enter');
  setTimeout(() => {
    this.classList.remove('trigger-enter-active');
  }, 150);
  console.log('Leave!');
}


triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
