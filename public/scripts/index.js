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
  setTimeout(() => {
    hideLoader();
    showArt();
    console.log('done!');
  }, 2000);
}

loadPage();