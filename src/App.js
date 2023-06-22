import styles from "./App.module.scss"

import { 
  Route, 
  BrowserRouter as Router,
  Routes 
} from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Categories } from './pages/Categories/Categories';
import { CategoriesItemTrending } from './components/categories/CategoriesItemTrending';
import { CategoriesItemPizza } from './components/categories/CategoriesItemPizza';
import { CategoriesItemSushi } from './components/categories/CategoriesItemSushi';
import { CategoriesItemWok } from './components/categories/CategoriesItemWok';
import { CategoriesItemSalads } from './components/categories/CategoriesItemSalads';
import { CategoriesItemSoups } from './components/categories/CategoriesItemSoups';
import { CategoriesItemDessert } from './components/categories/CategoriesItemDessert';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Basket } from './components/Basket/Basket';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className={styles.mainContainer}>
        <Basket />
        <Header />
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />

          <Route path="categories" element={<Categories />}>
            <Route path="trending" element={<CategoriesItemTrending />} />
            <Route path="pizza" element={<CategoriesItemPizza />} />
            <Route path="sushi" element={<CategoriesItemSushi />} />
            <Route path="wok" element={<CategoriesItemWok />} />
            <Route path="salads" element={<CategoriesItemSalads />} />
            <Route path="soups" element={<CategoriesItemSoups />} />
            <Route path="dessert" element={<CategoriesItemDessert />} />
          </Route>

          <Route path="categories/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;