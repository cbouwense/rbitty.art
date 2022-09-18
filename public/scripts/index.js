const goToDetailPage = (page) => {
  window.location = `${window.location.href}pieces/${page}`;
}

const hideLoader = () => {
  document
    .getElementById('loading-screen')
    .style
    .visibility = "hidden";
}

const addShowClassToArt = () => {
  const art = document.getElementsByClassName('art');
  for (let i = 0; i < art.length; i++) {
    art[i].classList.add('show');
  }
}

const showArt = () => {
  addShowClassToArt();

  document
    .getElementById('art-gallery')
    .style
    .visibility = "visible";
}

const loadPage = () => {
  setTimeout(() => {
    hideLoader();
    showArt();
    localStorage.setItem('loadedImages', 'true');
  }, 1000);
}

loadPage();