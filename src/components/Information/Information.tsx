import { InformationData } from "../types/Information";

const Information = () => {
  return (
    <div className="text-center mb-10">
      <div>
        <h1 className="text-4xl mt-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(113,158,47)] to-[rgb(214,156,19)]">
          Everything You Need for Smart Farming
        </h1>
        <p className="text-gray-500 font-medium mt-3 text-xl">
          Comprehensive tools designed specifically for Nepalese farmers to make{" "}
          <br />
          informed decisions
        </p>
      </div>
      <div className="flex gap-6 mt-15">
        {InformationData.map((item, index) => (
          <div
            key={index}
            className="border-2 rounded-2xl border-gray-200 p-6 w-1/4 text-center bg-white hover:shadow-xl"
          >
            <div className="bg-gray-300 rounded-full inline-block p-4 ">
              <img src={item.image} className="h-8 w-8" alt="" />
            </div>
            <div>
              <h1 className="font-bold text-xl">{item.heading}</h1>
              <h3 className="text-[rgb(113,158,47)] font-medium">
                {item.nepali}
              </h3>
              <p className="text-gray-500 mt-5">{item.subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
