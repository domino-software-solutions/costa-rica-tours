import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourInfo from './components/TourInfo';
import About from './components/About';
import Contact from './components/Contact';
const Home = (): JSX.Element => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TourInfo />
      <Contact />
    </main>
  );
};

export default Home;
