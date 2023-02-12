const DrawerInitiator = {
  init({button, drawer, body}) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    button.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this._toggleDrawer(event, drawer);
      }
    });

    body.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
