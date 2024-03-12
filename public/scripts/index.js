const goToDetailPage = (page) => {
  window.location = `${window.location.href}pieces/${page}`;
};

const hideLoader = () => {
  document.getElementById("loading-screen").style.visibility = "hidden";
};

const addShowClassToArt = () => {
  const art = document.getElementsByClassName("art");
  if (art.length === 0) {
    setTimeout(() => {
      addShowClassToArt();
    }, 100);
    return;
  }
  for (let i = 0; i < art.length; i++) {
    art[i].classList.add("show");
  }
};

const showArt = () => {
  addShowClassToArt();

  document.getElementById("art-gallery").style.visibility = "visible";
};

const showGallery = () => {
  setTimeout(() => {
    // window.addEventListener("load", (e) => {
    hideLoader();
    showArt();
    // });
  }, 2000);
};
