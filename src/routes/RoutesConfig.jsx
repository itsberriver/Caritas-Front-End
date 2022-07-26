import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Views/Home'
import Login from '../Views/Login'
import UserRegister from '../Views/UserRegister'
import Category from '../Views/Category'
import AdminRegister from '../Views/AdminRegister'
import Profile from '../Views/Profile'
import Section from '../Views/Section'
import AboutUs from '../Views/AboutUs'
import Landing from '../Views/Landing'
import {ABOUTUS, ADMINREGISTER, CATEGORY, HOME,LOGIN, PROFILE, SECTION, USERREGISTER} from '../config/Paths'
// import PublicRoute from '../Components/router/PublicRoute'
import PrivateRoute from '../Components/router/PrivateRoute'


function RoutesConfig(){
  
  return(

    <Router>
      <Routes>
        <Route path="/">
          <Route index element={ <Landing/> } />
          <Route path={HOME} element={ <Home/> } />
          <Route path={LOGIN} element={ <Login/> } />
          <Route path={CATEGORY} element={ <Category/> } />
          <Route path={SECTION} element={ <Section/> } />
          <Route path={ABOUTUS} element={ <AboutUs/> } />
        </Route>
        {/* <Route path={PRIVATE} element = {<PrivateRoute />}> */}
        {/* <PrivateRoute> */}
        <Route path={USERREGISTER} element={ <PrivateRoute><UserRegister/></PrivateRoute> } />
        <Route path={ADMINREGISTER} element={ <PrivateRoute><AdminRegister/></PrivateRoute> } />
        <Route path={PROFILE} element={ <PrivateRoute><Profile/></PrivateRoute> } />
        {/* </PrivateRoute> */}
        {/* </Route> */}
        <Route path="*" element={ <Landing/> } />
      </Routes>
    </Router>
  )
}

export default RoutesConfig