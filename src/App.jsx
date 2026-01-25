import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from './layout/PageContent';

import HomePage from './pages/HomePage';
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

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

          <Route path='/pricing'>
            <div className='p-6'>Pricing Page</div>
          </Route>

          <Route path='/contact'>
            <div className='p-6'>Contact Page</div>
          </Route>
        </Switch>
      </PageContent>

      <Footer />
    </Router>
  )
}

export default App
