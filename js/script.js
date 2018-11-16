document.querySelector('.user-nav__user').addEventListener('click', (e) => {
  e.stopPropagation();
  const dropdown = document.querySelector('.user-nav__user > .dropdown');

  if(dropdown.classList.contains('dropdown--active')) {
    dropdown.classList.remove('dropdown--active')
  }else {
    dropdown.classList.add('dropdown--active')
  }
})

document.body.addEventListener('click', (e) => {
  document.querySelector('.dropdown').classList.remove('dropdown--active');
})