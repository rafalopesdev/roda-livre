const btnAtivo = document.querySelector('.btn-ativo');
const containerLogin = document.querySelector('.container-login');

function handleLogin(e) {
  e.preventDefault();
  containerLogin.classList.toggle('ativo');
}
btnAtivo.addEventListener('click', handleLogin);

const btnSearch = document.querySelector('.btn-search');
const infoSearch = document.querySelector('.info-search');

function handleClick(e) {
  e.preventDefault();
  setInterval(() => {
    infoSearch.style.display = 'block';
  }, 1000);
}
btnSearch.addEventListener('click', handleClick);
