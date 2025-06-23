import Filter from "./Filter";

const LiveMarketPlace = () => {
  const filterByCatagory = [
    { catagory: "Cereals", napaliTranslation: "aanaj" },
    { catagory: "Vegetables", napaliTranslation: "tarkari" },
    { catagory: "fruits", napaliTranslation: "falful" },
    { catagory: "Pulse", napaliTranslation: "daal" },
  ];
  const filterByMarket = [
    { catagory: "Kalimaati", napaliTranslation: "Kalimaati" },
    { catagory: "Balkhu", napaliTranslation: "Balkhu" },
    { catagory: "Pokhara", napaliTranslation: "Pokhara" },
    { catagory: "Butwal", napaliTranslation: "Butwal" },
  ];

  const handleCatagoryFilter = () => {};

  const handleMarketFilter = () => {};
  return (
    <div className="pt-14">
      <div className="text-center">
        <p className="text-xs">
          <span className="font-semibold">bajar mulya. </span>Market Prices
        </p>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[rgb(113,158,47)] to-[rgb(214,156,19)] inline-block text-transparent bg-clip-text">
          Live Market Prices
        </h1>
        <p className="text-sm text-gray-500">
          Stay updeated with current crop prices across mojor locations
        </p>
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">Filter by catagory</h1>
          <div className="flex flex-row justify-between">
            {/*yo button melye  koxain aalik ealxi algyoo */}
            <button className="border border-gray-300 rounded-lg flex flex-row items-center gap-x-2 text-white bg-green-500 font-semibold hover:text-white px-10 py-2 text-sm">
              All Catagory
            </button>
            {filterByCatagory.map((catagory, index) => (
              <Filter
                key={index}
                bgColor={"bg-green-500"}
                onClick={handleCatagoryFilter}
                catagory={catagory}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <h1 className="font-semibold">Filter by Market</h1>
          <div className="flex flex-row justify-between">
            {/*yo pani button melye  koxain aalik ealxi algyoo */}
            <button className="border border-gray-300 rounded-lg flex flex-row items-center gap-x-2 bg-orange-500 font-semibold text-white px-10 py-2 text-sm">
              All Catagory
            </button>
            {filterByMarket.map((catagory, index) => (
              <Filter
                key={index}
                bgColor={"bg-orange-500"}
                onClick={handleMarketFilter}
                catagory={catagory}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMarketPlace;
