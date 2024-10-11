import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
// import Product from "./Product";
import Header from "./Component/Global/Header/Header";
import Home from "./Component/Page/Home/Home";
import Footer from "./Component/Global/Footer/Footer";
import ListMovie from "./Component/Page/ListMovie/ListMovie";
import DetailMovie from "./Component/Page/DetailMovie/DetailMovie";
import SearchMovie from "./Component/Page/ListMovie/SearchMovie";
import NotFound from "./Component/NotFound";
function App() {
  return (
    <div className="App">
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={"Home"}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/Detail" element={"Detail"}></Route>
        <Route path="/*" element={"404 Page"}></Route>
      </Routes> */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list-movie" element={<ListMovie />}></Route>
        <Route path="/search/:slug" element={<SearchMovie />}></Route>
        <Route path="/detail-movie/:movieId" element={<DetailMovie />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
