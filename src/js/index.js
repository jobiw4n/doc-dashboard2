import '../scss/styles.scss';

import * as bootstrap from 'bootstrap';
import { router, navigateTo } from './router.js';

//give us a fresh copy of the data on load
localStorage.clear();
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {

  router();
});
