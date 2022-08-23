
import { useState } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Header from './components//Header_Footer/Header'
import Home from './components/Homepage/Home'
import Footer from './components/Header_Footer/Footer'
import Productdetails from "./components/Productpage/ProductDetails"
import ScrollToTop from './components/ScrollToTop';
import CartItem from './components/Cartpage/Cart';
import Login from './components/Login';
import Product from "./components/Productpage/Productpage";
import Contact from "./components/Contactpage/contactform";
import NewPage from "./components/Newpage/New"
import SiginPage from "./components/SigIn"
function App() {

  const [message, setMessage] = useState('')
  function callbackFunction (childData) {
    setMessage(childData)
  }
  return (
    <Router>
      <ScrollToTop/>
      
      <div className="App">
         <Header isLoggedIn={message} />
          <div className = "Content">
            <Switch>
                <Route exact path = "/">
                  <Redirect to= "/Home"/>
                </Route>
                <Route exact path = "/Home" component ={Home}>
                </Route>
                <Route exact path = "/Product/" >
                    <Redirect to= "/Product/Dog"/>
                </Route>
                <Route exact path = "/Product/Dog" component = {Product}>
                </Route>
                <Route  path = "/Product/Detail/:id" component = {Productdetails}>
                </Route>
                <Route  exact path = "/CartItem" component = {CartItem}>
                </Route>
                <Route   path = "/Login"  >
                  <Login parentCallback={callbackFunction} ></Login>
                </Route>
                <Route   path = "/Sigin"  >
                  <SiginPage parentCallback={callbackFunction} ></SiginPage>
                </Route>
                <Route   path = "/Contact" component = {Contact}>
                </Route>
                <Route   path = "/New" component = {NewPage}>
                </Route>
            </Switch>
          </div>
          <Footer isLoggedIn={message} />
      </div> 
    </Router>
  );
}

export default App;
