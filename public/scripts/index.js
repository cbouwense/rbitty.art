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

const waitForImagesToLoad = (skus) => {
  const loadImages = skus.map((sku) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(sku);
      img.onerror = () => reject(sku);
      img.src = `https://rbitty.art/static/${sku}.jpeg`;
    });
  });

  Promise.all(loadImages).then(() => {
    hideLoader();
    showArt();
  });
};

// setTimeout(() => {
//   hideLoader();
//   showArt();
// }, 3000);
