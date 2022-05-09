import Nav from "./components/Layout/Nav";
import Hero from "./components/Home/Hero";
import Favorites from "./components/Home/Favorites";
import SummerCollection from "./components/Home/SummerCollection";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Favorites />
      <SummerCollection />
    </div>
  );
}
