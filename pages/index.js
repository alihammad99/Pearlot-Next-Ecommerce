import Nav from "./components/Layout/Nav";
import Hero from "./components/Home/Hero";
import Favorites from "./components/Home/Favorites";
import SummerCollection from "./components/Home/SummerCollection";
import Categories from "./components/Home/Categories";
import About from "./components/Home/About";
import Footer from "./components/Layout/Footer";
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Favorites />
      <SummerCollection />
      <Categories />
      <About />
      <Footer home />
    </div>
  );
}
