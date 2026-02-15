import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/client/clientThunks";
import { fetchCategories } from "./store/category/categoryThunks";

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
import ShoppingCartPage from "./pages/ShoppingCartPage";

import TopBar from './components/TopBar';

import { ToastContainer } from "react-toastify";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
    dispatch(fetchCategories());
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

          <Route path='/shop/:gender/:title/:categoryId/:productNameSlug/:productId' component={ProductDetailPage} />

          <Route path='/shop/:gender?/:title?/:categoryId?' component={ShopPage} />

          <Route path='/product/:productId' component={ProductDetailPage} />

          <Route path='/contact' component={ContactPage} />

          <Route path='/team' component={TeamPage} />

          <Route path='/about' component={AboutUsPage} />

          <Route path='/login' component={LoginPage} />

          <Route path='/signup' component={SignUpPage} />

          <Route path='/cart' component={ShoppingCartPage} />
        </Switch>
      </PageContent>

      <Footer />
    </Router>
    </>
  )
}

export default App;
