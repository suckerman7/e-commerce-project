import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from './layout/PageContent';

import HomePage from './pages/HomePage';
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";

import TopBar from './components/TopBar';

function App() {

  return (
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

          <Route path='/pricing'>
            <div className='p-6'>Pricing Page</div>
          </Route>
        </Switch>
      </PageContent>

      <Footer />
    </Router>
  )
}

export default App
