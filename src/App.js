import React, {Suspense} from "react";
import './scss/app.scss';
import Home from "./Pages/Home";
// import NotFound from "./Pages/NotFound";
import {Route, Routes} from "react-router-dom";
// import Cart from "./Pages/Cart";

// import FullPizza from "./Pages/FullPizza";
import MainLayout from "./layouts/MainLayout";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './Pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './Pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './Pages/NotFound'));

function App() {

  return (<Routes>
    <Route path="/" element={<MainLayout/>}>
      <Route path="" element={<Home/>}/>

      <Route path="cart"
             element={<Suspense fallback={<div>Йде Загрузка....</div>}>
               <Cart/>
             </Suspense>}/>

      <Route path="pizza/:id"
             element={<Suspense fallback={<div>Йде Загрузка....</div>}>
        <FullPizza/>
      </Suspense>}/>

      <Route path="*"
             element={<Suspense fallback={<div>Йде Загрузка....</div>}>
        <NotFound/>
      </Suspense>}/>

    </Route>
  </Routes>);
}

export default App;
