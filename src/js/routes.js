import Homepage from "./views/Homepage.js";
import ProjectView from "./views/ProjectView.js";

export const routes = {
  "/" : {
    view: Homepage
  },
  project : {
    view: ProjectView
  }
};
