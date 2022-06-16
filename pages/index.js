import { client } from "../lib/sanity";
import Nav from "../components/Layout/Nav";
import Hero from "../components/Home/Hero";
import Favorites from "../components/Home/Favorites";
import SummerCollection from "../components/Home/SummerCollection";
import Categories from "../components/Home/Categories";
import About from "../components/Home/About";
import Footer from "../components/Layout/Footer";
import Cursor from "../components/Cursor";
import { data } from "../lib/data";
export default function Home({ products }) {
  console.log(data)
  return (
    <div>
      <Cursor />

      <Nav />
      {/* {products.map((product) => {
        return (
          <a key={product._id} href="#">
            <img href={product.Photos[0]} />

            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </a>
        );
      })} */}
      <Hero />
      <Favorites title="Our Favorites" />
      <SummerCollection />
      <Categories />
      <About />
      <Footer home />
    </div>
  );
}

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);
  return {
    props: {
      products,
    },
  };
}
