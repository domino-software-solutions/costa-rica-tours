import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourInfo from './components/TourInfo';
import About from './components/About';

const Home = (): JSX.Element => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TourInfo />
      <About />
    </main>
  );
};

export default Home;
