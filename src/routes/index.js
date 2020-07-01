import HomeComponent from '../views/home/HomeContainer'
import ProfileComponent from '../views/profile/ProfileContainer'

// defining path for the components
let routesList = [
  { path: '/', component: HomeComponent, exactPath: true },
  { path: '/profile/:id', component: ProfileComponent, exactPath: true },
  { path: '/error', component: HomeComponent },
  { path: '/pagenotfound', component: HomeComponent }
]

export default routesList
