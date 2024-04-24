import { routes } from './routes.js';

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

  const getParams = (match) => {
    const values = match.result.slice(1);
    console.log(values)
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
      (result) => result[1]
    );
    return Object.fromEntries(
      keys.map((key, i) => {
        return [key, values[i]];
      })
    );
  };

const navigateTo = (url) => {
  // history.pushState(null, null, url);
  router();
};

const router = async () => {
  let location = window.location.hash.replace("#", "");
  if (location.length == 0) {
      location = "/";
  } else {
    location = location.split("/")
  }
  const route = routes[location[0]] || routes["404"];
  // get the html from the template
  
  const view = new route.view(location[0])
  document.querySelector('#app').innerHTML = await view.getHtml();
  await view.onLoadCallback();
};

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", router);
// call the urlLocationHandler to load the page
router();

export { navigateTo, router };
