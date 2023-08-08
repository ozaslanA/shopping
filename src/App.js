import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageContainer from "./containers/PageContainer";
import { useSelector } from "react-redux";
import Card from "./components/Card";

function App() {
  const { drawer } = useSelector((state) => state.drawer); //drawerları useSelector içerisinde çağırıyoruz sonra state alıyoruz state içinde drawerları dönüyoruz
  return (
    <div className="App">
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
          {drawer && <Card />}
          <Footer />
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}
export default App;
