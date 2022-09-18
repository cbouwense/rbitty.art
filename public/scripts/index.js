const goToDetailPage = (page) => {
  window.location = `${window.location.href}pieces/${page}`;
}

const hideLoader = () => {
  document
    .getElementById('loading-screen')
    .style
    .visibility = "hidden";
}

const addFadeClassToArt = () => {
  const art = document.getElementsByClassName('art');
  for (let i = 0; i < art.length; i++) {
    art[i].classList.add('fadeIn');
  }
}

const showArt = () => {
  addFadeClassToArt();

  document
    .getElementById('art-gallery')
    .style
    .visibility = "visible";
}

const loadPage = () => {
  const areImagesLoaded = Boolean(localStorage.getItem('loadedImages'));
  const timeout = areImagesLoaded ? 1 : 2000;
  setTimeout(() => {
    hideLoader();
    showArt();
    localStorage.setItem('loadedImages', 'true');
  }, timeout);
}

loadPage();