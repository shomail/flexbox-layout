document.querySelector('.user-nav__user').addEventListener('click', (e) => {
  const dropdown = document.querySelector('.user-nav__user > .dropdown');

  if(dropdown.classList.contains('dropdown--active')) {
    dropdown.classList.remove('dropdown--active')
  }else {
    dropdown.classList.add('dropdown--active')
  }
})