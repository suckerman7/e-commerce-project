import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/client/clientThunks";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from './layout/PageContent';

import HomePage from './pages/HomePage';
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import TopBar from './components/TopBar';

import { ToastContainer } from "react-toastify";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <>
    <ToastContainer position="top-right" />
    <Router>
      <TopBar />
      <Header />

      <PageContent>
        <Switch>
          <Route exact path='/' component={HomePage} />

          <Route path='/shop' component={ShopPage} />

          <Route path='/productdetail' component={ProductDetailPage} />

          <Route path='/contact' component={ContactPage} />

          <Route path='/team' component={TeamPage} />

          <Route path='/about' component={AboutUsPage} />

          <Route path='/login' component={LoginPage} />

          <Route path='/signup' component={SignUpPage} />

          <Route path='/pricing'>
            <div className='p-6'>Pricing Page</div>
          </Route>
        </Switch>
      </PageContent>

      <Footer />
    </Router>
    </>
  )
}

export default App;
