import { Route, Routes } from "react-router";
import './styles/GlobalStyle.css';
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import Header from "./components/Header";

export default function App() {

  return ( <>

    <div style={{background: 'var(--dark)', color: 'var(--light)'}}>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path='/' element={<HomeView />}></Route>
          <Route path="/about" element={<AboutView />}></Route>
        </Routes>
      </div>
    </div>

  </> );

}