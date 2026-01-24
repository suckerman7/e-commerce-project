import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from './layout/PageContent';

import HomePage from './pages/HomePage';
import ShopPage from "./pages/ShopPage";

function App() {

  return (
    <Router>
      <Header />

      <PageContent>
        <Switch>
          <Route exact-path='/' component={HomePage} />

          <Route path='/shop' component={ShopPage}>
            <div className='p-6'>Products Page</div>
          </Route>

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
