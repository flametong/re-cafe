import { 
  Route, 
  BrowserRouter as Router,
  Routes 
} from 'react-router-dom';
import { Header } from './features/restaurant/components/Header';
import { Navbar } from './features/restaurant/components/Navbar';
import { Footer } from './features/restaurant/components/Footer';
import { Categories } from './features/restaurant/pages/Categories'
import { CategoriesItemTrending } from './features/restaurant/components/categories/CategoriesItemTrending';
import { CategoriesItemPizza } from './features/restaurant/components/categories/CategoriesItemPizza';
import { Main } from './features/restaurant/components/Main';
import { CategoriesItemSushi } from './features/restaurant/components/categories/CategoriesItemSushi';
import { CategoriesItemWok } from './features/restaurant/components/categories/CategoriesItemWok';
import { CategoriesItemSalads } from './features/restaurant/components/categories/CategoriesItemSalads';
import { CategoriesItemSoups } from './features/restaurant/components/categories/CategoriesItemSoups';
import { CategoriesItemDessert } from './features/restaurant/components/categories/CategoriesItemDessert';
import { ProductPage } from './features/restaurant/pages/ProductPage';
import { Basket } from './features/restaurant/components/Basket';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Basket />
        <Header />
        <Navbar />
        <Routes>
          <Route path="*" element={<Main />} />

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
