import { Stats } from "../types/Stats";

const Hero = () => {
  return (
    <div className=" w-1/2  h-[100vh]">
      <h1 className="font-bold text-8xl text-center mt-30">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(113,158,47)] to-[rgb(214,156,19)]">
          Smart Farming
        </span>
        <br />
        for Nepal
      </h1>
      <p className="font-medium text-2xl text-gray-500 mt-8 text-center">
        <span className="text-[rgb(113,158,47)] font-semibold">
          कृषि प्रविधि{" "}
        </span>
        • AI-powered crop disease detection, weather insights, market prices,
        and farmer community - all in one platform designed for Nepalese
        agriculture
      </p>
      <div className="justify-center flex mt-8 gap-6">
        <button className="bg-gradient-to-r from-[rgb(113,158,47)] to-[rgb(214,156,19)] p-3 rounded-xl  font-bold text-white text-xl">
          Start Diagnosing Crops
        </button>
        <button className=" p-3 rounded-xl border-2 border-[rgb(113,158,47)] bg-white text-[rgb(113,158,47)] font-semibold text-xl">
          Explore Features
        </button>
      </div>

      <div className="flex justify-evenly mt-10">
        {Stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(113,158,47)] to-[rgb(214,156,19)]">
              {item.number}
            </h3>
            <p className="text-gray-500 font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
