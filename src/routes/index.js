import HomeComponent from "../views/home/HomeContainer"

// defining path for the components
let routesList = [
  { path: "/", component: HomeComponent, exactPath: true },
  { path: "/error", component: HomeComponent },
  { path: "/pagenotfound", component: HomeComponent }
]

export default routesList
