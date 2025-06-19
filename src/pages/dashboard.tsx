import Detection from "../components/Detection/Detection";
import Navbar from "../components/Headers/Navbar";
import Hero from "../components/HeroSection/Hero";
import Information from "../components/Information/Information";

const Home = () => {
  return (
    <div>
      <header className="bg-white p-3 fixed w-full ">
        <Navbar />
      </header>
      <section className="flex justify-center items-center bg-[#d4eced] ">
        <Hero />
      </section>

      <section className="max-w-screen-xl m-auto p-10">
        <Information />
      </section>
      <section className="max-w-screen-xl m-auto p-10">
        <Detection />
      </section>
    </div>
  );
};

export default Home;
